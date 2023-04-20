import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../reducers/store';
import {API_KEY} from '../../config/appConfigure';
import {login} from '../../reducers/authentication';

const freshenToken = async (refreshToken: string) => {
  return await axios.post(
    `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  );
};

export {freshenToken};
