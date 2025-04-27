Predictive Health Monitoring System
Overview
The Predictive Health Monitoring System is a real-time application that simulates patient vitals, predicts their health condition (Low, Medium, High) using a Decision Tree model, and provides color-coded alerts based on the predicted condition. The application collects data from sensors (heartbeat, temperature, and SpO₂), sends it to a backend system that uses a trained Decision Tree model for prediction, and displays the results with interactive, user-friendly visuals.

Features
Real-Time Vital Data Simulation: Heart rate, body temperature, and oxygen saturation levels are simulated and displayed in real-time.

Condition Prediction: Utilizes a Decision Tree model trained in Python to predict the patient's health condition based on simulated vitals data.

Dynamic Alerts: Alerts change color based on the predicted condition:

Green for Low condition

Yellow for Medium condition

Red for High condition

Modern UI/UX: Responsive design with a sleek layout, dark mode support, and intuitive interaction.

Backend Integration: Python Flask API integrated with Node.js backend to process data and return predictions.

Charting & Visualization: Visualize simulated vitals data using interactive charts and graphs.

Technologies Used
Frontend: React.js, Tailwind CSS, Axios

Backend: Node.js, Express, Python (Flask)

Machine Learning: Scikit-learn, Decision Tree Model

API Communication: RESTful API (POST requests)

Data Visualization: Chart.js (for displaying vitals data)

Installation
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or higher)

Python (v3.7 or higher)

npm (v6 or higher)

Backend Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/predictive-health-monitoring.git
cd predictive-health-monitoring
Install the necessary dependencies for the Python backend:

bash
Copy
Edit
cd backend
pip install -r requirements.txt
Download the Decision Tree model (decision_tree_model.pkl) and place it in the backend directory.

Run the Flask API:

bash
Copy
Edit
python app.py
This will start the backend server on http://localhost:5001.

Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install the necessary dependencies:

bash
Copy
Edit
npm install
Run the frontend:

bash
Copy
Edit
npm run dev
This will start the frontend server on http://localhost:3000.

Ensure that the backend and frontend servers are running simultaneously.

Usage
Simulate Vitals: The application will automatically simulate patient vitals (heartbeat, temperature, and SpO₂). These values will be sent to the backend for prediction.

View Predictions: Based on the received vitals, the backend will predict the patient's condition (Low, Medium, High) and update the alert in the frontend.

Monitor Alerts: The alert color will dynamically change based on the prediction:

Low: Green

Medium: Yellow

High: Red

Architecture
rust
Copy
Edit
Frontend (React.js) <--> Backend (Node.js) <--> Python (Flask API) <--> Trained Decision Tree Model
   |                         |                          |
   |----> Simulate Vitals --->| ---> Predict Condition --->|
                         Real-time updates via Axios
Key Components:
Frontend: Displays vitals data and alert status based on condition prediction.

Node.js Backend: Acts as a bridge between the frontend and the Python API.

Python Flask API: Hosts the Decision Tree model and returns the health condition prediction.

Decision Tree Model: Classifies the health condition based on vitals data.

Contributing
We welcome contributions to enhance the functionality, improve the code, or add more features to this project.

How to Contribute:
Fork the repository.

Create a new branch: git checkout -b feature-branch.

Make your changes.

Commit your changes: git commit -m 'Add new feature'.

Push to the branch: git push origin feature-branch.

Open a pull request and describe your changes.

Roadmap
 Integration with Real Vitals Sensors: Replace simulated data with real-time data from IoT sensors.

 Add More Health Metrics: Incorporate more vitals like blood pressure, glucose levels, etc.

 User Authentication: Implement login and user management to track patient health over time.

 Mobile App Support: Develop a mobile version of the app for better accessibility.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Scikit-learn for the Decision Tree model.

Flask for building the backend API.

React and Tailwind CSS for building a modern and responsive frontend.
