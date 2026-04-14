"""
API Routes for Farmer Profit Optimization System
Flask Blueprint with all API endpoints.
"""

from flask import Blueprint, jsonify, request
from model.predictor import (
    get_available_crops,
    get_markets_for_crop,
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

api = Blueprint('api', __name__)

# ---- District Locations by State ----
DISTRICTS = {
    "Andhra Pradesh": [
        "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna",
        "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam",
        "Vizianagaram", "West Godavari", "YSR Kadapa", "Bapatla",
        "Eluru", "Kakinada", "Konaseema", "Machilipatnam", "Nandyal",
        "Palnadu", "Parvathipuram Manyam", "Tirupati", "Anakapalli",
        "Alluri Sitharama Raju", "Sri Sathya Sai"
    ],
    "Telangana": [
        "Hyderabad", "Adilabad", "Bhadradri Kothagudem", "Jagtial",
        "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal",
        "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem",
        "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak",
        "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda",
        "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli",
        "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet",
        "Suryapet", "Vikarabad", "Wanaparthy", "Warangal",
        "Yadadri Bhuvanagiri"
    ],
    "Tamil Nadu": [
        "Chennai", "Ariyalur", "Chengalpattu", "Coimbatore", "Cuddalore",
        "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram",
        "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam",
        "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram",
        "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur",
        "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
        "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai",
        "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
    ],
    "Karnataka": [
        "Bengaluru Urban", "Bengaluru Rural", "Bagalkot", "Ballari",
        "Belagavi", "Bidar", "Chamarajanagar", "Chikkaballapur",
        "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere",
        "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi",
        "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru",
        "Raichur", "Ramanagara", "Shivamogga", "Tumakuru",
        "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"
    ],
    "Kerala": [
        "Thiruvananthapuram", "Alappuzha", "Ernakulam", "Idukki",
        "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode",
        "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur",
        "Wayanad"
    ],
    "Maharashtra": [
        "Mumbai", "Pune", "Nagpur", "Ahmednagar", "Akola", "Amravati",
        "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur",
        "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon",
        "Jalna", "Kolhapur", "Latur", "Nanded", "Nandurbar",
        "Nashik", "Osmanabad", "Palghar", "Parbhani", "Raigad",
        "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur",
        "Thane", "Wardha", "Washim", "Yavatmal"
    ],
    "Gujarat": [
        "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha",
        "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod",
        "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath",
        "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar",
        "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal",
        "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat",
        "Surendranagar", "Tapi", "Vadodara", "Valsad"
    ],
    "Rajasthan": [
        "Jaipur", "Ajmer", "Alwar", "Banswara", "Baran", "Barmer",
        "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh",
        "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh",
        "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur",
        "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh",
        "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi",
        "Sri Ganganagar", "Tonk", "Udaipur"
    ],
    "Madhya Pradesh": [
        "Bhopal", "Indore", "Agar Malwa", "Alirajpur", "Anuppur",
        "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind",
        "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia",
        "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda",
        "Hoshangabad", "Jabalpur", "Jhabua", "Katni", "Khandwa",
        "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur",
        "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa",
        "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur",
        "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh",
        "Ujjain", "Umaria", "Vidisha"
    ],
    "Uttar Pradesh": [
        "Lucknow", "Agra", "Aligarh", "Ambedkar Nagar", "Amethi",
        "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat",
        "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki",
        "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun",
        "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah",
        "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
        "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur",
        "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur",
        "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar",
        "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri",
        "Lalitpur", "Maharajganj", "Mahoba", "Mainpuri", "Mathura",
        "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar",
        "Pilibhit", "Pratapgarh", "Prayagraj", "Rae Bareli",
        "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar",
        "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar",
        "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
    ],
    "Bihar": [
        "Patna", "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai",
        "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran",
        "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur",
        "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura",
        "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada",
        "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran",
        "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul",
        "Vaishali", "West Champaran"
    ],
    "West Bengal": [
        "Kolkata", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur",
        "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram",
        "Kalimpong", "Malda", "Murshidabad", "Nadia", "North 24 Parganas",
        "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman",
        "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"
    ],
    "Odisha": [
        "Bhubaneswar", "Angul", "Balangir", "Balasore", "Bargarh",
        "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal",
        "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda",
        "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha",
        "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh",
        "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur",
        "Sundargarh"
    ],
    "Punjab": [
        "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib",
        "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar",
        "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali",
        "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur",
        "Shaheed Bhagat Singh Nagar", "Tarn Taran"
    ],
    "Haryana": [
        "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",
        "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal",
        "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
        "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa",
        "Sonipat", "Yamunanagar"
    ],
    "Chhattisgarh": [
        "Raipur", "Balod", "Baloda Bazar", "Balrampur", "Bastar",
        "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari",
        "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham",
        "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund",
        "Mungeli", "Narayanpur", "Raigarh", "Rajnandgaon",
        "Sukma", "Surajpur", "Surguja"
    ],
    "Jharkhand": [
        "Ranchi", "Bokaro", "Chatra", "Deoghar", "Dhanbad",
        "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda",
        "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma",
        "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh",
        "Sahibganj", "Seraikela Kharsawan", "Simdega",
        "West Singhbhum"
    ],
    "Assam": [
        "Guwahati", "Baksa", "Barpeta", "Biswanath", "Bongaigaon",
        "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji",
        "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat",
        "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Karbi Anglong",
        "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon",
        "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara",
        "Tinsukia", "Udalguri", "West Karbi Anglong"
    ],
    "Himachal Pradesh": [
        "Shimla", "Bilaspur", "Chamba", "Hamirpur", "Kangra",
        "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Sirmaur",
        "Solan", "Una"
    ],
    "Uttarakhand": [
        "Dehradun", "Almora", "Bageshwar", "Chamoli", "Champawat",
        "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh",
        "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
    ],
    "Goa": [
        "North Goa", "South Goa"
    ],
    "Tripura": [
        "Agartala", "Dhalai", "Gomati", "Khowai", "North Tripura",
        "Sepahijala", "South Tripura", "Unakoti"
    ],
    "Meghalaya": [
        "Shillong", "East Garo Hills", "East Jaintia Hills",
        "East Khasi Hills", "North Garo Hills", "Ri Bhoi",
        "South Garo Hills", "South West Garo Hills",
        "South West Khasi Hills", "West Garo Hills",
        "West Jaintia Hills", "West Khasi Hills"
    ],
    "Manipur": [
        "Imphal East", "Imphal West", "Bishnupur", "Chandel",
        "Churachandpur", "Kakching", "Kamjong", "Kangpokpi",
        "Noney", "Pherzawl", "Senapati", "Tamenglong",
        "Tengnoupal", "Thoubal", "Ukhrul"
    ],
    "Nagaland": [
        "Kohima", "Dimapur", "Kiphire", "Longleng", "Mokokchung",
        "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"
    ],
    "Mizoram": [
        "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib",
        "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"
    ],
    "Arunachal Pradesh": [
        "Itanagar", "Anjaw", "Changlang", "Dibang Valley", "East Kameng",
        "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey",
        "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley",
        "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang",
        "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap",
        "Upper Dibang Valley", "Upper Siang", "Upper Subansiri",
        "West Kameng", "West Siang"
    ],
    "Sikkim": [
        "Gangtok", "Mangan", "Namchi", "Gyalshing", "Pakyong", "Soreng"
    ],
    "Delhi": [
        "Central Delhi", "East Delhi", "New Delhi", "North Delhi",
        "North East Delhi", "North West Delhi", "Shahdara",
        "South Delhi", "South East Delhi", "South West Delhi",
        "West Delhi"
    ],
    "Jammu & Kashmir": [
        "Srinagar", "Jammu", "Anantnag", "Bandipora", "Baramulla",
        "Budgam", "Doda", "Ganderbal", "Kathua", "Kishtwar",
        "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri",
        "Ramban", "Reasi", "Samba", "Shopian", "Udhampur"
    ],
    "Ladakh": [
        "Leh", "Kargil"
    ],
    "Puducherry": [
        "Puducherry", "Karaikal", "Mahe", "Yanam"
    ],
    "Chandigarh": [
        "Chandigarh"
    ],
    "Andaman & Nicobar": [
        "Nicobar", "North and Middle Andaman", "South Andaman"
    ],
    "Dadra Nagar Haveli & Daman Diu": [
        "Dadra and Nagar Haveli", "Daman", "Diu"
    ],
    "Lakshadweep": [
        "Lakshadweep"
    ]
}


@api.route('/locations', methods=['GET'])
def locations():
    """Get list of districts grouped by state, with optional search."""
    search = request.args.get('search', '').strip().lower()
    state_filter = request.args.get('state', '').strip()

    if state_filter:
        # Return districts for a specific state
        districts = DISTRICTS.get(state_filter, [])
        if search:
            districts = [d for d in districts if search in d.lower()]
        return jsonify({
            'success': True,
            'states': [state_filter],
            'locations': {state_filter: districts}
        })

    if search:
        # Search across all districts and states
        results = {}
        for state, districts in DISTRICTS.items():
            if search in state.lower():
                results[state] = districts
            else:
                matched = [d for d in districts if search in d.lower()]
                if matched:
                    results[state] = matched
        return jsonify({
            'success': True,
            'states': sorted(results.keys()),
            'locations': results
        })

    # Return everything
    return jsonify({
        'success': True,
        'states': sorted(DISTRICTS.keys()),
        'locations': DISTRICTS
    })



@api.route('/crops', methods=['GET'])
def crops():
    """Get list of available crops."""
    try:
        crop_list = get_available_crops()
        return jsonify({'success': True, 'crops': crop_list})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/markets', methods=['GET'])
def markets():
    """Get markets for a specific crop."""
    crop = request.args.get('crop')
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        market_list = get_markets_for_crop(crop)
        return jsonify({'success': True, 'markets': market_list})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/prices', methods=['GET'])
def prices():
    """Get current prices for a crop across all markets."""
    crop = request.args.get('crop')
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        price_list = get_current_prices(crop)
        return jsonify({'success': True, 'prices': price_list})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/best-market', methods=['GET'])
def best_market():
    """Get the best market for a crop."""
    crop = request.args.get('crop')
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        best = get_best_market(crop)
        return jsonify({'success': True, 'best_market': best})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/predict', methods=['GET'])
def predict():
    """Predict future price for a crop."""
    crop = request.args.get('crop')
    market = request.args.get('market')
    days = request.args.get('days', 1, type=int)
    
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        prediction = predict_price(crop, market, days)
        return jsonify({'success': True, 'prediction': prediction})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/predict-week', methods=['GET'])
def predict_week():
    """Predict prices for the next 7 days."""
    crop = request.args.get('crop')
    market = request.args.get('market')
    
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        predictions = predict_price_week(crop, market)
        return jsonify({'success': True, 'predictions': predictions})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/profit', methods=['POST'])
def profit():
    """Calculate expected profit."""
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'error': 'JSON body required'}), 400
    
    selling_price = data.get('selling_price', 0)
    cost_price = data.get('cost_price', 0)
    quantity = data.get('quantity', 0)
    
    try:
        result = calculate_profit(selling_price, cost_price, quantity)
        return jsonify({'success': True, 'profit_data': result})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/weather', methods=['GET'])
def weather():
    """Get weather impact on prices."""
    crop = request.args.get('crop')
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        weather_data = get_weather_impact(crop)
        return jsonify({'success': True, 'weather': weather_data})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/demand', methods=['GET'])
def demand():
    """Get demand insights."""
    crop = request.args.get('crop')
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        demand_data = get_demand_insight(crop)
        return jsonify({'success': True, 'demand': demand_data})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/alerts', methods=['GET'])
def alerts():
    """Get price alerts and warnings."""
    crop = request.args.get('crop')
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        alert_list = get_price_alerts(crop)
        return jsonify({'success': True, 'alerts': alert_list})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/price-history', methods=['GET'])
def price_history():
    """Get price history for charts."""
    crop = request.args.get('crop')
    market = request.args.get('market')
    
    if not crop:
        return jsonify({'success': False, 'error': 'Crop parameter required'}), 400
    try:
        history = get_price_history(crop, market)
        return jsonify({'success': True, 'history': history})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@api.route('/analyze', methods=['POST'])
def full_analysis():
    """
    Full analysis endpoint - returns all data at once.
    This is the main endpoint called when user clicks "Check Best Market & Profit".
    """
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'error': 'JSON body required'}), 400
    
    crop = data.get('crop')
    quantity = float(data.get('quantity', 0) or 0)
    cost_price = float(data.get('cost_price', 0) or 0)
    
    # Safely handle distance
    try:
        distance_val = data.get('distance', 10)
        distance = float(distance_val) if distance_val else 10.0
    except (ValueError, TypeError):
        distance = 10.0
        
    location = data.get('location', '')
    
    if not crop:
        return jsonify({'success': False, 'error': 'Crop is required'}), 400
    
    try:
        # Extract state explicitly from data if sent directly or extract from location
        state_filter = data.get('state', '')
        if not state_filter and location and ', ' in location:
            state_filter = location.split(', ')[1].strip()
        elif not state_filter:
            state_filter = location

        # Get all data
        current_prices = get_current_prices(crop)
        best = get_best_market(crop)
        prediction = predict_price(crop, days_ahead=1)
        week_predictions = predict_price_week(crop)
        weather_data = get_weather_impact(crop)
        demand_data = get_demand_insight(crop)
        alert_list = get_price_alerts(crop)
        history = get_price_history(crop)
        schemes = get_govt_schemes(state_filter, crop) if state_filter else get_govt_schemes("", crop)
        
        # Get district for direct buyers scope
        district = location.split(', ')[0] if location and ', ' in location else ''
        buyers_base_price = best['price'] if best else 0
        direct_buyers = get_direct_buyers(crop, state_filter, district, buyers_base_price)
        
        # Calculate profit for best market
        profit_data = None
        if best and quantity > 0 and cost_price > 0:
            profit_data = calculate_profit(best['price'], cost_price, quantity, distance)
        
        # Calculate profit for each market
        market_profits = []
        for mp in current_prices:
            if quantity > 0 and cost_price > 0:
                mp_profit = calculate_profit(mp['price'], cost_price, quantity, distance)
                market_profits.append({
                    **mp,
                    'profit': mp_profit
                })
            else:
                market_profits.append(mp)
        
        # Get Smart AI Strategy
        smart_strategy = get_smart_strategy(crop, best, demand_data, cost_price, distance)

        return jsonify({
            'success': True,
            'data': {
                'crop': crop,
                'quantity': quantity,
                'cost_price': cost_price,
                'location': location,
                'current_prices': market_profits,
                'best_market': best,
                'prediction': prediction,
                'week_predictions': week_predictions,
                'profit': profit_data,
                'weather': weather_data,
                'demand': demand_data,
                'alerts': alert_list,
                'price_history': history,
                'schemes': schemes,
                'direct_buyers': direct_buyers,
                'strategy': smart_strategy,
                'storage': get_storage_facilities(state_filter, district)
            }
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500
