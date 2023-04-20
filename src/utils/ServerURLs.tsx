const API_KEY = 'AIzaSyAm30ghChvrQ_oHORGgIZPCLqoWSCMrJ9s';

const databaseURL =
  'https://firestore.googleapis.com/v1/projects/ombe-coffeee-shop-app/databases/(default)/documents';

const authenticateURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export {databaseURL, authenticateURL};
