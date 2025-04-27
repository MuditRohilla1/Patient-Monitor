<h1>Predictive Health Monitoring System</h1>

  <h2>Overview</h2>
  <p>The <strong>Predictive Health Monitoring System</strong> is a real-time application that simulates patient vitals, predicts their health condition (Low, Medium, High) using a <strong>Decision Tree model</strong>, and provides color-coded alerts based on the predicted condition. The application collects data from sensors (heartbeat, temperature, and SpO₂), sends it to a backend system that uses a trained <strong>Decision Tree model</strong> for prediction, and displays the results with interactive, user-friendly visuals.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Real-Time Vital Data Simulation</strong>: Heart rate, body temperature, and oxygen saturation levels are simulated and displayed in real-time.</li>
    <li><strong>Condition Prediction</strong>: Utilizes a <strong>Decision Tree model</strong> trained in Python to predict the patient's health condition based on simulated vitals data.</li>
    <li><strong>Dynamic Alerts</strong>: Alerts change color based on the predicted condition:
      <ul>
        <li><strong>Green</strong> for <strong>Low</strong> condition</li>
        <li><strong>Yellow</strong> for <strong>Medium</strong> condition</li>
        <li><strong>Red</strong> for <strong>High</strong> condition</li>
      </ul>
    </li>
    <li><strong>Modern UI/UX</strong>: Responsive design with a sleek layout, dark mode support, and intuitive interaction.</li>
    <li><strong>Backend Integration</strong>: Python Flask API integrated with Node.js backend to process data and return predictions.</li>
    <li><strong>Charting & Visualization</strong>: Visualize simulated vitals data using interactive charts and graphs.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Frontend</strong>: React.js, Tailwind CSS, Axios</li>
    <li><strong>Backend</strong>: Node.js, Express, Python (Flask)</li>
    <li><strong>Machine Learning</strong>: Scikit-learn, Decision Tree Model</li>
    <li><strong>API Communication</strong>: RESTful API (POST requests)</li>
    <li><strong>Data Visualization</strong>: Chart.js (for displaying vitals data)</li>
  </ul>

  <h2>Installation</h2>

  <h3>Prerequisites</h3>
  <p>Before running the project, ensure you have the following installed:</p>
  <ul>
    <li><strong>Node.js</strong> (v14 or higher)</li>
    <li><strong>Python</strong> (v3.7 or higher)</li>
    <li><strong>npm</strong> (v6 or higher)</li>
  </ul>

  <h3>Backend Setup</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/yourusername/predictive-health-monitoring.git
          cd predictive-health-monitoring
        (https://github.com/MuditRohilla1/Patient-Monitor.git)</code></pre>
    </li>
    <li>Install the necessary dependencies for the <strong>Python</strong> backend:
      <pre><code>cd backend
pip install -r requirements.txt</code></pre>
    </li>
    <li>Download the <strong>Decision Tree model</strong> (`decision_tree_model.pkl`) and place it in the backend directory.</li>
    <li>Run the <strong>Flask API</strong>:
      <pre><code>python app.py</code></pre>
      This will start the backend server on <code>http://localhost:5001</code>.
    </li>
  </ol>

  <h3>Frontend Setup</h3>
  <ol>
    <li>Navigate to the frontend directory:
      <pre><code>cd frontend</code></pre>
    </li>
    <li>Install the necessary dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Run the frontend:
      <pre><code>npm run dev</code></pre>
      This will start the frontend server on <code>http://localhost:3000</code>.
    </li>
    <li>Ensure that the <strong>backend</strong> and <strong>frontend</strong> servers are running simultaneously.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li><strong>Simulate Vitals</strong>: The application will automatically simulate patient vitals (heartbeat, temperature, and SpO₂). These values will be sent to the backend for prediction.</li>
    <li><strong>View Predictions</strong>: Based on the received vitals, the backend will predict the patient's condition (Low, Medium, High) and update the alert in the frontend.</li>
    <li><strong>Monitor Alerts</strong>: The alert color will dynamically change based on the prediction:
      <ul>
        <li><strong>Low</strong>: Green</li>
        <li><strong>Medium</strong>: Yellow</li>
        <li><strong>High</strong>: Red</li>
      </ul>
    </li>
  </ol>

  <h2>Architecture</h2>
  <pre><code>
Frontend (React.js) <--> Backend (Node.js) <--> Python (Flask API) <--> Trained Decision Tree Model
   |                         |                          |
   |----> Simulate Vitals --->| ---> Predict Condition --->|
                         Real-time updates via Axios
  </code></pre>

  <h3>Key Components:</h3>
  <ul>
    <li><strong>Frontend</strong>: Displays vitals data and alert status based on condition prediction.</li>
    <li><strong>Node.js Backend</strong>: Acts as a bridge between the frontend and the Python API.</li>
    <li><strong>Python Flask API</strong>: Hosts the Decision Tree model and returns the health condition prediction.</li>
    <li><strong>Decision Tree Model</strong>: Classifies the health condition based on vitals data.</li>
  </ul>

  <h2>Contributing</h2>
  <p>We welcome contributions to enhance the functionality, improve the code, or add more features to this project.</p>
  <h3>How to Contribute:</h3>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch: <code>git checkout -b feature-branch</code>.</li>
    <li>Make your changes.</li>
    <li>Commit your changes: <code>git commit -m 'Add new feature'</code>.</li>
    <li>Push to the branch: <code>git push origin feature-branch</code>.</li>
    <li>Open a pull request and describe your changes.</li>
  </ol>

  <h2>Roadmap</h2>
  <ul>
    <li>[ ] <strong>Integration with Real Vitals Sensors</strong>: Replace simulated data with real-time data from IoT sensors.</li>
    <li>[ ] <strong>Add More Health Metrics</strong>: Incorporate more vitals like blood pressure, glucose levels, etc.</li>
    <li>[ ] <strong>User Authentication</strong>: Implement login and user management to track patient health over time.</li>
    <li>[ ] <strong>Mobile App Support</strong>: Develop a mobile version of the app for better accessibility.</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

  <h2>Acknowledgements</h2>
  <ul>
    <li><strong>Scikit-learn</strong> for the Decision Tree model.</li>
    <li><strong>Flask</strong> for building the backend API.</li>
    <li><strong>React</strong> and <strong>Tailwind CSS</strong> for building a modern and responsive frontend.</li>
  </ul>
