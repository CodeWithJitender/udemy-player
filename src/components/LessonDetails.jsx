import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LessonDetails = () => {
  // Step 1: Your course JSON data
    const modules = [
  {
    "title": "01. Introduction",
    "lessons": [
      {
        "title": "1. Welcome To The Course!",
        "url": "./React Front To Back 2023/01. Introduction/1. Welcome To The Course!.mp4"
      },
      {
        "title": "2. What Is React",
        "url": "./React Front To Back 2023/01. Introduction/2. What Is React.mp4"
      },
      {
        "title": "3. Environment Setup",
        "url": "./React Front To Back 2023/01. Introduction/3. Environment Setup.mp4"
      },
      {
        "title": "4. Code Repos",
        "url": "./React Front To Back 2023/01. Introduction/4. Code Repos.mp4"
      }
    ]
  },
  {
    "title": "02. React Basics & JSX",
    "lessons": [
      {
        "title": "1. Feedback Project Intro",
        "url": "./React Front To Back 2023/02. React Basics & JSX/1. Feedback Project Intro.mp4"
      },
      {
        "title": "2. Create React App",
        "url": "./React Front To Back 2023/02. React Basics & JSX/2. Create React App.mp4"
      },
      {
        "title": "3. Initializing React",
        "url": "./React Front To Back 2023/02. React Basics & JSX/3. Initializing React.mp4"
      },
      {
        "title": "4. Intro To JSX",
        "url": "./React Front To Back 2023/02. React Basics & JSX/4. Intro To JSX.mp4"
      },
      {
        "title": "5. Dynamic Values & LIsts in JSX",
        "url": "./React Front To Back 2023/02. React Basics & JSX/5. Dynamic Values & LIsts in JSX.mp4"
      },
      {
        "title": "6. Conditionals in JSX",
        "url": "./React Front To Back 2023/02. React Basics & JSX/6. Conditionals in JSX.mp4"
      }
    ]
  },
  {
    "title": "03. Components, Props & State",
    "lessons": [
      {
        "title": "1. Creating Your First Component & Props",
        "url": "./React Front To Back 2023/03. Components, Props & State/1. Creating Your First Component & Props.mp4"
      },
      {
        "title": "2. Adding Styles To A Component",
        "url": "./React Front To Back 2023/03. Components, Props & State/2. Adding Styles To A Component.mp4"
      },
      {
        "title": "3. State & useState Hook",
        "url": "./React Front To Back 2023/03. Components, Props & State/3. State & useState Hook.mp4"
      },
      {
        "title": "4. Managing Global State",
        "url": "./React Front To Back 2023/03. Components, Props & State/4. Managing Global State.mp4"
      },
      {
        "title": "5. Card Component & Conditional Styles",
        "url": "./React Front To Back 2023/03. Components, Props & State/5. Card Component & Conditional Styles.mp4"
      },
      {
        "title": "6. Events & Prop Drilling",
        "url": "./React Front To Back 2023/03. Components, Props & State/6. Events & Prop Drilling.mp4"
      },
      {
        "title": "7. FeedbackStats Component & Reactivity",
        "url": "./React Front To Back 2023/03. Components, Props & State/7. FeedbackStats Component & Reactivity.mp4"
      }
    ]
  },
  {
    "title": "04. Forms, Validation & Simple Animation",
    "lessons": [
      {
        "title": "1. Form Input & State",
        "url": "./React Front To Back 2023/04. Forms, Validation & Simple Animation/1. Form Input & State.mp4"
      },
      {
        "title": "2. Custom Button Component",
        "url": "./React Front To Back 2023/04. Forms, Validation & Simple Animation/2. Custom Button Component.mp4"
      },
      {
        "title": "3. Real-Time Validation",
        "url": "./React Front To Back 2023/04. Forms, Validation & Simple Animation/3. Real-Time Validation.mp4"
      },
      {
        "title": "4. Rating Select Component",
        "url": "./React Front To Back 2023/04. Forms, Validation & Simple Animation/4. Rating Select Component.mp4"
      },
      {
        "title": "5. Add Feedback",
        "url": "./React Front To Back 2023/04. Forms, Validation & Simple Animation/5. Add Feedback.mp4"
      },
      {
        "title": "6. Fade Animation With Framer Motion",
        "url": "./React Front To Back 2023/04. Forms, Validation & Simple Animation/6. Fade Animation With Framer Motion.mp4"
      }
    ]
  },
  {
    "title": "05. Creating Routes & Links",
    "lessons": [
      {
        "title": "1. Creating Routes (React Router 5)",
        "url": "./React Front To Back 2023/05. Creating Routes & Links/1. Creating Routes (React Router 5).mp4"
      },
      {
        "title": "2. Upgrading To React Router 6",
        "url": "./React Front To Back 2023/05. Creating Routes & Links/2. Upgrading To React Router 6.mp4"
      },
      {
        "title": "3. Creating Links (v5 & v6)",
        "url": "./React Front To Back 2023/05. Creating Routes & Links/3. Creating Links (v5 & v6).mp4"
      },
      {
        "title": "4. NavLink & useParams",
        "url": "./React Front To Back 2023/05. Creating Routes & Links/4. NavLink & useParams.mp4"
      },
      {
        "title": "5. Navigate & Nested Routes",
        "url": "./React Front To Back 2023/05. Creating Routes & Links/5. Navigate & Nested Routes.mp4"
      }
    ]
  },
  {
    "title": "06. Context API, useContext Hook & Deployment",
    "lessons": [
      {
        "title": "1. Create a Context & Provider",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/1. Create a Context & Provider.mp4"
      },
      {
        "title": "2. Get Global State With The useContext Hook",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/2. Get Global State With The useContext Hook.mp4"
      },
      {
        "title": "3. Moving Functions To Context",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/3. Moving Functions To Context.mp4"
      },
      {
        "title": "4. Edit Feedback Event",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/4. Edit Feedback Event.mp4"
      },
      {
        "title": "5. Side Effects With useEffect",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/5. Side Effects With useEffect.mp4"
      },
      {
        "title": "6. Update Feedback Item",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/6. Update Feedback Item.mp4"
      },
      {
        "title": "7. Deploy To Netlify",
        "url": "./React Front To Back 2023/06. Context API, useContext Hook & Deployment/7. Deploy To Netlify.mp4"
      }
    ]
  },
  {
    "title": "07. APIs & HTTP Requests",
    "lessons": [
      {
        "title": "1. APIs & Requests Explained",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/1. APIs & Requests Explained.mp4"
      },
      {
        "title": "2. Setting Up JSON-Server Mock Backend",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/2. Setting Up JSON-Server Mock Backend.mp4"
      },
      {
        "title": "3. Run Client & Server With Concurrently",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/3. Run Client & Server With Concurrently.mp4"
      },
      {
        "title": "4. Fetch Data From JSON-Server Backend",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/4. Fetch Data From JSON-Server Backend.mp4"
      },
      {
        "title": "5. Spinner Component",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/5. Spinner Component.mp4"
      },
      {
        "title": "6. Add Feedback & Setting a Proxy",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/6. Add Feedback & Setting a Proxy.mp4"
      },
      {
        "title": "7. Update & Delete From JSON-Server",
        "url": "./React Front To Back 2023/07. APIs & HTTP Requests/7. Update & Delete From JSON-Server.mp4"
      }
    ]
  },
  {
    "title": "08. GitHub Finder Project Start",
    "lessons": [
      {
        "title": "1. GitHub Finder Project Intro",
        "url": "./React Front To Back 2023/08. GitHub Finder Project Start/1. GitHub Finder Project Intro.mp4"
      },
      {
        "title": "2. Setup Tailwind & Daisy UI",
        "url": "./React Front To Back 2023/08. GitHub Finder Project Start/2. Setup Tailwind & Daisy UI.mp4"
      },
      {
        "title": "3. Navbar Component",
        "url": "./React Front To Back 2023/08. GitHub Finder Project Start/3. Navbar Component.mp4"
      },
      {
        "title": "4. Footer Component",
        "url": "./React Front To Back 2023/08. GitHub Finder Project Start/4. Footer Component.mp4"
      },
      {
        "title": "5. Pages & Routes",
        "url": "./React Front To Back 2023/08. GitHub Finder Project Start/5. Pages & Routes.mp4"
      }
    ]
  },
  {
    "title": "09. Working With The GitHub API",
    "lessons": [
      {
        "title": "1. Github API & Getting Token",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/1. Github API & Getting Token.mp4"
      },
      {
        "title": "10. Clear Users",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/10. Clear Users.mp4"
      },
      {
        "title": "2. UserList Component",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/2. UserList Component.mp4"
      },
      {
        "title": "3. Loading Spinner",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/3. Loading Spinner.mp4"
      },
      {
        "title": "4. Display Users",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/4. Display Users.mp4"
      },
      {
        "title": "5. Setup Github Context",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/5. Setup Github Context.mp4"
      },
      {
        "title": "6. Reducers & useReducer Hook",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/6. Reducers & useReducer Hook.mp4"
      },
      {
        "title": "7. Clean Up Fetch Users",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/7. Clean Up Fetch Users.mp4"
      },
      {
        "title": "8. User Search Component",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/8. User Search Component.mp4"
      },
      {
        "title": "9. Search Users",
        "url": "./React Front To Back 2023/09. Working With The GitHub API/9. Search Users.mp4"
      }
    ]
  },
  {
    "title": "10. User Profile & Alerts",
    "lessons": [
      {
        "title": "1. Alert Context & Reducer",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/1. Alert Context & Reducer.mp4"
      },
      {
        "title": "2. Alert Component",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/2. Alert Component.mp4"
      },
      {
        "title": "3. Get Single User",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/3. Get Single User.mp4"
      },
      {
        "title": "4. User Profile Top",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/4. User Profile Top.mp4"
      },
      {
        "title": "5. User Profile Stats",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/5. User Profile Stats.mp4"
      },
      {
        "title": "6. Get User Repos",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/6. Get User Repos.mp4"
      },
      {
        "title": "7. Repo Items",
        "url": "./React Front To Back 2023/10. User Profile & Alerts/7. Repo Items.mp4"
      }
    ]
  },
  {
    "title": "11. Refactoring Context & Actions",
    "lessons": [
      {
        "title": "1. Move SearchUsers To Actions File",
        "url": "./React Front To Back 2023/11. Refactoring Context & Actions/1. Move SearchUsers To Actions File.mp4"
      },
      {
        "title": "2. Move getUser To Actions File",
        "url": "./React Front To Back 2023/11. Refactoring Context & Actions/2. Move getUser To Actions File.mp4"
      },
      {
        "title": "3. Cleaning Up Our Actions & Axios",
        "url": "./React Front To Back 2023/11. Refactoring Context & Actions/3. Cleaning Up Our Actions & Axios.mp4"
      },
      {
        "title": "4. Deploy To Vercel",
        "url": "./React Front To Back 2023/11. Refactoring Context & Actions/4. Deploy To Vercel.mp4"
      }
    ]
  },
  {
    "title": "12. More Advanced React Hooks",
    "lessons": [
      {
        "title": "1. Section Intro",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/1. Section Intro.mp4"
      },
      {
        "title": "2. useRef Example 1 - Create DOM Reference",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/2. useRef Example 1 - Create DOM Reference.mp4"
      },
      {
        "title": "3. useRef Example 2 - Get Previous State",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/3. useRef Example 2 - Get Previous State.mp4"
      },
      {
        "title": "4. useRef Example 3 - Memory Leak Error Fix",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/4. useRef Example 3 - Memory Leak Error Fix.mp4"
      },
      {
        "title": "5. useMemo Example",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/5. useMemo Example.mp4"
      },
      {
        "title": "6. useCallback Example",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/6. useCallback Example.mp4"
      },
      {
        "title": "7. Custom Hook 1 - useFetch",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/7. Custom Hook 1 - useFetch.mp4"
      },
      {
        "title": "8. Custom Hook 2 - useLocalStorage",
        "url": "./React Front To Back 2023/12. More Advanced React Hooks/8. Custom Hook 2 - useLocalStorage.mp4"
      }
    ]
  },
  {
    "title": "13. House Marketplace Project Start",
    "lessons": [
      {
        "title": "1. House Marketplace Project Intro",
        "url": "./React Front To Back 2023/13. House Marketplace Project Start/1. House Marketplace Project Intro.mp4"
      },
      {
        "title": "2. App & FIrebase Setup",
        "url": "./React Front To Back 2023/13. House Marketplace Project Start/2. App & FIrebase Setup.mp4"
      },
      {
        "title": "3. Enable Authentication & Create Rules",
        "url": "./React Front To Back 2023/13. House Marketplace Project Start/3. Enable Authentication & Create Rules.mp4"
      },
      {
        "title": "4. Dummy Data & Indexes",
        "url": "./React Front To Back 2023/13. House Marketplace Project Start/4. Dummy Data & Indexes.mp4"
      },
      {
        "title": "5. Pages & Routes",
        "url": "./React Front To Back 2023/13. House Marketplace Project Start/5. Pages & Routes.mp4"
      },
      {
        "title": "6. Navbar Component",
        "url": "./React Front To Back 2023/13. House Marketplace Project Start/6. Navbar Component.mp4"
      }
    ]
  },
  {
    "title": "14. Firebase Authentication & Profile",
    "lessons": [
      {
        "title": "1. Sign In & Sign Up Forms",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/1. Sign In & Sign Up Forms.mp4"
      },
      {
        "title": "10. Google OAuth",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/10. Google OAuth.mp4"
      },
      {
        "title": "2. Register User",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/2. Register User.mp4"
      },
      {
        "title": "3. Save User To Firestore",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/3. Save User To Firestore.mp4"
      },
      {
        "title": "4. User Sign In",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/4. User Sign In.mp4"
      },
      {
        "title": "5. Alerts With React Toastify",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/5. Alerts With React Toastify.mp4"
      },
      {
        "title": "6. User Logout",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/6. User Logout.mp4"
      },
      {
        "title": "7. Display & Update User Details",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/7. Display & Update User Details.mp4"
      },
      {
        "title": "8. PrivateRoute Component & useAuthStatus Hook",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/8. PrivateRoute Component & useAuthStatus Hook.mp4"
      },
      {
        "title": "9. Forgot Password Page",
        "url": "./React Front To Back 2023/14. Firebase Authentication & Profile/9. Forgot Password Page.mp4"
      }
    ]
  },
  {
    "title": "15. Get & Create Listings",
    "lessons": [
      {
        "title": "1. Explore Page",
        "url": "./React Front To Back 2023/15. Get & Create Listings/1. Explore Page.mp4"
      },
      {
        "title": "10. Quick Note & Change",
        "url": "./React Front To Back 2023/15. Get & Create Listings/10. Quick Note & Change.mp4"
      },
      {
        "title": "2. Fetch Listings From Firebase",
        "url": "./React Front To Back 2023/15. Get & Create Listings/2. Fetch Listings From Firebase.mp4"
      },
      {
        "title": "3. Listing Item Component",
        "url": "./React Front To Back 2023/15. Get & Create Listings/3. Listing Item Component.mp4"
      },
      {
        "title": "4. Offers Page",
        "url": "./React Front To Back 2023/15. Get & Create Listings/4. Offers Page.mp4"
      },
      {
        "title": "5. Start Create Listing Page",
        "url": "./React Front To Back 2023/15. Get & Create Listings/5. Start Create Listing Page.mp4"
      },
      {
        "title": "6. Create Listing Form",
        "url": "./React Front To Back 2023/15. Get & Create Listings/6. Create Listing Form.mp4"
      },
      {
        "title": "7. Get Coords With Geocoding API",
        "url": "./React Front To Back 2023/15. Get & Create Listings/7. Get Coords With Geocoding API.mp4"
      },
      {
        "title": "8. Uploading Images To FIrebase",
        "url": "./React Front To Back 2023/15. Get & Create Listings/8. Uploading Images To FIrebase.mp4"
      },
      {
        "title": "9. Save Listings To Firestore",
        "url": "./React Front To Back 2023/15. Get & Create Listings/9. Save Listings To Firestore.mp4"
      }
    ]
  },
  {
    "title": "16. Single Listings, Map, Slider & Edit",
    "lessons": [
      {
        "title": "1. Fetch Single Listing",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/1. Fetch Single Listing.mp4"
      },
      {
        "title": "10. Edit Listing",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/10. Edit Listing.mp4"
      },
      {
        "title": "11. Clear Up Console Warnings",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/11. Clear Up Console Warnings.mp4"
      },
      {
        "title": "12. Deploy To Vercel",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/12. Deploy To Vercel.mp4"
      },
      {
        "title": "2. Listing Details",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/2. Listing Details.mp4"
      },
      {
        "title": "3. Contact Landlord Page",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/3. Contact Landlord Page.mp4"
      },
      {
        "title": "4. Leaflet Map",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/4. Leaflet Map.mp4"
      },
      {
        "title": "5. Listings Page Slider",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/5. Listings Page Slider.mp4"
      },
      {
        "title": "6. Explore Slider",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/6. Explore Slider.mp4"
      },
      {
        "title": "7. Profile Listings & Delete",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/7. Profile Listings & Delete.mp4"
      },
      {
        "title": "8. Load More Pagination",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/8. Load More Pagination.mp4"
      },
      {
        "title": "9. Edit Listing Icon",
        "url": "./React Front To Back 2023/16. Single Listings, Map, Slider & Edit/9. Edit Listing Icon.mp4"
      }
    ]
  },
  {
    "title": "17. MERN Project Start, API & Backend Authentication",
    "lessons": [
      {
        "title": "1. Project Intro",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/1. Project Intro.mp4"
      },
      {
        "title": "10. Login & Create JWT",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/10. Login & Create JWT.mp4"
      },
      {
        "title": "11. Protect Routes & Authentication",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/11. Protect Routes & Authentication.mp4"
      },
      {
        "title": "2. What Is The MERN Stack",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/2. What Is The MERN Stack.mp4"
      },
      {
        "title": "3. MongoDB Setup",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/3. MongoDB Setup.mp4"
      },
      {
        "title": "4. Server File Stucture",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/4. Server File Stucture.mp4"
      },
      {
        "title": "5. Basic Express Server Setup",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/5. Basic Express Server Setup.mp4"
      },
      {
        "title": "6. Add Routes & Controller",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/6. Add Routes & Controller.mp4"
      },
      {
        "title": "7. Error & Exception Handling",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/7. Error & Exception Handling.mp4"
      },
      {
        "title": "8. Connect To The Database",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/8. Connect To The Database.mp4"
      },
      {
        "title": "9. Register User",
        "url": "./React Front To Back 2023/17. MERN Project Start, API & Backend Authentication/9. Register User.mp4"
      }
    ]
  },
  {
    "title": "18. Frontend Authentication",
    "lessons": [
      {
        "title": "1. Frontend Folder Setup",
        "url": "./React Front To Back 2023/18. Frontend Authentication/1. Frontend Folder Setup.mp4"
      },
      {
        "title": "2. Header & Initial Pages",
        "url": "./React Front To Back 2023/18. Frontend Authentication/2. Header & Initial Pages.mp4"
      },
      {
        "title": "3. Home, Login & Register UI",
        "url": "./React Front To Back 2023/18. Frontend Authentication/3. Home, Login & Register UI.mp4"
      },
      {
        "title": "4. Redux Setup & Auth Slice",
        "url": "./React Front To Back 2023/18. Frontend Authentication/4. Redux Setup & Auth Slice.mp4"
      },
      {
        "title": "5. Hook Register Form To Redux",
        "url": "./React Front To Back 2023/18. Frontend Authentication/5. Hook Register Form To Redux.mp4"
      },
      {
        "title": "6. Register User",
        "url": "./React Front To Back 2023/18. Frontend Authentication/6. Register User.mp4"
      },
      {
        "title": "7. Logout User",
        "url": "./React Front To Back 2023/18. Frontend Authentication/7. Logout User.mp4"
      },
      {
        "title": "8. User Login",
        "url": "./React Front To Back 2023/18. Frontend Authentication/8. User Login.mp4"
      }
    ]
  },
  {
    "title": "19. Tickets Functionality",
    "lessons": [
      {
        "title": "1. Ticket Model & Routes",
        "url": "./React Front To Back 2023/19. Tickets Functionality/1. Ticket Model & Routes.mp4"
      },
      {
        "title": "10. Single Ticket Display",
        "url": "./React Front To Back 2023/19. Tickets Functionality/10. Single Ticket Display.mp4"
      },
      {
        "title": "11. Close Ticket Functionality",
        "url": "./React Front To Back 2023/19. Tickets Functionality/11. Close Ticket Functionality.mp4"
      },
      {
        "title": "2. Get & Create Tickets (Backend)",
        "url": "./React Front To Back 2023/19. Tickets Functionality/2. Get & Create Tickets (Backend).mp4"
      },
      {
        "title": "3. Single Ticket, Update & Delete (Backend)",
        "url": "./React Front To Back 2023/19. Tickets Functionality/3. Single Ticket, Update & Delete (Backend).mp4"
      },
      {
        "title": "4. Route Guard",
        "url": "./React Front To Back 2023/19. Tickets Functionality/4. Route Guard.mp4"
      },
      {
        "title": "5. New Ticket Form",
        "url": "./React Front To Back 2023/19. Tickets Functionality/5. New Ticket Form.mp4"
      },
      {
        "title": "6. Add Tickets To Redux",
        "url": "./React Front To Back 2023/19. Tickets Functionality/6. Add Tickets To Redux.mp4"
      },
      {
        "title": "7. Create Ticket Functionality",
        "url": "./React Front To Back 2023/19. Tickets Functionality/7. Create Ticket Functionality.mp4"
      },
      {
        "title": "8. Fetch Tickets From Backend",
        "url": "./React Front To Back 2023/19. Tickets Functionality/8. Fetch Tickets From Backend.mp4"
      },
      {
        "title": "9. Listing Tickets In UI",
        "url": "./React Front To Back 2023/19. Tickets Functionality/9. Listing Tickets In UI.mp4"
      }
    ]
  },
  {
    "title": "20. Notes Functionality & Deploy",
    "lessons": [
      {
        "title": "1. Notes Backend",
        "url": "./React Front To Back 2023/20. Notes Functionality & Deploy/1. Notes Backend.mp4"
      },
      {
        "title": "2. Fetch Notes Through Redux",
        "url": "./React Front To Back 2023/20. Notes Functionality & Deploy/2. Fetch Notes Through Redux.mp4"
      },
      {
        "title": "3. Display Notes",
        "url": "./React Front To Back 2023/20. Notes Functionality & Deploy/3. Display Notes.mp4"
      },
      {
        "title": "4. Note Form Modal",
        "url": "./React Front To Back 2023/20. Notes Functionality & Deploy/4. Note Form Modal.mp4"
      },
      {
        "title": "5. Submit a Note",
        "url": "./React Front To Back 2023/20. Notes Functionality & Deploy/5. Submit a Note.mp4"
      },
      {
        "title": "6. Deploy To Heroku",
        "url": "./React Front To Back 2023/20. Notes Functionality & Deploy/6. Deploy To Heroku.mp4"
      }
    ]
  }
]

  // Step 2: Load saved progress
  const savedProgress = JSON.parse(localStorage.getItem("courseProgress")) || {
    currentModule: 0,
    currentLessonTitle: modules[0].lessons[0].title,
    completedLessons: [],
  };

  const [activeModule, setActiveModule] = useState(savedProgress.currentModule);
  const [currentVideo, setCurrentVideo] = useState(() => {
    const lesson =
      modules[savedProgress.currentModule].lessons.find(
        (l) => l.title === savedProgress.currentLessonTitle
      ) || modules[0].lessons[0];
    return lesson;
  });
  const [completedLessons, setCompletedLessons] = useState(
    savedProgress.completedLessons
  );

  const videoRef = useRef(null);

  // 🧠 Helper: Get current indexes
  const currentLessonIndex = modules[activeModule].lessons.findIndex(
    (lesson) => lesson.title === currentVideo.title
  );

  // 🧩 Save to localStorage
  const saveProgress = (newData) => {
    localStorage.setItem("courseProgress", JSON.stringify(newData));
  };

  // ✅ Handle lesson change
  const handleVideoChange = (lesson, moduleIndex) => {
    setActiveModule(moduleIndex);
    setCurrentVideo(lesson);
    saveProgress({
      currentModule: moduleIndex,
      currentLessonTitle: lesson.title,
      completedLessons,
    });
    // 🧭 Auto-scroll sidebar
    setTimeout(() => {
      const el = document.getElementById(`lesson-${moduleIndex}-${lesson.title}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  // ✅ Mark lesson complete on video end
  const handleVideoEnd = () => {
    const lessonId = `${activeModule}-${currentVideo.title}`;
    if (!completedLessons.includes(lessonId)) {
      const updated = [...completedLessons, lessonId];
      setCompletedLessons(updated);
      saveProgress({
        currentModule: activeModule,
        currentLessonTitle: currentVideo.title,
        completedLessons: updated,
      });
    }
  };

  // 🧭 Next/Previous Navigation
  const handleNext = () => {
    const lessons = modules[activeModule].lessons;
    if (currentLessonIndex < lessons.length - 1) {
      // Next lesson in same module
      handleVideoChange(lessons[currentLessonIndex + 1], activeModule);
    } else if (activeModule < modules.length - 1) {
      // Go to first lesson of next module
      handleVideoChange(modules[activeModule + 1].lessons[0], activeModule + 1);
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      // Previous lesson in same module
      handleVideoChange(
        modules[activeModule].lessons[currentLessonIndex - 1],
        activeModule
      );
    } else if (activeModule > 0) {
      // Go to last lesson of previous module
      const prevModule = activeModule - 1;
      const lastLesson = modules[prevModule].lessons.length - 1;
      handleVideoChange(modules[prevModule].lessons[lastLesson], prevModule);
    }
  };

  // 💾 Persist progress on state change
  useEffect(() => {
    saveProgress({
      currentModule: activeModule,
      currentLessonTitle: currentVideo.title,
      completedLessons,
    });
  }, [activeModule, currentVideo, completedLessons]);

  // 🧮 Compute overall progress
  const totalLessons = modules.reduce(
    (sum, module) => sum + module.lessons.length,
    0
  );
  const completedCount = completedLessons.length;
  const overallProgress = Math.round((completedCount / totalLessons) * 100);

  return (
    <section className="course-details">
      <div className="">
        <div className="row gy-4">
          {/* Sidebar */}
          <div className="col-xl-4">
            <div className="course-details__sidebar bg-white p-24 rounded-2xl shadow-sm">
              {/* <h5 className="mb-3">Overall Progress</h5>
              <div className="progress mb-4" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted mb-4">
                {completedCount} of {totalLessons} lessons completed (
                {overallProgress}%)
              </p> */}

              <div
                className="accordion common-accordion style-three"
                id="courseAccordion"
              >
                {modules.map((module, moduleIndex) => {
                  const completedInModule = module.lessons.filter((lesson) =>
                    completedLessons.includes(
                      `${moduleIndex}-${lesson.title}`
                    )
                  ).length;
                  const moduleProgress = Math.round(
                    (completedInModule / module.lessons.length) * 100
                  );

                  return (
                    <div key={moduleIndex} className="accordion-item mb-3">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            activeModule === moduleIndex ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${moduleIndex}`}
                          aria-expanded={activeModule === moduleIndex}
                          onClick={() =>
                            setActiveModule(
                              activeModule === moduleIndex ? null : moduleIndex
                            )
                          }
                        >
                          {module.title}
                          <span className="ms-auto text-sm text-muted">
                            {completedInModule}/{module.lessons.length}
                          </span>
                        </button>
                      </h2>

                      <div
                        id={`collapse-${moduleIndex}`}
                        className={`accordion-collapse collapse ${
                          activeModule === moduleIndex ? "show" : ""
                        }`}
                        data-bs-parent="#courseAccordion"
                      >
                        <div className="accordion-body p-0 bg-main-25">
                          <div className="px-3 py-2">
                            <div
                              className="progress mb-2"
                              style={{ height: "6px" }}
                            >
                              <div
                                className="progress-bar bg-info"
                                style={{ width: `${moduleProgress}%` }}
                              ></div>
                            </div>
                          </div>

                          {module.lessons.map((lesson, lessonIndex) => {
                            const lessonId = `${moduleIndex}-${lesson.title}`;
                            const isCompleted =
                              completedLessons.includes(lessonId);
                            return (
                              <div
                                id={`lesson-${moduleIndex}-${lesson.title}`}
                                key={lessonIndex}
                                className={`curriculam-item ${
                                  currentVideo.title === lesson.title
                                    ? "bg-main-50"
                                    : ""
                                }`}
                              >
                                <Link
                                  to="#"
                                  onClick={() =>
                                    handleVideoChange(lesson, moduleIndex)
                                  }
                                  className="text-neutral-700 fw-medium hover-text-main-600 d-block py-2 px-3"
                                >
                                  <span className="flex-align gap-12">
                                    <i
                                      className={`text-xl d-flex ${
                                        isCompleted
                                          ? "ph-check-circle text-success"
                                          : "ph-play-circle"
                                      }`}
                                    />
                                    <span className="text-line-1">
                                      {lesson.title}
                                    </span>
                                  </span>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Video Player + Controls */}
          <div className="col-xl-8">
            <div className="course-details__content pt-12 pe-12">
              {/* 🆕 Overall progress above video */}
              <div className="mb-4">
                <div className="flex">

                <h5 className="mb-2">Course Progress</h5>
                <div className="text-muted">
                  {completedCount}/{totalLessons} lessons completed (
                  {overallProgress}%)
                </div>
                </div>

                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: `${overallProgress}%` }}
                  ></div>
                </div>
                
              </div>

              <video
                ref={videoRef}
                key={currentVideo.url}
                className="player w-100 rounded-lg"
                controls
                onEnded={handleVideoEnd}
              >
                <source src={currentVideo.url} type="video/mp4" />
              </video>

              <div className="mt-4 d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-secondary"
                  onClick={handlePrevious}
                  disabled={activeModule === 0 && currentLessonIndex === 0}
                >
                  ⏪ Previous
                </button>
                <h4 className="text-center flex-grow-1">
                  {currentVideo.title}
                </h4>
                <button
                  className="btn btn-success"
                  onClick={handleNext}
                  disabled={
                    activeModule === modules.length - 1 &&
                    currentLessonIndex ===
                      modules[activeModule].lessons.length - 1
                  }
                >
                  Next ⏩
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonDetails;
