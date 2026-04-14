import streamlit as st
import pandas as pd
import numpy as np
import os
from model.predictor import (
    get_available_crops,
    get_current_prices,
    get_best_market,
    predict_price,
    predict_price_week,
    calculate_profit,
    get_weather_impact,
    get_demand_insight,
    get_price_alerts,
    get_price_history,
    get_govt_schemes,
    get_direct_buyers,
    get_smart_strategy,
    get_storage_facilities
)

# ---- Page Config ----
st.set_page_config(
    page_title="Farmer Profit Assistant — AI Powered",
    page_icon="🌾",
    layout="wide",
)

# ---- Translations (Full Consistency with Flask App) ----
TRANSLATIONS = {
    "en": {
        "title": "🌾 Farmer Profit Assistant",
        "subtitle": "Make smarter selling decisions using AI — compare markets, predict prices, and maximize your profit",
        "enter_details": "Enter Your Details",
        "crop_label": "Select Crop",
        "qty_label": "Quantity (kg)",
        "cost_label": "Cost Price (₹/kg)",
        "dist_label": "Distance to Market (km)",
        "state_label": "Select State",
        "dist_select_label": "Select District",
        "analyze_btn": "🔍 Check Best Market & Profit",
        "best_market": "🎯 Best Market",
        "profit": "Expected Profit",
        "strategy_label": "AI Strategy",
        "prediction": "Tomorrow's Price Prediction",
        "forecast": "predicted tomorrow",
        "trend_label": "Price Trend",
        "weather": "Weather Impact",
        "demand": "Demand Insight",
        "alerts": "Smart Alerts",
        "history": "Price History (30 Days)",
        "schemes": "Government Schemes & Loans",
        "storage": "Nearby Storage & Warehouses",
        "buyers": "Direct Buyer Opportunities",
        "revenue": "Revenue",
        "transport": "Transport Cost",
        "profit_per_kg": "Profit/kg",
        "call_now": "📞 Call Now",
        "price_label": "Price:",
        "support_label": "Support:",
        "eligibility_label": "Eligibility:",
        "lang_select": "Choose Language",
        "insights_title": "💡 Market Insights",
        "welcome_title": "Ready to analyze your harvest.",
        "welcome_info": "Fill out your crop data on the left panel to get AI-powered selling strategies and profit optimization exactly like the web dashboard.",
        "welcome_caption": "Farmer Intelligence System",
        
        # Crops
        "Tomato": "Tomato", "Onion": "Onion", "Rice": "Rice", "Wheat": "Wheat", "Potato": "Potato", "Chili": "Chili",
        
        # Strategies
        "SELL_NOW": "Sell 100% Now", "SPLIT": "Split Sell (50/50)", "HOLD": "Hold & Wait",
        "strategySellNowHighDemand": "Demand is extremely high and prices are peaking. We recommend selling your entire stock immediately.",
        "strategySellNowPerishable": "Your crop is highly perishable. Despite low profits, holding onto your stock risks total spoilage.",
        "strategyHoldLowPrice": "Prices are currently below your cost price. If you have storage, hold until the market recovers.",
        "strategySplitMedium": "The market is stable. Sell 50% now for cash flow and hold 50% for potential spikes.",
        "strategySplitFluctuating": "Volatility detected. Protect investment by selling 50% today.",

        # Weather/Demand Messages
        "weatherRain": "🌧️ Rain expected → Prices may increase due to supply disruption",
        "weatherCloudy": "☁️ Cloudy weather → Prices may remain stable",
        "weatherClear": "☀️ Clear weather → Normal supply expected, stable prices",
        "demandHigh": "High demand this week! Good time to sell.",
        "demandMedium": "Moderate demand. Prices are stable.",
        "demandLow": "Low demand. Consider storing if possible.",
        
        # Alerts
        "alertPriceFalling": "Prices are falling for the last 3 days. Consider selling soon!",
        "alertPriceAboveAvg": "Current price is well above average. Great time to sell!",
        "alertPriceBelowAvg": "Current price is below average. Consider waiting.",
        "alertPredictIncrease": "Price predicted to increase tomorrow.",
        "alertPredictDecrease": "Price may drop tomorrow. Sell today if possible!",
        "alertNormalConditions": "Market conditions are normal. No major alerts.",

        # States & Districts
        "Andhra Pradesh": "Andhra Pradesh", "Telangana": "Telangana", "Maharashtra": "Maharashtra",
        "Anantapur": "Anantapur", "Chittoor": "Chittoor", "Guntur": "Guntur", "Krishna": "Krishna", "Kurnool": "Kurnool", "Nellore": "Nellore", "Visakhapatnam": "Visakhapatnam",
        "Hyderabad": "Hyderabad", "Karimnagar": "Karimnagar", "Khammam": "Khammam", "Nalgonda": "Nalgonda", "Nizamabad": "Nizamabad", "Warangal": "Warangal",
        "Pune": "Pune", "Mumbai": "Mumbai", "Nagpur": "Nagpur", "Nashik": "Nashik", "Aurangabad": "Aurangabad",

        # Buyers & Storage
        "Kisan Traders": "Kisan Traders", "FreshFarm Grocers": "FreshFarm Grocers", "Local Mandi Vendor": "Local Mandi Vendor",
        "Direct Harvest Partners": "Direct Harvest Partners", "Green Grocers Hub": "Green Grocers Hub", "Organic Veg Mart": "Organic Veg Mart",
        "Cold Storage": "Cold Storage", "Warehouse": "Warehouse",
        "Shiva Cold Storage": "Shiva Cold Storage", "Pragati Refrigerated Warehouse": "Pragati Refrigerated Warehouse", 
        "Local Farmers Cold Hub": "Local Farmers Cold Hub", "Global Fresh Storage": "Global Fresh Storage",
        "Snowline Cold Chain": "Snowline Cold Chain", "Arctic Food Keepers": "Arctic Food Keepers",
        "Central Warehouse Corp": "Central Warehouse Corp", "State Warehousing Hub": "State Warehousing Hub", 
        "Kisan Storage Point": "Kisan Storage Point", "Annapurna Godowns": "Annapurna Godowns",
        "Mandi Storage Solutions": "Mandi Storage Solutions", "Rural Harvest Warehouse": "Rural Harvest Warehouse",

        # Schemes
        "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
        "Direct income support of ₹6,000 per year in three equal installments.": "Direct income support of ₹6,000 per year in three equal installments.",
        "All landholding farmers": "All landholding farmers",
        "KCC (Kisan Credit Card)": "KCC (Kisan Credit Card)",
        "Short-term credit limits for crop cultivation at concessional interest rates.": "Short-term credit limits for crop cultivation at concessional interest rates.",
        "All farmers, tenant farmers, sharecroppers": "All farmers, tenant farmers, sharecroppers",
        "PM Fasal Bima Yojana (PMFBY)": "PM Fasal Bima Yojana (PMFBY)",
        "Crop insurance protecting against natural calamities, pests & diseases.": "Crop insurance protecting against natural calamities, pests & diseases.",
        "All farmers growing notified crops": "All farmers growing notified crops",
        "Rythu Bandhu": "Rythu Bandhu",
        "Investment support for agriculture and horticulture crops.": "Investment support for agriculture and horticulture crops.",
        "Farmers owning land in Telangana": "Farmers owning land in Telangana",
        "YSR Rythu Bharosa": "YSR Rythu Bharosa",
        "Financial assistance including PM-KISAN component.": "Financial assistance including PM-KISAN component.",
        "Landholding farmer families": "Landholding farmer families"
    },
    "te": {
        "title": "🌾 రైతు లాభం సహాయకుడు",
        "subtitle": "AI ఉపయోగించి తెలివైన అమ్మకపు నిర్ణయాలు తీసుకోండి — మార్కెట్లను పోల్చండి, ధరలను అంచనా వేయండి",
        "enter_details": "మీ వివరాలు నమోదు చేయండి",
        "crop_label": "పంటను ఎంచుకోండి",
        "qty_label": "పరిమాణం (కేజీలు)",
        "cost_label": "ఖర్చు ధర (₹/కేజీ)",
        "dist_label": "మార్కెట్‌కి దూరం (km)",
        "state_label": "రాష్ట్రం ఎంచుకోండి",
        "dist_select_label": "జిల్లా ఎంచుకోండి",
        "analyze_btn": "🔍 ఉత్తమ మార్కెట్ & లాభం తనిఖీ",
        "best_market": "🎯 ఉత్తమ మార్కెట్",
        "profit": "ఆశించిన లాభం",
        "strategy_label": "AI నైపుణ్య వ్యూహం",
        "prediction": "రేపటి ధర అంచనా",
        "forecast": "రేపు అంచనా వేయబడిన ధర",
        "trend_label": "ధర ట్రెండ్",
        "weather": "వాతావరణ ప్రభావం",
        "demand": "డిమాండ్ అంతర్దృష్టి",
        "alerts": "స్మార్ట్ హెచ్చరికలు",
        "history": "ధర ట్రెండ్ విశ్లేషణ (30 రోజులు)",
        "schemes": "ప్రభుత్వ పథకాలు & రుణాలు",
        "storage": "సమీపంలోని గిడ్డంగులు",
        "buyers": "ప్రత్యక్ష కొనుగోలుదారులు",
        "revenue": "ఆదాయం",
        "transport": "రవాణా ఖర్చు",
        "profit_per_kg": "లాభం/కేజీ",
        "call_now": "📞 ఇప్పుడే కాల్ చేయండి",
        "price_label": "ధర:",
        "support_label": "మద్దతు:",
        "eligibility_label": "అర్హత:",
        "lang_select": "భాషను ఎంచుకోండి",
        "insights_title": "💡 మార్కెట్ అంతర్దృష్టులు",
        "welcome_title": "మీ కోతను విశ్లేషించడానికి సిద్ధంగా ఉంది.",
        "welcome_info": "వెబ్ డ్యాష్‌బోర్డ్ మాదిరిగానే AI-ఆధారిత అమ్మకపు వ్యూహాలను మరియు లాభాల ఆప్టిమైజేషన్‌ను పొందడానికి ఎడమ ప్యానెల్‌లో మీ పంటデータを నింపండి.",
        "welcome_caption": "రైతు ఇంటెలిజెన్స్ సిస్టమ్",

        # Crops
        "Tomato": "టమాటో", "Onion": "ఉల్లిపాయ", "Rice": "బియ్యం", "Wheat": "గోధుమ", "Potato": "బంగాళాదుంప", "Chili": "మిరపకాయ",

        # Strategies
        "SELL_NOW": "ఇప్పుడే 100% విక్రయించండి", "SPLIT": "సగం ఇప్పుడు, సగం తర్వాత (50/50)", "HOLD": "నిల్వ ఉంచండి & వేచి ఉండండి",
        "strategySellNowHighDemand": "డిమాండ్ చాలా ఎక్కువగా ఉంది మరియు ధరలు గరిష్ట స్థాయిలో ఉన్నాయి. మీ స్టాక్ మొత్తాన్ని వెంటనే విక్రయించమని మేము సిఫార్సు చేస్తున్నాము.",
        "strategySellNowPerishable": "మీ పంట త్వరగా పాడయ్యేది. లాభాలు తక్కువగా ఉన్నప్పటికీ, నిల్వ ఉంచితే పూర్తిగా నష్టపోతారు.",
        "strategyHoldLowPrice": "ప్రస్తుతం ధరలు మీ కొనుగోలు ధర కన్నా తక్కువగా ఉన్నాయి. మార్కెట్ కోలుకునే వరకు మీ స్టాక్‌ను నిల్వ ఉంచుకోండి.",
        "strategySplitMedium": "మార్కెట్ స్థిరంగా ఉంది. తక్షణ నగదు కోసం 50% పంటను ఇప్పుడు విక్రయించండి, మిగిలిన 50% నిల్వ చేయండి.",
        "strategySplitFluctuating": "మార్కెట్ ఒడిదుడుకుల్లో ఉంది. ఈరోజు 50% విక్రయించి మీ పెట్టుబడిని రక్షించుకోండి.",

        # Weather/Demand Messages
        "weatherRain": "🌧️ వర్షం అంచనా → సరఫరా అంతరాయం వల్ల ధరలు పెరగవచ్చు",
        "weatherCloudy": "☁️ మేఘావృత వాతావరణం → ధరలు స్థిరంగా ఉండవచ్చు",
        "weatherClear": "☀️ ఎండ వాతావరణం → సాధారణ సరఫరా ఆశించబడుతోంది",
        "demandHigh": "ఈ వారం అధిక డిమాండ్! అమ్మడానికి మంచి సమయం.",
        "demandMedium": "మధ్యస్థ డిమాండ్. ధరలు స్థిరంగా ఉన్నాయి.",
        "demandLow": "తక్కువ డిమాండ్. సాధ్యమైతే నిల్వ చేయడం పరిగణించండి.",

        # Alerts
        "alertPriceFalling": "గత 3 రోజులుగా ధరలు తగ్గుతున్నాయి. త్వరగా విక్రయించడం గురించి ఆలోచించండి!",
        "alertPriceAboveAvg": "ప్రస్తుత ధర సగటు కంటే ఎక్కువగా ఉంది. విక్రయించడానికి ఇది గొప్ప సమయం!",
        "alertPriceBelowAvg": "ప్రస్తుత ధర సగటు కంటే తక్కువగా ఉంది. వేచి ఉండటం మంచిది.",
        "alertPredictIncrease": "రేపు ధర పెరుగుతుందని అంచనా.",
        "alertPredictDecrease": "రేపు ధర తగ్గే అవకాశం ఉంది. వీలైతే ఈరోజే విక్రయించండి!",
        "alertNormalConditions": "మార్కెట్ పరిస్థితులు సాధారణంగా ఉన్నాయి. ఎటువంటి హెచ్చరికలు లేవు.",

        # States & Districts
        "Andhra Pradesh": "ఆంధ్రప్రదేశ్", "Telangana": "తెలంగాణ", "Maharashtra": "మహారాష్ట్ర",
        "Anantapur": "అనంతపురం", "Chittoor": "చిత్తూరు", "Guntur": "గుంటూరు", "Krishna": "కృష్ణా", "Kurnool": "కర్నూలు", "Nellore": "నెల్లూరు", "Visakhapatnam": "విశాఖపట్నం",
        "Hyderabad": "హైదరాబాద్", "Adilabad": "ఆదిలాబాద్", "Karimnagar": "కరీంనగర్", "Khammam": "ఖమ్మం", "Nalgonda": "నల్గొండ", "Nizamabad": "నిజామాబాద్", "Warangal": "వరంగల్",
        "Pune": "పూణే", "Mumbai": "ముంబై", "Nagpur": "నాగ్‌పూర్", "Nashik": "నాసిక్", "Aurangabad": "ఔరంగాబాద్",

        # Buyers & Storage
        "Kisan Traders": "కిసాన్ ట్రేడర్స్", "FreshFarm Grocers": "ఫ్రెష్ ఫామ్ గ్రోసర్స్", "Local Mandi Vendor": "స్థానిక మార్కెట్ విక్రేత",
        "Direct Harvest Partners": "డైరెక్ట్ హార్వెస్ట్ పార్టనర్స్", "Green Grocers Hub": "గ్రీన్ గ్రోసర్స్ హబ్", "Organic Veg Mart": "ఆర్గానిక్ వెజ్ మార్ట్",
        "Cold Storage": "కోల్డ్ స్టోరేజ్", "Warehouse": "గిడ్డంగి",
        "Shiva Cold Storage": "శివ కోల్డ్ స్టోరేజ్", "Pragati Refrigerated Warehouse": "ప్రగతి రిఫ్రిజిరేటెడ్ వేర్‌హౌస్",
        "Local Farmers Cold Hub": "లోకల్ ఫార్మర్స్ కోల్డ్ హబ్", "Global Fresh Storage": "గ్లోబల్ ఫ్రెష్ స్టోరేజ్",
        "Snowline Cold Chain": "స్నోలైన్ కోల్డ్ చైన్", "Arctic Food Keepers": "ఆర్కిటిక్ ఫుడ్ కీపర్స్",
        "Central Warehouse Corp": "సెంట్రల్ వేర్‌హౌస్ కార్పొరేషన్", "State Warehousing Hub": "స్టేట్ వేర్‌హౌసింగ్ హబ్",
        "Kisan Storage Point": "కిసాన్ స్టోరేజ్ పాయింట్", "Annapurna Godowns": "అన్నపూర్ణ గోదాములు",
        "Mandi Storage Solutions": "మండి స్టోరేజ్ సొల్యూషన్స్", "Rural Harvest Warehouse": "రూరల్ హార్వెస్ట్ వేర్‌హౌస్",

        # Schemes
        "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)": "పిఎం కిసాన్ (ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి)",
        "Direct income support of ₹6,000 per year in three equal installments.": "సంవత్సరానికి ₹6,000 లను మూడు సమాన వాయిదాలలో నేరుగా అందించే ఆదాయ మద్దతు.",
        "All landholding farmers": "భూమి ఉన్న రైతులందరికీ",
        "KCC (Kisan Credit Card)": "కేసిసి (కిసాన్ క్రెడిట్ కార్డ్)",
        "Short-term credit limits for crop cultivation at concessional interest rates.": "తక్కువ వడ్డీ తో పంట సాగు కోసం స్వల్పకాలిక క్రెడిట్.",
        "All farmers, tenant farmers, sharecroppers": "రైతులు, కౌలు రైతులు అందరికీ",
        "PM Fasal Bima Yojana (PMFBY)": "పిఎం ఫసల్ బీమా యోజన (PMFBY)",
        "Crop insurance protecting against natural calamities, pests & diseases.": "ప్రకృతి వైపరీత్యాలు, తెగుళ్లు నుండి రక్షించే పంట బీమా.",
        "All farmers growing notified crops": "నోటిఫైడ్ పంటలు పండించే రైతులందరికీ",
        "Rythu Bandhu": "రైతు బంధు",
        "Investment support for agriculture and horticulture crops.": "వ్యవసాయ, ఉద్యానవన పంటలకు పెట్టుబడి మద్దతు.",
        "Farmers owning land in Telangana": "తెలంగాణలో భూమి ఉన్న రైతులు",
        "YSR Rythu Bharosa": "వైఎస్ఆర్ రైతు భరోసా",
        "Financial assistance including PM-KISAN component.": "పిఎం-కిసాన్ భాగంతో సహా ఆర్థిక సహాయం.",
        "Landholding farmer families": "భూమి ఉన్న రైతు కుటుంబాలు"
    },
    "hi": {
        "title": "🌾 किसान लाभ सहायक",
        "subtitle": "AI का उपयोग करके स्मार्ट बिक्री निर्णय लें — बाज़ारों की तुलना करें, कीमतों की भविष्यवाणी करें",
        "enter_details": "अपना विवरण दर्ज करें",
        "crop_label": "फसल चुनें",
        "qty_label": "मात्रा (किलो)",
        "cost_label": "लागत मूल्य (₹/किलो)",
        "dist_label": "बाजार से दूरी (km)",
        "state_label": "राज्य चुनें",
        "dist_select_label": "जिला चुनें",
        "analyze_btn": "🔍 सर्वश्रेष्ठ बाज़ार और लाभ जांचें",
        "best_market": "🎯 सर्वश्रेष्ठ बाज़ार",
        "profit": "अपेक्षित लाभ",
        "strategy_label": "AI लक्ष्य रणनीति",
        "prediction": "कल मूल्य की भविष्यवाणी",
        "forecast": "कल के लिए अनुमानित मूल्य",
        "trend_label": "मूल्य प्रवृत्ति",
        "weather": "मौसम प्रभाव",
        "demand": "मांग अंतर्दृष्टि",
        "alerts": "स्मार्ट अलर्ट",
        "history": "मूल्य प्रवृत्ति विश्लेषण (30 दिन)",
        "schemes": "सरकारी योजनाएं और ऋण",
        "storage": "आस-पास के गोदाम",
        "buyers": "सीधा खरीदार अवसर",
        "revenue": "राजस्व",
        "transport": "परिवहन लागत",
        "profit_per_kg": "लाभ/किलो",
        "call_now": "📞 अभी कॉल करें",
        "price_label": "कीमत:",
        "support_label": "सहायता:",
        "eligibility_label": "पात्रता:",
        "lang_select": "भाषा चुनें",
        "insights_title": "💡 बाजार अंतर्दृष्टि",
        "welcome_title": "आपकी फसल का विश्लेषण करने के लिए तैयार है।",
        "welcome_info": "वेब डैशबोर्ड की तरह ही AI-संचालित बिक्री रणनीतियों और लाभ अनुकूलन प्राप्त करने के लिए बाएं पैनल पर अपना फसल डेटा भरें।",
        "welcome_caption": "किसान इंटेलिजेंस सिस्टम",

        # Crops
        "Tomato": "टमाटर", "Onion": "प्याज", "Rice": "चावल", "Wheat": "गेहूं", "Potato": "आलू", "Chili": "मिर्च",

        # Strategies
        "SELL_NOW": "अभी 100% बेचें", "SPLIT": "50% अभी, 50% बाद में बेचें", "HOLD": "स्टोर करें और प्रतीक्षा करें",
        "strategySellNowHighDemand": "मांग बहुत अधिक है और कीमतें चरम पर हैं। अधिकतम लाभ के लिए अपना पूरा स्टॉक तुरंत बेचें।",
        "strategySellNowPerishable": "आपकी फसल जल्द खराब होने वाली है। कम मुनाफ़े के बावजूद, तुरंत बेचना बेहतर है।",
        "strategyHoldLowPrice": "कीमतें लागत मूल्य से नीचे हैं। यदि भंडारण उपलब्ध है, तो बाजार में सुधार होने तक प्रतीक्षा करें।",
        "strategySplitMedium": "बाज़ार स्थिर है। तत्काल नकदी के लिए 50% अभी बेचें और 50% भविष्य के लिए रखें।",
        "strategySplitFluctuating": "बाज़ार में उतार-चढ़ाव। आज 50% बेचकर अपने निवेश को सुरक्षित रखें।",

        # Weather/Demand Messages
        "weatherRain": "🌧️ बारिश की संभावना → आपूर्ति बाधा से कीमतें बढ़ सकती हैं",
        "weatherCloudy": "☁️ बादल छाए मौसम → कीमतें स्थिर रह सकती हैं",
        "weatherClear": "☀️ साफ मौसम → सामान्य आपूर्ति अपेक्षित, स्थिर कीमतें",
        "demandHigh": "इस सप्ताह उच्च मांग! बेचने का अच्छा समय।",
        "demandMedium": "मध्यम मांग। कीमतें स्थिर हैं।",
        "demandLow": "कम मांग। संभव हो तो भंडारण करें।",

        # Alerts
        "alertPriceFalling": "पिछले 3 दिनों से कीमतें गिर रही हैं। जल्द बेचने पर विचार करें!",
        "alertPriceAboveAvg": "वर्तमान मूल्य औसत से बहुत अधिक है। बेचने का बढ़िया समय!",
        "alertPriceBelowAvg": "वर्तमान मूल्य औसत से कम है। प्रतीक्षा करने पर विचार करें।",
        "alertPredictIncrease": "कल कीमत बढ़ने की संभावना है।",
        "alertPredictDecrease": "कल कीमत गिर सकती है। यदि संभव हो तो आज ही बेचें!",
        "alertNormalConditions": "बाजार की स्थिति सामान्य है। कोई बड़ी चेतावनी नहीं।",

        # States & Districts
        "Andhra Pradesh": "आंध्र प्रदेश", "Telangana": "तेलंगाना", "Maharashtra": "महाराष्ट्र",
        "Anantapur": "अनंतपुर", "Chittoor": "चित्तूर", "Guntur": "गुंटूर", "Krishna": "कृष्णा", "Kurnool": "कुरनूल", "Nellore": "नेल्लोर", "Visakhapatnam": "विशाखापत्तनम",
        "Hyderabad": "हैदराबाद", "Adilabad": "आदिलाबाद", "Karimnagar": "करीमनगर", "Khammam": "खम्मम", "Nalgonda": "नलगोंडा", "Nizamabad": "निज़ामाबाद", "Warangal": "वारंगल",
        "Pune": "पुणे", "Mumbai": "मुंबई", "Nagpur": "नागपुर", "Nashik": "नासिक", "Aurangabad": "औरंगाबाद",

        # Buyers & Storage
        "Kisan Traders": "किसान ट्रेडर्स", "FreshFarm Grocers": "फ्रेशफार्मा ग्रोसर्स", "Local Mandi Vendor": "स्थानीय मंडी विक्रेता",
        "Direct Harvest Partners": "डायरेक्ट हार्वेस्ट पार्टनर्स", "Green Grocers Hub": "ग्रीन ग्रोसर्स हब", "Organic Veg Mart": "ऑर्गेनिक वेज मार्ट",
        "Cold Storage": "कोल्ड स्टोरेज", "Warehouse": "गोदाम",
        "Shiva Cold Storage": "शिव कोल्ड स्टोरेज", "Pragati Refrigerated Warehouse": "प्रगति रेफ्रिजरेटेड वेयरहाउस", 
        "Local Farmers Cold Hub": "लोकल फार्मर्स कोल्ड हब", "Global Fresh Storage": "ग्लोबल फ्रेश स्टोरेज",
        "Snowline Cold Chain": "स्नोलाइन कोल्ड चेन", "Arctic Food Keepers": "आर्कटिक फूड कीपर्स",
        "Central Warehouse Corp": "सेंट्रल वेयरहाउस कॉर्प", "State Warehousing Hub": "स्टेट वेयरहाउसिंग हब", 
        "Kisan Storage Point": "किसान स्टोरेज पॉइंट", "Annapurna Godowns": "अन्नपूर्णा गोदाम",
        "Mandi Storage Solutions": "मंडी स्टोरेज सॉल्यूशंस", "Rural Harvest Warehouse": "रूरल हार्वेस्ट वेयरहाउस",

        # Schemes
        "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)": "पीएम-किसान (प्रधान मंत्री किसान सम्मान निधि)",
        "Direct income support of ₹6,000 per year in three equal installments.": "तीन समान किस्तों में प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।",
        "All landholding farmers": "सभी भूमि धारक किसान",
        "KCC (Kisan Credit Card)": "केसीसी (किसान क्रेडिट कार्ड)",
        "Short-term credit limits for crop cultivation at concessional interest rates.": "रियायती ब्याज दरों पर फसल की खेती के लिए ऋण।",
        "All farmers, tenant farmers, sharecroppers": "सभी किसान, काश्तकार किसान",
        "PM Fasal Bima Yojana (PMFBY)": "पीएम फसल बीमा योजना (PMFBY)",
        "Crop insurance protecting against natural calamities, pests & diseases.": "प्राकृतिक आपदाओं, कीटों और बीमारियों से बचाने वाला फसल बीमा।",
        "All farmers growing notified crops": "अधिसूचित फसलें उगाने वाले सभी किसान",
        "Rythu Bandhu": "रायथू बंधु",
        "Investment support for agriculture and horticulture crops.": "कृषि और बागवानी फसलों के लिए निवेश सहायता।",
        "Farmers owning land in Telangana": "तेलंगाना में जमीन रखने वाले किसान",
        "YSR Rythu Bharosa": "वाईएसआर रायथू भरोसा",
        "Financial assistance including PM-KISAN component.": "पीएम-किसान घटक सहित वित्तीय सहायता।",
        "Landholding farmer families": "भूमि वाले किसान परिवार"
    }
}

# --- Mock Location Data (Sync with model) ---
DISTRICTS = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "Guntur", "Krishna", "Kurnool", "Nellore", "Visakhapatnam"],
    "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Nalgonda", "Nizamabad", "Warangal"],
    "Maharashtra": ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad"],
}

# --- Premium Styling (Glassmorphism & Accents) ---
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
    
    html, body, [data-testid="stAppViewContainer"] {
        font-family: 'Inter', sans-serif;
        background-color: #0a0f1e;
        color: #f0f4f8;
    }
    
    .stMetric {
        background: rgba(255, 255, 255, 0.04);
        padding: 20px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: transform 0.3s ease;
    }
    .stMetric:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.07);
    }
    
    .card {
        background: rgba(17, 24, 39, 0.7);
        backdrop-filter: blur(10px);
        padding: 24px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        margin-bottom: 20px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    
    .best-banner {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.1));
        border: 1px solid #22c55e;
        padding: 30px;
        border-radius: 16px;
        color: #f0f4f8;
        margin-bottom: 25px;
        text-align: center;
        box-shadow: 0 0 30px rgba(34, 197, 94, 0.1);
    }
    
    .prediction-card {
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        padding: 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
    }
    
    .item-row {
        background: rgba(255, 255, 255, 0.03);
        padding: 15px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .call-btn {
        background: #22c55e;
        color: white;
        padding: 6px 14px;
        border-radius: 20px;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: 600;
    }
</style>
""", unsafe_allow_html=True)

# ---- Sidebar ----
with st.sidebar:
    if os.path.exists("static/icons/icon.svg"):
        st.image("static/icons/icon.svg", width=80)
    else:
        st.title("🌾")
        
    lang_code = st.selectbox(TRANSLATIONS["en"].get("lang_select", "Choose Language"), ["English", "తెలుగు", "हिन्दी"])
    lang = "en" if lang_code == "English" else "te" if lang_code == "తెలుగు" else "hi"
    t = TRANSLATIONS[lang]
    st.markdown("---")
    st.caption("Farmer Assistant v3.0")

def translate_key(key):
    return t.get(key, key)

# ---- Main UI ----
st.title(t["title"])
st.subheader(t["subtitle"])

col1, col2 = st.columns([1, 1.8])

with col1:
    st.markdown(f"### 📋 {t['enter_details']}")
    with st.container():
        crops = get_available_crops()
        crop = st.selectbox(t["crop_label"], crops, format_func=lambda x: t.get(x, x))
        
        qty = st.number_input(t["qty_label"], min_value=1.0, value=500.0, step=10.0)
        cost = st.number_input(t["cost_label"], min_value=0.1, value=15.0, step=0.5)
        
        dist = st.number_input(t["dist_label"], min_value=0.0, value=15.0)
        
        state_list = list(DISTRICTS.keys())
        state = st.selectbox(t["state_label"], state_list, format_func=lambda x: t.get(x, x))
        district = st.selectbox(t["dist_select_label"], DISTRICTS[state], format_func=lambda x: t.get(x, x))
        
        analyze = st.button(t["analyze_btn"])

if analyze:
    with col2:
        # Data Retrieval
        current_prices = get_current_prices(crop)
        best = get_best_market(crop)
        demand_data = get_demand_insight(crop)
        weather_data = get_weather_impact(crop)
        alerts = get_price_alerts(crop)
        history = get_price_history(crop)
        strategy = get_smart_strategy(crop, best, demand_data, cost, dist)
        profit_data = calculate_profit(best['price'], cost, qty, dist)
        prediction = predict_price(crop, days_ahead=1)
        
        # 1. Best Market Hero
        st.markdown(f"""
        <div class="best-banner">
            <h2 style="color: #22c55e; margin: 0;">🏆 {t['best_market']}: {t.get(best['market'], best['market'])}</h2>
            <p style="font-size: 1.4rem; margin: 10px 0;">₹{best['price']} / kg</p>
            <p style="opacity: 0.8; font-size: 0.9rem;">{t['profit']}: ₹{profit_data['profit']:,}</p>
        </div>
        """, unsafe_allow_html=True)
        
        # 2. Key Highlights (Strategy & Prediction)
        # Strategy Card
        st.markdown(f"""
        <div class="card" style="border-left: 6px solid {strategy['color']};">
            <p style="color: {strategy['color']}; font-weight: bold; margin-bottom: 8px; text-transform: uppercase; font-size: 0.8rem;">{t['strategy_label']}</p>
            <h2 style="margin: 0; font-weight: 800;">{t.get(strategy['action'], strategy['action'])}</h2>
            <p style="margin-top: 5px; opacity: 0.8;">{t.get(strategy['reason'], 'AI-driven logistics optimization')}</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Prediction Card
        trend_arrow = "↗️" if prediction['predicted_price'] > best['price'] else "↘️" if prediction['predicted_price'] < best['price'] else "➡️"
        
        st.markdown(f"""
        <div class="prediction-card">
            <div style="font-size: 2rem;">{trend_arrow}</div>
            <div>
                <p style="margin: 0; font-size: 0.8rem; font-weight: 600; color: #3b82f6;">{t['prediction']}</p>
                <h3 style="margin: 0;">₹{prediction['predicted_price']} <span style="font-size: 0.9rem; font-weight: 400; opacity: 0.7;">{t['forecast']}</span></h3>
            </div>
        </div>
        """, unsafe_allow_html=True)

        # 3. Main Stats
        st.metric(t["revenue"], f"₹{profit_data['revenue']:,}")
        st.metric(t["transport"], f"₹{profit_data['transport_cost']:,}")
        st.metric(t["profit_per_kg"], f"₹{profit_data['profit_per_kg']}")

        # 4. Market Analysis Feed
        st.markdown(f"### 📈 {t['history']}")
        if history:
            chart_data = pd.DataFrame()
            for mkt, data in history.items():
                mkt_df = pd.DataFrame({"Date": pd.to_datetime(data['dates']), mkt: data['prices']})
                if chart_data.empty:
                    chart_data = mkt_df
                else:
                    chart_data = pd.merge(chart_data, mkt_df, on="Date", how="outer")
            chart_data = chart_data.set_index("Date").sort_index()
            st.line_chart(chart_data)

        # 5. Direct Buyers & Storage
        st.markdown(f"### 🤝 {t['buyers']}")
        buyers = get_direct_buyers(crop, state, district, best['price'])
        for b in buyers:
            st.markdown(f"""
            <div class="item-row">
                <div>
                    <b style="color: #10b981;">{t.get(b['name'], b['name'])}</b><br/>
                    <span style="font-size: 0.75rem; opacity: 0.7;">₹{b['price']}/kg • {b['distance']}</span>
                </div>
                <a href="#" class="call-btn">{t['call_now']}</a>
            </div>
            """, unsafe_allow_html=True)

        st.markdown(f"### ❄️ {t['storage']}")
        facilities = get_storage_facilities(state, district)
        for f in facilities[:3]:
            st.markdown(f"""
            <div class="item-row">
                <div>
                    <b>{t.get(f['name'], f['name'])}</b><br/>
                    <span style="font-size: 0.75rem; opacity: 0.7;">{t.get(f['type'], f['type'])} • {f['distance']}</span>
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 0.8rem; font-weight: 600;">{f['price']}</span>
                </div>
            </div>
            """, unsafe_allow_html=True)

        # 6. Additional Insights
        st.markdown(f"### {t['insights_title']}")
        st.info(f"**{t['weather']}:** {t.get(weather_data['message'], weather_data['message'])}")
        st.warning(f"**{t['demand']}:** {t.get(demand_data['message'], demand_data['message'])}")

        # 7. Schemes & Alerts
        st.markdown(f"### ☘️ {t['schemes']}")
        schemes = get_govt_schemes(state, crop)
        for s in schemes:
            with st.expander(f"{s['icon']} {t.get(s['name'], s['name'])}"):
                st.write(t.get(s['desc'], s['desc']))
                st.caption(f"{t['support_label']} {s['amount']} | {t['eligibility_label']} {t.get(s['eligibility'], s.get('eligibility', 'N/A'))}")

else:
    with col2:
        st.header(t["welcome_title"])
        st.info(t["welcome_info"])
        st.image("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000", caption=t["welcome_caption"])

st.markdown("---")
st.caption("Farmer Assistant AI • v3.0 Feature-Parity Update • built with Streamlit")
