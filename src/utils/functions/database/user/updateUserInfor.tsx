import axios from 'axios';
import {UserData} from '../../../../interfaces/User';
import {databaseURL} from '../../../ServerURLs';
import {tranferUserDataToUserInputFormat} from '../../DataFormater/formatUserData';

const updateUserInfor = async (user: UserData, token: string) => {
  const response = await axios.patch(
    `${databaseURL}/users/${user.id}`,
    tranferUserDataToUserInputFormat(user.data),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};
export {updateUserInfor};
