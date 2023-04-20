import axios from 'axios';
import {databaseURL} from '../../../ServerURLs';
import {queryStructure} from '../../QueryStructures';
import {tranferUserDataToUsableUserData} from '../../DataFormater/formatUserData';

const queryUserInforByEmail = async (email: string, token: string) => {
  const response = await axios.post(
    `${databaseURL}:runQuery`,
    queryStructure({
      collectionId: 'users',
      queryBy: 'email',
      operator: 'EQUAL',
      value: email,
    }),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const id = response.data[0].document.name.split('/').at(-1);
  return {
    id,
    data: tranferUserDataToUsableUserData(response.data[0].document.fields),
  };
};

export {queryUserInforByEmail};
