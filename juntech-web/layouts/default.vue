<template>
  <div>
    <ProductViewModal />
    <InquiryModal />
    <ClientHeader />
    <Nuxt />
    <ClientFooter />
  </div>
</template>

<script>
import ClientHeader from '@/components/layout/ClientHeader'
import ClientFooter from '@/components/layout/ClientFooter'
import InquiryModal from '@/components/home/InquiryModal'
import ProductViewModal from '@/components/product/ProductViewModal'
export default {
  components: {
    ClientHeader,
    ClientFooter,
    InquiryModal,
    ProductViewModal,
  },
}
</script>
