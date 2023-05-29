<template>
  <header id="header" :class="{ hidden: headerHidden }">
    <nav>
      <NuxtLink class="logo" to="/"><img src="@/assets/images/main_logo.gif" alt=""></NuxtLink>
      <ul class="nav_list">
        <li class="nav_item">
          <NuxtLink to="/products">B2B 특판</NuxtLink>
        </li>
        <li class="nav_item">
          <NuxtLink to="/intro">회사소개</NuxtLink>
        </li>
        <li class="nav_item nav_item_tell">
          <a href="tel:1566-2523" >1566-2942</a>
        </li>
      </ul>
      <button class="mobile_nav_btn" @click="toggleMobileNav">
                    <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="18" rx="8"></rect>
          <rect y="30" width="100" height="18" rx="8"></rect>
          <rect y="60" width="100" height="18" rx="8"></rect>
        </svg>
      </button>
      <div class="mobile_nav" :class="{ active: mobileNavShow }">
        <div class="mobile_nav_top">
          <NuxtLink class="logo" to="/"><img src="@/assets/images/main_logo.gif" alt=""></NuxtLink>
          <button class="mobile_nav_btn" @click="toggleMobileNav">
                    <svg viewBox="0 0 100 80" width="30" height="30">
          <rect y="30" width="100" height="18" transform="rotate(45)" transform-origin="center" rx="8"></rect>
          <rect y="30" width="100" height="18" transform="rotate(-45)" transform-origin="center" rx="8"></rect>
        </svg>
          </button>
        </div>
        <ul class="mobile_nav_list">
          <li class="nav_item"><a href="/products">B2B 특판</a></li>
          <li class="nav_item"><a href="/intro">회사소개</a></li>
<li class="nav_item"><a href="tel:1566-2523" >1566-2942</a></li>
          <li class="nav_item btn_nav_item">
            <InquiryBtn />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import InquiryBtn from '@/components/home/InquiryBtn.vue'

export default {
  name: 'ClientHeader',
  components: {
    InquiryBtn,
  },
  data() {
    return {
      headerHidden: false,
      lastScrollTop: 0,
      mobileNavShow: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const top = window.scrollY
      if (this.lastScrollTop < top) {
        //scroll down
        this.headerHidden = true
      } else {
        //scroll up
        this.headerHidden = false
      }
      this.lastScrollTop = top
    },
    toggleMobileNav() {
      this.mobileNavShow = !this.mobileNavShow
    },
  },
}
</script>

<style lang="scss">
#header {
  .logo {
    padding-top: 10px;
  }
  .mobile_nav_btn {
    @media (min-width: 1024px) {
      display: none;
    }
          svg rect {
        fill: #444;
      }
  }

  .mobile_nav {
    transform: translateX(100%);
    transition: transform 0.5s;
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    height: 100%;
    padding: 10px;
    @media (min-width: 1024px) {
      display: none;
    }
    &.active {
      transform: translateX(0);
    }
    .mobile_nav_top {
      display: flex;
      justify-content: space-between;
    }
    .mobile_nav_list {
      display: block;
      .nav_item {
        text-align: center;
        padding: 10px;
        a {
          display: block;
          font-weight: 600;
          &:hover {
            color: rgb(121, 121, 250) !important;
          }
        }
      }
    }
  }
}
</style>
