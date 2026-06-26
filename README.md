# PopX Mobile Web Application

PopX is a mobile-first web application featuring a sleek UI for user authentication and profile management. 

## How to Run

Follow these step-by-step instructions to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishekar004/popx-app.git
   cd popx-app
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Run the following command to install required packages:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## Technologies Used

* **React:** Core framework for building the user interface.
* **React Router DOM:** Used for client-side routing and navigation between pages.
* **Vanilla CSS Variables:** Utilized for a flexible and maintainable design system and styling.
* **Custom SVGs:** Integrated for lightweight, crisp, and scalable iconography.
* **LocalStorage:** Employed for simulating client-side data persistence for user profiles.

## Properties & Features

* **Mobile Frame Simulation:** The application is constrained to a mobile-like frame, providing an authentic app-like experience on desktop browsers.
* **Material-style Floating Labels:** Input fields feature elegant, animated floating labels for a modern aesthetic.
* **Validation States:** Real-time form validation providing immediate visual feedback to the user during sign-up and login.
* **Mock Database Lookup:** Simulates backend interactions by looking up registered user data from local storage.
* **Dynamic Profile Mapping:** User profile data is dynamically rendered based on the authenticated user's details.
* **Reload Redirect Protection:** Safeguards against unwanted state loss by managing redirection logic upon manual page reloads.

## Drawbacks

* **Mock Client-Side Database:** Data is stored locally in the browser's `localStorage`, meaning it does not persist across different devices or browsers and is not secure for real-world applications.
* **No JWT Auth:** Authentication is simulated and lacks robust security mechanisms like JSON Web Tokens (JWT).
* **Destructive Reloads:** Manually reloading the page might lead to state reset depending on the router configuration and context state.
* **Fixed 390px Responsive Width Bounds:** The application is explicitly designed for a fixed maximum width of 390px to simulate a mobile device, which may not utilize larger screens effectively.
