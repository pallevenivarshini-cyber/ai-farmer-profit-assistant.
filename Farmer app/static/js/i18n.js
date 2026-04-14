/**
 * Multi-Language Support for Farmer Profit Assistant
 * Supports: English, Telugu (తెలుగు), Hindi (हिन्दी)
 */

const translations = {
    en: {
        // Header
        headerBadge: 'AI-POWERED MARKET INTELLIGENCE',
        appTitle: '🌾 Farmer Profit Assistant',
        appSubtitle: 'Make smarter selling decisions using AI — compare markets, predict prices, and maximize your profit',

        // Input Section
        enterDetails: 'Enter Your Details',
        enterDetailsSub: "Tell us about your crop and we'll find the best deal for you",
        selectCrop: 'Select Crop',
        chooseCrop: 'Choose your crop...',
        quantity: 'Quantity (kg)',
        quantityPlaceholder: 'e.g. 500',
        costPrice: 'Cost Price (₹/kg)',
        costPricePlaceholder: 'e.g. 15',
        location: 'Your Location',
        locationPlaceholder: 'e.g. Hyderabad, Delhi...',
        selectState: 'Select State',
        chooseState: 'Choose state...',
        selectDistrict: 'Select District',
        chooseDistrict: 'Choose district...',
        analyzeBtn: '🔍 Check Best Market & Profit',

        // Results
        marketPrices: 'Market Prices',
        marketPricesSub: 'Current prices across markets',
        profitCalc: 'Profit Calculator',
        profitCalcSub: 'Your expected earnings at best market',
        aiPrediction: 'AI Price Prediction',
        aiPredictionSub: 'ML-powered forecast for upcoming days',
        weatherImpact: 'Weather Impact',
        weatherImpactSub: 'How weather affects crop prices',
        demandInsight: 'Demand Insight',
        demandInsightSub: 'Current market demand analysis',
        smartAlerts: 'Smart Alerts',
        smartAlertsSub: 'Important notifications & warnings',
        priceTrend: 'Price Trend Analysis',
        priceTrendSub: 'Historical price data across markets (30 days)',

        // Profit
        expectedProfit: '🎉 Expected Profit',
        expectedLoss: '😟 Expected Loss',
        revenue: 'Revenue',
        totalCost: 'Total Cost',
        profitPerKg: 'Profit/kg',
        margin: 'Margin',

        // Best Market
        bestMarket: '🎯 Best Market',
        sellYour: 'Sell your',
        atPrice: 'at',
        inMarket: 'in',
        forMaxProfit: 'for maximum profit of',
        bestPrice: '⭐ BEST PRICE',
        profit: 'Profit',

        // Prediction
        predictedTomorrow: '/kg predicted tomorrow',
        change: 'Change',
        increase: 'increase',
        decrease: 'decrease',
        stable: 'stable',
        linearRegression: 'Linear Regression',
        randomForest: 'Random Forest',

        // Weather
        impactLevel: 'Impact Level',
        avgPrice: 'Avg',
        clearWeather: 'Clear weather',
        cloudyWeather: 'Cloudy weather',
        rainWeather: 'Rain weather',

        // Demand
        highDemand: 'High Demand',
        mediumDemand: 'Medium Demand',
        lowDemand: 'Low Demand',
        trend: 'Trend',
        rising: 'rising',
        falling: 'falling',
        avg7d: 'Avg 7d',

        // Day labels
        day: 'Day',

        // Demand messages
        demandHigh: 'High demand for {crop} this week! Good time to sell.',
        demandMedium: 'Moderate demand for {crop}. Prices are stable.',
        demandLow: 'Low demand for {crop}. Consider storing if possible.',

        // Weather messages
        weatherRain: '🌧️ Rain expected → Prices may increase due to supply disruption',
        weatherCloudy: '☁️ Cloudy weather → Prices may remain stable',
        weatherClear: '☀️ Clear weather → Normal supply expected, stable prices',

        // Footer
        footerText: 'Farmer Profit Optimization System — Built with 💚 for Indian Farmers',
        footerPowered: 'Powered by AI & Machine Learning | Data is for demonstration purposes',

        // Validation
        selectCropFirst: '⚠️ Please select a crop first',
        enterValidQty: '⚠️ Please enter a valid quantity',
        enterValidCost: '⚠️ Please enter a valid cost price',
        analysisFailed: '❌ Analysis failed',
        serverError: '❌ Failed to connect to server',

        // Language selector
        language: 'Language',

        // Schemes
        schemesTitle: 'Government Schemes, Loans & Subsidies',
        schemesSub: 'Financial support programs available for you',
        amountSupport: 'Amount/Support:',
        eligibilityLabel: 'Eligibility:',
        noSchemes: 'No specific schemes found for your region.',
        'Subsidy': 'Subsidy',
        'Loan': 'Loan',
        'Insurance': 'Insurance',

        // Crop names
        crops: {
            'Tomato': 'Tomato',
            'Onion': 'Onion',
            'Rice': 'Rice',
            'Wheat': 'Wheat',
            'Potato': 'Potato',
            'Chili': 'Chili'
        },

        // Storage
        storageTitle: 'Nearby Warehouses & Cold Storage',
        storageSub: 'Store your produce to wait for better prices or prevent spoilage',
        availableSpace: 'Available Space:',
        storagePrice: 'Storage Price:',
        contactStorage: 'Contact Storage',
        'Cold Storage': 'Cold Storage',
        'Warehouse': 'Warehouse'
    },

    te: {
        // Header
        headerBadge: 'AI-ఆధారిత మార్కెట్ ఇంటెలిజెన్స్',
        appTitle: '🌾 రైతు లాభం సహాయకుడు',
        appSubtitle: 'AI ఉపయోగించి తెలివైన అమ్మకపు నిర్ణయాలు తీసుకోండి — మార్కెట్లను పోల్చండి, ధరలను అంచనా వేయండి',

        // Input Section
        enterDetails: 'మీ వివరాలు నమోదు చేయండి',
        enterDetailsSub: 'మీ పంట గురించి చెప్పండి, మేము మీకు ఉత్తమ ఒప్పందాన్ని కనుగొంటాము',
        selectCrop: 'పంటను ఎంచుకోండి',
        chooseCrop: 'మీ పంటను ఎంచుకోండి...',
        quantity: 'పరిమాణం (కేజీలు)',
        quantityPlaceholder: 'ఉదా. 500',
        costPrice: 'ఖర్చు ధర (₹/కేజీ)',
        costPricePlaceholder: 'ఉదా. 15',
        location: 'మీ ప్రదేశం',
        locationPlaceholder: 'ఉదా. హైదరాబాద్, విజయవాడ...',
        selectState: 'రాష్ట్రం ఎంచుకోండి',
        chooseState: 'రాష్ట్రం ఎంచుకోండి...',
        selectDistrict: 'జిల్లా ఎంచుకోండి',
        chooseDistrict: 'జిల్లా ఎంచుకోండి...',
        analyzeBtn: '🔍 ఉత్తమ మార్కెట్ & లాభం తనిఖీ',

        // Results
        marketPrices: 'మార్కెట్ ధరలు',
        marketPricesSub: 'మార్కెట్ల మధ్య ప్రస్తుత ధరలు',
        profitCalc: 'లాభం కాలిక్యులేటర్',
        profitCalcSub: 'ఉత్తమ మార్కెట్‌లో మీ ఆశించిన ఆదాయం',
        aiPrediction: 'AI ధర అంచనా',
        aiPredictionSub: 'రాబోయే రోజుల కోసం ML-ఆధారిత అంచనా',
        weatherImpact: 'వాతావరణ ప్రభావం',
        weatherImpactSub: 'వాతావరణం పంట ధరలను ఎలా ప్రభావితం చేస్తుంది',
        demandInsight: 'డిమాండ్ అంతర్దృష్టి',
        demandInsightSub: 'ప్రస్తుత మార్కెట్ డిమాండ్ విశ్లేషణ',
        smartAlerts: 'స్మార్ట్ హెచ్చరికలు',
        smartAlertsSub: 'ముఖ్యమైన నోటిఫికేషన్లు & హెచ్చరికలు',
        priceTrend: 'ధర ట్రెండ్ విశ్లేషణ',
        priceTrendSub: 'మార్కెట్ల మధ్య చారిత్రక ధర డేటా (30 రోజులు)',

        // Profit
        expectedProfit: '🎉 ఆశించిన లాభం',
        expectedLoss: '😟 ఆశించిన నష్టం',
        revenue: 'ఆదాయం',
        totalCost: 'మొత్తం ఖర్చు',
        profitPerKg: 'లాభం/కేజీ',
        margin: 'మార్జిన్',

        // Best Market
        bestMarket: '🎯 ఉత్తమ మార్కెట్',
        sellYour: 'మీ',
        atPrice: 'ధరకు',
        inMarket: 'లో',
        forMaxProfit: 'గరిష్ట లాభం కోసం',
        bestPrice: '⭐ ఉత్తమ ధర',
        profit: 'లాభం',

        // Prediction
        predictedTomorrow: '/కేజీ రేపు అంచనా',
        change: 'మార్పు',
        increase: 'పెరుగుదల',
        decrease: 'తగ్గుదల',
        stable: 'స్థిరం',
        linearRegression: 'లీనియర్ రిగ్రెషన్',
        randomForest: 'రాండమ్ ఫారెస్ట్',

        // Weather
        impactLevel: 'ప్రభావ స్థాయి',
        avgPrice: 'సగటు',
        clearWeather: 'ఎండ వాతావరణం',
        cloudyWeather: 'మేఘావృత వాతావరణం',
        rainWeather: 'వర్షపు వాతావరణం',

        // Demand
        highDemand: 'అధిక డిమాండ్',
        mediumDemand: 'మధ్యస్థ డిమాండ్',
        lowDemand: 'తక్కువ డిమాండ్',
        trend: 'ట్రెండ్',
        rising: 'పెరుగుతోంది',
        falling: 'తగ్గుతోంది',
        avg7d: '7d సగటు',

        // Day labels
        day: 'రోజు',

        // Demand messages
        demandHigh: 'ఈ వారం {crop} కి అధిక డిమాండ్! అమ్మడానికి మంచి సమయం.',
        demandMedium: '{crop} కి మధ్యస్థ డిమాండ్. ధరలు స్థిరంగా ఉన్నాయి.',
        demandLow: '{crop} కి తక్కువ డిమాండ్. సాధ్యమైతే నిల్వ చేయడం పరిగణించండి.',

        // Weather messages
        weatherRain: '🌧️ వర్షం అంచనా → సరఫరా అంతరాయం వల్ల ధరలు పెరగవచ్చు',
        weatherCloudy: '☁️ మేఘావృత వాతావరణం → ధరలు స్థిరంగా ఉండవచ్చు',
        weatherClear: '☀️ ఎండ వాతావరణం → సాధారణ సరఫరా ఆశించబడుతోంది',

        // Footer
        footerText: 'రైతు లాభ ఆప్టిమైజేషన్ సిస్టమ్ — భారతీయ రైతుల కోసం 💚 తో నిర్మించబడింది',
        footerPowered: 'AI & మెషిన్ లెర్నింగ్ ద్వారా ఆధారితం | డేటా ప్రదర్శన ప్రయోజనాల కోసం',

        // Validation
        selectCropFirst: '⚠️ దయచేసి ముందుగా ఒక పంటను ఎంచుకోండి',
        enterValidQty: '⚠️ దయచేసి చెల్లుబాటు అయ్యే పరిమాణాన్ని నమోదు చేయండి',
        enterValidCost: '⚠️ దయచేసి చెల్లుబాటు అయ్యే ఖర్చు ధరను నమోదు చేయండి',
        analysisFailed: '❌ విశ్లేషణ విఫలమైంది',
        serverError: '❌ సర్వర్‌కు కనెక్ట్ కాలేదు',

        // Language selector
        language: 'భాష',

        // Schemes
        schemesTitle: 'ప్రభుత్వ పథకాలు, రుణాలు & సబ్సిడీలు',
        schemesSub: 'మీ కోసం అందుబాటులో ఉన్న ఆర్థిక మద్దతు కార్యక్రమాలు',
        amountSupport: 'మొత్తం/మద్దతు:',
        eligibilityLabel: 'అర్హత:',
        noSchemes: 'మీ ప్రాంతానికి నిర్దిష్ట పథకాలు కనుగొనబడలేదు.',
        'Subsidy': 'సబ్సిడీ',
        'Loan': 'రుణం',
        'Insurance': 'బీమా',
        'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)': 'పిఎం కిసాన్ (ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి)',
        'Direct income support of ₹6,000 per year in three equal installments.': 'సంవత్సరానికి ₹6,000 లను మూడు సమాన వాయిదాలలో నేరుగా అందించే ఆదాయ మద్దతు.',
        'All landholding farmers': 'భూమి ఉన్న రైతులందరికీ',
        'KCC (Kisan Credit Card)': 'కేసిసి (కిసాన్ క్రెడిట్ కార్డ్)',
        'Short-term credit limits for crop cultivation at concessional interest rates.': 'తక్కువ వడ్డీ తో పంట సాగు కోసం స్వల్పకాలిక క్రెడిట్.',
        'All farmers, tenant farmers, sharecroppers': 'రైతులు, కౌలు రైతులు అందరికీ',
        'PM Fasal Bima Yojana (PMFBY)': 'పిఎం ఫసల్ బీమా యోజన',
        'Crop insurance protecting against natural calamities, pests & diseases.': 'ప్రకృతి వైపరీత్యాలు, తెగుళ్లు నుండి రక్షించే పంట బీమా.',
        'All farmers growing notified crops': 'నోటిఫైడ్ పంటలు పండించే రైతులందరికీ',
        'Rythu Bandhu': 'రైతు బంధు',
        'Investment support for agriculture and horticulture crops.': 'వ్యవసాయ, ఉద్యానవన పంటలకు పెట్టుబడి మద్దతు.',
        'Farmers owning land in Telangana': 'తెలంగాణలో భూమి ఉన్న రైతులు',
        'YSR Rythu Bharosa': 'వైఎస్సార్ రైతు భరోసా',
        'Financial assistance including PM-KISAN component.': 'పిఎం-కిసాన్ భాగంతో సహా ఆర్థిక సహాయం.',
        'Landholding farmer families': 'భూమి ఉన్న రైతు కుటుంబాలు',

        // Crop names
        crops: {
            'Tomato': 'టమాటో',
            'Onion': 'ఉల్లిపాయ',
            'Rice': 'బియ్యం',
            'Wheat': 'గోధుమ',
            'Potato': 'బంగాళాదుంప',
            'Chili': 'మిరపకాయ'
        },

        // Storage
        storageTitle: 'సమీపంలోని గిడ్డంగులు & కోల్డ్ స్టోరేజ్',
        storageSub: 'మెరుగైన ధరల కోసం వేచి ఉండటానికి లేదా పాడవకుండా ఉండటానికి మీ ఉత్పత్తులను నిల్వ చేయండి',
        availableSpace: 'అందుబాటులో ఉన్న స్థలం:',
        storagePrice: 'నిల్వ ధర:',
        contactStorage: 'స్టోరేజీని సంప్రదించండి',
        'Cold Storage': 'కోల్డ్ స్టోరేజ్',
        'Warehouse': 'గిడ్డంగి (Warehouse)',

        // States & Districts
        'Andhra Pradesh': 'ఆంధ్రప్రదేశ్',
        'Telangana': 'తెలంగాణ',
        'Maharashtra': 'మహారాష్ట్ర',
        'Anantapur': 'అనంతపురం',
        'Chittoor': 'చిత్తూరు',
        'Guntur': 'గుంటూరు',
        'Krishna': 'కృష్ణా',
        'Kurnool': 'కర్నూలు',
        'Nellore': 'నెల్లూరు',
        'Visakhapatnam': 'విశాఖపట్నం',
        'Hyderabad': 'హైదరాబాద్',
        'Adilabad': 'ఆదిలాబాద్',
        'Karimnagar': 'కరీంనగర్',
        'Khammam': 'ఖమ్మం',
        'Nalgonda': 'నల్గొండ',
        'Nizamabad': 'నిజామాబాద్',
        'Warangal': 'వరంగల్',
        'Pune': 'పూణే',
        'Mumbai': 'ముంబై',
        'Nagpur': 'నాగ్‌పూర్',
        'Nashik': 'నాసిక్',
        'Aurangabad': 'ఔరంగాబాద్'
    },

    hi: {
        // Header
        headerBadge: 'AI-संचालित बाज़ार बुद्धिमत्ता',
        appTitle: '🌾 किसान लाभ सहायक',
        appSubtitle: 'AI का उपयोग करके स्मार्ट बिक्री निर्णय लें — बाज़ारों की तुलना करें, कीमतों की भविष्यवाणी करें, और अपना लाभ बढ़ाएं',

        // Input Section
        enterDetails: 'अपना विवरण दर्ज करें',
        enterDetailsSub: 'अपनी फसल के बारे में बताएं, हम आपके लिए सबसे अच्छा सौदा खोजेंगे',
        selectCrop: 'फसल चुनें',
        chooseCrop: 'अपनी फसल चुनें...',
        quantity: 'मात्रा (किलो)',
        quantityPlaceholder: 'उदा. 500',
        costPrice: 'लागत मूल्य (₹/किलो)',
        costPricePlaceholder: 'उदा. 15',
        location: 'आपका स्थान',
        locationPlaceholder: 'उदा. हैदराबाद, दिल्ली...',
        selectState: 'राज्य चुनें',
        chooseState: 'राज्य चुनें...',
        selectDistrict: 'जिला चुनें',
        chooseDistrict: 'जिला चुनें...',
        analyzeBtn: '🔍 सर्वश्रेष्ठ बाज़ार और लाभ जांचें',

        // Results
        marketPrices: 'बाज़ार मूल्य',
        marketPricesSub: 'बाज़ारों में वर्तमान कीमतें',
        profitCalc: 'लाभ कैलकुलेटर',
        profitCalcSub: 'सर्वश्रेष्ठ बाज़ार में आपकी अपेक्षित कमाई',
        aiPrediction: 'AI मूल्य भविष्यवाणी',
        aiPredictionSub: 'आगामी दिनों के लिए ML-संचालित पूर्वानुमान',
        weatherImpact: 'मौसम प्रभाव',
        weatherImpactSub: 'मौसम फसल की कीमतों को कैसे प्रभावित करता है',
        demandInsight: 'मांग अंतर्दृष्टि',
        demandInsightSub: 'वर्तमान बाज़ार मांग विश्लेषण',
        smartAlerts: 'स्मार्ट अलर्ट',
        smartAlertsSub: 'महत्वपूर्ण सूचनाएं और चेतावनियां',
        priceTrend: 'मूल्य प्रवृत्ति विश्लेषण',
        priceTrendSub: 'बाज़ारों में ऐतिहासिक मूल्य डेटा (30 दिन)',

        // Profit
        expectedProfit: '🎉 अपेक्षित लाभ',
        expectedLoss: '😟 अपेक्षित हानि',
        revenue: 'राजस्व',
        totalCost: 'कुल लागत',
        profitPerKg: 'लाभ/किलो',
        margin: 'मार्जिन',

        // Best Market
        bestMarket: '🎯 सर्वश्रेष्ठ बाज़ार',
        sellYour: 'अपना',
        atPrice: 'पर',
        inMarket: 'में',
        forMaxProfit: 'अधिकतम लाभ के लिए',
        bestPrice: '⭐ सर्वोत्तम मूल्य',
        profit: 'लाभ',

        // Prediction
        predictedTomorrow: '/किलो कल की भविष्यवाणी',
        change: 'बदलाव',
        increase: 'वृद्धि',
        decrease: 'गिरावट',
        stable: 'स्थिर',
        linearRegression: 'लीनियर रिग्रेशन',
        randomForest: 'रैंडम फॉरेस्ट',

        // Weather
        impactLevel: 'प्रभाव स्तर',
        avgPrice: 'औसत',
        clearWeather: 'साफ मौसम',
        cloudyWeather: 'बादल छाए मौसम',
        rainWeather: 'बारिश का मौसम',

        // Demand
        highDemand: 'उच्च मांग',
        mediumDemand: 'मध्यम मांग',
        lowDemand: 'कम मांग',
        trend: 'प्रवृत्ति',
        rising: 'बढ़ रही है',
        falling: 'गिर रही है',
        avg7d: '7 दिन औसत',

        // Day labels
        day: 'दिन',

        // Demand messages
        demandHigh: 'इस सप्ताह {crop} की उच्च मांग! बेचने का अच्छा समय।',
        demandMedium: '{crop} की मध्यम मांग। कीमतें स्थिर हैं।',
        demandLow: '{crop} की कम मांग। संभव हो तो भंडारण पर विचार करें।',

        // Weather messages
        weatherRain: '🌧️ बारिश की संभावना → आपूर्ति बाधा से कीमतें बढ़ सकती हैं',
        weatherCloudy: '☁️ बादल छाए मौसम → कीमतें स्थिर रह सकती हैं',
        weatherClear: '☀️ साफ मौसम → सामान्य आपूर्ति अपेक्षित, स्थिर कीमतें',

        // Footer
        footerText: 'किसान लाभ अनुकूलन प्रणाली — भारतीय किसानों के लिए 💚 से बनाया गया',
        footerPowered: 'AI और मशीन लर्निंग द्वारा संचालित | डेटा प्रदर्शन उद्देश्यों के लिए है',

        // Validation
        selectCropFirst: '⚠️ कृपया पहले एक फसल चुनें',
        enterValidQty: '⚠️ कृपया एक मान्य मात्रा दर्ज करें',
        enterValidCost: '⚠️ कृपया एक मान्य लागत मूल्य दर्ज करें',
        analysisFailed: '❌ विश्लेषण विफल हुआ',
        serverError: '❌ सर्वर से कनेक्ट नहीं हो सका',

        // Language selector
        language: 'भाषा',

        // Schemes
        schemesTitle: 'सरकारी योजनाएं, ऋण और सब्सिडी',
        schemesSub: 'आपके लिए उपलब्ध वित्तीय सहायता कार्यक्रम',
        amountSupport: 'राशि/सहायता:',
        eligibilityLabel: 'पात्रता:',
        noSchemes: 'आपके क्षेत्र के लिए कोई विशिष्ट योजना नहीं मिली।',
        'Subsidy': 'सब्सिडी',
        'Loan': 'ऋण',
        'Insurance': 'बीमा',
        'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)': 'पीएम-किसान (प्रधान मंत्री किसान सम्मान निधि)',
        'Direct income support of ₹6,000 per year in three equal installments.': 'तीन समान किस्तों में प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।',
        'All landholding farmers': 'सभी भूमि धारक किसान',
        'KCC (Kisan Credit Card)': 'केसीसी (किसान क्रेडिट कार्ड)',
        'Short-term credit limits for crop cultivation at concessional interest rates.': 'रियायती ब्याज दरों पर फसल की खेती के लिए ऋण।',
        'All farmers, tenant farmers, sharecroppers': 'सभी किसान, काश्तकार किसान',
        'PM Fasal Bima Yojana (PMFBY)': 'पीएम फसल बीमा योजना (PMFBY)',
        'Crop insurance protecting against natural calamities, pests & diseases.': 'प्राकृतिक आपदाओं, कीटों और बीमारियों से बचाने वाला फसल बीमा।',
        'All farmers growing notified crops': 'अधिसूचित फसलें उगाने वाले सभी किसान',
        'Rythu Bandhu': 'रायथू बंधु',
        'Investment support for agriculture and horticulture crops.': 'कृषि और बागवानी फसलों के लिए निवेश सहायता।',
        'Farmers owning land in Telangana': 'तेलंगाना में जमीन रखने वाले किसान',
        'YSR Rythu Bharosa': 'वाईएसआर रायथू भरोसा',
        'Financial assistance including PM-KISAN component.': 'पीएम-किसान घटक सहित वित्तीय सहायता।',
        'Landholding farmer families': 'भूमि वाले किसान परिवार',

        // Crop names
        crops: {
            'Tomato': 'टमाटर',
            'Onion': 'प्याज',
            'Rice': 'चावल',
            'Wheat': 'गेहूं',
            'Potato': 'आलू',
            'Chili': 'मिर्च'
        },

        // Storage
        storageTitle: 'आस-पास के गोदाम और कोल्ड स्टोरेज',
        storageSub: 'बेहतर कीमतों की प्रतीक्षा करने या खराब होने से बचाने के लिए अपनी उपज का भंडारण करें',
        availableSpace: 'उपलब्ध स्थान:',
        storagePrice: 'भंडारण मूल्य:',
        contactStorage: 'स्टोरेज से संपर्क करें',
        'Cold Storage': 'कोल्ड स्टोरेज',
        'Warehouse': 'गोदाम (Warehouse)',

        // States & Districts
        'Andhra Pradesh': 'आंध्र प्रदेश',
        'Telangana': 'तेलंगाना',
        'Maharashtra': 'महाराष्ट्र',
        'Anantapur': 'अनंतपुर',
        'Chittoor': 'चित्तूर',
        'Guntur': 'गुंटूर',
        'Krishna': 'कृष्णा',
        'Kurnool': 'कुरनूल',
        'Nellore': 'नेल्लोर',
        'Visakhapatnam': 'विशाखापत्तनम',
        'Hyderabad': 'हैदराबाद',
        'Adilabad': 'आदिलाबाद',
        'Karimnagar': 'करीमनगर',
        'Khammam': 'खम्मम',
        'Nalgonda': 'नलगोंडा',
        'Nizamabad': 'निज़ामाबाद',
        'Warangal': 'वारंगल',
        'Pune': 'पुणे',
        'Mumbai': 'मुंबई',
        'Nagpur': 'नागपुर',
        'Nashik': 'नासिक',
        'Aurangabad': 'औरंगाबाद'
    }
},

// Current language
let currentLang = 'en';

/**
 * Get translation for a key
 */
function t(key) {
    const lang = translations[currentLang] || translations.en;
    return lang[key] || translations.en[key] || key;
}

/**
 * Get translated crop name
 */
function tCrop(cropName) {
    const lang = translations[currentLang] || translations.en;
    return (lang.crops && lang.crops[cropName]) || cropName;
}

/**
 * Switch language and update all UI elements
 */
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('farmer_app_lang', lang);

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update static text
    updateStaticUI();

    // Re-render results if analysis data exists
    if (window.analysisData) {
        renderResults(window.analysisData);
    }
}

/**
 * Update all static UI text with current language
 */
function updateStaticUI() {
    // Header
    const badge = document.querySelector('.header-badge');
    if (badge) {
        badge.innerHTML = `<span class="pulse-dot"></span>${t('headerBadge')}`;
    }

    const title = document.querySelector('.app-title');
    if (title) title.textContent = t('appTitle');

    const subtitle = document.querySelector('.app-subtitle');
    if (subtitle) subtitle.textContent = t('appSubtitle');

    // Input section
    setText('.input-section .section-title', t('enterDetails'));
    setText('.input-section .section-subtitle', t('enterDetailsSub'));

    // Form labels
    const cropLabel = document.getElementById('crop-label');
    const qtyLabel = document.getElementById('quantity-label');
    const costLabel = document.getElementById('cost-label');
    const distLabel = document.getElementById('distance-label');
    const stateLabel = document.getElementById('state-label');
    const distSelectLabel = document.getElementById('district-label');

    if (cropLabel) cropLabel.innerHTML = `<span class="label-icon">🌱</span> ${t('selectCrop')}`;
    if (qtyLabel) qtyLabel.innerHTML = `<span class="label-icon">⚖️</span> ${t('quantity')}`;
    if (costLabel) costLabel.innerHTML = `<span class="label-icon">💰</span> ${t('costPrice')}`;
    if (distLabel) distLabel.innerHTML = `<span class="label-icon">🚚</span> ${t('distanceToMarket')}`;
    if (stateLabel) stateLabel.innerHTML = `<span class="label-icon">🗺️</span> ${t('selectState')}`;
    if (distSelectLabel) distSelectLabel.innerHTML = `<span class="label-icon">📍</span> ${t('selectDistrict')}`;

    // Placeholders
    const cropSelect = document.getElementById('crop-select');
    if (cropSelect && cropSelect.options[0]) {
        cropSelect.options[0].textContent = t('chooseCrop');
    }

    // State select placeholder and options
    const stateSelect = document.getElementById('state-select');
    if (stateSelect && stateSelect.options.length > 0) {
        stateSelect.options[0].textContent = t('chooseState');
        for (let i = 1; i < stateSelect.options.length; i++) {
            const val = stateSelect.options[i].value;
            stateSelect.options[i].textContent = `🏛️ ${t(val)}`;
        }
    }

    // District select placeholder and options
    const districtSelect = document.getElementById('district-select');
    if (districtSelect && districtSelect.options.length > 0) {
        districtSelect.options[0].textContent = t('chooseDistrict');
        for (let i = 1; i < districtSelect.options.length; i++) {
            const val = districtSelect.options[i].value;
            districtSelect.options[i].textContent = `📍 ${t(val)}`;
        }
    }

    setPlaceholder('#quantity-input', t('quantityPlaceholder'));
    setPlaceholder('#cost-input', t('costPricePlaceholder'));

    // Update crop dropdown text
    updateCropOptions();

    // Button
    const btnText = document.querySelector('.btn-text');
    if (btnText) btnText.textContent = t('analyzeBtn');

    // Section headers in results
    updateResultHeaders();

    // Footer
    const footerTexts = document.querySelectorAll('.app-footer p');
    if (footerTexts.length >= 2) {
        footerTexts[0].textContent = t('footerText');
        footerTexts[1].textContent = t('footerPowered');
    }
}

/**
 * Update crop dropdown options with translated names
 */
function updateCropOptions() {
    const select = document.getElementById('crop-select');
    if (!select) return;

    const cropIcons = {
        'Tomato': '🍅', 'Onion': '🧅', 'Rice': '🌾',
        'Wheat': '🌾', 'Potato': '🥔', 'Chili': '🌶️'
    };

    for (let i = 1; i < select.options.length; i++) {
        const opt = select.options[i];
        const cropValue = opt.value;
        const icon = cropIcons[cropValue] || '🌱';
        opt.textContent = `${icon} ${tCrop(cropValue)}`;
    }
}

/**
 * Update result section headers
 */
function updateResultHeaders() {
    const headerMap = [
        { cardId: 'prices-card', title: 'marketPrices', subtitle: 'marketPricesSub' },
        { cardId: 'profit-card', title: 'profitCalc', subtitle: 'profitCalcSub' },
        { cardId: 'prediction-card', title: 'aiPrediction', subtitle: 'aiPredictionSub' },
        { cardId: 'weather-card', title: 'weatherImpact', subtitle: 'weatherImpactSub' },
        { cardId: 'demand-card', title: 'demandInsight', subtitle: 'demandInsightSub' },
        { cardId: 'alerts-card', title: 'smartAlerts', subtitle: 'smartAlertsSub' },
        { cardId: 'chart-section', title: 'priceTrend', subtitle: 'priceTrendSub' },
        { cardId: 'schemes-section', title: 'schemesTitle', subtitle: 'schemesSub' },
        { cardId: 'storage-section', title: 'storageTitle', subtitle: 'storageSub' },
    ];

    headerMap.forEach(({ cardId, title, subtitle }) => {
        const card = document.getElementById(cardId);
        if (card) {
            const h2 = card.querySelector('.section-title');
            const p = card.querySelector('.section-subtitle');
            if (h2) h2.textContent = t(title);
            if (p) p.textContent = t(subtitle);
        }
    });
}

// Helper: set text content
function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

// Helper: set placeholder
function setPlaceholder(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.placeholder = text;
}

/**
 * Initialize language system
 */
function initLanguage() {
    const saved = localStorage.getItem('farmer_app_lang');
    if (saved && translations[saved]) {
        currentLang = saved;
    }

    // Activate correct button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    // Apply initial language
    updateStaticUI();
}

// Append Location Translations
const teLocations = {
    // States
    "Andhra Pradesh": "ఆంధ్రప్రదేశ్", "Telangana": "తెలంగాణ", "Tamil Nadu": "తమిళనాడు", "Karnataka": "కర్ణాటక", "Kerala": "కేరళ", "Maharashtra": "మహారాష్ట్ర", "Gujarat": "గుజరాత్", "Rajasthan": "రాజస్థాన్", "Madhya Pradesh": "మధ్య ప్రదేశ్", "Uttar Pradesh": "ఉత్తర ప్రదేశ్", "Bihar": "బీహార్", "West Bengal": "పశ్చిమ బెంగాల్", "Odisha": "ఒడిశా", "Punjab": "పంజాబ్", "Haryana": "హర్యానా", "Chhattisgarh": "ఛత్తీస్‌గఢ్", "Jharkhand": "జార్ఖండ్", "Assam": "అస్సాం", "Himachal Pradesh": "హిమాచల్ ప్రదేశ్", "Uttarakhand": "ఉత్తరాఖండ్", "Goa": "గోవా", "Tripura": "త్రిపుర", "Meghalaya": "మేఘాలయ", "Manipur": "మణిపూర్", "Nagaland": "నాగాలాండ్", "Mizoram": "మిజోరం", "Arunachal Pradesh": "అరుణాచల్ ప్రదేశ్", "Sikkim": "సిక్కిం", "Delhi": "ఢిల్లీ", "Jammu & Kashmir": "జమ్మూ & కాశ్మీర్", "Ladakh": "లడఖ్",
    
    // Key Districts AP
    "Anantapur": "అనంతపురం", "Chittoor": "చిత్తూరు", "East Godavari": "తూర్పు గోదావరి", "Guntur": "గుంటూరు", "Krishna": "కృష్ణా", "Kurnool": "కర్నూలు", "Nellore": "నెల్లూరు", "Prakasam": "ప్రకాశం", "Srikakulam": "శ్రీకాకుళం", "Visakhapatnam": "విశాఖపట్నం", "Vizianagaram": "విజయనగరం", "West Godavari": "పశ్చిమ గోదావరి", "YSR Kadapa": "వైఎస్ఆర్ కడప", "Tirupati": "తిరుపతి", "Bapatla": "బాపట్ల", "Eluru": "ఏలూరు", "Kakinada": "కాకినాడ", "Nandyal": "నంద్యాల", "Palnadu": "పల్నాడు",
    
    // Key Districts TG
    "Hyderabad": "హైదరాబాద్", "Adilabad": "ఆదిలాబాద్", "Bhadradri Kothagudem": "భద్రాద్రి కొత్తగూడెం", "Jagtial": "జగిత్యాల", "Jangaon": "జనగామ", "Jayashankar Bhupalpally": "జయశంకర్ భూపాలపల్లి", "Jogulamba Gadwal": "జోగులాంబ గద్వాల్", "Kamareddy": "కామారెడ్డి", "Karimnagar": "కరీంనగర్", "Khammam": "ఖమ్మం", "Mahabubabad": "మహబూబాబాద్", "Mahabubnagar": "మహబూబ్ నగర్", "Mancherial": "మంచిర్యాల", "Medak": "మెదక్", "Medchal-Malkajgiri": "మేడ్చల్-మల్కాజిగిరి", "Mulugu": "ములుగు", "Nalgonda": "నల్గొండ", "Nizamabad": "నిజామాబాద్", "Rangareddy": "రంగారెడ్డి", "Sangareddy": "సంగారెడ్డి", "Siddipet": "సిద్దిపేట", "Suryapet": "సూర్యాపేట", "Warangal": "వరంగల్", "Yadadri Bhuvanagiri": "యాదాద్రి భువనగిరి"
};

const hiLocations = {
    // States
    "Andhra Pradesh": "आंध्र प्रदेश", "Telangana": "तेलंगाना", "Tamil Nadu": "तमिलनाडु", "Karnataka": "कर्नाटक", "Kerala": "केरल", "Maharashtra": "महाराष्ट्र", "Gujarat": "गुजरात", "Rajasthan": "राजस्थान", "Madhya Pradesh": "मध्य प्रदेश", "Uttar Pradesh": "उत्तर प्रदेश", "Bihar": "बिहार", "West Bengal": "पश्चिम बंगाल", "Odisha": "ओडिशा", "Punjab": "पंजाब", "Haryana": "हरियाणा", "Chhattisgarh": "छत्तीसगढ़", "Jharkhand": "झारखंड", "Assam": "असम", "Himachal Pradesh": "हिमाचल प्रदेश", "Uttarakhand": "उत्तराखंड", "Goa": "गोवा", "Tripura": "त्रिपुरा", "Meghalaya": "मेघालय", "Manipur": "मणिपुर", "Nagaland": "नागालैंड", "Mizoram": "मिजोरम", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Sikkim": "सिक्किम", "Delhi": "दिल्ली", "Jammu & Kashmir": "जम्मू और कश्मीर", "Ladakh": "लद्दाख",
    
    // AP/TS commonly referred mapping
    "Hyderabad": "हैदराबाद", "Khammam": "खम्मम", "Warangal": "वारंगल", "Karimnagar": "करीमनगर", "Nizamabad": "निज़ामाबाद",
    "Visakhapatnam": "विशाखापत्तनम", "Tirupati": "तिरुपति", "Guntur": "गुंटूर", "Krishna": "कृष्णा", "Nellore": "नेल्लोर"
};

const teBuyers = {
    "Kisan Traders": "కిసాన్ ట్రేడర్స్",
    "FreshFarm Grocers": "ఫ్రెష్ ఫామ్ గ్రోసర్స్",
    "Local Mandi Vendor": "స్థానిక మార్కెట్ విక్రేత",
    "Direct Harvest Partners": "డైరెక్ట్ హార్వెస్ట్ పార్టనర్స్",
    "Green Grocers Hub": "గ్రీన్ గ్రోసర్స్ హబ్",
    "Organic Veg Mart": "ఆర్గానిక్ వెజ్ మార్ట్",
    "noBuyersFound": "మీ ప్రాంతంలో నేరుగా కొనుగోలుదారులు కనుగొనబడలేదు.",
    "contactBuyer": "సంప్రదించండి",
    "directPrice": "ప్రత్యక్ష ధర"
};

const hiBuyers = {
    "Kisan Traders": "किसान ट्रेडर्स",
    "FreshFarm Grocers": "फ्रेशफार्मा ग्रोसर्स",
    "Local Mandi Vendor": "स्थानीय मंडी विक्रेता",
    "Direct Harvest Partners": "डायरेक्ट हार्वेस्ट पार्टनर्स",
    "Green Grocers Hub": "ग्रीन ग्रोसर्स हब",
    "Organic Veg Mart": "ऑर्गेनिक वेज मार्ट",
    "noBuyersFound": "आपके क्षेत्र में कोई सीधा खरीदार नहीं मिला।",
    "contactBuyer": "संपर्क करें",
    "directPrice": "सीधा मूल्य"
};

Object.assign(translations.te, teLocations, teBuyers);
Object.assign(translations.hi, hiLocations, hiBuyers);

// AI Smart Strategy Translations
const enStrategy = {
    "strategyTitle": "AI Target Strategy",
    "SELL_NOW": "Sell 100% Now",
    "SPLIT": "Split Sell (50/50)",
    "HOLD": "Hold & Wait",
    "strategySellNowHighDemand": "Demand is extremely high and prices are peaking. We recommend selling your entire stock immediately to maximize profits before the market cools down.",
    "strategySellNowPerishable": "Your crop is highly perishable. Despite low profits, holding onto your stock risks total spoilage. Sell now or process immediately.",
    "strategyHoldLowPrice": "Prices are currently below your cost price. Demand is low. If you have cold storage, hold your stock until the market recovers.",
    "strategySplitMedium": "The market is stable but not peaking. Sell 50% of your crop now to secure immediate cash flow, and hold 50% to sell when prices spike.",
    "strategySplitFluctuating": "Market volatility detected. Protect your investment by selling 50% today and storing the rest."
};

const teStrategy = {
    "strategyTitle": "AI నైపుణ్య వ్యూహం",
    "SELL_NOW": "ఇప్పుడే 100% విక్రయించండి",
    "SPLIT": "సగం ఇప్పుడు, సగం తర్వాత (50/50)",
    "HOLD": "నిల్వ ఉంచండి & వేచి ఉండండి",
    "strategySellNowHighDemand": "డిమాండ్ చాలా ఎక్కువగా ఉంది మరియు ధరలు గరిష్ట స్థాయిలో ఉన్నాయి. మార్కెట్ తగ్గకముందే మీ స్టాక్ మొత్తాన్ని వెంటనే విక్రయించమని మేము సిఫార్సు చేస్తున్నాము.",
    "strategySellNowPerishable": "మీ పంట త్వరగా పాడయ్యేది. లాభాలు తక్కువగా ఉన్నప్పటికీ, నిల్వ ఉంచితే పూర్తిగా నష్టపోతారు. వెంటనే విక్రయించండి.",
    "strategyHoldLowPrice": "ప్రస్తుతం ధరలు మీ కొనుగోలు ధర కన్నా తక్కువగా ఉన్నాయి. మార్కెట్ కోలుకునే వరకు మీ స్టాక్‌ను కోల్డ్ స్టోరేజీలో నిల్వ ఉంచుకోండి.",
    "strategySplitMedium": "మార్కెట్ స్థిరంగా ఉంది కానీ గరిష్ట స్థాయిలో లేదు. తక్షణ నగదు కోసం 50% పంటను ఇప్పుడు విక్రయించండి. ధరలు పెరిగినప్పుడు మిగతా 50% విక్రయించండి.",
    "strategySplitFluctuating": "మార్కెట్ ఒడిదుడుకుల్లో ఉంది. ఈరోజు 50% విక్రయించి, మిగిలిన వాటిని నిల్వ చేయడం ద్వారా మీ పెట్టుబడిని రక్షించుకోండి."
};

const hiStrategy = {
    "strategyTitle": "AI लक्ष्य रणनीति",
    "SELL_NOW": "अभी 100% बेचें",
    "SPLIT": "50% अभी, 50% बाद में बेचें",
    "HOLD": "स्टोर करें और प्रतीक्षा करें",
    "strategySellNowHighDemand": "मांग बहुत अधिक है और कीमतें चरम पर हैं। बाज़ार के धीमा होने से पहले अधिकतम लाभ कमाने के लिए अपना पूरा स्टॉक तुरंत बेचें।",
    "strategySellNowPerishable": "आपकी फसल जल्द खराब होने वाली है। कम मुनाफ़े के बावजूद, स्टॉक रखने से पूरी तरह खराब होने का खतरा है। तुरंत बेचें।",
    "strategyHoldLowPrice": "कीमतें वर्तमान में आपकी लागत मूल्य से नीचे हैं। बाजार के ठीक होने तक अपना स्टॉक कोल्ड स्टोरेज में रखें।",
    "strategySplitMedium": "बाज़ार स्थिर है लेकिन चरम पर नहीं है। तत्काल नकदी के लिए अभी अपनी 50% फसल बेचें, और कीमतें बढ़ने पर बाकी 50% बेचें।",
    "strategySplitFluctuating": "बाज़ार में उतार-चढ़ाव देखा गया। आज 50% बेचकर और बाकी को स्टोर करके अपने निवेश को सुरक्षित रखें।"
};

Object.assign(translations.en, enStrategy);
Object.assign(translations.te, teStrategy);
Object.assign(translations.hi, hiStrategy);

// Transport Cost Translations
Object.assign(translations.en, {
    "distanceToMarket": "Distance to Market (km)",
    "transportCost": "Transport Cost",
    "netProfit": "Net Profit"
});

Object.assign(translations.te, {
    "distanceToMarket": "మార్కెట్‌కి దూరం (km)",
    "transportCost": "రవాణా ఖర్చు",
    "netProfit": "నికర లాభం"
});

Object.assign(translations.hi, {
    "distanceToMarket": "बाजार से दूरी (km)",
    "transportCost": "परिवहन लागत",
    "netProfit": "शुद्ध लाभ"
});
