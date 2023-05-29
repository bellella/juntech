<template>
  <div id="alert" :class="{ active: show }">
    <div class="text_wrapper">
      <!-- <span class="bell_icon">
        <i class="fas fa-bell"></i>
      </span> -->
      <p class="" v-html="text"></p>
      <button class="close_btn" @click="close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      text: '',
    }
  },
  methods: {
    showAlert(text) {
      this.show = true
      this.text = text.replace('/n', '<br>');
      setTimeout(() => {
        this.show = false
      }, 3000)
    },
    close() {
      this.show = false
    }
  },
}
</script>

<style lang="scss">
#alert {
  position: fixed;
  bottom: 20px;
  width: 100vw;
  padding: 0 20px;
  opacity: 0;
  visibility: hidden;
  transition: all .5s;
  z-index: 1000;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  & > div {
    //position: absolute;
    background: #2a2a2a;
    border-radius: 8px;
    color: #fff;
    min-width: 150px;
    padding: 20px;
    margin: 0 auto;
    max-width: 500px;
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  .bell_icon {
    padding: 0 5px;
  }
  .close_btn {
    color: #fff;
    padding: 4px 5px;
    font-size: 15px;
  }
  .text_wrapper {
    display: flex;
  }
}
</style>