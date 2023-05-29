<template>
  <div class="pro_img_list">
    <ProductItem
      v-for="(product, i) in products"
      :key="i"
      :product="product"
    ></ProductItem>
  </div>
</template>

<script>
import ProductItem from './ProductItem'
import {mapActions} from 'vuex'
export default {
  components: {
    ProductItem,
  },
  props: ['products']
}
</script>

<style>
</style>