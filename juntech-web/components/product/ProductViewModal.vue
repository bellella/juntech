<template>
  <CommonModalVue :modalShow="productModal.show" @closeModal="closeModal">
    <div id="productViewModal" v-if="productModal.product">
      <div class="pro_main_info">
        <div class="pro_img">
          <img :src="productModal.product.mainImg" alt="제품 이미지" />
        </div>
        <div class="infos">
          <div class="info_item">
            <label for="">제품명</label>
            <p>{{productModal.product.name}}</p>
          </div>
          <div class="info_item">
            <label for="">제품번호</label>
            <p>{{productModal.product.code}}</p>
          </div>
          <div class="info_item">
            <label for="">가격</label>
            <p>판매가 별도문의</p>
          </div>
          <div class="info_item">
            <InquiryBtn :product="productModal.product"/>
          </div>
        </div>
      </div>
      <div class="pro_sub_info">
        <img :src="productModal.product.subImg" alt="제품 설명 이미지" />
      </div>
    </div>
  </CommonModalVue>
</template>

<script>
import CommonModalVue from '../modal/CommonModal.vue'
import InquiryBtn from '@/components/home/InquiryBtn.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    CommonModalVue,
    InquiryBtn
  },
  props: ['modalShow'],
  computed: {
    ...mapGetters({
      productModal: 'modal/productModal',
    }),
  },
  methods: {
    ...mapActions({
      setProductModal: 'modal/setProductModal',
    }),
    closeModal() {
      this.setProductModal({show: false});
    },
  },
}
</script>

<style lang="scss" scoped>
#productViewModal {
  .pro_main_info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    .pro_img {
    }
    .infos {
      .info_item {
        margin-bottom: 10px;
        label {
          font-size: 15px;
        }
        p {
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
  }
  .pro_sub_info {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
</style>