**EduAid: Crowd-Funded Learning Platform**

EduAid is a platform designed to bridge the gap between underprivileged students and quality educational resources. It enables sponsors to contribute to student's learning needs, such as online courses and books, fostering an inclusive and impactful learning ecosystem.

**Features**

**Course Search:**
Users can search for courses to check if they are free or paid.
If a course is free, the platform indicates its availability for immediate access.
For paid courses, users can take an online test to determine if they qualify for free access based on their performance.

**Sponsor Contributions:**
Sponsors can fund specific courses or books and track the direct impact of their contributions.

**Integration with Platforms:**
Collaborations with Udemy, Coursera, and other platforms to gift courses directly.

## Folder Structure

### Frontend (React)
- **client/**: Contains all the frontend files for the application built with React.
  - **public/**: Includes static files such as `index.html` and images that are publicly accessible.
  - **src/**: The main source code for the React application.
    - **components/**: Reusable UI components such as Header, Footer, and buttons.
    - **pages/**: React components representing different pages in the app like HomePage and CoursePage.
    - **services/**: Contains functions for making API calls and other utility functions.
    - **App.js**: The root component that sets up the overall structure of the app.

### Backend (Node.js/Express)
- **server/**: Contains all backend files built with Node.js and Express.
  - **controllers/**: Logic for handling API requests, such as course fetching and user authentication.
    - **courseController.js**: Handles the API methods for managing courses.
    - **sponsorController.js**: Handles the sponsor-specific API methods.
    - **userController.js**: Handles user-related API methods like registration and login.
  - **models/**: Contains the MongoDB database schemas for the application.
    - **Course.js**: Schema for course data (title, description, price, etc.).
    - **Sponsor.js**: Schema for sponsor data, including the courses they fund.
    - **User.js**: Schema for user data like username, email, and password.
  - **routes/**: Defines the API routes for the server.
    - **courseRoutes.js**: Routes to manage courses.
    - **sponsorRoutes.js**: Routes to handle sponsor actions.
    - **userRoutes.js**: Routes for user-related operations such as registration.
  - **server.js**: The main entry point for the backend server where the Express app is initialized.

### Miscellaneous
- **docs/**: Contains project-related documentation such as the README file.
- **.env**: Stores environment variables, including database credentials and API keys.
- **package.json**: Contains the metadata for both frontend and backend dependencies and scripts.