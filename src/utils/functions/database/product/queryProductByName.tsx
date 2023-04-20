import axios from 'axios';
import {databaseURL} from '../../../ServerURLs';
import {queryStructure} from '../../QueryStructures';
import {tranferProductDataToUsableProductData} from '../../DataFormater/formatProductData';

const queryProductByName = async (name: string, token: string) => {
  const response = await axios.post(
    `${databaseURL}:runQuery`,
    queryStructure({
      collectionId: 'products',
      queryBy: 'name',
      operator: 'EQUAL',
      value: name,
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
    data: tranferProductDataToUsableProductData(
      response.data[0].document.fields,
    ),
  };
};

export {queryProductByName};
