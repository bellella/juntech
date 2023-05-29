import axiosApi from '../service/axiosApi';

export default function({ $axios }, inject) {
  axiosApi.setApi($axios);
  //inject("productApi", new ProductService($axios));
}
 