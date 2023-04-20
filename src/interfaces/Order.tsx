import {OrderStatus} from '../utils/types/OrderStatus';
import {ProductSize} from '../utils/types/ProductSize';

interface Order {
  name: string;
  quantity: number;
  size: ProductSize;
  createdAt: string;
  status: OrderStatus;
  total: number;
}
interface OrderData {
  id: string;
  data: Order;
}

export type {OrderData, Order};
