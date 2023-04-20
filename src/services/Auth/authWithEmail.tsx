import axios from 'axios';
import {API_KEY} from '../../config/appConfigure';

const authenticate = async (mode: string, email: string, password: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  const idToken = response.data.idToken;
  return idToken;
};

const signUpWithEmail = async (email: string, password: string) => {
  return await authenticate('signUp', email, password);
};
const signInWithEmail = async (email: string, password: string) => {
  return await authenticate('signInWithPassword', email, password);
};

const resetPasswordWithEmail = async (email: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}
  `;
  const response = await axios.post(url, {
    requestType: 'PASSWORD_RESET',
    email: email,
  });
  return response;
};

export {signInWithEmail, signUpWithEmail, resetPasswordWithEmail};
