<template>
  <button @click="openInquiryModal"
  :class="{ 'main_btn': true, 'main_btn_hover' : hoverEffect, 'main_btn_sm': isSmall}">문의하기</button>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['hoverEffect', 'isSmall', 'product'],
  methods: {
    ...mapActions({
      setInquiryModal: 'modal/setInquiryModal'
    }),
    openInquiryModal(event) {
      event.stopPropagation();
      this.setInquiryModal({show: true, product: this.product});
    }
  },
}
</script>
