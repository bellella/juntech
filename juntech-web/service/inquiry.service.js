import AxiosApi from './axiosApi'

class InquiryService {
  constructor() {
    this.axiosApi = AxiosApi
    this.routes = {
      submitInquiry: '/inquiry'
    }
  }

  submitInquiry(inquiry) {
    return this.axiosApi.POST(this.routes.submitInquiry, { inquiry });
  }
}

export default new InquiryService()
