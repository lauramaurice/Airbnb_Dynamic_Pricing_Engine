<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python">
  <img src="https://img.shields.io/badge/Flask-3.0+-green.svg" alt="Flask">
  <img src="https://img.shields.io/badge/Scikit--learn-1.4+-orange.svg" alt="Scikit-learn">
  <img src="https://img.shields.io/badge/Chart.js-4.0+-red.svg" alt="Chart.js">
  <img src="https://img.shields.io/badge/Bootstrap-5.0+-purple.svg" alt="Bootstrap">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
</p>

<h1 align="center">🏠 Airbnb Dynamic Pricing Engine</h1>

<p align="center">
  <strong>A complete web application for predicting optimal Airbnb listing prices using machine learning.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-endpoints">API</a> •
  <a href="#-author">Author</a>
</p>

---

✨ Features

🏠 Price Prediction
- ML-powered price estimation
- Real-time predictions with confidence scores
- Detailed price range analysis
- Key factor identification

📊 Analytics Dashboard
- Price by neighborhood analysis
- Feature importance visualization
- Correlation matrix
- Room type distribution

🎨 Modern UI
- "Midnight Aurora" dark theme
- Fully responsive design
- Interactive charts
- Professional animations

🔍 Data Insights
- 15+ RESTful API endpoints
- Search and filter listings
- Host analytics
- Market trend analysis

---

🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Backend** | Python 3.10+ | Core programming language |
| **Framework** | Flask 3.0+ | Web application framework |
| **ML Library** | Scikit-learn 1.4+ | Machine learning model |
| **Data Processing** | Pandas, NumPy | Data manipulation |
| **Frontend** | HTML5, CSS3, JavaScript | Structure and styling |
| **UI Framework** | Bootstrap 5 | Responsive design |
| **Charts** | Chart.js 4.0+ | Interactive visualizations |
| **Icons** | Font Awesome 6 | Professional icons |

---

📁 Project Structure

Airbnb_Dynamic_Pricing_Engine/
│
├── 📄 app.py # Main Flask application
├── 📄 requirements.txt # Python dependencies
│
├── 📁 data/
│ └── 📄 listings.csv # Airbnb dataset
│
├── 📁 models/
│ ├── 📄 pricing_model.pkl # Trained ML model
│ ├── 📄 scaler.pkl # Standard scaler
│ └── 📄 features.pkl # Feature list
│
├── 📁 templates/
│ ├── 📄 base.html # Main layout template
│ ├── 📄 index.html # Homepage
│ ├── 📄 dashboard.html # Analytics dashboard
│ ├── 📄 predict.html # Price prediction
│ ├── 📄 about.html # About page
│ └── 📄 contact.html # Contact page
│
└── 📁 static/
├── 📁 css/
│ └── 📄 style.css # Midnight Aurora theme
└── 📁 js/
└── 📄 charts.js # Chart.js configurations

---

📊 API ENDPOINTS 

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Homepage |
| `/dashboard` | GET | Analytics dashboard |
| `/predict` | GET | Price prediction page |
| `/about` | GET | About page |
| `/contact` | GET | Contact page |
| `/api/stats` | GET | Overall statistics |
| `/api/price_distribution` | GET | Price distribution data |
| `/api/price_by_room_type` | GET | Average price by room type |
| `/api/price_by_neighborhood` | GET | Average price by neighborhood |
| `/api/correlation` | GET | Correlation matrix |
| `/api/feature_importance` | GET | Feature importance |
| `/api/room_type_distribution` | GET | Room type distribution |
| `/api/top_hosts` | GET | Top hosts by listings |
| `/api/price_vs_reviews` | GET | Price vs reviews data |
| `/api/search` | GET | Search listings |
| `/api/listing/<id>` | GET | Get specific listing |
| `/api/predict` | POST | Predict listing price |

---

🤖 Machine Learning Model:
Model Details:
Algorithm: Random Forest Regressor
Estimators: 150
Max Depth: 15
Features: Bedrooms, Bathrooms, Accommodates, Review Score, Reviews, Amenities, Location, Room Type.

---

👩‍💻 Author
Laura Maurice
Elevate Labs Data Analyst Intern
GitHub
LinkedIn

---

🙏 Acknowledgments
Elevate Labs - For providing the internship opportunity
Inside Airbnb - For the dataset
Chart.js - For beautiful charts
Bootstrap - For responsive design

------
