import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App hosted on S3</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple React App just to show how it is to be publised in an S3
          Bucket.
        </p>{" "}
        <p>The buddy service is included for CICD.</p>
        <p>
          so when i change the page it will be automaticly compiled and
          published.
        </p>
        <p>Welcome to all the people TechWorks</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="        https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instructions for this little project.
        </a>
      </header>
    </div>
  );
}

export default App;
