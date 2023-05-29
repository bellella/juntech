const SET_INQUIRY_MODAL = 'SET_INQUIRY_MODAL';
const SET_PRODUCT_MODAL = 'SET_PRODUCT_MODAL';

export default {
  state: () => ({
    inquiryModal: {
      show: false,
      product: null
    },
    productModal: {
      show: false,
      product: null
    }
  }),
  mutations: {
    [SET_INQUIRY_MODAL](state, payload) {
      state.inquiryModal = {...state.inquiryModal, ...payload};
    },
    [SET_PRODUCT_MODAL](state, payload) {
      state.productModal = {...state.productModal, ...payload};
    },
  },
  actions: {
    setInquiryModal(storeContext, payload) {
      storeContext.commit(SET_INQUIRY_MODAL, payload);
    },
    setProductModal(storeContext, payload) {
      storeContext.commit(SET_PRODUCT_MODAL, payload);
    },
  },
  getters: {
    inquiryModal(state) {
      return state.inquiryModal;
    },
    productModal(state) {
      return state.productModal;
    },
  }
}
