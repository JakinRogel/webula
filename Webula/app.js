// Access the API key from the environment variable
const apiKey = "48e6c1bf4e2e5fb77648e7bde2f72e8d7549d6d41f621baa1b2c8717ebb139b5";

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


