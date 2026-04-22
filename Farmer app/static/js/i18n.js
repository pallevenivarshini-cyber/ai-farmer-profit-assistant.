/**
 * Multi-Language Support for Farmer Profit Assistant
 * Supports: English, Telugu (తెలుగు), Hindi (हिन्दी)
 */

const translations = {
    en: {
        // Header & Layout
        headerBadge: 'AI-POWERED MARKET INTELLIGENCE',
        appTitle: '🌾 Farmer Profit Assistant',
        appSubtitle: 'Make smarter selling decisions using AI — compare markets, predict prices, and maximize your profit',
        
        // Input Section
        enterDetails: 'Enter Your Details',
        tellUsAbout: "Tell us about your crop and we'll find the best deal for you",
        selectCrop: 'Select Crop',
        quantity: 'Quantity (kg)',
        costPrice: 'Cost Price (₹/kg)',
        distanceToMarket: 'Distance to Market (km)',
        selectState: 'Select State',
        selectDistrict: 'Select District',
        enterYourDistrict: 'Enter Your District',
        checkMarketBtn: '🔍 Check Best Market & Profit',
        
        // Results Section Headers
        marketPrices: 'Market Prices',
        currentPricesAcross: 'Current prices across markets',
        profitCalculator: 'Profit Calculator',
        expectedEarnings: 'Your expected earnings at best market',
        directBuyers: 'Direct Buyers (No Middlemen)',
        connectBuyers: 'Connect with verified local buyers for a better margin',
        aiPrediction: 'AI Price Prediction',
        mlForecast: 'ML-powered forecast for upcoming days',
        weatherImpact: 'Weather Impact',
        howWeatherAffects: 'How weather affects crop prices',
        demandInsight: 'Demand Insight',
        currentDemandAnalysis: 'Current market demand analysis',
        smartAlerts: 'Smart Alerts',
        importantNotifications: 'Important notifications & warnings',
        schemesTitle: 'Government Schemes, Loans & Subsidies',
        financialSupport: 'Financial support programs available for you',
        storageTitle: 'Nearby Warehouses & Cold Storage',
        findStorage: 'Find safe storage for your produce to maximize profit',
        priceTrendAnalysis: 'Price Trend Analysis',
        historicalPriceData: 'Historical price data across markets (30 days)',
        
        // Footer
        footerText: 'Farmer Profit Optimization System — Built with 💚 for Indian Farmers',
        footerPoweredBy: 'Powered by AI & Machine Learning | Data is for demonstration purposes',

        // Form Selects
        chooseCrop: 'Choose Crop...',
        chooseState: 'Choose State...',
        chooseDistrict: 'Choose District...',
        loadingCrops: 'Loading crops...',
        
        // Buttons & Actions
        contactStorage: 'Contact Storage Facility',
        availableSpace: 'Available Space',
        storagePrice: 'Monthly Price',
        noStorageFound: 'No storage facilities found for your region.',
        noBuyersFound: 'No direct buyers found for your region.',
        noSchemes: 'No specific schemes found for your crop/region.',
        
        // Stats & Labels
        revenue: 'Total Revenue',
        productionCost: 'Production Cost',
        transportCost: 'Transport Cost',
        expectedProfit: 'Expected Net Profit',
        expectedLoss: 'Expected Net Loss',
        profitPerKg: 'Profit per kg',
        predictedTomorrow: ' (Predicted Tomorrow)',
        change: 'Price Change',
        day: 'Day',
        linearRegression: 'Linear Regression Model',
        randomForest: 'Random Forest Model',
        avgPrice: 'Average Price:',
        impactLevel: 'Impact Level:',
        trend: 'Trend',
        rising: 'Rising',
        falling: 'Falling',
        stable: 'Stable',
        avg7d: '7-Day Avg',
        highDemand: 'High Demand',
        mediumDemand: 'Medium Demand',
        lowDemand: 'Low Demand',
        bestPrice: 'Best Price',
        profit: 'Profit',
        bestMarket: 'Best Market Found',
        sellYour: 'Sell your',
        atPrice: 'at',
        inMarket: 'in',
        forMaxProfit: 'to get maximum profit of',
        
        // Weather
        weatherRain: 'Heavy rain predicted. Prices might fluctuate significantly.',
        weatherCloudy: 'Cloudy weather. Moderate impact on supply chains.',
        weatherClear: 'Clear weather conditions. Ideal for logistics and sales.',
        clearWeather: 'Clear',
        cloudyWeather: 'Cloudy',
        rainWeather: 'Rain',
        
        // Error / Feedback
        selectCropFirst: 'Please select a crop first',
        enterValidQty: 'Please enter a valid quantity',
        enterValidCost: 'Please enter a valid cost price',
        analysisFailed: '❌ Analysis failed',
        serverError: '❌ Failed to connect to server',
        
        otherDistrict: 'Other / Manually Enter',
        unknownDistrict: 'Unknown District',
        amountSupport: 'Amount/Support',
        eligibilityLabel: 'Eligibility',
        contactBuyer: 'Contact Buyer',
        directPrice: 'Direct Price',
        'Cold Storage': 'Cold Storage',
        'Warehouse': 'Warehouse',

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
        otherDistrict: 'Other / Manually Enter',
        unknownDistrict: 'Unknown District',
        amountSupport: 'Amount/Support',
        eligibilityLabel: 'Eligibility',
        contactBuyer: 'Contact Buyer',
        directPrice: 'Direct Price',
        'Cold Storage': 'Cold Storage',
        'Warehouse': 'Warehouse',
        noMarketData: 'No market data available',
        enterDetailsToSeeProfit: 'Enter quantity and cost to see profit',
        noAlertsAtThisTime: 'No alerts at this time',
        
        // Schemes & Info
        'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)': 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
        'KCC (Kisan Credit Card)': 'KCC (Kisan Credit Card)',
        'PM Fasal Bima Yojana (PMFBY)': 'PM Fasal Bima Yojana (PMFBY)',
        'Rythu Bandhu': 'Rythu Bandhu',
        'YSR Rythu Bharosa': 'YSR Rythu Bharosa',
        'KALIA Scheme': 'KALIA Scheme',
        'Krishak Bandhu': 'Krishak Bandhu',
        'Namo Shetkari Maha Sanman Nidhi': 'Namo Shetkari Maha Sanman Nidhi',
        
        // Scheme Types
        'Subsidy': 'Subsidy',
        'Loan': 'Loan',
        'Insurance': 'Insurance',
        
        // Alerts
        alertPriceFalling: 'Price is falling! Consider selling soon.',
        alertPriceAboveAvg: 'Prices are high! Great time to sell.',
        alertPriceBelowAvg: 'Prices are low. Consider holding if possible.',
        alertPredictIncrease: 'Prediction shows prices might go up.',
        alertPredictDecrease: 'Warning: Prices are predicted to decrease.',
        alertNormalConditions: 'Market conditions are normal.',
        
        // Buyers & Storage
        contactBuyer: 'Contact Buyer',
        directPrice: 'Direct Price',
        'Cold Storage': 'Cold Storage',
        'Warehouse': 'Warehouse'
    },

    te: {
        // Header & Layout
        headerBadge: 'AI-ఆధారిత మార్కెట్ ఇంటెలిజెన్స్',
        appTitle: '🌾 రైతు లాభాల సహాయకుడు',
        appSubtitle: 'AI ఉపయోగించి మెరుగైన అమ్మకపు నిర్ణయాలు తీసుకోండి — మార్కెట్లను పోల్చండి, ధరలను అంచనా వేయండి మరియు మీ లాభాన్ని పెంచుకోండి',
        
        // Input Section
        enterDetails: 'మీ వివరాలను నమోదు చేయండి',
        tellUsAbout: 'మీ పంట గురించి మాకు చెప్పండి మరియు మేము మీ కోసం ఉత్తమమైన డీల్‌ను కనుగొంటాము',
        selectCrop: 'పంటను ఎంచుకోండి',
        quantity: 'పరిమాణం (kg)',
        costPrice: 'పెట్టుబడి ధర (₹/kg)',
        distanceToMarket: 'మార్కెట్‌కి దూరం (km)',
        selectState: 'రాష్ట్రాన్ని ఎంచుకోండి',
        selectDistrict: 'జిల్లాను ఎంచుకోండి',
        enterYourDistrict: 'మీ జిల్లాను నమోదు చేయండి',
        checkMarketBtn: '🔍 ఉత్తమ మార్కెట్ & లాభాన్ని తనిఖీ చేయండి',
        
        // Results Section Headers
        marketPrices: 'మార్కెట్ ధరలు',
        currentPricesAcross: 'వివిధ మార్కెట్లలో ప్రస్తుత ధరలు',
        profitCalculator: 'లాభాల క్యాలిక్యులేటర్',
        expectedEarnings: 'ఉత్తమ మార్కెట్లో మీ అంచనా ఆదాయం',
        directBuyers: 'प्रत्यక్ష కొనుగోలుదారులు (దళారులు లేరు)',
        connectBuyers: 'మెరుగైన లాభం కోసం ధృవీకరించబడిన స్థానిక కొనుగోలుదారులతో కనెక్ట్ అవ్వండి',
        aiPrediction: 'AI ధర అంచనా',
        mlForecast: 'రాబోయే రోజుల కోసం ML-ఆధారిత అంచనా',
        weatherImpact: 'వాతావరణ ప్రభావం',
        howWeatherAffects: 'వాతావరణం పంట ధరలను ఎలా ప్రభావితం చేస్తుంది',
        demandInsight: 'డిమాండ్ అంతర్దృష్టి',
        currentDemandAnalysis: 'ప్రస్తుత మార్కెట్ డిమాండ్ విశ్లేషణ',
        smartAlerts: 'స్మార్ట్ హెచ్చరికలు',
        importantNotifications: 'ముఖ్యమైన నోటిఫికేషన్లు & హెచ్చరికలు',
        schemesTitle: 'ప్రభుత్వ పథకాలు, రుణాలు & సబ్సిడీలు',
        financialSupport: 'మీ కోసం అందుబాటులో ఉన్న ఆర్థిక సహాయ కార్యక్రమాలు',
        storageTitle: 'సమీప గిడ్డంగులు & కోల్డ్ స్టోరేజ్',
        findStorage: 'లాభాన్ని పెంచడానికి మీ ఉత్పత్తుల కోసం సురక్షితమైన నిల్వను కనుగొనండి',
        priceTrendAnalysis: 'ధరల ధోరణి విశ్లేషణ',
        historicalPriceData: 'మార్కెట్లలో చారిత్రక ధరల డేటా (30 రోజులు)',
        
        // Footer
        footerText: 'రైతు లాభాల ఆప్టిమైజేషన్ సిస్టమ్ — భారతీయ రైతుల కోసం 💚 తో నిర్మించబడింది',
        footerPoweredBy: 'AI & మెషిన్ లెర్నింగ్ ద్వారా ఆధారితం | డేటా ప్రదర్శన ప్రయోజనాల కోసం మాత్రమే',

        // Form Selects
        chooseCrop: 'పంటను ఎంచుకోండి...',
        chooseState: 'రాష్ట్రాన్ని ఎంచుకోండి...',
        chooseDistrict: 'జిల్లాను ఎంచుకోండి...',
        loadingCrops: 'పంటలు లోడ్ అవుతున్నాయి...',
        
        // Buttons & Actions
        contactStorage: 'స్టోరేజ్ ఫెసిలిటీని సంప్రదించండి',
        availableSpace: 'అందుబాటులో ఉన్న స్థలం',
        storagePrice: 'నెలవారీ ధర',
        noStorageFound: 'మీ ప్రాంతంలో నిల్వ కేంద్రాలు కనుగొనబడలేదు.',
        noBuyersFound: 'మీ ప్రాంతంలో ప్రత్యక్ష కొనుగోలుదారులు కనుగొనబడలేదు.',
        noSchemes: 'మీ పంట/ప్రాంతం కోసం నిర్దిష్ట పథకాలు కనుగొనబడలేదు.',
        
        // Stats & Labels
        revenue: 'మొత్తం ఆదాయం',
        productionCost: 'ఉత్పత్తి ఖర్చు',
        transportCost: 'రవాణా ఖర్చు',
        expectedProfit: 'అంచనా నికర లాభం',
        expectedLoss: 'అంచనా నికర నష్టం',
        profitPerKg: 'కిలోకు లాభం',
        predictedTomorrow: ' (రేపటి అంచనా)',
        change: 'ధర మార్పు',
        day: 'రోజు',
        linearRegression: 'లీనియర్ రిగ్రెషన్ మోడల్',
        randomForest: 'రాండమ్ ఫారెస్ట్ మోడల్',
        avgPrice: 'సగటు ధర:',
        impactLevel: 'ప్రభావ స్థాయి:',
        trend: 'ధోరణి',
        rising: 'పెరుగుతోంది',
        falling: 'తగ్గుతోంది',
        stable: 'స్థిరంగా ఉంది',
        avg7d: '7-రోజుల సగటు',
        highDemand: 'అధిక డిమాండ్',
        mediumDemand: 'మధ్యస్థ డిమాండ్',
        lowDemand: 'తక్కువ డిమాండ్',
        bestPrice: 'ఉత్తమ ధర',
        profit: 'లాభం',
        bestMarket: 'ఉత్తమ మార్కెట్ కనుగొనబడింది',
        sellYour: 'మీ',
        atPrice: 'వద్ద',
        inMarket: 'లో',
        forMaxProfit: 'అమ్మడం ద్వారా గరిష్ట లాభం పొందవచ్చు',
        
        // Prediction & AI
        increase: 'పెరుగుదల',
        decrease: 'తగ్గుదల',
        
        // Weather
        weatherRain: 'భారీ వర్ష సూచన. ధరలు గణనీయంగా మారవచ్చు.',
        weatherCloudy: 'మేఘావృతమైన వాతావరణం. సరఫరా గొలుసులపై మధ్యస్థ ప్రభావం.',
        weatherClear: 'స్పష్టమైన వాతావరణం. లాజిస్టిక్స్ మరియు అమ్మకాలకు అనుకూలమైనది.',
        clearWeather: 'స్పష్టంగా',
        cloudyWeather: 'మేఘావృతం',
        rainWeather: 'వర్షం',
        
        // Info Detail Labels for components
        amountSupport: 'మొత్తం/మద్దతు',
        eligibilityLabel: 'అర్హత',

        // Error / Feedback
        selectCropFirst: 'ముందుగా పంటను ఎంచుకోండి',
        enterValidQty: 'దయచేసి సరైన పరిమాణాన్ని నమోదు చేయండి',
        enterValidCost: 'దయచేసి సరైన పెట్టుబడి ధరను నమోదు చేయండి',
        analysisFailed: 'విశ్లేషణ విఫలమైంది. మళ్ళీ ప్రయత్నించండి.',
        serverError: 'సర్వర్ లోపం. మీ కనెక్షన్‌ని తనిఖీ చేయండి.',

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
        otherDistrict: 'ఇతర / మాన్యువల్ ఎంట్రీ',
        unknownDistrict: 'తెలియని జిల్లా',
        noMarketData: 'మార్కెట్ డేటా అందుబాటులో లేదు',
        enterDetailsToSeeProfit: 'లాభాన్ని చూడటానికి పరిమాణం మరియు ధరను నమోదు చేయండి',
        noAlertsAtThisTime: 'ఈ సమయంలో హెచ్చరికలు లేవు',

        // Schemes & Info
        'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)': 'పీఎం-కిసాన్ (ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి)',
        'KCC (Kisan Credit Card)': 'కేసీసీ (కిసాన్ క్రెడిట్ కార్డ్)',
        'PM Fasal Bima Yojana (PMFBY)': 'పీఎం ఫసల్ బీమా యోజన (PMFBY)',
        'Rythu Bandhu': 'రైతు బంధు',
        'YSR Rythu Bharosa': 'వైఎస్ఆర్ రైతు భరోసా',
        'KALIA Scheme': 'కాలియా పథకం',
        'Krishak Bandhu': 'కృషక్ బంధు',
        'Namo Shetkari Maha Sanman Nidhi': 'నమో షెత్కారి మహా సన్మాన్ నిధి',
        
        // Scheme Types
        'Subsidy': 'సబ్సిడీ',
        'Loan': 'రుణం',
        'Insurance': 'బీమా',
        
        // Alerts
        alertPriceFalling: 'ధర తగ్గుతోంది! త్వరలో విక్రయించడం పరిగణించండి.',
        alertPriceAboveAvg: 'ధరలు ఎక్కువగా ఉన్నాయి! అమ్మడానికి ఇదే మంచి సమయం.',
        alertPriceBelowAvg: 'ధరలు తక్కువగా ఉన్నాయి. సాధ్యమైతే నిల్వ ఉంచండి.',
        alertPredictIncrease: 'ధరలు పెరిగే అవకాశం ఉందని అంచనా.',
        alertPredictDecrease: 'హెచ్చరిక: ధరలు తగ్గే అవకాశం ఉందని అంచనా.',
        alertNormalConditions: 'మార్కెట్ పరిస్థితులు సాధారణంగా ఉన్నాయి.',

        // Buyers & Storage
        contactBuyer: 'సంప్రదించండి',
        directPrice: 'ప్రత్యక్ష ధర',
        'Cold Storage': 'కోల్డ్ స్టోరేజ్',
        'Warehouse': 'గిడ్డంగి (Warehouse)',

        // Markets
        'Azadpur Mandi': 'ఆజాద్‌పూర్ మండి',
        'Vashi Market': 'వాషి మార్కెట్',
        'Koyambedu Market': 'కోయంబేడు మార్కెట్',
        'Madanapalle Market': 'మదనపల్లి మార్కెట్',
        'Lasalgaon Market': 'లాసల్గావ్ మార్కెట్',
        'Guntur Market': 'గుంటూరు మార్కెట్',

        // Storage Names
        'Shiva Cold Storage': 'శివ కోల్డ్ స్టోరేజ్',
        'Pragati Refrigerated Warehouse': 'ప్రగతి రిఫ్రిజిరేటెడ్ గిడ్డంగి',
        'Local Farmers Cold Hub': 'స్థానిక రైతుల కోల్డ్ హబ్',
        'Global Fresh Storage': 'గ్లోబల్ ఫ్రెష్ స్టోరేజ్',
        'Snowline Cold Chain': 'స్నోలైన్ కోల్డ్ చైన్',
        'Arctic Food Keepers': 'ఆర్కిటిక్ ఫుడ్ కీపర్స్',
        'Central Warehouse Corp': 'సెంట్రల్ వేర్‌హౌస్ కార్పొరేషన్',
        'State Warehousing Hub': 'స్టేట్ వేర్‌హౌసింగ్ హబ్',
        'Kisan Storage Point': 'కిసాన్ స్టోరేజ్ పాయింట్',
        'Annapurna Godowns': 'అన్నపూర్ణ గోడౌన్లు',
        'Mandi Storage Solutions': 'మండి స్టోరేజ్ సొల్యూషన్స్',
        'Rural Harvest Warehouse': 'రూరల్ హార్వెస్ట్ వేర్‌హౌస్'
    },

    hi: {
        // Header & Layout
        headerBadge: 'AI-संचालित मार्केट इंटेलिजेंस',
        appTitle: '🌾 किसान लाभ सहायक',
        appSubtitle: 'AI का उपयोग करके बेहतर बिक्री निर्णय लें — बाजारों की तुलना करें, कीमतों की भविष्यवाणी करें और अपना लाभ अधिकतम करें',
        
        // Input Section
        enterDetails: 'अपना विवरण दर्ज करें',
        tellUsAbout: 'हमें अपनी फसल के बारे में बताएं और हम आपके लिए सबसे अच्छा सौदा ढूंढेंगे',
        selectCrop: 'फसल चुनें',
        quantity: 'मात्रा (kg)',
        costPrice: 'लागत मूल्य (₹/kg)',
        distanceToMarket: 'बाजार से दूरी (km)',
        selectState: 'राज्य चुनें',
        selectDistrict: 'जिला चुनें',
        enterYourDistrict: 'अपना जिला दर्ज करें',
        checkMarketBtn: '🔍 सर्वोत्तम बाजार और लाभ की जांच करें',
        
        // Results Section Headers
        marketPrices: 'बाजार भाव',
        currentPricesAcross: 'बाजारों में वर्तमान कीमतें',
        profitCalculator: 'लाभ कैलकुलेटर',
        expectedEarnings: 'सर्वोत्तम बाजार में आपकी अपेक्षित कमाई',
        directBuyers: 'सीधे खरीदार (कोई बिचुलिया नहीं)',
        connectBuyers: 'बेहतर मार्जिन के लिए सत्यापित स्थानीय खरीदारों से जुड़ें',
        aiPrediction: 'AI मूल्य भविष्यवाणी',
        mlForecast: 'आगामी दिनों के लिए ML-संचालित पूर्वानुमान',
        weatherImpact: 'मौसम का प्रभाव',
        howWeatherAffects: 'मौसम फसल की कीमतों को कैसे प्रभावित करता है',
        demandInsight: 'मांग की जानकारी',
        currentDemandAnalysis: 'वर्तमान बाजार मांग विश्लेषण',
        smartAlerts: 'स्मार्ट अलर्ट',
        importantNotifications: 'महत्वपूर्ण सूचनाएं और चेतावनियां',
        schemesTitle: 'सरकारी योजनाएं, ऋण और सब्सिडी',
        financialSupport: 'आपके लिए उपलब्ध वित्तीय सहायता कार्यक्रम',
        storageTitle: 'निकटतम गोदाम और कोल्ड स्टोरेज',
        findStorage: 'लाभ अधिकतम करने के लिए अपनी उपज के लिए सुरक्षित भंडारण खोजें',
        priceTrendAnalysis: 'मूल्य प्रवृत्ति विश्लेषण',
        historicalPriceData: 'बाजारों में ऐतिहासिक मूल्य डेटा (30 दिन)',
        
        // Footer
        footerText: 'किसान लाभ अनुकूलन प्रणाली — भारतीय किसानों के लिए 💚 के साथ निर्मित',
        footerPoweredBy: 'AI और मशीन लर्निंग द्वारा संचालित | डेटा केवल प्रदर्शन उद्देश्यों के लिए है',

        // Form Selects
        chooseCrop: 'फसल चुनें...',
        chooseState: 'राज्य चुनें...',
        chooseDistrict: 'जिला चुनें...',
        loadingCrops: 'फसलें लोड हो रही हैं...',
        
        // Buttons & Actions
        contactStorage: 'भंडारण सुविधा से संपर्क करें',
        availableSpace: 'उपलब्ध स्थान',
        storagePrice: 'मासिक मूल्य',
        noStorageFound: 'आपके क्षेत्र के लिए कोई भंडारण सुविधा नहीं मिली।',
        noBuyersFound: 'आपके क्षेत्र के लिए कोई सीधा खरीदार नहीं मिला।',
        noSchemes: 'आपकी फसल/क्षेत्र के लिए कोई विशिष्ट योजना नहीं मिली।',
        
        // Stats & Labels
        revenue: 'कुल राजस्व',
        productionCost: 'उत्पादन लागत',
        transportCost: 'परिवहन लागत',
        expectedProfit: 'अपेक्षित शुद्ध लाभ',
        expectedLoss: 'अपेक्षित शुद्ध हानि',
        profitPerKg: 'प्रति किलो लाभ',
        predictedTomorrow: ' (कल का पूर्वानुमान)',
        change: 'मूल्य परिवर्तन',
        day: 'दिन',
        linearRegression: 'रैखिक प्रतिगमन मॉडल',
        randomForest: 'रैंडम फॉरेस्ट मॉडल',
        avgPrice: 'औसत मूल्य:',
        impactLevel: 'प्रभाव स्तर:',
        trend: 'प्रवृत्ति',
        rising: 'बढ़ रहा है',
        falling: 'गिर रहा है',
        stable: 'स्थिर',
        avg7d: '7-दिसीय औसत',
        highDemand: 'उच्च मांग',
        mediumDemand: 'मध्यम मांग',
        lowDemand: 'कम मांग',
        bestPrice: 'सबसे अच्छा भाव',
        profit: 'लाभ',
        bestMarket: 'सर्वोत्तम बाजार मिला',
        sellYour: 'अपनी',
        atPrice: 'पर',
        inMarket: 'में',
        forMaxProfit: 'बेचें ताकि अधिकतम लाभ मिले',
        
        // Prediction & AI
        increase: 'वृद्धि',
        decrease: 'कमी',
        
        // Weather
        weatherRain: 'भारी बारिश की भविष्यवाणी। कीमतों में काफी उतार-चढ़ाव हो सकता है।',
        weatherCloudy: 'बादल छाए रहने का मौसम। आपूर्ति श्रृंखलाओं पर मध्यम प्रभाव।',
        weatherClear: 'साफ मौसम की स्थिति। रसद और बिक्री के लिए आदर्श।',
        clearWeather: 'साफ',
        cloudyWeather: 'बादल',
        rainWeather: 'बारिश',
        
        // Info Detail Labels for components
        amountSupport: 'राशि/सहायता',
        eligibilityLabel: 'पात्रता',

        // Error / Feedback
        selectCropFirst: 'कृपया पहले फसल चुनें',
        enterValidQty: 'कृपया सही मात्रा दर्ज करें',
        enterValidCost: 'कृपया सही लागत मूल्य दर्ज करें',
        analysisFailed: 'विश्लेषण विफल रहा। कृपया पुनः प्रयास करें।',
        serverError: 'सर्वर त्रुटि। कृपया अपना कनेक्शन जांचें।',
        
        language: 'भाषा',
        otherDistrict: 'अन्य / मैन्युअल रूप से दर्ज करें',
        unknownDistrict: 'अज्ञात जिला',
        contactBuyer: 'संपर्क करें',
        directPrice: 'सीधा मूल्य',
        'Cold Storage': 'कोल्ड स्टोरेज',
        'Warehouse': 'गोदाम (Warehouse)',
        noMarketData: 'कोई बाजार डेटा उपलब्ध नहीं है',
        enterDetailsToSeeProfit: 'लाभ देखने के लिए मात्रा और लागत दर्ज करें',
        noAlertsAtThisTime: 'इस समय कोई अलर्ट नहीं है',

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
        otherDistrict: 'अन्य / मैन्युअल रूप से दर्ज करें',
        unknownDistrict: 'अज्ञात जिला',

        // Schemes & Info
        'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)': 'पीएम-किसान (प्रधान मंत्री किसान सम्मान निधि)',
        'KCC (Kisan Credit Card)': 'केसीसी (किसान क्रेडिट कार्ड)',
        'PM Fasal Bima Yojana (PMFBY)': 'पीएम फसल बीमा योजना (PMFBY)',
        'Rythu Bandhu': 'रायथू बंधु',
        'YSR Rythu Bharosa': 'वाईएसआर रायथू भरोसा',
        'KALIA Scheme': 'कालिया योजना',
        'Krishak Bandhu': 'कृषक बंधु',
        'Namo Shetkari Maha Sanman Nidhi': 'नमो शेतकारी महा सम्मान निधि',
        
        // Scheme Types
        'Subsidy': 'सब्सिडी',
        'Loan': 'ऋण',
        'Insurance': 'बीमा',
        
        // Alerts
        alertPriceFalling: 'कीमत गिर रही है! जल्द ही बेचने पर विचार करें।',
        alertPriceAboveAvg: 'कीमतें ऊंची हैं! बेचने का अच्छा समय है।',
        alertPriceBelowAvg: 'कीमतें कम हैं। संभव हो तो स्टोर करें।',
        alertPredictIncrease: 'पूर्वानुमान बताते हैं कि कीमतें बढ़ सकती हैं।',
        alertPredictDecrease: 'चेतावनी: कीमतें कम होने का अनुमान है।',
        alertNormalConditions: 'बाजार की स्थिति सामान्य है।',

        // Buyers & Storage
        contactBuyer: 'संपर्क करें',
        directPrice: 'सीधा मूल्य',
        'Cold Storage': 'कोल्ड स्टोरेज',
        'Warehouse': 'गोदाम (Warehouse)',

        // Markets
        'Azadpur Mandi': 'आजादपुर मंडी',
        'Vashi Market': 'वाशी मार्केट',
        'Koyambedu Market': 'कोयम्बेडु मार्केट',
        'Madanapalle Market': 'मदनपल्ले मार्केट',
        'Lasalgaon Market': 'लासलगांव मार्केट',
        'Guntur Market': 'गुंटूर मार्केट',

        // Storage Names
        'Shiva Cold Storage': 'शिव कोल्ड स्टोरेज',
        'Pragati Refrigerated Warehouse': 'प्रगति रेफ्रिजरेटेड वेयरहाउस',
        'Local Farmers Cold Hub': 'स्थानीय किसान कोल्ड हब',
        'Global Fresh Storage': 'ग्लोबल फ्रेश स्टोरेज',
        'Snowline Cold Chain': 'स्नोलाइन कोल्ड चेन',
        'Arctic Food Keepers': 'आर्कटिक फूड कीपर्स',
        'Central Warehouse Corp': 'सेंट्रल वेयरहाउस कॉर्प',
        'State Warehousing Hub': 'स्टेट वेयरहाउसिंग हब',
        'Kisan Storage Point': 'किसान स्टोरेज पॉइंट',
        'Annapurna Godowns': 'अन्नपूर्णा गोदाम',
        'Mandi Storage Solutions': 'मंडी स्टोरेज सॉल्यूशंस',
        'Rural Harvest Warehouse': 'रूरल हार्वेस्ट वेयरहाउस'
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
    "Andhra Pradesh": "ఆంధ్రప్రదేశ్", "Telangana": "తెలంగాణ", "Tamil Nadu": "తమిళనాడు", "Karnataka": "కర్ణాటక", "Kerala": "కేరళ", "Maharashtra": "మహారాష్ట్ర", "Gujarat": "గుజరాత్", "Rajasthan": "రాజస్థాన్", "Madhya Pradesh": "మధ్య ప్రదేశ్", "Uttar Pradesh": "ఉత్తర ప్రదేశ్", "Bihar": "బీహార్", "West Bengal": "పశ్చిమ బెంగాల్", "Odisha": "ఒడిశా", "Punjab": "పంజాబ్", "Haryana": "హర్యానా", "Chhattisgarh": "ఛత్తీస్‌గఢ్", "Jharkhand": "జార్ఖండ్", "Assam": "అస్సాం", "Himachal Pradesh": "హిమాచల్ ప్రదేశ్", "Uttarakhand": "ఉత్తరాఖండ్", "Goa": "గోవా", "Tripura": "త్రిపుర", "Meghalaya": "మేఘాలయ", "Manipur": "మణిపూర్", "Nagaland": "నాగాలాండ్", "Mizoram": "మిజోరం", "Arunachal Pradesh": "అరుణాచల్ ప్రదేశ్", "Sikkim": "సిక్కిం", "Delhi": "ఢిల్లీ", "Jammu & Kashmir": "జమ్మూ & కాశ్మీర్", "Ladakh": "లడఖ్", "Puducherry": "పుదుచ్చేరి", "Chandigarh": "చండీగఢ్", "Andaman & Nicobar": "అండమాన్ & నికోబార్", "Dadra Nagar Haveli & Daman Diu": "దాద్రా నగర్ హవేలీ & డామన్ డయ్యూ", "Lakshadweep": "లక్షద్వీప్",
    
    // Districts AP
    "Anantapur": "అనంతపురం", "Chittoor": "చిత్తూరు", "East Godavari": "తూర్పు గోదావరి", "Guntur": "గుంటూరు", "Krishna": "కృష్ణా", "Kurnool": "కర్నూలు", "Nellore": "నెల్లూరు", "Prakasam": "ప్రకాశం", "Srikakulam": "శ్రీకాకుళం", "Visakhapatnam": "విశాఖపట్నం", "Vizianagaram": "విజయనగరం", "West Godavari": "పశ్చిమ గోదావరి", "YSR Kadapa": "వైఎస్ఆర్ కడప", "Tirupati": "తిరుపతి", "Bapatla": "బాపట్ల", "Eluru": "ఏలూరు", "Kakinada": "కాకినాడ", "Konaseema": "కోనసీమ", "Machilipatnam": "మచిలీపట్నం", "Nandyal": "నంద్యాల", "Palnadu": "పల్నాడు", "Parvathipuram Manyam": "పార్వతీపురం మన్యం", "Anakapalli": "అనకాపల్లి", "Alluri Sitharama Raju": "అల్లూరి సీతారామరాజు", "Sri Sathya Sai": "శ్రీ సత్యసాయి",
    
    // Districts TG
    "Hyderabad": "హైదరాబాద్", "Adilabad": "ఆదిలాబాద్", "Bhadradri Kothagudem": "భద్రాద్రి కొత్తగూడెం", "Jagtial": "జగిత్యాల", "Jangaon": "జనగామ", "Jayashankar Bhupalpally": "జయశంకర్ భూపాలపల్లి", "Jogulamba Gadwal": "జోగులాంబ గద్వాల్", "Kamareddy": "కామారెడ్డి", "Karimnagar": "కరీంనగర్", "Khammam": "ఖమ్మం", "Komaram Bheem": "కొమరం భీమ్", "Mahabubabad": "మహబూబాబాద్", "Mahabubnagar": "మహబూబ్ నగర్", "Mancherial": "మంచిర్యాల", "Medak": "మెదక్", "Medchal-Malkajgiri": "మేడ్చల్-మల్కాజిగిరి", "Mulugu": "ములుగు", "Nagarkurnool": "నాగర్ కర్నూల్", "Nalgonda": "నల్గొండ", "Narayanpet": "నారాయణపేట", "Nirmal": "నిర్మల్", "Nizamabad": "నిజామాబాద్", "Peddapalli": "పెద్దపల్లి", "Rajanna Sircilla": "రాజన్న సిరిసిల్ల", "Rangareddy": "రంగారెడ్డి", "Sangareddy": "సంగారెడ్డి", "Siddipet": "సిద్దిపేట", "Suryapet": "సూర్యాపేట", "Vikarabad": "వికారాబాద్", "Wanaparthy": "వనపర్తి", "Warangal": "వరంగల్", "Yadadri Bhuvanagiri": "యాదాద్రి భువనగిరి",

    // Districts Tamil Nadu
    "Chennai": "చెన్నై", "Ariyalur": "అరియలూర్", "Chengalpattu": "చెంగల్పట్టు", "Coimbatore": "కోయంబత్తూరు", "Cuddalore": "కడలూరు", "Dharmapuri": "ధర్మపురి", "Dindigul": "దిండిగల్", "Erode": "ఈరోడ్", "Kallakurichi": "కల్లకురిచ్చి", "Kancheepuram": "కాంచీపురం", "Karur": "కరూర్", "Krishnagiri": "కృష్ణగిరి", "Madurai": "మదురై", "Mayiladuthurai": "మయిలాడుతురై", "Nagapattinam": "నాగపట్నం", "Namakkal": "నమక్కల్", "Nilgiris": "నీలగిరి", "Perambalur": "పెరంబలూర్", "Pudukkottai": "పుదుకోట్టై", "Ramanathapuram": "రామనాథపురం", "Ranipet": "రాణిపేట", "Salem": "సేలం", "Sivaganga": "శివగంగ", "Tenkasi": "తెన్కాసి", "Thanjavur": "తంజావూరు", "Theni": "తేని", "Thoothukudi": "తూత్తుకుడి", "Tiruchirappalli": "తిరుచిరాపల్లి", "Tirunelveli": "తిరునెల్వేలి", "Tirupathur": "తిరుపత్తూరు", "Tiruppur": "తిరుప్పూర్", "Tiruvallur": "తిరువళ్లూర్", "Tiruvannamalai": "తిరువణ్ణామలై", "Tiruvarur": "తిరువారూర్", "Vellore": "వెల్లూరు", "Viluppuram": "విలుప్పురం", "Virudhunagar": "విరుదునగర్",

    // Districts Karnataka
    "Bengaluru Urban": "బెంగళూరు అర్బన్", "Bengaluru Rural": "బెంగళూరు రూరల్", "Bagalkot": "బాగల్‌కోట్", "Ballari": "బళ్లారి", "Belagavi": "బెల్గాం", "Bidar": "బీదర్", "Chamarajanagar": "చామరాజనగర్", "Chikkaballapur": "చిక్కబళ్లాపూర్", "Chikkamagaluru": "చిక్కమగళూరు", "Chitradurga": "చిత్రదుర్గ", "Dakshina Kannada": "దక్షిణ కన్నడ", "Davanagere": "దావణగెరె", "Dharwad": "ధార్వాడ్", "Gadag": "గడగ్", "Hassan": "హాసన్", "Haveri": "హావేరి", "Kalaburagi": "కలబురగి", "Kodagu": "కొడగు", "Kolar": "కోలార్", "Koppal": "కొప్పల్", "Mandya": "మండ్య", "Mysuru": "మైసూర్", "Raichur": "రాయచూర్", "Ramanagara": "రామనగర", "Shivamogga": "శివమొగ్గ", "Tumakuru": "తుమకూరు", "Udupi": "ఉడిపి", "Uttara Kannada": "ఉత్తర కన్నడ", "Vijayapura": "విజయపుర", "Yadgir": "యాద్గిర్",

    // Districts Kerala
    "Thiruvananthapuram": "తిరువనంతపురం", "Alappuzha": "అలప్పుజ", "Ernakulam": "ఎర్నాకుళం", "Idukki": "ఇడుక్కి", "Kannur": "కన్నూర్", "Kasaragod": "కాసరగోడ్", "Kollam": "కొల్లాం", "Kottayam": "కొట్టాయం", "Kozhikode": "కోజికోడ్", "Malappuram": "మలప్పురం", "Palakkad": "పాలక్కాడ్", "Pathanamthitta": "పతనంతిట్ట", "Thrissur": "త్రిస్సూర్", "Wayanad": "వాయనాడ్",

    // Districts West (MH, GJ, GA, DN-DD)
    "Mumbai": "ముంబై", "Pune": "పూణే", "Nagpur": "నాగ్‌పూర్", "Ahmednagar": "అహ్మద్ నగర్", "Akola": "అకోలా", "Amravati": "అమరావతి", "Aurangabad": "ఔరంగాబాద్", "Beed": "బీడ్", "Bhandara": "భండారా", "Buldhana": "బుల్దానా", "Chandrapur": "చంద్రాపూర్", "Dhule": "ధూలే", "Gadchiroli": "గడ్చిరోలి", "Gondia": "గోండియా", "Hingoli": "హింగోలి", "Jalgaon": "జల్గావ్", "Jalna": "జాల్నా", "Kolhapur": "కొల్హాపూర్", "Latur": "లాతూర్", "Nanded": "నాందేడ్", "Nandurbar": "నందుర్బార్", "Nashik": "నాసిక్", "Osmanabad": "ఉస్మానాబాద్", "Palghar": "పాల్ఘర్", "Parbhani": "పర్భాని", "Raigad": "రాయగడ్", "Ratnagiri": "రత్నగిరి", "Sangli": "సాంగ్లీ", "Satara": "సతారా", "Sindhudurg": "సింధుదుర్గ్", "Solapur": "సోలాపూర్", "Thane": "థానే", "Wardha": "వార్ధా", "Washim": "వాషిమ్", "Yavatmal": "యవత్మాల్",
    "Ahmedabad": "అహ్మదాబాద్", "Amreli": "అమ్రేలి", "Anand": "ఆనంద్", "Aravalli": "అరవల్లి", "Banaskantha": "బనస్కాంత", "Bharuch": "భరూచ్", "Bhavnagar": "భావనగర్", "Botad": "బోటాడ్", "Chhota Udaipur": "ఛోటా ఉదయపూర్", "Dahod": "దాహోద్", "Dang": "డాంగ్", "Devbhoomi Dwarka": "దేవభూమి ద్వారక", "Gandhinagar": "గాంధీనగర్", "Gir Somnath": "గిర్ సోమనాథ్", "Jamnagar": "జామ్‌నగర్", "Junagadh": "జునాగఢ్", "Kheda": "ఖేడా", "Kutch": "కచ్", "Mahisagar": "మహిసాగర్", "Mehsana": "మెహసానా", "Morbi": "మోర్బీ", "Narmada": "నర్మద", "Navsari": "నవ్సారి", "Panchmahal": "పంచమహల్", "Patan": "పాటన్", "Porbandar": "పోర్‌బందర్", "Rajkot": "రాజ్‌కోట్", "Sabarkantha": "సబర్కాంత", "Surat": "సూరత్", "Surendranagar": "సురేంద్రనగర్", "Tapi": "తాపి", "Vadodara": "వడోదర", "Valsad": "వల్సాద్",
    "North Goa": "నార్త్ గోవా", "South Goa": "సౌత్ గోవా", "Dadra and Nagar Haveli": "దాద్రా మరియు నగర్ హవేలీ", "Daman": "డామన్", "Diu": "డయ్యూ",

    // Districts North (DL, HR, PB, RJ, UP, UK, HP, JK, LA, CH)
    "Central Delhi": "సెంట్రల్ ఢిల్లీ", "East Delhi": "ఈస్ట్ ఢిల్లీ", "New Delhi": "న్యూ ఢిల్లీ", "North Delhi": "నార్త్ ఢిల్లీ", "North East Delhi": "నార్త్ ఈస్ట్ ఢిల్లీ", "North West Delhi": "నార్త్ వెస్ట్ ఢిల్లీ", "Shahdara": "షాదర", "South Delhi": "సౌత్ ఢిల్లీ", "South East Delhi": "సౌత్ ఈస్ట్ ఢిల్లీ", "South West Delhi": "సౌత్ వెస్ట్ ఢిల్లీ", "West Delhi": "వెస్ట్ ఢిల్లీ",
    "Ambala": "అంబాలా", "Bhiwani": "భివానీ", "Charkhi Dadri": "చర్కీ దాద్రి", "Faridabad": "ఫరీదాబాద్", "Fatehabad": "ఫతేహాబాద్", "Gurugram": "గురుగ్రామ్", "Hisar": "హిసార్", "Jhajjar": "ఝజ్జర్", "Jind": "జింద్", "Kaithal": "కైతాల్", "Karnal": "కర్నాల్", "Kurukshetra": "కురుక్షేత్ర", "Mahendragarh": "మహేంద్రగఢ్", "Nuh": "నుహ్", "Palwal": "పల్వాల్", "Panchkula": "పంచకుల", "Panipat": "పానిపట్", "Rewari": "రేవారి", "Rohtak": "రోహ్తక్", "Sirsa": "సిర్సా", "Sonipat": "సోనిపట్", "Yamunanagar": "యమునానగర్",
    "Amritsar": "అమృతసర్", "Barnala": "బర్నాలా", "Bathinda": "భటిండా", "Faridkot": "ఫరీద్‌కోట్", "Fatehgarh Sahib": "ఫతేఘర్ సాహిబ్", "Fazilka": "ఫాజిల్కా", "Ferozepur": "ఫిరోజ్‌పూర్", "Gurdaspur": "గురుదాస్‌పూర్", "Hoshiarpur": "హోషియార్‌పూర్", "Jalandhar": "జలంధర్", "Kapurthala": "కపుర్తలా", "Ludhiana": "లూథియానా", "Mansa": "మాన్సా", "Moga": "మోగా", "Mohali": "మొహాలీ", "Muktsar": "ముక్త్సర్", "Pathankot": "పఠాన్‌కోట్", "Patiala": "పాటియాల", "Rupnagar": "రూప్‌నగర్", "Sangrur": "సంగ్రూర్", "Shaheed Bhagat Singh Nagar": "షహీద్ భగత్ సింగ్ నగర్", "Tarn Taran": "తార్న్ తరణ్",
    "Jaipur": "జైపూర్", "Ajmer": "అజ్మీర్", "Alwar": "అల్వార్", "Banswara": "బన్స్వారా", "Baran": "బరన్", "Barmer": "బార్మర్", "Bharatpur": "భరత్‌పూర్", "Bhilwara": "భిల్వారా", "Bikaner": "బికనీర్", "Bundi": "బుంది", "Chittorgarh": "చిత్తోర్‌గఢ్", "Churu": "చురు", "Dausa": "దౌసా", "Dholpur": "ధోల్‌పూర్", "Dungarpur": "దుంగార్‌పూర్", "Hanumangarh": "హనుమాన్‌గఢ్", "Jaisalmer": "జైసల్మేర్", "Jalore": "జలోర్", "Jhalawar": "ఝలావర్", "Jhunjhunu": "ఝున్ఝును", "Jodhpur": "జోధ్‌పూర్", "Karauli": "కరౌలి", "Kota": "కోటా", "Nagaur": "నాగౌర్", "Pali": "పాలి", "Pratapgarh": "ప్రతాప్‌గఢ్", "Rajsamand": "రాజ్‌సమంద్", "Sawai Madhopur": "సవాయి మాధోపూర్", "Sikar": "సికార్", "Sirohi": "సిరోహి", "Sri Ganganagar": "శ్రీ గంగానగర్", "Tonk": "టాంక్", "Udaipur": "ఉదయపూర్",
    "Lucknow": "లక్నో", "Agra": "ఆగ్రా", "Aligarh": "అలీఘర్", "Ambedkar Nagar": "అంబేద్కర్ నగర్", "Amethi": "అమేథీ", "Amroha": "అమ్రోహా", "Auraiya": "ఔరైయా", "Ayodhya": "అయోధ్య", "Azamgarh": "అజంగఢ్", "Baghpat": "బాగ్‌పత్", "Bahraich": "బహ్రైచ్", "Ballia": "బల్లియా", "Balrampur": "బలరాంపూర్", "Banda": "బందా", "Barabanki": "బారాబంకి", "Bareilly": "బరేలీ", "Basti": "బస్తీ", "Bhadohi": "భదోహి", "Bijnor": "బిజ్నోర్", "Budaun": "బదౌన్", "Bulandshahr": "బులంద్‌షహర్", "Chandauli": "చందౌలీ", "Chitrakoot": "చిత్రకూట్", "Deoria": "డియోరియా", "Etah": "ఏటా", "Etawah": "ఇటావా", "Farrukhabad": "ఫరూఖాబాద్", "Fatehpur": "ఫతేపూర్", "Firozabad": "ఫిరోజాబాద్", "Gautam Buddha Nagar": "గౌతమ్ బుద్ధ నగర్", "Ghaziabad": "ఘాజియాబాద్", "Ghazipur": "ఘాజీపూర్", "Gonda": "గోండా", "Gorakhpur": "గోరఖ్‌పూర్", "Hamirpur": "హమీర్‌పూర్", "Hapur": "హపూర్", "Hardoi": "హర్దోయ్", "Hathras": "హత్రాస్", "Jalaun": "జలౌన్", "Jaunpur": "జౌన్‌పూర్", "Jhansi": "ఝాన్సీ", "Kannauj": "కన్నౌజ్", "Kanpur Dehat": "కాన్పూర్ దేహత్", "Kanpur Nagar": "కాన్పూర్ నగర్", "Kasganj": "కాస్‌గంజ్", "Kaushambi": "కౌశాంబి", "Kushinagar": "కుశీనగర్", "Lakhimpur Kheri": "లఖింపూర్ ఖేరి", "Lalitpur": "లలిత్‌పూర్", "Maharajganj": "మహారాజ్‌గంజ్", "Mahoba": "మహోబా", "Mainpuri": "మెయిన్‌పురి", "Mathura": "మథుర", "Mau": "మౌ", "Meerut": "మీరట్", "Mirzapur": "మీర్జాపూర్", "Moradabad": "మొరాదాబాద్", "Muzaffarnagar": "ముజఫర్ నగర్", "Pilibhit": "పిలిభిత్", "Pratapgarh": "ప్రతాప్‌గఢ్", "Prayagraj": "ప్రయాగరాజ్", "Rae Bareli": "రాయ్‌బరేలీ", "Rampur": "రాంపూర్", "Saharanpur": "సహారన్‌పూర్", "Sambhal": "సంభాల్", "Sant Kabir Nagar": "సంత్ కబీర్ నగర్", "Shahjahanpur": "షాజహాన్పూర్", "Shamli": "షామ్లీ", "Shravasti": "శ్రావస్తి", "Siddharthnagar": "సిద్ధార్థనగర్", "Sitapur": "సీతాపూర్", "Sonbhadra": "సోన్‌భద్ర", "Sultanpur": "సుల్తాన్‌పూర్", "Unnao": "ఉన్నావ్", "Varanasi": "వారణాసి",
    "Dehradun": "డెహ్రాడూన్", "Almora": "అల్మోరా", "Bageshwar": "బాగేశ్వర్", "Chamoli": "చమోలి", "Champawat": "చంపావత్", "Haridwar": "హరిద్వార్", "Nainital": "నైనిటాల్", "Pauri Garhwal": "పౌరీ గర్వాల్", "Pithoragarh": "పిథోరఘర్", "Rudraprayag": "రుద్రప్రయాగ్", "Tehri Garhwal": "తెహ్రీ గర్వాల్", "Udham Singh Nagar": "ఉధమ్ సింగ్ నగర్", "Uttarkashi": "ఉత్తరకాశీ",
    "Shimla": "సిమ్లా", "Bilaspur": "బిలాస్‌పూర్", "Chamba": "చంబా", "Hamirpur": "హమీర్‌పూర్", "Kangra": "కాంగ్రా", "Kinnaur": "కిన్నౌర్", "Kullu": "కులు", "Lahaul and Spiti": "లాహుల్ మరియు స్పితి", "Mandi": "మండి", "Sirmaur": "సిర్మౌర్", "Solan": "సోలన్", "Una": "ఉనా",
    "Srinagar": "శ్రీనగర్", "Jammu": "జమ్మూ", "Anantnag": "అనంత్‌నాగ్", "Bandipora": "బందిపోరా", "Baramulla": "బారాముల్లా", "Budgam": "బుద్గామ్", "Doda": "దోడా", "Ganderbal": "గందర్బాల్", "Kathua": "కథువా", "Kishtwar": "కిష్త్వార్", "Kulgam": "కుల్గామ్", "Kupwara": "కుప్వారా", "Poonch": "పూంచ్", "Pulwama": "పుల్వామా", "Rajouri": "రాజౌరి", "Ramban": "రాంబన్", "Reasi": "రియాసి", "Samba": "సాంబ", "Shopian": "షోపియన్", "Udhampur": "ఉధంపూర్",
    "Leh": "లేహ్", "Kargil": "కార్గిల్", "Chandigarh": "చండీగఢ్",

    // Districts Central (MP, CT)
    "Bhopal": "భోపాల్", "Indore": "ఇండోర్", "Agar Malwa": "అగర్ మాల్వా", "Alirajpur": "అలీరాజ్‌పూర్", "Anuppur": "అనుప్పూర్", "Ashoknagar": "అశోక్ నగర్", "Balaghat": "బాలాఘాట్", "Barwani": "బర్వానీ", "Betul": "బేతుల్", "Bhind": "భిండ్", "Burhanpur": "బుర్హాన్‌పూర్", "Chhatarpur": "ఛతర్‌పూర్", "Chhindwara": "ఛింద్వారా", "Damoh": "దామోహ్", "Datia": "దతియా", "Dewas": "దేవాస్", "Dhar": "ధార్", "Dindori": "దిండోరి", "Guna": "గుణ", "Gwalior": "గ్వాలియర్", "Harda": "హర్దా", "Hoshangabad": "హోషంగాబాద్", "Jabalpur": "జబల్‌పూర్", "Jhabua": "ఝబువా", "Katni": "కత్నీ", "Khandwa": "ఖండ్వా", "Khargone": "ఖర్గోన్", "Mandla": "మండ్లా", "Mandsaur": "మంద్‌సౌర్", "Morena": "మొరెనా", "Narsinghpur": "నర్సింగ్‌పూర్", "Neemuch": "నీమచ్", "Panna": "పన్నా", "Raisen": "రైసెన్", "Rajgarh": "రాజ్‌గఢ్", "Ratlam": "రత్లాం", "Rewa": "రేవా", "Sagar": "సాగర్", "Satna": "సత్నా", "Sehore": "సెహోర్", "Seoni": "సియోని", "Shahdol": "షాడోల్", "Shajapur": "షాజాపూర్", "Sheopur": "షియోపూర్", "Shivpuri": "శివపురి", "Sidhi": "సిధి", "Singrauli": "సింగ్రౌలి", "Tikamgarh": "టికమ్‌గఢ్", "Ujjain": "ఉజ్జయిని", "Umaria": "ఉమారియా", "Vidisha": "విదిశ",
    "Raipur": "రాయ్‌పూర్", "Balod": "బాలోద్", "Baloda Bazar": "బలోడా బజార్", "Balrampur": "బలరాంపూర్", "Bastar": "బస్తర్", "Bemetara": "బెమెతరా", "Bijapur": "బీజాపూర్", "Bilaspur": "బిలాస్‌పూర్", "Dantewada": "దంతేవాడ", "Dhamtari": "ధమ్తరి", "Durg": "దుర్గ్", "Gariaband": "గరియాబంద్", "Janjgir-Champa": "జాంజ్‌గిర్-చంపా", "Jashpur": "జష్‌పూర్", "Kabirdham": "కబీర్‌ధామ్", "Kanker": "కంకేర్", "Kondagaon": "కొండగావ్", "Korba": "కోర్బా", "Koriya": "కోరియా", "Mahasamund": "మహాసముంద్", "Mungeli": "ముంగేలి", "Narayanpur": "నారాయణపూర్", "Raigarh": "రాయ్‌గఢ్", "Rajnandgaon": "రాజ్‌నంద్‌గావ్", "Sukma": "సుక్మా", "Surajpur": "సూరజ్‌పూర్", "Surguja": "సుర్గుజా",

    // Districts East (BR, JH, WB, OR)
    "Patna": "పాట్నా", "Araria": "అరారియా", "Arwal": "అర్వాల్", "Aurangabad": "ఔరంగాబాద్", "Banka": "బంకా", "Begusarai": "బేగుసరాయ్", "Bhagalpur": "భాగల్పూర్", "Bhojpur": "భోజ్‌పూర్", "Buxar": "బక్సర్", "Darbhanga": "దర్భంగా", "East Champaran": "తూర్పు చంపారన్", "Gaya": "గయ", "Gopalganj": "గోపాల్‌గంజ్", "Jamui": "జాముయి", "Jehanabad": "జహానాబాద్", "Kaimur": "కైమూర్", "Katihar": "కతిహార్", "Khagaria": "ఖగారియా", "Kishanganj": "కిషన్‌గంజ్", "Lakhisarai": "లఖిసరాయ్", "Madhepura": "మధేపురా", "Madhubani": "మధుబని", "Munger": "ముంగేర్", "Muzaffarpur": "ముజఫర్‌పూర్", "Nalanda": "నలంద", "Nawada": "నవాడా", "Purnia": "పూర్ణియా", "Rohtas": "రోహ్తాస్", "Saharsa": "సహర్సా", "Samastipur": "సమస్తిపూర్", "Saran": "సరణ్", "Sheikhpura": "షేక్‌పురా", "Sheohar": "షెయోహర్", "Sitamarhi": "సీతామర్హి", "Siwan": "సివాన్", "Supaul": "సుపాల్", "Vaishali": "వైశాలి", "West Champaran": "పశ్చిమ చంపారన్",
    "Ranchi": "రాంచీ", "Bokaro": "బొకారో", "Chatra": "చత్రా", "Deoghar": "దేవ్‌ఘర్", "Dhanbad": "ధన్‌బాద్", "Dumka": "దుమ్కా", "East Singhbhum": "తూర్పు సింగ్‌భూమ్", "Garhwa": "గర్వా", "Giridih": "గిరిదిః", "Godda": "గొడ్డ", "Gumla": "గుమ్లా", "Hazaribagh": "హజారీబాగ్", "Jamtara": "జమ్‌తారా", "Khunti": "ఖుంటి", "Koderma": "కోడెర్మా", "Latehar": "లతేహర్", "Lohardaga": "లోహర్దగా", "Pakur": "పాకూర్", "Palamu": "పలాము", "Ramgarh": "రామ్‌గఢ్", "Sahibganj": "సాహిబ్‌గంజ్", "Seraikela Kharsawan": "సెరైకేలా ఖర్సావాన్", "Simdega": "సిమ్దేగా", "West Singhbhum": "పశ్చిమ సింగ్‌భూమ్",
    "Kolkata": "కోల్‌కతా", "Bankura": "బంకురా", "Birbhum": "బీర్భూమ్", "Cooch Behar": "కూచ్ బెహార్", "Dakshin Dinajpur": "దక్షిణ్ దినాజ్‌పూర్", "Darjeeling": "డార్జిలింగ్", "Hooghly": "హుగ్లీ", "Howrah": "హౌరా", "Jalpaiguri": "జల్పాయ్‌గురి", "Jhargram": "ఝార్గ్రామ్", "Kalimpong": "కాలింపాంగ్", "Malda": "మాల్డా", "Murshidabad": "ముర్షిదాబాద్", "Nadia": "నదియా", "North 24 Parganas": "నార్త్ 24 పరగణాలు", "Paschim Bardhaman": "పశ్చిమ బర్ధమాన్", "Paschim Medinipur": "పశ్చిమ మేదినీపూర్", "Purba Bardhaman": "పూర్బా బర్ధమాన్", "Purba Medinipur": "పూర్బా మేదినీపూర్", "Purulia": "పురూలియా", "South 24 Parganas": "సౌత్ 24 పరగణాలు", "Uttar Dinajpur": "ఉత్తర్ దినాజ్‌పూర్",
    "Bhubaneswar": "భువనేశ్వర్", "Angul": "అంగుల్", "Balangir": "బలాంగీర్", "Balasore": "బాలాసోర్", "Bargarh": "బర్గర్", "Bhadrak": "భద్రక్", "Boudh": "బౌద్", "Cuttack": "కటక్", "Deogarh": "దేవ్‌గఢ్", "Dhenkanal": "ధెంకనల్", "Gajapati": "గజపతి", "Ganjam": "గంజాం", "Jagatsinghpur": "జగత్‌సింగ్‌పూర్", "Jajpur": "జాజ్‌పూర్", "Jharsuguda": "ఝార్సుగూడ", "Kalahandi": "కలహండి", "Kandhamal": "కంధమాల్", "Kendrapara": "కేంద్రపారా", "Kendujhar": "కెండుఝర్", "Khordha": "ఖుర్దా", "Koraput": "కోరాపుట్", "Malkangiri": "మల్కనగిరి", "Mayurbhanj": "మయూర్‌భంజ్", "Nabarangpur": "నబరంగ్‌పూర్", "Nayagarh": "నయాగఢ్", "Nuapada": "నువాపడ", "Puri": "పూరీ", "Rayagada": "రాయగడ", "Sambalpur": "సంబల్‌పూర్", "Subarnapur": "సుబర్ణపూర్", "Sundargarh": "సుందర్‌గఢ్",

    // Districts North-East (AS, TR, MN, ML, MZ, NL, AR, SK)
    "Guwahati": "గువహతి", "Baksa": "బక్సా", "Barpeta": "బర్పేట", "Biswanath": "విశ్వనాథ్", "Bongaigaon": "బొంగైగావ్", "Cachar": "కాచార్", "Charaideo": "చరైデオ", "Chirang": "చిరాంగ్", "Darrang": "దర్రాంగ్", "Dhemaji": "ధేమాజీ", "Dhubri": "ధుబ్రి", "Dibrugarh": "డిబ్రూఘర్", "Dima Hasao": "డిమా హసావో", "Goalpara": "గోల్పారా", "Golaghat": "గోలాఘాట్", "Hailakandi": "హైలకండి", "Hojai": "హోజాయ్", "Jorhat": "జోర్హాట్", "Kamrup": "కామ్రూప్", "Karbi Anglong": "కర్బీ ఆంగ్లాంగ్", "Karimganj": "కరీంగంజ్", "Kokrajhar": "కోక్రాఝర్", "Lakhimpur": "లఖింపూర్", "Majuli": "మజులి", "Morigaon": "మారిగావ్", "Nagaon": "నాగావ్", "Nalbari": "నల్బారి", "Sivasagar": "శివసాగర్", "Sonitpur": "సోనిత్‌పూర్", "South Salmara": "సౌత్ సల్మారా", "Tinsukia": "తిన్సుకియా", "Udalguri": "ఉదల్గురి", "West Karbi Anglong": "వెస్ట్ కర్బీ ఆంగ్లాంగ్",
    "Agartala": "అగర్తలా", "Dhalai": "ధలై", "Gomati": "గోమతి", "Khowai": "ఖోవై", "North Tripura": "నార్త్ త్రిపుర", "Sepahijala": "సిపాహిజాల", "South Tripura": "సౌత్ త్రిపుర", "Unakoti": "ఉనకోటి",
    "Shillong": "షిల్లాంగ్", "East Garo Hills": "ఈస్ట్ గారో హిల్స్", "East Jaintia Hills": "ఈస్ట్ జైంతియా హిల్స్", "East Khasi Hills": "ఈస్ట్ ఖాసీ హిల్స్", "North Garo Hills": "నార్త్ గారో హిల్స్", "Ri Bhoi": "రి భోయ్", "South Garo Hills": "సౌత్ గారో హిల్స్", "South West Garo Hills": "సౌత్ వెస్ట్ గారో హిల్స్", "South West Khasi Hills": "సౌత్ వెస్ట్ ఖాసీ హిల్స్", "West Garo Hills": "వెస్ట్ గారో హిల్స్", "West Jaintia Hills": "వెస్ట్ జైంతియా హిల్స్", "West Khasi Hills": "వెస్ట్ ఖాసీ హిల్స్",
    "Imphal East": "ఇంఫాల్ ఈస్ట్", "Imphal West": "ఇంఫాల్ వెస్ట్", "Bishnupur": "విష్ణుపూర్", "Chandel": "చందేల్", "Churachandpur": "చురచాంద్‌పూర్", "Kakching": "కాక్చింగ్", "Kamjong": "కంజోంగ్", "Kangpokpi": "కాంగ్‌పోక్పి", "Noney": "నోని", "Pherzawl": "ఫెర్జాల్", "Senapati": "సేనాపతి", "Tamenglong": "తమెంగ్‌లాంగ్", "Tengnoupal": "తెంగ్నౌపాల్", "Thoubal": "తౌబాల్", "Ukhrul": "ఉఖ్రుల్",
    "Kohima": "కోహిమా", "Dimapur": "దిమాపూర్", "Kiphire": "కిఫైర్", "Longleng": "లాంగ్ లెంగ్", "Mokokchung": "మోకోక్‌చుంగ్", "Mon": "మోన్", "Peren": "పెరెన్", "Phek": "ఫెక్", "Tuensang": "తుయెంసాంగ్", "Wokha": "వోఖా", "Zunheboto": "జున్హెబోటో",
    "Aizawl": "ఐజ్వాల్", "Champhai": "చంఫై", "Hnahthial": "హ్నహ్తియాల్", "Khawzawl": "ఖవ్‌జాల్", "Kolasib": "కోలాసిబ్", "Lawngtlai": "లాంగ్‌త్లై", "Lunglei": "లుంగ్లీ", "Mamit": "మమిత్", "Saiha": "సైహా", "Saitual": "సైతువాల్", "Serchhip": "సెర్చిప్",
    "Itanagar": "ఇటానగర్", "Anjaw": "అంజావ్", "Changlang": "చాంగ్లాంగ్", "Dibang Valley": "దిబాంగ్ వ్యాలీ", "East Kameng": "ఈస్ట్ కామెంగ్", "East Siang": "ఈస్ట్ సియాంగ్", "Kamle": "కమ్లే", "Kra Daadi": "క్రా దాది", "Kurung Kumey": "కురుంగ్ కుమే", "Lepa Rada": "లేప రాడ", "Lohit": "లోహిత్", "Longding": "లాంగ్డింగ్", "Lower Dibang Valley": "లోయర్ దిబాంగ్ వ్యాలీ", "Lower Siang": "లోయర్ సియాంగ్", "Lower Subansiri": "లోయర్ సుబన్సిరి", "Namsai": "నామ్సాయి", "Pakke Kessang": "పక్కే కెస్సాంగ్", "Papum Pare": "పాపుమ్ పరే", "Shi Yomi": "షి యోమి", "Siang": "సియాంగ్", "Tawang": "తవాంగ్", "Tirap": "తిరప్", "Upper Dibang Valley": "అప్పర్ దిబాంగ్ వ్యాలీ", "Upper Siang": "అప్పర్ సియాంగ్", "Upper Subansiri": "అప్పర్ సుబన్సిరి", "West Kameng": "వెస్ట్ కామెంగ్", "West Siang": "వెస్ట్ సియాంగ్",
    "Gangtok": "గ్యాంగ్‌టక్", "Mangan": "మంగన్", "Namchi": "నామ్చీ", "Gyalshing": "గ్యాల్సింగ్", "Pakyong": "ప్యాక్యాంగ్", "Soreng": "సోరెంగ్",
};

const hiLocations = {
    // States
    "Andhra Pradesh": "आंध्र प्रदेश", "Telangana": "तेलंगाना", "Tamil Nadu": "तमिलनाडु", "Karnataka": "कर्नाटक", "Kerala": "केरल", "Maharashtra": "महाराष्ट्र", "Gujarat": "गुजरात", "Rajasthan": "राजस्थान", "Madhya Pradesh": "मध्य प्रदेश", "Uttar Pradesh": "उत्तर प्रदेश", "Bihar": "बिहार", "West Bengal": "पश्चिम बंगाल", "Odisha": "ओडिशा", "Punjab": "पंजाब", "Haryana": "हरियाणा", "Chhattisgarh": "छत्तीसगढ़", "Jharkhand": "झारखंड", "Assam": "असम", "Himachal Pradesh": "हिमाचल प्रदेश", "Uttarakhand": "उत्तराखंड", "Goa": "गोवा", "Tripura": "त्रिपुरा", "Meghalaya": "मेघालय", "Manipur": "मणिपुर", "Nagaland": "नागालैंड", "Mizoram": "मिजोरम", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Sikkim": "सिक्किम", "Delhi": "दिल्ली", "Jammu & Kashmir": "जम्मू और कश्मीर", "Ladakh": "लद्दाख", "Puducherry": "पुडुचेरी", "Chandigarh": "चंडीगढ़", "Andaman & Nicobar": "अंडमान और निकोबार", "Dadra Nagar Haveli & Daman Diu": "दादरा नगर हवेली और दमन दीव", "Lakshadweep": "लक्षद्वीप",
    
    // Districts South (AP, TG, TN, KA, KL)
    "Anantapur": "अनंतपुर", "Chittoor": "चित्तूर", "East Godavari": "पूर्वी गोदावरी", "Guntur": "गुंटूर", "Krishna": "कृष्णा", "Kurnool": "कुरनूल", "Nellore": "नेल्लोर", "Prakasam": "प्रकाशम", "Srikakulam": "श्रीकाकुलम", "Visakhapatnam": "विशाखापत्तनम", "Vizianagaram": "विजयनगरम", "West Godavari": "पश्चिमी गोदावरी", "YSR Kadapa": "वाईएसआर कडप्पा", "Bapatla": "बापटला", "Eluru": "एलुरु", "Kakinada": "काकीनाडा", "Konaseema": "कोनासीमा", "Machilipatnam": "मछलीपत्तनम", "Nandyal": "नंद्याल", "Palnadu": "पलनाडु", "Parvathipuram Manyam": "पर्वतीपुरम मान्यम", "Tirupati": "तिरुपति", "Anakapalli": "अनकापल्ली", "Alluri Sitharama Raju": "अल्लूरी सीताराम राजू", "Sri Sathya Sai": "श्री सत्य साई",
    "Hyderabad": "हैदराबाद", "Adilabad": "आदिलाबाद", "Bhadradri Kothagudem": "भद्राद्री कोठागुडेम", "Jagtial": "जगत्याल", "Jangaon": "जनगाँव", "Jayashankar Bhupalpally": "जयशंकर भूपालपल्ली", "Jogulamba Gadwal": "जोगुलंबा गदवाल", "Kamareddy": "कामारेड्डी", "Karimnagar": "करीमनगर", "Khammam": "खम्मम", "Komaram Bheem": "कोमाराम भीम", "Mahabubabad": "महबूबाबाद", "Mahabubnagar": "महबूबनगर", "Mancherial": "मंचेरियल", "Medak": "मेडक", "Medchal-Malkajgiri": "मेडचल-मलकाजगिरी", "Mulugu": "मुलुगु", "Nagarkurnool": "नागरकुरनूल", "Nalgonda": "नलगोंडा", "Narayanpet": "नारायणपेट", "Nirmal": "निर्मल", "Nizamabad": "निज़ामाबाद", "Peddapalli": "पेड्डापल्ली", "Rajanna Sircilla": "राजन्ना सिरसिला", "Rangareddy": "रंगारेड्डी", "Sangareddy": "संगारेड्डी", "Siddipet": "सिद्दीपेट", "Suryapet": "सूर्यापेट", "Vikarabad": "विकाराबाद", "Wanaparthy": "वनपर्थी", "Warangal": "वारंगल", "Yadadri Bhuvanagiri": "यादाद्री भुवनगिरी",
    "Chennai": "चेन्नई", "Ariyalur": "अरियालुर", "Chengalpattu": "चेंगलपट्टू", "Coimbatore": "कोयंबटूर", "Cuddalore": "कुड्डालोर", "Dharmapuri": "धर्मपुरी", "Dindigul": "डिंडीगुल", "Erode": "इरोड", "Kallakurichi": "कल्लाकुरिची", "Kancheepuram": "कांचीपुरम", "Karur": "करूर", "Krishnagiri": "कृष्णगिरि", "Madurai": "मदुराई", "Mayiladuthurai": "मयिलादुथुराई", "Nagapattinam": "नागपट्टिनम", "Namakkal": "नमक्कल", "Nilgiris": "नीलगिरी", "Perambalur": "पेराम्बलुर", "Pudukkottai": "पुदुक्कोट्टई", "Ramanathapuram": "रामनाथपुरम", "Ranipet": "रानीपेट", "Salem": "सेलम", "Sivaganga": "शिवगंगा", "Tenkasi": "तेनकासी", "Thanjavur": "तंजावुर", "Theni": "थेनी", "Thoothukudi": "थूथुकुडी", "Tiruchirappalli": "तिरुचिरापल्ली", "Tirunelveli": "तिरुनेलवेली", "Tirupathur": "तिरुपुथुर", "Tiruppur": "तिरुपुर", "Tiruvallur": "तिरुवल्लूर", "Tiruvannamalai": "तिरुवन्नामलाई", "Tiruvarur": "तिरुवारुर", "Vellore": "वेल्लोर", "Viluppuram": "विलुप्पुरम", "Virudhunagar": "विरुद्धनगर",
    "Bengaluru Urban": "बेंगलुरु शहरी", "Bengaluru Rural": "बेंगलुरु ग्रामीण", "Bagalkot": "बागलकोट", "Ballari": "बल्लारी", "Belagavi": "बेलगावी", "Bidar": "बीदर", "Chamarajanagar": "चामराजनगर", "Chikkaballapur": "चिक्काबल्लापुर", "Chikkamagaluru": "चिकमगलूर", "Chitradurga": "चित्रदुर्ग", "Dakshina Kannada": "दक्षिण कन्नड़", "Davanagere": "दावणगेरे", "Dharwad": "धारवाड़", "Gadag": "गदग", "Hassan": "हसन", "Haveri": "हावेरी", "Kalaburagi": "कालबुर्गी", "Kodagu": "कोडागु", "Kolar": "कोलार", "Koppal": "कोप्पल", "Mandya": "मांड्या", "Mysuru": "मैसूरु", "Raichur": "रायचूर", "Ramanagara": "रामनगर", "Shivamogga": "शिवमोग्गा", "Tumakuru": "तुमकुरु", "Udupi": "उडुपी", "Uttara Kannada": "उत्तर कन्नड़", "Vijayapura": "विजयपुर", "Yadgir": "यादगीर",
    "Thiruvananthapuram": "तिरुवनंतपुरम", "Alappuzha": "अलाप्पुझा", "Ernakulam": "एर्नाकुलम", "Idukki": "इडुक्की", "Kannur": "कन्नूर", "Kasaragod": "कासरगोड", "Kollam": "कोल्लम", "Kottayam": "कोट्टायम", "Kozhikode": "कोझिकोड", "Malappuram": "मलप्पुरम", "Palakkad": "पालक्कड़", "Pathanamthitta": "पथानामथिट्टा", "Thrissur": "त्रिशूर", "Wayanad": "वायनाड",

    // Districts West (MH, GJ, GA, DN-DD)
    "Mumbai": "मुंबई", "Pune": "पुणे", "Nagpur": "नागपुर", "Ahmednagar": "अहमदनगर", "Akola": "अकोला", "Amravati": "अमरावती", "Aurangabad": "औरंगाबाद", "Beed": "बीड", "Bhandara": "भंडारा", "Buldhana": "बुलढाणा", "Chandrapur": "चंद्रपुर", "Dhule": "धुले", "Gadchiroli": "गढ़चिरौली", "Gondia": "गोंदिया", "Hingoli": "हिंगोली", "Jalgaon": "जलगाँव", "Jalna": "जालना", "Kolhapur": "कोल्हापुर", "Latur": "लातूर", "Nanded": "नांदेड़", "Nandurbar": "नंदुरबार", "Nashik": "नासिक", "Osmanabad": "उस्मानाबाद", "Palghar": "पालघर", "Parbhani": "परभणी", "Raigad": "रायगढ़", "Ratnagiri": "रत्नागिरी", "Sangli": "सांगली", "Satara": "सतारा", "Sindhudurg": "सिंधुदुर्ग", "Solapur": "सोलापुर", "Thane": "ठाणे", "Wardha": "वर्धा", "Washim": "वाशिम", "Yavatmal": "यवतमाल",
    "Ahmedabad": "अहमदाबाद", "Amreli": "अमरेली", "Anand": "आनंद", "Aravalli": "अरावली", "Banaskantha": "बनासकांठा", "Bharuch": "भरूच", "Bhavnagar": "भावनगर", "Botad": "बोटाद", "Chhota Udaipur": "छोटा उदयपुर", "Dahod": "दाहोद", "Dang": "डांग", "Devbhoomi Dwarka": "देवभूमि द्वारका", "Gandhinagar": "गांधीनगर", "Gir Somnath": "गीर सोमनाथ", "Jamnagar": "जामनगर", "Junagadh": "जूनागढ़", "Kheda": "खेड़ा", "Kutch": "कच्छ", "Mahisagar": "महिसागर", "Mehsana": "महेसाणा", "Morbi": "मोरबी", "Narmada": "नर्मदा", "Navsari": "नवसारी", "Panchmahal": "पंचमहल", "Patan": "पाटन", "Porbandar": "पोरबंदर", "Rajkot": "राजकोट", "Sabarkantha": "साबरकांठा", "Surat": "सूरत", "Surendranagar": "सुरेंद्रनगर", "Tapi": "तापी", "Vadodara": "वडोदरा", "Valsad": "वलसाड",
    "North Goa": "उत्तर गोवा", "South Goa": "दक्षिण गोवा", "Dadra and Nagar Haveli": "दादरा और नगर हवेली", "Daman": "दमन", "Diu": "दीव",

    // Districts North (DL, HR, PB, RJ, UP, UK, HP, JK, LA, CH)
    "Central Delhi": "मध्य दिल्ली", "East Delhi": "पूर्वी दिल्ली", "New Delhi": "नई दिल्ली", "North Delhi": "उत्तरी दिल्ली", "North East Delhi": "उत्तर पूर्वी दिल्ली", "North West Delhi": "उत्तर पश्चिमी दिल्ली", "Shahdara": "शाहदरा", "South Delhi": "दक्षिण दिल्ली", "South East Delhi": "दक्षिण पूर्वी दिल्ली", "South West Delhi": "दक्षिण पश्चिमी दिल्ली", "West Delhi": "पश्चिमी दिल्ली",
    "Ambala": "अंबाला", "Bhiwani": "भिवानी", "Charkhi Dadri": "चरखी दादरी", "Faridabad": "फरीदाबाद", "Fatehabad": "फतेहाबाद", "Gurugram": "गुरुग्राम", "Hisar": "हिसार", "Jhajjar": "झज्जर", "Jind": "जींद", "Kaithal": "कैथल", "Karnal": "करनाल", "Kurukshetra": "कुरुक्षेत्र", "Mahendragarh": "महेंद्रगढ़", "Nuh": "नूह", "Palwal": "पलवल", "Panchkula": "पंचकुला", "Panipat": "पानीपत", "Rewari": "रेवाड़ी", "Rohtak": "रोहतक", "Sirsa": "सिरसा", "Sonipat": "सोनीपत", "Yamunanagar": "यमुनानगर",
    "Amritsar": "अमृतसर", "Barnala": "बरनाला", "Bathinda": "भटिंडा", "Faridkot": "फरीदकोट", "Fatehgarh Sahib": "फतेहगढ़ साहिब", "Fazilka": "फाजिल्का", "Ferozepur": "फिरोजपुर", "Gurdaspur": "गुरदासपुर", "Hoshiarpur": "होशियारपुर", "Jalandhar": "जालंधर", "Kapurthala": "कपूरथला", "Ludhiana": "लुधियाना", "Mansa": "मानसा", "Moga": "मोगा", "Mohali": "मोहाली", "Muktsar": "मुक्तसर", "Pathankot": "पठानकोट", "Patiala": "पटियाला", "Rupnagar": "रूपनगर", "Sangrur": "संगरूर", "Shaheed Bhagat Singh Nagar": "शहीद भगत सिंह नगर", "Tarn Taran": "तरनतारन",
    "Jaipur": "जयपुर", "Ajmer": "अजमेर", "Alwar": "अलवर", "Banswara": "बांसवाड़ा", "Baran": "बारां", "Barmer": "बाड़मेर", "Bharatpur": "भरतपुर", "Bhilwara": "भीलवाड़ा", "Bikaner": "बीकानेर", "Bundi": "बूंदी", "Chittorgarh": "चित्तौड़गढ़", "Churu": "चूरू", "Dausa": "दौसा", "Dholpur": "धौलपुर", "Dungarpur": "डूंगरपुर", "Hanumangarh": "हनुमानगढ़", "Jaisalmer": "जैसलमेर", "Jalore": "जालौर", "Jhalawar": "झालावाड़", "Jhunjhunu": "झुंझुनू", "Jodhpur": "जोधपुर", "Karauli": "करौली", "Kota": "कोटा", "Nagaur": "नागौर", "Pali": "पाली", "Pratapgarh": "प्रतापगढ़", "Rajsamand": "राजसमंद", "Sawai Madhopur": "सवाई माधोपुर", "Sikar": "सीकर", "Sirohi": "सिरोही", "Sri Ganganagar": "श्रीगंगानगर", "Tonk": "टोंक", "Udaipur": "उदयपुर",
    "Lucknow": "लखनऊ", "Agra": "आगरा", "Aligarh": "अलीगढ़", "Ambedkar Nagar": "अंबेडकर नगर", "Amethi": "अमेठी", "Amroha": "अमरोहा", "Auraiya": "औरैया", "Ayodhya": "अयोध्या", "Azamgarh": "आजमगढ़", "Baghpat": "बागपत", "Bahraich": "बहराइच", "Ballia": "बलिया", "Balrampur": "बलरामपुर", "Banda": "बांदा", "Barabanki": "बाराबंकी", "Bareilly": "बरेली", "Basti": "बस्ती", "Bhadohi": "भदोही", "Bijnor": "बिजनौर", "Budaun": "बदायूँ", "Bulandshahr": "बुलंदशहर", "Chandauli": "चंदौली", "Chitrakoot": "चित्रकूट", "Deoria": "देवरिया", "Etah": "एटा", "Etawah": "इटावा", "Farrukhabad": "फर्रुखाबाद", "Fatehpur": "फतेहपुर", "Firozabad": "फ़िरोज़ाबाद", "Gautam Buddha Nagar": "गौतम बुद्ध नगर", "Ghaziabad": "गाजियाबाद", "Ghazipur": "गाजीपुर", "Gonda": "गोंडा", "Gorakhpur": "गोरखपुर", "Hamirpur": "हमीरपुर", "Hapur": "हापुड़", "Hardoi": "हरदोई", "Hathras": "हाथरस", "Jalaun": "जालौन", "Jaunpur": "जौनपुर", "Jhansi": "झांसी", "Kannauj": "कन्नौज", "Kanpur Dehat": "कानपुर देहात", "Kanpur Nagar": "कानपुर नगर", "Kasganj": "कासगंज", "Kaushambi": "कौशांबी", "Kushinagar": "कुशीनगर", "Lakhimpur Kheri": "लखीमपुर खीरी", "Lalitpur": "ललितपुर", "Maharajganj": "महराजगंज", "Mahoba": "महोबा", "Mainpuri": "मैनपुरी", "Mathura": "मथुरा", "Mau": "मऊ", "Meerut": "मेरठ", "Mirzapur": "मिर्जापुर", "Moradabad": "मुरादाबाद", "Muzaffarnagar": "मुजफ्फरनगर", "Pilibhit": "पीलीभीत", "Pratapgarh": "प्रतापगढ़", "Prayagraj": "प्रयागराज", "Rae Bareli": "रायबरेली", "Rampur": "रामपुर", "Saharanpur": "सहारनपुर", "Sambhal": "संभल", "Sant Kabir Nagar": "संत कबीर नगर", "Shahjahanpur": "शाहजहाँपुर", "Shamli": "शामली", "Shravasti": "श्रावस्ती", "Siddharthnagar": "सिद्धार्थनगर", "Sitapur": "सीतापुर", "Sonbhadra": "सोनभद्र", "Sultanpur": "सुलतानपुर", "Unnao": "उन्नाव", "Varanasi": "वाराणसी",
    "Dehradun": "देहरादून", "Almora": "अल्मोड़ा", "Bageshwar": "बागेश्वर", "Chamoli": "चमोली", "Champawat": "चंपावत", "Haridwar": "हरिद्वार", "Nainital": "नैनीताल", "Pauri Garhwal": "पौड़ी गढ़वाल", "Pithoragarh": "पिथौरागढ़", "Rudraprayag": "रुद्रप्रयाग", "Tehri Garhwal": "टिहरी गढ़वाल", "Udham Singh Nagar": "उधम सिंह नगर", "Uttarkashi": "उत्तरकाशी",
    "Shimla": "शिमला", "Bilaspur": "बिलासपुर", "Chamba": "चंबा", "Hamirpur": "हमीरपुर", "Kangra": "कांगड़ा", "Kinnaur": "किन्नौर", "Kullu": "कुल्लू", "Lahaul and Spiti": "लाहौल और स्पीति", "Mandi": "मंडी", "Sirmaur": "सिरमौर", "Solan": "सोलन", "Una": "ऊना",
    "Srinagar": "श्रीनगर", "Jammu": "जम्मू", "Anantnag": "अनंतनाग", "Bandipora": "बांदीपोर", "Baramulla": "बारामूला", "Budgam": "बड़गाम", "Doda": "डोडा", "Ganderbal": "गांदरबल", "Kathua": "कठुआ", "Kishtwar": "किश्तवाड़", "Kulgam": "कुलगाम", "Kupwara": "कुपवाड़ा", "Poonch": "पुंछ", "Pulwama": "पुलवामा", "Rajouri": "राजौरी", "Ramban": "रामबन", "Reasi": "रियासी", "Samba": "सांभा", "Shopian": "शोपियां", "Udhampur": "उधमपुर",
    "Leh": "लेह", "Kargil": "कारगिल", "Chandigarh": "चंडीगढ़",

    // Districts Central (MP, CT)
    "Bhopal": "भोपाल", "Indore": "इंदौर", "Agar Malwa": "आगर मालवा", "Alirajpur": "अलीराजपुर", "Anuppur": "अनूपपुर", "Ashoknagar": "अशोकनगर", "Balaghat": "बालाघाट", "Barwani": "बड़वानी", "Betul": "बैतूल", "Bhind": "भिंड", "Burhanpur": "बुरहानपुर", "Chhatarpur": "छतरपुर", "Chhindwara": "छिंदवाड़ा", "Damoh": "दमोह", "Datia": "दतिया", "Dewas": "देवास", "Dhar": "धार", "Dindori": "डिंडोरी", "Guna": "गुणा", "Gwalior": "ग्वालियर", "Harda": "हरदा", "Hoshangabad": "होशंगाबाद", "Jabalpur": "जबलपुर", "Jhabua": "झाबुआ", "Katni": "कटनी", "Khandwa": "खंडवा", "Khargone": "खरगोन", "Mandla": "मंडला", "Mandsaur": "मंदसौर", "Morena": "मुरैना", "Narsinghpur": "नरसिंहपुर", "Neemuch": "नीमच", "Panna": "पन्ना", "Raisen": "रायसेन", "Rajgarh": "राजगढ़", "Ratlam": "रतलाम", "Rewa": "रीवा", "Sagar": "सागर", "Satna": "सतना", "Sehore": "सीहोर", "Seoni": "सिवनी", "Shahdol": "शहडोल", "Shajapur": "शाजापुर", "Sheopur": "श्योपुर", "Shivpuri": "शिवपुरी", "Sidhi": "सीधी", "Singrauli": "सिंगरौली", "Tikamgarh": "टीकमगढ़", "Ujjain": "उज्जैन", "Umaria": "उमरिया", "Vidisha": "विदिशा",
    "Raipur": "रायपुर", "Balod": "बालोद", "Baloda Bazar": "बलौदा बाजार", "Balrampur": "बलरामपुर", "Bastar": "बस्तर", "Bemetara": "बेमेतरा", "Bijapur": "बीजापुर", "Bilaspur": "बिलासपुर", "Dantewada": "दंतेवाड़ा", "Dhamtari": "धमतरी", "Durg": "दुर्ग", "Gariaband": "गरियाबंद", "Janjgir-Champa": "जांजगीर-चांपा", "Jashpur": "जशपुर", "Kabirdham": "कबीरधाम", "Kanker": "कांकेर", "Kondagaon": "कोडागांव", "Korba": "कोरबा", "Koriya": "कोरिया", "Mahasamund": "महासमुंद", "Mungeli": "मुंगेली", "Narayanpur": "नारायणपुर", "Raigarh": "रायगढ़", "Rajnandgaon": "राजनांदगांव", "Sukma": "सुकमा", "Surajpur": "सूरजपुर", "Surguja": "सरगुजा",

    // Districts East (BR, JH, WB, OR)
    "Patna": "पटना", "Araria": "अररिया", "Arwal": "अरवल", "Aurangabad": "औरंगाबाद", "Banka": "बांका", "Begusarai": "बेगूसराय", "Bhagalpur": "भागलपुर", "Bhojpur": "भोजपुर", "Buxar": "बक्सर", "Darbhanga": "दरभंगा", "East Champaran": "पूर्वी चंपारण", "Gaya": "गया", "Gopalganj": "गोपालगंज", "Jamui": "जमुई", "Jehanabad": "जहानाबाद", "Kaimur": "कैमूर", "Katihar": "कटिहार", "Khagaria": "खगड़िया", "Kishanganj": "किशनगंज", "Lakhisarai": "लखीसराय", "Madhepura": "मधेपुरा", "Madhubani": "मधुबनी", "Munger": "मुंगेर", "Muzaffarpur": "मुजफ्फरपुर", "Nalanda": "नालंदा", "Nawada": "नवादा", "Purnia": "पूर्णिया", "Rohtas": "रोहतास", "Saharsa": "सहरसा", "Samastipur": "समस्तीपुर", "Saran": "सारण", "Sheikhpura": "शेखपुरा", "Sheohar": "शिवहर", "Sitamarhi": "सीतामढ़ी", "Siwan": "सीवान", "Supaul": "सुपौल", "Vaishali": "वैशाली", "West Champaran": "पश्चिमी चंपारण",
    "Ranchi": "रांची", "Bokaro": "बोकारो", "Chatra": "चतरा", "Deoghar": "देवघर", "Dhanbad": "धनबाद", "Dumka": "दुमका", "East Singhbhum": "पूर्वी सिंहभूम", "Garhwa": "गढ़वा", "Giridih": "गिरिडीह", "Godda": "गोड्डा", "Gumla": "गुमला", "Hazaribagh": "हजारीबाग", "Jamtara": "जामताड़ा", "Khunti": "खूंटी", "Koderma": "कोडरमा", "Latehar": "लातेहार", "Lohardaga": "लोहरदगा", "Pakur": "पाकुड़", "Palamu": "पलामू", "Ramgarh": "रामगढ़", "Sahibganj": "साहिबगंज", "Seraikela Kharsawan": "सरायकेला खरसावां", "Simdega": "सिमडेगा", "West Singhbhum": "पश्चिमी सिंहभूम",
    "Kolkata": "कोलकाता", "Bankura": "बांकुरा", "Birbhum": "बीरभूम", "Cooch Behar": "कूचबिहार", "Dakshin Dinajpur": "दक्षिण दिनाजपुर", "Darjeeling": "दार्जिलिंग", "Hooghly": "हुगली", "Howrah": "हावड़ा", "Jalpaiguri": "जलपाईगुड़ी", "Jhargram": "झारग्राम", "Kalimpong": "कालिम्पोंग", "Malda": "मालदा", "Murshidabad": "मुर्शिदाबाद", "Nadia": "नदिया", "North 24 Parganas": "उत्तर 24 परगना", "Paschim Bardhaman": "पश्चिम बर्द्धमान", "Paschim Medinipur": "पश्चिम मेदिनीपुर", "Purba Bardhaman": "पूर्व बर्द्धमान", "Purba Medinipur": "पूर्व मेदिनीपुर", "Purulia": "पुरुलिया", "South 24 Parganas": "दक्षिण 24 परगना", "Uttar Dinajpur": "उत्तर दिनाजपुर",
    "Bhubaneswar": "भुवनेश्वर", "Angul": "अनुगुल", "Balangir": "बलांगीर", "Balasore": "बालासोर", "Bargarh": "बरगढ़", "Bhadrak": "भद्रक", "Boudh": "बौध", "Cuttack": "कटक", "Deogarh": "देवगढ़", "Dhenkanal": "ढेंकनाल", "Gajapati": "गजपति", "Ganjam": "गंजाम", "Jagatsinghpur": "जगत्सिंगपुर", "Jajpur": "जाजपुर", "Jharsuguda": "झारसुगुड़ा", "Kalahandi": "कालाहांडी", "Kandhamal": "कंधमाल", "Kendrapara": "केंद्रपाड़ा", "Kendujhar": "केंदुझर", "Khordha": "खोरधा", "Koraput": "कोरापुट", "Malkangiri": "मलकानगिरी", "Mayurbhanj": "मयूरभंज", "Nabarangpur": "नबरंगपुर", "Nayagarh": "नयागढ़", "Nuapada": "नुआपाड़ा", "Puri": "पुरी", "Rayagada": "रायगढ़ा", "Sambalpur": "संबलपुर", "Subarnapur": "सुवर्णपुर", "Sundargarh": "सुंदरगढ़",
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
