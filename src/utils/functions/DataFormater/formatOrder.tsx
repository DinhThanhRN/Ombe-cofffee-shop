import {Order} from '../../../interfaces/Order';
import {formatTypeField} from '../DataFormater/formatTypeField';

const transferOrderDataToInputFormat = ({
  name,
  quantity,
  size,
  createdAt,
  status,
  total,
}: Order) => {
  return {
    fields: {
      name: formatTypeField(name),
      quantity: formatTypeField(quantity),
      size: formatTypeField(size),
      createAt: formatTypeField(createdAt),
      status: formatTypeField(status),
      total: formatTypeField(total),
    },
  };
};

export {transferOrderDataToInputFormat};
