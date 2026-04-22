"""
Farmer Profit Optimization System - Main Application
A full-stack AI-powered web app to help farmers maximize their profit.
"""

from flask import Flask, render_template, send_from_directory
from backend.routes import api
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = Flask(
    __name__,
    template_folder='templates',
    static_folder='static'
)

# Register API blueprint
app.register_blueprint(api, url_prefix='/api')


@app.route('/')
def index():
    """Serve the main application page."""
    return render_template('index.html')


@app.route('/sw.js')
def service_worker():
    """Serve the service worker."""
    return send_from_directory(app.static_folder, 'sw.js', mimetype='application/javascript')


@app.route('/manifest.json')
def manifest():
    """Serve the Web App Manifest."""
    return send_from_directory(app.static_folder, 'manifest.json', mimetype='application/json')


if __name__ == '__main__':
    print("\n[Farmer Profit Optimization System]")
    print("=" * 45)
    print("Starting server at http://localhost:5000")
    print("=" * 45 + "\n")
    app.run(debug=True, host='0.0.0.0', port=5000)
