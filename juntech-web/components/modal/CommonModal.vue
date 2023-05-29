<template>
  <div class="cmodal" :class="{ open: modalShow }">
    <div class="modal_container" :style="{ maxWidth: width + 'px' }">
      <div class="modal_content">
        <div class="modal_header">
          <button type="button" class="close_btn" @click="closeModal">
            <svg
              width="50"
              height="50"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0503 9.94979C9.6598 10.3403 9.6598 10.9734 10.0503 11.3639L13.586 14.8996L10.0504 18.4352C9.65995 18.8257 9.65995 19.4588 10.0504 19.8493C10.4409 20.2398 11.074 20.2398 11.4645 19.8493L15.0001 16.3137L18.5347 19.8482C18.9252 20.2387 19.5583 20.2387 19.9487 19.8482C20.3392 19.4577 20.3392 18.8246 19.9487 18.4342L16.4142 14.8996L19.9489 11.3649C20.3394 10.9744 20.3394 10.3413 19.9489 9.95084C19.5584 9.56036 18.9253 9.56036 18.5348 9.95084L15.0001 13.4855L11.4643 9.94979C11.0739 9.55931 10.4408 9.55931 10.0503 9.94979Z"
                fill="#000000"
              ></path>
            </svg>
          </button>
        </div>
        <div class="modal_body">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="modal_overlay"></div>
  </div>
</template>

<script>
export default {
  props: ['modalShow', 'width'],
  watch: {
    modalShow: (value) => {
      const bodyEle = document.getElementsByTagName('body')[0]
      if (value) {
        bodyEle.classList.add('modal_open')
      } else {
        bodyEle.classList.remove('modal_open')
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.cmodal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0,0,0,0.4);
  overflow-x: hidden;
  overflow-y: auto;

  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  // .modal_overlay {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 1040;
  //   width: calc(100vw - 17px);
  //   height: 100vh;
  //   background-color: #000;
  //   opacity: 0.4;
  //   z-index: 10;
  //   padding-left: 17px;
  // }
  .modal_container {
    position: relative;
    max-width: 1040px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 3em auto;
    z-index: 20;
    &.open {
      overflow-x: hidden;
      overflow-y: auto;
    }
    @media (max-width: 640px) {
     padding-right: 5vw;
     padding-left: 5vw;
    }
    .modal_content {
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 10px 100px rgba(151, 151, 151, 0.1);
      overflow: hidden;
    }
    .modal_header {
      padding: 10px 10px 0;
      display: flex;
      .close_btn {
        margin-left: auto;
      }
    }
    .modal_body {
      padding: 0 40px 40px;
      @media (max-width: 640px) {
        padding: 0 5vw 5vw;
      }
    }
  }
}
</style>