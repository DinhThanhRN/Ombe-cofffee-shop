import axios from 'axios';
import {databaseURL} from '../../../ServerURLs';
import {queryManyStructure} from '../../QueryStructures';
import {tranferProductDataToUsableProductData} from '../../DataFormater/formatProductData';

const queryProducts = async (values: Array<any>, token: string) => {
  const response = await axios.post(
    `${databaseURL}:runQuery`,
    queryManyStructure({
      collectionId: 'products',
      queryBy: 'name',
      operator: 'IN',
      value: values,
    }),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const result = response.data.map((item: any) => {
    const id = item.document.name.split('/').at(-1);
    return {
      id,
      data: tranferProductDataToUsableProductData(item.document.fields),
    };
  });

  return result;
};

export {queryProducts};
