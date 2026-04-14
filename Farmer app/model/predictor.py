"""
Price Prediction Model for Farmer Profit Optimization System
Uses Linear Regression and Random Forest for price forecasting.
"""

import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from datetime import datetime, timedelta
import os
import random

# Path to data
DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'market_data.csv')


def load_data():
    """Load market data from CSV."""
    df = pd.read_csv(DATA_PATH)
    df['date'] = pd.to_datetime(df['date'])
    return df


def get_available_crops():
    """Return list of available crops."""
    df = load_data()
    return sorted(df['crop'].unique().tolist())


def get_markets_for_crop(crop):
    """Return list of markets that sell a specific crop."""
    df = load_data()
    return sorted(df[df['crop'] == crop]['market'].unique().tolist())


def get_current_prices(crop):
    """Get the latest prices for a crop across all markets."""
    df = load_data()
    crop_data = df[df['crop'] == crop]
    
    # Get the latest date for each market
    latest_prices = []
    for market in crop_data['market'].unique():
        market_data = crop_data[crop_data['market'] == market].sort_values('date', ascending=False)
        if not market_data.empty:
            latest = market_data.iloc[0]
            latest_prices.append({
                'market': market,
                'price': float(latest['price']),
                'date': latest['date'].strftime('%Y-%m-%d'),
                'location': latest['location'],
                'demand': latest['demand']
            })
    
    return sorted(latest_prices, key=lambda x: x['price'], reverse=True)


def get_best_market(crop):
    """Find the best market (highest price) for a crop."""
    prices = get_current_prices(crop)
    if prices:
        return prices[0]  # Already sorted descending
    return None


def predict_price(crop, market=None, days_ahead=1):
    """
    Predict future price using Linear Regression and Random Forest.
    Returns average of both models for better accuracy.
    """
    df = load_data()
    crop_data = df[df['crop'] == crop].copy()
    
    if market:
        crop_data = crop_data[crop_data['market'] == market]
    
    if crop_data.empty:
        return None
    
    # Feature engineering
    crop_data = crop_data.sort_values('date')
    crop_data['day_num'] = (crop_data['date'] - crop_data['date'].min()).dt.days
    
    # Encode demand
    demand_map = {'Low': 0, 'Medium': 1, 'High': 2}
    crop_data['demand_encoded'] = crop_data['demand'].map(demand_map)
    
    # Encode weather
    weather_map = {'Clear': 0, 'Cloudy': 1, 'Rain': 2}
    crop_data['weather_encoded'] = crop_data['weather'].map(weather_map)
    
    # Features and target
    X = crop_data[['day_num', 'demand_encoded', 'weather_encoded']].values
    y = crop_data['price'].values
    
    if len(X) < 3:
        return None
    
    # Model 1: Linear Regression
    lr_model = LinearRegression()
    lr_model.fit(X, y)
    
    # Model 2: Random Forest
    rf_model = RandomForestRegressor(n_estimators=50, random_state=42)
    rf_model.fit(X, y)
    
    # Predict future
    last_day = crop_data['day_num'].max()
    future_day = last_day + days_ahead
    
    # Assume medium demand and clear weather for prediction
    future_X = np.array([[future_day, 1, 0]])
    
    lr_pred = lr_model.predict(future_X)[0]
    rf_pred = rf_model.predict(future_X)[0]
    
    # Average prediction
    avg_pred = round((lr_pred + rf_pred) / 2, 2)
    
    # Get current price for comparison
    current_price = crop_data.iloc[-1]['price']
    price_change = avg_pred - current_price
    trend = "increase" if price_change > 0 else "decrease" if price_change < 0 else "stable"
    
    return {
        'predicted_price': round(max(avg_pred, 0), 2),
        'current_price': float(current_price),
        'price_change': round(price_change, 2),
        'trend': trend,
        'confidence': 'Medium',
        'linear_regression_pred': round(max(lr_pred, 0), 2),
        'random_forest_pred': round(max(rf_pred, 0), 2),
        'days_ahead': days_ahead
    }


def predict_price_week(crop, market=None):
    """Predict prices for the next 7 days."""
    predictions = []
    for day in range(1, 8):
        pred = predict_price(crop, market, days_ahead=day)
        if pred:
            predictions.append({
                'day': day,
                'predicted_price': pred['predicted_price'],
                'trend': pred['trend']
            })
    return predictions


def calculate_profit(selling_price, cost_price, quantity, distance=10):
    """Calculate expected profit including transport costs."""
    revenue = selling_price * quantity
    total_cost = cost_price * quantity
    
    # Transport cost calculation: Rate = ₹1.5 per km per quintal (100kg)
    transport_cost = (quantity / 100) * distance * 1.5
    
    # Net Profit
    net_profit = revenue - total_cost - transport_cost
    profit_margin = (net_profit / revenue * 100) if revenue > 0 else 0
    profit_per_kg = (selling_price - cost_price) - (transport_cost / quantity) if quantity > 0 else 0
    
    return {
        'revenue': round(revenue, 2),
        'total_cost': round(total_cost, 2),
        'transport_cost': round(transport_cost, 2),
        'profit': round(net_profit, 2),
        'profit_margin': round(profit_margin, 2),
        'profit_per_kg': round(profit_per_kg, 2),
        'is_profitable': net_profit > 0
    }


def get_weather_impact(crop):
    """Analyze weather impact on prices."""
    df = load_data()
    crop_data = df[df['crop'] == crop]
    
    # Compare prices by weather condition
    weather_avg = crop_data.groupby('weather')['price'].mean()
    
    latest_weather = crop_data.sort_values('date', ascending=False).iloc[0]['weather']
    
    messages = {
        'Rain': 'weatherRain',
        'Cloudy': 'weatherCloudy',
        'Clear': 'weatherClear'
    }
    
    impact_data = {}
    for weather in weather_avg.index:
        impact_data[weather] = round(weather_avg[weather], 2)
    
    return {
        'current_weather': latest_weather,
        'message': messages.get(latest_weather, 'Weather data unavailable'),
        'avg_prices_by_weather': impact_data,
        'impact': 'High' if latest_weather == 'Rain' else 'Medium' if latest_weather == 'Cloudy' else 'Low'
    }


def get_demand_insight(crop):
    """Get demand insights for a crop."""
    df = load_data()
    crop_data = df[df['crop'] == crop].sort_values('date', ascending=False)
    
    if crop_data.empty:
        return None
    
    # Get recent demand trends
    recent = crop_data.head(7)
    demand_counts = recent['demand'].value_counts()
    dominant_demand = demand_counts.index[0] if not demand_counts.empty else 'Unknown'
    
    # Price trend
    recent_prices = recent['price'].values
    if len(recent_prices) >= 2:
        price_trend = 'rising' if recent_prices[0] > recent_prices[-1] else 'falling'
    else:
        price_trend = 'stable'
    
    demand_messages = {
        'High': 'demandHigh',
        'Medium': 'demandMedium',
        'Low': 'demandLow'
    }
    
    return {
        'demand_level': dominant_demand,
        'message': demand_messages.get(dominant_demand, f'Demand data for {crop} unavailable'),
        'price_trend': price_trend,
        'avg_price_7d': round(recent['price'].mean(), 2)
    }


def get_price_alerts(crop):
    """Generate price alerts and warnings."""
    df = load_data()
    crop_data = df[df['crop'] == crop].sort_values('date', ascending=False)
    
    alerts = []
    
    if crop_data.empty:
        return alerts
    
    # Check for significant price drops
    recent_prices = crop_data.head(5)['price'].values
    if len(recent_prices) >= 3:
        if recent_prices[0] < recent_prices[1] < recent_prices[2]:
            alerts.append({
                'type': 'warning',
                'icon': '⚠️',
                'message': 'alertPriceFalling'
            })
    
    # Check for price spikes
    avg_price = crop_data['price'].mean()
    current_price = recent_prices[0] if len(recent_prices) > 0 else 0
    
    if current_price > avg_price * 1.15:
        alerts.append({
            'type': 'opportunity',
            'icon': '🚀',
            'message': 'alertPriceAboveAvg'
        })
    
    if current_price < avg_price * 0.85:
        alerts.append({
            'type': 'caution',
            'icon': '🔴',
            'message': 'alertPriceBelowAvg'
        })
    
    # Prediction-based alert
    pred = predict_price(crop, days_ahead=1)
    if pred:
        if pred['trend'] == 'increase':
            alerts.append({
                'type': 'info',
                'icon': '📊',
                'message': 'alertPredictIncrease'
            })
        elif pred['trend'] == 'decrease':
            alerts.append({
                'type': 'warning',
                'icon': '📉',
                'message': 'alertPredictDecrease'
            })
    
    # Weather-based alert
    weather = get_weather_impact(crop)
    if weather['current_weather'] == 'Rain':
        alerts.append({
            'type': 'weather',
            'icon': '🌧️',
            'message': 'weatherRain'
        })
    
    if not alerts:
        alerts.append({
            'type': 'info',
            'icon': '✅',
            'message': 'alertNormalConditions'
        })
    
    return alerts


def get_price_history(crop, market=None):
    """Get price history for chart visualization."""
    df = load_data()
    crop_data = df[df['crop'] == crop].copy()
    
    if market:
        crop_data = crop_data[crop_data['market'] == market]
    
    crop_data = crop_data.sort_values('date')
    
    # Group by market for multi-line chart
    history = {}
    for mkt in crop_data['market'].unique():
        mkt_data = crop_data[crop_data['market'] == mkt].sort_values('date')
        history[mkt] = {
            'dates': mkt_data['date'].dt.strftime('%Y-%m-%d').tolist(),
            'prices': mkt_data['price'].tolist()
        }
    
    return history


def get_govt_schemes(state, crop):
    """Get relevant government schemes and subsidies based on state."""
    
    # Base schemes applicable to all states
    schemes = [
        {
            'name': 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
            'type': 'Subsidy',
            'amount': '₹6,000/year',
            'desc': 'Direct income support of ₹6,000 per year in three equal installments.',
            'eligibility': 'All landholding farmers',
            'icon': '🏛️'
        },
        {
            'name': 'KCC (Kisan Credit Card)',
            'type': 'Loan',
            'amount': 'Up to ₹3.00 Lakh',
            'desc': 'Short-term credit limits for crop cultivation at concessional interest rates.',
            'eligibility': 'All farmers, tenant farmers, sharecroppers',
            'icon': '💳'
        },
        {
            'name': 'PM Fasal Bima Yojana (PMFBY)',
            'type': 'Insurance',
            'amount': 'Varies',
            'desc': 'Crop insurance protecting against natural calamities, pests & diseases.',
            'eligibility': 'All farmers growing notified crops',
            'icon': '🛡️'
        }
    ]
    
    # State specific schemes
    if state == "Telangana":
        schemes.append({
            'name': 'Rythu Bandhu',
            'type': 'Subsidy',
            'amount': '₹10,000/acre/year',
            'desc': 'Investment support for agriculture and horticulture crops.',
            'eligibility': 'Farmers owning land in Telangana',
            'icon': '🌱'
        })
    elif state == "Andhra Pradesh":
        schemes.append({
            'name': 'YSR Rythu Bharosa',
            'type': 'Subsidy',
            'amount': '₹13,500/year',
            'desc': 'Financial assistance including PM-KISAN component.',
            'eligibility': 'Landholding farmer families',
            'icon': '🌾'
        })
    elif state == "Odisha":
        schemes.append({
            'name': 'KALIA Scheme',
            'type': 'Subsidy',
            'amount': '₹10,000/year',
            'desc': 'Financial support to cultivators and landless agricultural laborers.',
            'eligibility': 'Small/marginal farmers and landless laborers',
            'icon': '🚜'
        })
    elif state == "West Bengal":
        schemes.append({
            'name': 'Krishak Bandhu',
            'type': 'Subsidy',
            'amount': 'Up to ₹10,000/year',
            'desc': 'Assured income and death benefit coverage.',
            'eligibility': 'All farmers',
            'icon': '🤝'
        })
    elif state == "Maharashtra":
        schemes.append({
            'name': 'Namo Shetkari Maha Sanman Nidhi',
            'type': 'Subsidy',
            'amount': '₹6,000/year',
            'desc': 'Additional ₹6000 state support on top of PM-KISAN.',
            'eligibility': 'PM-KISAN beneficiaries in Maharashtra',
            'icon': '✨'
        })
        
    return schemes


def get_direct_buyers(crop, state, district, base_price):
    """
    Generate mock direct buyers offering higher prices to remove middlemen.
    """
    if not base_price:
        base_price = 20 # Fallback
        
    buyer_names = [
        "Kisan Traders", "FreshFarm Grocers", "Local Mandi Vendor",
        "Direct Harvest Partners", "Green Grocers Hub", "Organic Veg Mart"
    ]
    
    # Let's create 2-3 local buyers
    num_buyers = random.randint(2, 3)
    buyers = []
    
    # We scramble randomly but seed by crop to look somewhat consistent if wanted
    loc_str = district if district else state if state else "Local Area"
    
    selected_names = random.sample(buyer_names, num_buyers)
    
    for name in selected_names:
        # Give them a direct price that is 5-15% higher than the market base price
        markup_percent = random.uniform(0.05, 0.15)
        direct_price = round(base_price * (1 + markup_percent), 2)
        
        # Phone generator: +91 98XXX XXXXX
        phone = f"+91 98{random.randint(100, 999)} {random.randint(10000, 99999)}"
        
        buyers.append({
            "name": name,
            "distance": f"{random.randint(2, 45)} km",
            "location": loc_str,
            "price": direct_price,
            "phone": phone
        })
        
    # Sort by highest price directly to farmer
    return sorted(buyers, key=lambda x: x['price'], reverse=True)


def get_smart_strategy(crop, best_market_data, demand_data, cost_price, distance=10):
    """
    Generate an AI Selling Strategy based on market factors.
    Returns: { 'action': 'SELL_NOW' | 'SPLIT' | 'HOLD', 'reason': 'key_mapped_string' }
    """
    perishable = ["Tomato", "Onion"]
    is_perishable = crop in perishable
    
    demand = demand_data.get("demand_level", "Medium")
    best_price = best_market_data.get("price", 0) if best_market_data else 0
    
    # Transport cost calculation: Rate = ₹1.5 per km per quintal (100kg)
    transport_cost_per_kg = (distance * 1.5) / 100
    net_profit_per_kg = best_price - cost_price - transport_cost_per_kg
    total_cost_per_kg = cost_price + transport_cost_per_kg
    
    # 1. High Demand & Profitable -> SELL NOW
    if demand == "High" and net_profit_per_kg > (total_cost_per_kg * 0.15):
        return {
            "action": "SELL_NOW",
            "reason": "strategySellNowHighDemand",
            "color": "var(--accent-green)"
        }
        
    # 2. Unprofitable (Loss) -> HOLD
    if net_profit_per_kg <= 0:
        if is_perishable:
            # Can't hold highly perishable goods for long
            return {
                "action": "SELL_NOW",
                "reason": "strategySellNowPerishable",
                "color": "var(--accent-amber)"
            }
        else:
            return {
                "action": "HOLD",
                "reason": "strategyHoldLowPrice",
                "color": "var(--accent-blue)"
            }
            
    # 3. Medium Demand & Moderate Profit -> SPLIT
    if demand == "Medium" and net_profit_per_kg > 0:
        return {
            "action": "SPLIT",
            "reason": "strategySplitMedium",
            "color": "var(--accent-amber)"
        }
        
    # Default Fallback (Low demand but slightly profitable? Split)
    return {
        "action": "SPLIT",
        "reason": "strategySplitFluctuating",
        "color": "var(--accent-amber)"
    }


def get_storage_facilities(state, district):
    """
    Generate mock storage facilities (Warehouses & Cold Storage) based on location.
    """
    storage_names = {
        'Cold Storage': [
            "Shiva Cold Storage", "Pragati Refrigerated Warehouse", 
            "Local Farmers Cold Hub", "Global Fresh Storage",
            "Snowline Cold Chain", "Arctic Food Keepers"
        ],
        'Warehouse': [
            "Central Warehouse Corp", "State Warehousing Hub", 
            "Kisan Storage Point", "Annapurna Godowns",
            "Mandi Storage Solutions", "Rural Harvest Warehouse"
        ]
    }
    
    loc_str = district if district else state if state else "Regional"
    facilities = []
    
    # Generate 3-4 random facilities
    num_facilities = random.randint(3, 4)
    types = ['Cold Storage', 'Warehouse']
    
    for i in range(num_facilities):
        f_type = random.choice(types)
        f_name = random.choice(storage_names[f_type])
        
        # Ensure name uniqueness in list
        while any(f['name'] == f_name for f in facilities):
            f_name = random.choice(storage_names[f_type])
            
        capacity = f"{random.randint(1000, 10000)} MT"
        available = f"{random.randint(100, 800)} MT"
        
        # Price per 50kg bag per month
        price = random.randint(8, 25) if f_type == 'Warehouse' else random.randint(25, 60)
        
        phone = f"+91 9{random.randint(10, 99)} {random.randint(100, 999)} {random.randint(1000, 9999)}"
        
        facilities.append({
            "name": f_name,
            "type": f_type,
            "capacity": capacity,
            "available": available,
            "price": f"₹{price}/bag/month",
            "location": loc_str,
            "distance": f"{random.randint(5, 50)} km",
            "phone": phone
        })
        
    return sorted(facilities, key=lambda x: x['distance'])

