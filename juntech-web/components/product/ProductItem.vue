<template>
  <div class="pro_item" @click="openProductViewModal" v-if="product">
    <div class="item_img">
      <div class="img_inner">
        <img :src="product.mainImg" alt="" />
      </div>
      <div class="img_overlay">
        <div class="btns">
          <InquiryBtn :isSmall="true" :product="product"/>
        </div>
      </div>
    </div>
    <div class="item_info">
      <h3 class="text_main">{{ product.name }}</h3>
      <p class="text_sub">{{ product.code }}</p>
    </div>
  </div>
</template>

<script>
import InquiryBtn from '../home/InquiryBtn.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    InquiryBtn,
  },
  props: ['product'],
  methods: {
    ...mapActions({
      setProductModal: 'modal/setProductModal',
    }),
    openProductViewModal() {
      this.setProductModal({show: true, product: this.product})
    },
  },
}
</script>

<style>
</style>