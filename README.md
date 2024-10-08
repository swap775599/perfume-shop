Running the Frontend (React) and Backend (Node.js + Express + MongoDB)
Frontend (React)
1. Navigate to the frontend folder:
Make sure you're in the directory where the React app is located.

bash
Copy code
cd frontend
2. Install dependencies:
Run the following command to install all the necessary dependencies:

bash
npm install
3. Start the React development server:
After the dependencies are installed, start the React app using:

bash
npm start
This will start the React development server, and the app will be available on http://localhost:3000.

Backend (Node.js + Express + MongoDB)
1. Navigate to the backend folder:
Open another terminal and navigate to the backend directory.

bash
cd backend
2. Install dependencies:
Run the following command to install the backend dependencies:

bash
npm install
3. Set up the environment variables:
Create a .env file at the root of the backend directory.
Add the following content (replace the MongoDB URI with your own connection string):
bash
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/<your-database>?retryWrites=true&w=majority
PORT=5000
4. Start the backend server:
Start the backend server using:

bash
node server.js
The backend server will start on http://localhost:5000.

Connecting Frontend with Backend
1. Proxy Setup in React:
To make sure the React app communicates with the backend server (API), add the following to your package.json in the frontend directory:

json
"proxy": "http://localhost:5000"
This tells React to forward any requests it doesn't handle itself (such as API calls) to the backend server on localhost:5000.

Testing the Application
Frontend: Open a browser and go to http://localhost:3000 to interact with the app. You should be able to view products, read reviews, subscribe to the newsletter, and submit contact messages.

Backend: You can test the backend API using tools like Postman or cURL for the following routes:

GET /api/products – Fetch the product list.
GET /api/reviews – Fetch reviews.
POST /api/subscribe – Subscribe to the newsletter.
POST /api/contact – Submit a contact form.
If both servers are running, your React app will interact with the backend via the proxy and display real-time product information, reviews, and other interactions.

