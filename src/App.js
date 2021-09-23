import "./App.css";
import { useState, useEffect } from "react";
import db from "./firebase";
import { collection, onSnapshot } from "@firebase/firestore";

function App() {
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snap) =>
      snap.docs.forEach((doc) => console.log(doc.data()))
    );
  }, []);
  return (
    <div className="App">
      <h1>Xavier Packaging System</h1>
      <div id="Login">
        <h3>Credentials</h3>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Enter username ... "
        />
        <label htmlFor="user">Password</label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Enter password ... "
        />
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default App;
