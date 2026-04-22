/**
 * Farmer Profit Optimization System
 * Frontend Application Logic (with Multi-Language Support)
 */

// ---- State ---- 
// Using window.analysisData so i18n.js can access it for re-rendering on language switch
window.analysisData = null;
let priceChart = null;
let locationData = {}; // State -> Districts mapping

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
    loadCrops();
    loadLocations();
    setupEventListeners();
    // Initialize language system (from i18n.js)
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
});

// ---- Setup Event Listeners ----
function setupEventListeners() {
    const cropSelect = document.getElementById('crop-select');
    const analyzeBtn = document.getElementById('analyze-btn');

    cropSelect.addEventListener('change', () => {
        // Reset results when crop changes
        hideResults();
    });

    analyzeBtn.addEventListener('click', runAnalysis);

    // State -> District linked dropdown
    const stateSelect = document.getElementById('state-select');
    const districtSelect = document.getElementById('district-select');

    stateSelect.addEventListener('change', () => {
        const state = stateSelect.value;
        populateDistricts(state);
        // Hide manual input when state changes
        document.getElementById('district-manual-container').style.display = 'none';
    });

    // Toggle manual input when district choice is "Other"
    districtSelect.addEventListener('change', () => {
        const manualContainer = document.getElementById('district-manual-container');
        if (districtSelect.value === 'OTHER') {
            manualContainer.style.display = 'block';
            document.getElementById('district-manual-input').focus();
        } else {
            manualContainer.style.display = 'none';
        }
    });

    // Allow Enter key to trigger analysis
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runAnalysis();
        });
    });
}

// ---- Load Available Crops ----
async function loadCrops() {
    try {
        const res = await fetch('/api/crops');
        const data = await res.json();
        if (data.success) {
            const select = document.getElementById('crop-select');
            select.innerHTML = `<option value="" disabled selected>${t('chooseCrop')}</option>`;
            
            const cropIcons = {
                'Tomato': '🍅',
                'Onion': '🧅',
                'Rice': '🌾',
                'Wheat': '🌾',
                'Potato': '🥔',
                'Chili': '🌶️'
            };

            data.crops.forEach(crop => {
                const opt = document.createElement('option');
                opt.value = crop;
                opt.textContent = `${cropIcons[crop] || '🌱'} ${tCrop(crop)}`;
                select.appendChild(opt);
            });
        }
    } catch (err) {
        console.error('Failed to load crops:', err);
    }
}

// ---- Load Locations (States & Districts) ----
async function loadLocations() {
    try {
        const res = await fetch('/api/locations');
        const data = await res.json();
        if (data.success) {
            locationData = data.locations;
            const stateSelect = document.getElementById('state-select');
            stateSelect.innerHTML = `<option value="" disabled selected>${t('chooseState')}</option>`;

            data.states.forEach(state => {
                const opt = document.createElement('option');
                opt.value = state;
                opt.textContent = `🏛️ ${t(state)}`;
                stateSelect.appendChild(opt);
            });
        }
    } catch (err) {
        console.error('Failed to load locations:', err);
    }
}

// ---- Populate Districts for Selected State ----
function populateDistricts(state) {
    const districtSelect = document.getElementById('district-select');
    console.log('Populating districts for state:', state);
    
    // Defensive matching: trim and find the correct key in locationData
    const stateKey = Object.keys(locationData).find(k => k.trim().toLowerCase() === (state || "").trim().toLowerCase());
    const districts = stateKey ? locationData[stateKey] : (locationData[state] || []);
    
    console.log('Found districts:', districts.length);

    // Clear existing
    districtSelect.innerHTML = `<option value="" disabled selected>${t('chooseDistrict')}</option>`;
    
    // Add districts from database
    districts.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = `📍 ${t(d)}`;
        districtSelect.appendChild(opt);
    });

    // Add "Other" option for manual entry
    const otherOpt = document.createElement('option');
    otherOpt.value = 'OTHER';
    otherOpt.textContent = `✍️ ${t('otherDistrict')}`;
    districtSelect.appendChild(otherOpt);

    districtSelect.disabled = false;
}

// ---- Run Full Analysis ----
async function runAnalysis() {
    const crop = document.getElementById('crop-select').value;
    const quantity = parseFloat(document.getElementById('quantity-input').value);
    const costPrice = parseFloat(document.getElementById('cost-input').value);
    let distance = parseFloat(document.getElementById('distance-input').value);
    const state = document.getElementById('state-select').value || '';
    let district = document.getElementById('district-select').value || '';
    
    // Handle manual district entry
    if (district === 'OTHER') {
        const manualInput = document.getElementById('district-manual-input').value.trim();
        district = manualInput || t('unknownDistrict');
    }

    const location = district ? `${district}, ${state}` : state;

    if (isNaN(distance) || distance <= 0) distance = 10;

    // Validation with translated messages
    if (!crop) {
        showToast(t('selectCropFirst'));
        return;
    }
    if (!quantity || quantity <= 0) {
        showToast(t('enterValidQty'));
        return;
    }
    if (!costPrice || costPrice <= 0) {
        showToast(t('enterValidCost'));
        return;
    }

    // Show loading
    const btn = document.getElementById('analyze-btn');
    btn.classList.add('loading');
    btn.disabled = true;

    try {
        const res = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ crop, quantity, cost_price: costPrice, distance, location, state })
        });

        const result = await res.json();

        if (result.success) {
            window.analysisData = result.data;
            renderResults(result.data);
            showResults();
        } else {
            showToast(t('analysisFailed'));
        }
    } catch (err) {
        console.error('Analysis error:', err);
        showToast(t('serverError'));
    } finally {
        btn.classList.remove('loading');
        btn.disabled = false;
    }
}

// ---- Show / Hide Results ----
function showResults() {
    const section = document.getElementById('results-section');
    section.classList.add('visible');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideResults() {
    const section = document.getElementById('results-section');
    section.classList.remove('visible');
}

// ---- Render All Results ----
function renderResults(data) {
    renderBestMarketHighlight(data);
    renderStrategy(data);
    renderMarketPrices(data);
    renderProfitCard(data);
    renderPrediction(data);
    renderWeather(data);
    renderDemand(data);
    renderAlerts(data);
    renderSchemes(data);
    renderBuyers(data);
    renderStorage(data);
    renderPriceChart(data);
    // Update section headers with current language
    if (typeof updateResultHeaders === 'function') {
        updateResultHeaders();
    }
}

// ---- Best Market Highlight Banner ----
function renderBestMarketHighlight(data) {
    const container = document.getElementById('best-market-highlight');
    if (!data.best_market) {
        container.style.display = 'none';
        return;
    }

    const bm = data.best_market;
    const totalProfit = ((bm.price - data.cost_price) * data.quantity).toFixed(2);
    const cropName = tCrop(data.crop);

    const transLocation = bm.location ? bm.location.split(', ').map(part => t(part)).join(', ') : bm.location;

    container.style.display = 'flex';
    container.innerHTML = `
        <div class="best-market-icon">🏆</div>
        <div class="best-market-text">
            <h3>${t('bestMarket')}: ${t(bm.market)}</h3>
            <p>${t('sellYour')} <strong>${cropName}</strong> ${t('atPrice')} <span class="bm-price">₹${bm.price}/kg</span> ${t('inMarket')} ${t(bm.market)} (${transLocation}) ${t('forMaxProfit')} <span class="bm-price" style="color: ${totalProfit > 0 ? 'var(--accent-green)' : 'var(--accent-red)'}">₹${totalProfit}</span></p>
        </div>
    `;
}

// ---- AI Strategy Card ----
function renderStrategy(data) {
    const container = document.getElementById('smart-strategy-card');
    if (!data.strategy) {
        container.style.display = 'none';
        return;
    }
    const strat = data.strategy;
    
    // Icon mapping
    const icon = strat.action === 'SELL_NOW' ? '⚡' : strat.action === 'SPLIT' ? '⚖️' : '🛡️';
    
    container.style.display = 'flex';
    container.innerHTML = `
        <div class="best-market-icon" style="background: rgba(255,255,255,0.05); font-size: 2.5rem; text-shadow: 0 0 15px ${strat.color}; border: 1px solid ${strat.color}33;">${icon}</div>
        <div class="best-market-text" style="flex: 1;">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 800; color: ${strat.color}; margin-bottom: 4px;">${t('strategyTitle')}</div>
            <h3 style="color: ${strat.color}; margin-bottom: 8px; font-size: 1.5rem; text-transform: uppercase;">${t(strat.action)}</h3>
            <p style="margin: 0; color: #f0f4f8; opacity: 0.9; font-size: 0.95rem; line-height: 1.5;">${t(strat.reason)}</p>
        </div>
    `;
    
    container.style.borderLeft = `4px solid ${strat.color}`;
    container.style.background = 'linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(30, 41, 59, 0.4))';
    container.style.padding = '20px';
    container.style.borderRadius = '12px';
    container.style.gap = '20px';
    container.style.alignItems = 'center';
}

// ---- Market Prices ----
function renderMarketPrices(data) {
    const container = document.getElementById('market-prices-list');
    container.innerHTML = '';

    if (!data.current_prices || data.current_prices.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); padding: 16px;">${t('noMarketData')}</p>`;
        return;
    }

    const bestPrice = data.best_market ? data.best_market.price : 0;

    data.current_prices.forEach((market, index) => {
        const isBest = market.price === bestPrice;
        const profitInfo = market.profit ? market.profit : null;

        const item = document.createElement('div');
        item.className = `market-price-item ${isBest ? 'best-market' : ''} fade-in fade-in-delay-${index + 1}`;
        
        let profitHTML = '';
        if (profitInfo) {
            const profitColor = profitInfo.is_profitable ? 'var(--accent-green)' : 'var(--accent-red)';
            profitHTML = `<div style="font-size: 0.78rem; color: ${profitColor}; font-weight: 600; margin-top: 2px;">
                ${t('profit')}: ₹${profitInfo.profit.toLocaleString('en-IN')}
            </div>`;
        }

        // Translate demand level
        const demandKey = market.demand === 'High' ? 'highDemand' : market.demand === 'Medium' ? 'mediumDemand' : 'lowDemand';
        
        const transLocation = market.location ? market.location.split(', ').map(part => t(part)).join(', ') : market.location;

        item.innerHTML = `
            <div class="market-info">
                <div class="market-name">${t(market.market)}</div>
                <div class="market-location">📍 ${transLocation} • ${t(demandKey)}</div>
                ${isBest ? `<span class="best-badge">${t('bestPrice')}</span>` : ''}
                ${profitHTML}
            </div>
            <div class="market-price-value">₹${market.price}/kg</div>
        `;
        container.appendChild(item);
    });
}

// ---- Profit Card ----
function renderProfitCard(data) {
    const container = document.getElementById('profit-display');
    
    if (!data.profit) {
        container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 16px;">${t('enterDetailsToSeeProfit')}</p>`;
        return;
    }

    const p = data.profit;
    const isProfit = p.is_profitable;

    container.innerHTML = `
        <div class="profit-amount ${isProfit ? 'positive' : 'negative'}">
            ${isProfit ? '+' : ''}₹${p.profit.toLocaleString('en-IN')}
        </div>
        <div class="profit-label">${isProfit ? t('expectedProfit') : t('expectedLoss')}</div>
        <div class="profit-details">
            <div class="profit-detail-item">
                <div class="profit-detail-label">${t('revenue')}</div>
                <div class="profit-detail-value">₹${p.revenue.toLocaleString('en-IN')}</div>
            </div>
            <div class="profit-detail-item">
                <div class="profit-detail-label">${t('productionCost')}</div>
                <div class="profit-detail-value">-₹${p.total_cost.toLocaleString('en-IN')}</div>
            </div>
            <div class="profit-detail-item">
                <div class="profit-detail-label">🚛 ${t('transportCost')}</div>
                <div class="profit-detail-value" style="color: var(--accent-amber);">-₹${p.transport_cost.toLocaleString('en-IN')}</div>
            </div>
            <div class="profit-detail-item">
                <div class="profit-detail-label">${t('profitPerKg')}</div>
                <div class="profit-detail-value" style="color: ${isProfit ? 'var(--accent-green)' : 'var(--accent-red)'}">₹${p.profit_per_kg}</div>
            </div>
        </div>
    `;
}

// ---- Price Prediction ----
function renderPrediction(data) {
    const container = document.getElementById('prediction-content');
    
    if (!data.prediction) {
        container.innerHTML = '<p style="color: var(--text-muted); padding: 16px;">Prediction unavailable</p>';
        return;
    }

    const pred = data.prediction;
    const trendIcon = pred.trend === 'increase' ? '📈' : pred.trend === 'decrease' ? '📉' : '➡️';
    const trendClass = pred.trend === 'increase' ? 'up' : pred.trend === 'decrease' ? 'down' : 'stable';
    const changeSign = pred.price_change > 0 ? '+' : '';
    const trendText = pred.trend === 'increase' ? t('increase') : pred.trend === 'decrease' ? t('decrease') : t('stable');

    let weekHTML = '';
    if (data.week_predictions && data.week_predictions.length > 0) {
        weekHTML = `
            <div class="week-predictions">
                ${data.week_predictions.map((wp, i) => {
                    const wTrend = wp.trend === 'increase' ? 'up' : wp.trend === 'decrease' ? 'down' : 'stable';
                    const wIcon = wp.trend === 'increase' ? '↑' : wp.trend === 'decrease' ? '↓' : '→';
                    return `
                        <div class="week-day-card">
                            <div class="week-day-label">${t('day')} ${i + 1}</div>
                            <div class="week-day-price">₹${wp.predicted_price}</div>
                            <div class="week-day-trend ${wTrend}">${wIcon}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    container.innerHTML = `
        <div class="prediction-highlight">
            <div class="prediction-arrow ${trendClass}">${trendIcon}</div>
            <div class="prediction-text">
                <div class="prediction-price">₹${pred.predicted_price}${t('predictedTomorrow')}</div>
                <div class="prediction-change">${t('change')}: ${changeSign}₹${pred.price_change} (${trendText})</div>
            </div>
        </div>
        <div class="prediction-models">
            <div class="model-tag">
                <span class="model-name">${t('linearRegression')}</span>
                <span class="model-value">₹${pred.linear_regression_pred}</span>
            </div>
            <div class="model-tag">
                <span class="model-name">${t('randomForest')}</span>
                <span class="model-value">₹${pred.random_forest_pred}</span>
            </div>
        </div>
        ${weekHTML}
    `;
}

// ---- Weather Impact ----
function renderWeather(data) {
    const container = document.getElementById('weather-content');
    
    if (!data.weather) {
        container.innerHTML = '<p style="color: var(--text-muted); padding: 16px;">Weather data unavailable</p>';
        return;
    }

    const w = data.weather;
    const impactColor = w.impact === 'High' ? 'var(--accent-red)' : w.impact === 'Medium' ? 'var(--accent-amber)' : 'var(--accent-green)';

    // Translate weather message
    const weatherKey = w.current_weather === 'Rain' ? 'weatherRain' : w.current_weather === 'Cloudy' ? 'weatherCloudy' : 'weatherClear';
    const weatherMsg = t(weatherKey);

    // Weather labels map
    const weatherLabels = {
        'Clear': t('clearWeather'),
        'Cloudy': t('cloudyWeather'),
        'Rain': t('rainWeather')
    };

    let avgPriceHTML = '';
    if (w.avg_prices_by_weather) {
        avgPriceHTML = Object.entries(w.avg_prices_by_weather).map(([weather, price]) => `
            <div class="info-detail">
                <span>${weather === 'Clear' ? '☀️' : weather === 'Cloudy' ? '☁️' : '🌧️'} ${weatherLabels[weather] || weather}</span>
                <span><strong>${t('avgPrice')} ₹${price}/kg</strong></span>
            </div>
        `).join('');
    }

    container.innerHTML = `
        <div class="info-message">${weatherMsg}</div>
        <div class="info-detail">
            <span>${t('impactLevel')}</span>
            <span style="color: ${impactColor}; font-weight: 700;">${w.impact}</span>
        </div>
        ${avgPriceHTML}
    `;
}

// ---- Demand Insight ----
function renderDemand(data) {
    const container = document.getElementById('demand-content');
    
    if (!data.demand) {
        container.innerHTML = '<p style="color: var(--text-muted); padding: 16px;">Demand data unavailable</p>';
        return;
    }

    const d = data.demand;
    const demandClass = d.demand_level.toLowerCase();
    const trendIcon = d.price_trend === 'rising' ? '📈' : '📉';

    // Dynamic demand message
    const demandMsgKey = d.demand_level === 'High' ? 'demandHigh' : d.demand_level === 'Medium' ? 'demandMedium' : 'demandLow';
    const demandMsg = t(demandMsgKey).replace('{crop}', tCrop(data.crop));

    // Demand badge text
    const demandBadgeText = d.demand_level === 'High' ? t('highDemand') : d.demand_level === 'Medium' ? t('mediumDemand') : t('lowDemand');
    const trendText = d.price_trend === 'rising' ? t('rising') : t('falling');

    container.innerHTML = `
        <div class="info-message">${demandMsg}</div>
        <div class="stat-row">
            <span class="demand-badge ${demandClass}">
                ${d.demand_level === 'High' ? '🔥' : d.demand_level === 'Medium' ? '📊' : '❄️'} 
                ${demandBadgeText}
            </span>
            <span class="stat-badge">${trendIcon} ${t('trend')}: <strong>${trendText}</strong></span>
            <span class="stat-badge">📊 ${t('avg7d')}: <strong>₹${d.avg_price_7d}/kg</strong></span>
        </div>
    `;
}

// ---- Alerts ----
function renderAlerts(data) {
    const container = document.getElementById('alerts-list');
    container.innerHTML = '';

    if (!data.alerts || data.alerts.length === 0) {
        container.innerHTML = `<div class="alert-item info"><span class="alert-icon">✅</span><span class="alert-text">${t('noAlertsAtThisTime')}</span></div>`;
        return;
    }

    data.alerts.forEach((alert, index) => {
        const item = document.createElement('div');
        item.className = `alert-item ${alert.type} fade-in fade-in-delay-${index + 1}`;
        item.innerHTML = `
            <span class="alert-icon">${alert.icon}</span>
            <span class="alert-text">${alert.message}</span>
        `;
        container.appendChild(item);
    });
}

// ---- Schemes and Subsidies ----
function renderSchemes(data) {
    const container = document.getElementById('schemes-list');
    container.innerHTML = '';

    if (!data.schemes || data.schemes.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); padding: 16px;">${t('noSchemes')}</p>`;
        return;
    }

    data.schemes.forEach((scheme, index) => {
        const item = document.createElement('div');
        item.className = 'result-card blue-accent fade-in';
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
        
        const typeColor = scheme.type === 'Loan' ? 'var(--accent-amber)' : scheme.type === 'Insurance' ? 'var(--accent-purple)' : 'var(--accent-green)';
        const translatedType = t(scheme.type); // "Loan", "Insurance", "Subsidy" normally, could be added to i18n
        
        item.innerHTML = `
            <div style="display: flex; align-items: start; gap: 12px; margin-bottom: 12px;">
                <div style="font-size: 2rem; background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 12px;">${scheme.icon}</div>
                <div>
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; color: ${typeColor}; background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 6px;">
                        ${translatedType}
                    </span>
                    <h3 style="margin: 0; font-size: 1.1rem; color: #f0f4f8;">${t(scheme.name)}</h3>
                </div>
            </div>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 12px; line-height: 1.5;">${t(scheme.desc)}</p>
            
            <div style="background: rgba(0,0,0,0.2); border-radius: 8px; padding: 12px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem;">
                    <span style="color: #64748b;">${t('amountSupport')}</span>
                    <strong style="color: #f0f4f8;">${t(scheme.amount)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                    <span style="color: #64748b;">${t('eligibilityLabel')}</span>
                    <span style="color: #f0f4f8; text-align: right; max-width: 60%;">${t(scheme.eligibility)}</span>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

// ---- Direct Buyers ----
function renderBuyers(data) {
    const container = document.getElementById('direct-buyers-list');
    if (!container) return;
    
    container.innerHTML = '';

    if (!data.direct_buyers || data.direct_buyers.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); padding: 16px;">${t('noBuyersFound')}</p>`;
        return;
    }

    data.direct_buyers.forEach((buyer, index) => {
        const item = document.createElement('div');
        item.className = 'result-card teal-accent fade-in';
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
        
        const transLocation = buyer.location ? buyer.location.split(', ').map(part => t(part)).join(', ') : buyer.location;
        
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div>
                    <h3 style="margin: 0 0 4px 0; font-size: 1.1rem; color: #f0f4f8;">${t(buyer.name)}</h3>
                    <div style="font-size: 0.85rem; color: #64748b;">📍 ${transLocation} • ${buyer.distance}</div>
                </div>
                <div style="text-align: right; background: rgba(20, 184, 166, 0.1); padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(20, 184, 166, 0.2);">
                    <div style="font-size: 0.75rem; color: var(--accent-teal); margin-bottom: 2px;">${t('directPrice')}</div>
                    <div style="font-weight: 700; color: #f0f4f8;">₹${buyer.price}/kg</div>
                </div>
            </div>
            
            <a href="tel:${buyer.phone}" style="display: block; width: 100%; text-align: center; background: var(--accent-teal); color: #fff; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 16px; transition: all 0.2s;">
                📞 ${t('contactBuyer')} (${buyer.phone})
            </a>
        `;
        container.appendChild(item);
    });
}

// ---- Storage Availability Finder ----
function renderStorage(data) {
    const container = document.getElementById('storage-list');
    if (!container) return;
    
    container.innerHTML = '';

    if (!data.storage || data.storage.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); padding: 16px;">${t('noStorageFound') || 'No storage facilities found for your region.'}</p>`;
        return;
    }

    data.storage.forEach((facility, index) => {
        const item = document.createElement('div');
        item.className = 'result-card fade-in';
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
        
        // Type color & icon
        const isCold = facility.type === 'Cold Storage';
        const typeIcon = isCold ? '❄️' : '📦';
        const typeColor = isCold ? 'var(--accent-blue)' : 'var(--accent-amber)';
        
        const transLocation = facility.location ? facility.location.split(', ').map(part => t(part)).join(', ') : facility.location;
        
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
                <div>
                    <h3 style="margin: 0 0 4px 0; font-size: 1.15rem; color: #f0f4f8;">${t(facility.name)}</h3>
                    <div style="font-size: 0.85rem; color: #64748b;">📍 ${transLocation} • ${facility.distance}</div>
                </div>
                <div style="font-size: 1.5rem; background: rgba(255,255,255,0.05); padding: 8px; border-radius: 10px;">${typeIcon}</div>
            </div>
            
            <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                 <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; color: ${typeColor}; background: ${typeColor}15; padding: 4px 8px; border-radius: 4px; border: 1px solid ${typeColor}30;">
                    ${t(facility.type)}
                </span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: rgba(0,0,0,0.2); border-radius: 10px; padding: 12px; margin-bottom: 16px;">
                <div>
                    <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 2px;">${t('availableSpace')}</div>
                    <div style="font-weight: 600; color: #f0f4f8;">${facility.available}</div>
                </div>
                <div>
                    <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 2px;">${t('storagePrice')}</div>
                    <div style="font-weight: 600; color: #f0f4f8;">${facility.price}</div>
                </div>
            </div>
            
            <a href="tel:${facility.phone}" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: linear-gradient(135deg, #1e293b, #0f172a); color: #fff; padding: 12px; border-radius: 10px; text-decoration: none; font-weight: 600; border: 1px solid rgba(255,255,255,0.1); transition: all 0.2s;">
                📞 ${t('contactStorage')} (${facility.phone})
            </a>
        `;
        container.appendChild(item);
    });
}

// ---- Price History Chart ----
function renderPriceChart(data) {
    const canvas = document.getElementById('price-chart');
    const ctx = canvas.getContext('2d');

    if (priceChart) {
        priceChart.destroy();
    }

    if (!data.price_history || Object.keys(data.price_history).length === 0) {
        return;
    }

    const colors = [
        { line: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' },
        { line: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
        { line: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
        { line: '#a855f7', bg: 'rgba(168, 85, 247, 0.1)' },
        { line: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },
        { line: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' }
    ];

    const datasets = [];
    let labels = [];
    let colorIndex = 0;

    for (const [market, history] of Object.entries(data.price_history)) {
        if (history.dates.length > labels.length) {
            labels = history.dates.map(d => {
                const date = new Date(d);
                return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
            });
        }

        const color = colors[colorIndex % colors.length];
        datasets.push({
            label: t(market),
            data: history.prices,
            borderColor: color.line,
            backgroundColor: color.bg,
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 6,
            pointBackgroundColor: color.line,
            pointBorderColor: '#0a0f1e',
            pointBorderWidth: 2
        });
        colorIndex++;
    }

    priceChart = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#94a3b8',
                        padding: 16,
                        font: { family: "'Inter', sans-serif", size: 12, weight: '500' },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#f0f4f8',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { family: "'Inter', sans-serif", size: 13, weight: '600' },
                    bodyFont: { family: "'Inter', sans-serif", size: 12 },
                    callbacks: {
                        label: (context) => `  ${context.dataset.label}: ₹${context.parsed.y}/kg`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#64748b', font: { size: 11 }, maxRotation: 45, autoSkip: true, maxTicksLimit: 10 }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { 
                        color: '#64748b', 
                        font: { size: 11 },
                        callback: (value) => '₹' + value
                    }
                }
            }
        }
    });
}

// ---- Toast Notification ----
function showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(17, 24, 39, 0.95);
        backdrop-filter: blur(20px);
        color: #f0f4f8;
        padding: 14px 24px;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        border: 1px solid rgba(255,255,255,0.1);
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
