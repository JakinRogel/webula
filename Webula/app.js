// Access the API key from the environment variable
const apiKey = process.env.API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${apiKey}`
  }
};

fetch('https://api.webflow.com/v2/sites', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


