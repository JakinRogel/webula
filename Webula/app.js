// Import the 'dotenv' module to load environment variables from a '.env' file
require("dotenv").config();

// Import the 'axios' module for making HTTP requests
const axios = require("axios");

// Access the API key from the environment variable
const apiKey = process.env.API_KEY;

// API endpoint
const apiUrl = "https://api.example.com/data";

// Make a GET request to the API endpoint with the API key
axios
  .get(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`, // Using Bearer token authorization
    },
  })
  .then((response) => {
    console.log("API response:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
