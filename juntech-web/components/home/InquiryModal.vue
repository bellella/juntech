<template>
  <div>
    <CommonModalVue
      :modalShow="inquiryModal.show"
      @closeModal="closeModal"
      :width="600"
    >
      <div id="inquiryModal">
        <div class="inquiry_top">
          <h2>문의하기</h2>
        </div>
        <div class="inquiry_form_wrapper">
          <VeeObs v-slot="{ handleSubmit }" ref="vee">
            <form @submit.prevent="handleSubmit(onSubmit)" class="inquiry_form">
              <FormControl
                v-model="inquiryForm.type"
                rules="required"
                label="문의타입"
                type="select"
                :widthPercent="inquiryForm.type === '상품문의' ? 50 : 100"
                style="padding-right: 10px;"
              >
              <option value="">선택하기</option>
              <option value="상품문의">상품문의</option>
              <option value="제휴문의">제휴문의</option>
              <option value="기타문의">기타문의</option>
              </FormControl>
                            <FormControl
                            v-if="inquiryForm.type === '상품문의'"
                v-model="inquiryForm.productName"
                label="상품명"
                rules="required|max:50"
                :disabled="!!inquiryModal.product"
                :widthPercent="50"
              ></FormControl>
                            <FormControl
                v-model="inquiryForm.clientName"
                rules="required|max:10"
                label="고객명"
              ></FormControl>
              <FormControl
                v-model="inquiryForm.email"
                label="이메일"
                rules="max:30"
                :widthPercent="50"
                style="padding-right: 10px;"
              ></FormControl>
              <FormControl
                v-model="inquiryForm.phone"
                rules="max:20"
                label="전화번호"
                :widthPercent="50"
              ></FormControl>
              <FormControl
                v-model="inquiryForm.content"
                rules="required|max:200"
                label="문의내용"
                type="textarea"
              ></FormControl>

              <div class="inq_item">
                <button
                  type="submit"
                  class="main_btn main_btn_block main_btn_hover"
                >
                  문의하기
                </button>
              </div>
            </form>
          </VeeObs>
        </div>
      </div>
    </CommonModalVue>
    <Alert ref="alert"/>
  </div>
</template>

<script>
import CommonModalVue from '../modal/CommonModal.vue'
import FormControl from '../Form/FormControl.vue'
import Alert from '../Form/Alert.vue'
import InquiryService from '@/service/inquiry.service.js'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    CommonModalVue,
    FormControl,
    Alert
  },
  props: ['modalShow'],
  data() {
    return {
      inquiryForm: {
        productName: '',
        clientName: '',
        type: '',
        content: '',
      },
    }
  },
  watch: {
    inquiryModal(value) {
      if(value.show) {
        this.initForm();
      }
      if (value.product) {
        this.inquiryForm.type = '상품문의';
        this.inquiryForm.productName = value.product.name;
        this.inquiryForm.productId = value.product.id;
      }
    },
  },
  computed: {
    ...mapGetters({
      inquiryModal: 'modal/inquiryModal',
    }),
  },
  methods: {
    ...mapActions({
      setInquiryModal: 'modal/setInquiryModal',
    }),
    initForm() {
      Object.keys(this.inquiryForm).forEach(k => {
        this.inquiryForm[k] = '';
        this.$refs.vee.reset();
      });
    },
    closeModal() {
      this.setInquiryModal({ show: false })
    },
    onSubmit() {
      InquiryService.submitInquiry(this.inquiryForm)
        .then(r =>{
          console.log(r)
          this.$refs.alert.showAlert('문의를 제출하였습니다. \n빠른시일내로 연락드리겠습니다.');
          this.closeModal();
        })
    },
  },
}
</script>

<style lang="scss" scoped>
#inquiryModal {
  .inquiry_top {
  }
  .inquiry_form {
    margin-top: 20px;
    .main_btn {
      display: block;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>