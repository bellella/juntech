<template>
  <div id="products">
    <div class="main_container">
      <div class="product_body">
        <div class="pro_img_wrapper">
          <nav>
            <h4>제품</h4>
            <ul class="cate_list">
              <li class="cate_item" :class="{active: !selectedCategoryId}">
                <button class="cate_btn" @click="categoryClick()">전체</button>
              </li>
              <li class="cate_item" v-for="(cate, i) in categories" :key="i" :class="{active: selectedCategoryId === cate.id}">
                <button class="cate_btn" @click="categoryClick(cate.id)">{{cate.name}}</button>
              </li>
            </ul>
            <h4>특판정보</h4>
            <ul class="cate_list">
              <li class="cate_item">
                <button class="cate_btn">에어컨</button>
              </li>
            </ul>
            <div class="pro_search">
              <div class="search_bar">
                <input
                  type="text"
                  class="form_control"
                  placeholder="제품명 또는 제품번호"
                  v-model="keyword"
                  @keydown.enter="searchProducts"
                />
                <span class="search_icon" @click="searchProducts"><i class="fas fa-search"></i></span>
              </div>
            </div>
          </nav>
          <ProductList :products="products"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductViewModal from '@/components/product/ProductViewModal'
import ProductList from '@/components/product/ProductList'
import ProductService from '@/service/product.service.js'
export default {
  name: 'products',
  transition: 'home', 
  data() {
    return {
      selectedCategoryId: null,
      keyword: '',
    }
  },
  async asyncData() {
     const categories = await ProductService.getCategories().then((r) => r).catch(e => console.log(e));
     const products = await ProductService.getProductsAll().then((r) => r);
    return { categories, products }
  },
  components: {
    ProductList,
    ProductViewModal,
  },
  computed: {},
  mounted() {},
  methods: {
    async categoryClick(categoryId) {
      this.selectedCategoryId = categoryId;
      this.products = categoryId ? await ProductService.getProducts(categoryId).then((r) => r) : await ProductService.getProductsAll();
    },
    async searchProducts() {
      this.selectedCategoryId = null;
      this.products = await ProductService.searchProducts(this.keyword);
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200;300;400;500;700&display=swap');

img {
  width: 100%;
  height: auto;
}
#products {
  font-family: 'Noto Sans KR', sans-serif;
  .product_top {
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    .title {
    }
    .icon_img {
      width: 50px;
    }
  }
  .pro_img_wrapper {
    padding-top: 50px;

    @media (min-width: 1024px) {
      display: grid;
      grid-column-gap: 20px;
      grid-template-columns: 20% 1fr;
      padding-top: 100px;
    }
    nav {
      @media (max-width: 1024px) {
        text-align: center;
        margin-bottom: 20px;
        h4 {
          margin-bottom: 8px;
        }
      }
      .cate_list {
        @media (max-width: 1024px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      .cate_list .cate_item {
        padding: 5px 0;
        @media (max-width: 1024px) {
          margin: 0 5px;
        }
        .cate_btn {
          font-weight: 500;
          border-radius: 10px;
          border: none;
          margin-bottom: 3px;
          padding: 2px 10px;
          color: #7c7c7c;
          //border: 1px solid #f3f3f3;
        }
        &.active .cate_btn {
          background: var(--highlight-color);
          color: #fff;
        }
      }
      .pro_search {
        margin-top: 10px;
      }
      .search_form {
        input {
          padding: 5px 15px;
          border-radius: 20px;
        }
      }
    }
    .pro_img_list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      .pro_item {
        position: relative;
        padding-bottom: 130%;
        height: 0;
        cursor: pointer;
        .item_img {
          padding-bottom: 100%;
          height: 0;
          position: relative;
          border-radius: 18px;
          border: 1px solid #f1f1f1;
          overflow: hidden;
          box-shadow: 0 10px 50px rgba(255, 255, 255, 0.07) !important;
          &:hover {
            .img_overlay {
              opacity: 1;
            }
            .img_inner img {
              transform: scale(1.1);
            }
          }
          .img_inner {
            position: absolute;
            width: 100%;
            height: 100%;
            img {
              transition: transform 0.5s;
            }
          }
          .img_overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #ffffff4d;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
          }
        }
        .item_info {
          text-align: center;
          padding: 10px 5px;
          .text_main {
            font-weight: 400;
            font-size: 16px;
          }
          .text_sub {
            font-weight: 300;
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>