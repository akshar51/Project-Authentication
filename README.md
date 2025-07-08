# Project Authentication with Firebase, Redux Toolkit & React

## Overview

This project is a complete authentication and employee data management system using **React**, **Firebase Authentication**, **Cloud Firestore**, and **Redux Toolkit**. Users can sign up, sign in, and then create, read, update, and delete employee records from a Firestore database.

---

## Features

* Firebase Authentication (Sign-up & Sign-in)
* Secure form handling
* CRUD operations with Firestore (Employee data)
* Redux Toolkit for state management
* Bootstrap for UI styling
* React Router for navigation

---

## Folder Structure

```
├── src/
│   ├── app/
│   │   └── store.js
│   ├── components/
│   │   ├── Form.js
│   │   ├── SignIn.js
│   │   └── SignUp.js
│   ├── features/
│   │   └── book/
│   │       └── bookSlice.js
│   ├── firebase/
│   │   └── config.js
│   ├── App.js
│   └── main.jsx
```

---

## Firebase Setup

**Location:** `firebase/config.js`

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  projectId: "<your-project-id>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-msg-sender-id>",
  appId: "<your-app-id>"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

---

## Redux Toolkit Configuration

**Location:** `features/book/bookSlice.js`

### Initial State

```js
const initialState = {
  book: [],
  loading: false,
  error: null,
};
```

### Async Thunks:

* `addBook`
* `fetchBook`
* `deleteBook`
* `updateBook`

### Reducers:

Handles all loading, success, and error states for each CRUD operation.

---

## Store Setup

**Location:** `app/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../features/book/bookSlice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
```

---

## Routing & App Initialization

**Location:** `App.js`

```js
import React from 'react';
import Form from './components/Form';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default App;
```

**Location:** `main.jsx`

```js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
```

---

## Pages

### 1. **SignUp Page**

**Location:** `components/SignUp.js`

* Captures email and password
* Uses `createUserWithEmailAndPassword()`
* On success, navigates to sign-in page

### 2. **SignIn Page**

**Location:** `components/SignIn.js`

* Authenticates users using `signInWithEmailAndPassword()`
* On success, redirects to the employee form

### 3. **Employee Form Page**

**Location:** `components/Form.js`

* Displays a form to add or update employee data (name, email, password)
* Shows existing records in a table with **Edit** and **Delete** buttons
* Uses Redux actions to fetch and mutate data

---

## UI/UX

* Uses Bootstrap for responsive form and table layout
* Alerts and navigation provided for better user experience

---

## Installation

```bash
git clone https://github.com/akshar51/Project-Authentication.git
cd Project-Authentication
npm install
```

### Set up Firebase

1. Create Firebase project
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Copy your config to `firebase/config.js`

### Run App

```bash
npm start
```

---

## Contributions

Feel free to fork this repo and raise pull requests for improvements.

---

## License

This project is licensed under the MIT License.
