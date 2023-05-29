import AxiosApi from './axiosApi'

class ProductService {
  constructor() {
    this.axiosApi = AxiosApi
    this.routes = {
      getProductsAll: '/product',
      getProducts: '/product/category/:categoryId',
      getCategories: '/category',
      searchProducts: '/product/search',
    }
  }

  getProductsAll() {
    return this.axiosApi.GET(this.routes.getProductsAll)
  }

  getProducts(categoryId) {
    return this.axiosApi.GET(this.routes.getProducts, { categoryId })
  }

  getCategories() {
    return this.axiosApi.GET(this.routes.getCategories)
  }

  searchProducts(keyword) {
    return this.axiosApi.POST(this.routes.searchProducts, { keyword })
  }
}

export default new ProductService()
