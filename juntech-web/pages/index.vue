<template>
  <div id="juntech">
    <main id="main">
      <section id="heroSection">
        <div class="main_container">
          <div class="hero_grid">
            <div class="text_content">
              <h2 class="heading">
                에어컨 설치, 세척도<br />
                전문적으로 관리하세요
              </h2>
              <p class="paragraph">
                ㈜준테크는 시스템에어컨 서비스, 설치, 유지보수, 세척, 각종
                에어컨공사에 이르기까지 전문화된 기술로 다양한 서비스를
                제공합니다.
              </p>
              <InquiryBtn :hoverEffect="true" />
            </div>
            <div class="img_wrapper">
              <div class="image">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 455 330"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  enable-background="new 0 0 455 330"
                >
                  <defs>
                    <linearGradient id="MyGradient">
                      <stop offset="5%" stop-color="#ffd9ea" />
                      <stop offset="35%" stop-color="#eaff98" />
                      <stop offset="65%" stop-color="#c7ffb4" />
                      <stop offset="95%" stop-color="#b4ffee" />
                    </linearGradient>
                  </defs>

                  <g>
                    <path
                      stroke="url(#MyGradient)"
                      d="m425.17,67.167h-395.34c-16.448,0-29.83,13.382-29.83,29.83v152.67c0,4.142 3.357,7.5 7.5,7.5h440c4.143,0 7.5-3.358 7.5-7.5v-152.67c0-16.448-13.382-29.83-29.83-29.83zm-392.67,15h390v9.51c0,4.957-4.033,8.99-8.99,8.99h-372.02c-4.957,0-8.99-4.033-8.99-8.99v-9.51zm390,122.5h-390v-1.01c0-4.957 4.033-8.99 8.99-8.99h372.02c4.957,0 8.99,4.033 8.99,8.99v1.01zm-390,10h390v10h-390v-10zm0,20h390v7.5h-390v-7.5zm407.5,7.5h-7.5v-38.51c0-10.471-8.519-18.99-18.99-18.99h-372.02c-10.472,0-18.99,8.519-18.99,18.99v38.51h-7.5v-145.17c0-5.51 3.027-10.319 7.5-12.875v7.555c0,10.471 8.519,18.99 18.99,18.99h372.02c10.472,0 18.99-8.519 18.99-18.99v-7.555c4.473,2.556 7.5,7.365 7.5,12.875v145.17z"
                    />
                    <path
                      stroke="url(#MyGradient)"
                      d="m250.5,164.667h-46c-2.762,0-5,2.239-5,5s2.238,5 5,5h46c2.762,0 5-2.239 5-5s-2.238-5-5-5z"
                    />
                    <text fill="url(#MyGradient)" id="junText">
                      <tspan font-size="25" x="165" dy="150">JUN TECH</tspan>
                    </text>
                    <path
                      d="m401.503,164.668c-1.32,0-2.61,0.53-3.54,1.46s-1.46,2.22-1.46,3.54 0.53,2.61 1.46,3.53c0.93,0.94 2.22,1.47 3.54,1.47 1.31,0 2.6-0.53 3.53-1.47 0.93-0.93 1.47-2.22 1.47-3.53s-0.54-2.6-1.47-3.54c-0.93-0.93-2.22-1.46-3.53-1.46z"
                    />
                    <path
                      d="m378.503,164.668c-1.32,0-2.61,0.53-3.54,1.46s-1.46,2.22-1.46,3.54 0.53,2.6 1.46,3.53c0.93,0.93 2.22,1.47 3.54,1.47 1.31,0 2.6-0.54 3.53-1.47 0.93-0.93 1.47-2.22 1.47-3.53 0-1.32-0.54-2.61-1.47-3.54-0.93-0.93-2.22-1.46-3.53-1.46z"
                    />
                    <path
                      d="m186.319,289.942c1.351-2.409 0.493-5.456-1.916-6.807-2.407-1.352-5.456-0.493-6.807,1.915-9.09,16.21-9.091,36.35-0.001,52.561 7.396,13.192 7.396,29.583 0,42.776-1.351,2.409-0.492,5.456 1.916,6.807 0.773,0.434 1.612,0.64 2.44,0.64 1.75,0 3.449-0.92 4.366-2.556 9.088-16.209 9.088-36.348 0-52.557-7.397-13.195-7.396-29.586 0.002-42.779z"
                    />
                    <path
                      d="m231.862,289.942c1.351-2.409 0.493-5.456-1.916-6.807-2.407-1.352-5.456-0.493-6.807,1.915-9.09,16.21-9.091,36.35-0.001,52.561 7.396,13.192 7.396,29.583 0,42.776-1.351,2.409-0.492,5.456 1.916,6.807 0.773,0.434 1.612,0.64 2.44,0.64 1.75,0 3.449-0.92 4.366-2.556 9.088-16.209 9.088-36.348 0-52.557-7.397-13.195-7.396-29.586 0.002-42.779z"
                    />
                    <path
                      d="m277.406,289.942c1.351-2.409 0.493-5.456-1.916-6.807-2.408-1.352-5.456-0.493-6.807,1.915-9.091,16.21-9.091,36.35-0.002,52.561 7.397,13.193 7.397,29.583 0,42.776-1.351,2.408-0.493,5.456 1.916,6.807 0.773,0.434 1.612,0.64 2.44,0.64 1.75,0 3.449-0.92 4.366-2.556 9.089-16.209 9.089-36.348 0-52.557-7.396-13.194-7.396-29.586 0.003-42.779z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="serviceSection" ref="serviceSection">
        <div class="main_container">
          <div class="section_row">
            <div class="text_content">
              <div ref="serviceHeading">
              <h2 class="heading">
                에어컨 수리 및 유지보수 출장 서비스
              </h2>
              <p class="paragraph">
                사용하다보면 여러가지 고장이 날 수 있고 수리도 까다로운 에어컨,
                신속하고 빠른 서비스로 이전 보다 쾌적한 환경을 제공해드립니다.
              </p>
              </div>
              <ul class="count_list">
                <li class="count_item">
                  <p class="text_main">
                    <img
                      class="check"
                      src="@/assets/images/checked.png"
                    />냉매누설공사
                  </p>
                </li>
                <li class="count_item">
                  <p class="text_main">
                    <img
                      class="check"
                      src="@/assets/images/checked.png"
                    />드레인배관공사
                  </p>
                </li>
                <li class="count_item">
                  <p class="text_main">
                    <img
                      class="check"
                      src="@/assets/images/checked.png"
                    />통신선공사
                  </p>
                </li>
              </ul>
            </div>
            <div class="image">
              <img src="@/assets/images/repare.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="cardSection" class="overlay" ref="cardSection">
        <div class="main_container">
          <div class="text_content" ref="cardHeading">
            <h2 class="heading">
              준테크만의 세척 기술로<br />
              새제품인 것처럼
            </h2>
            <p class="paragraph">
              에어컨 상태 진단 및 정밀한 세척으로 최적의 사용환경 조성, 에어컨의
              수명연장이 가능합니다.
            </p>
          </div>
          <div class="card_list">
            <div class="card_item">
              <div class="card">
                <p class="text_main">각종세균 오염제거</p>
                <div class="text_sub_list">
                  <p class="text_sub">쾌적성 확보</p>
                  <p class="text_sub">효율성 향상</p>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="card">
                <p class="text_main">장비의 부하요인 제거</p>
                <div class="text_sub_list">
                  <p class="text_sub">고장예방 및 가동율 향상</p>
                  <p class="text_sub">관리비용 절감</p>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="card">
                <p class="text_main">최적의 사용환경 구축</p>
                <div class="text_sub_list">
                  <p class="text_sub">냉·난방효과 증대</p>
                  <p class="text_sub">전기료 절감</p>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="card">
                <p class="text_main">넓은 세척 범위</p>
                <div class="text_sub_list">
                  <p class="text_sub">필터 ~ 냉각핀에 거치는 살균 세척</p>
                  <p class="text_sub">세척 후 현장 청소, 결과서 제출</p>
                </div>
              </div>
            </div>
          </div>
          <div class="image">
            <img
              src="https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/ld-co/home-pcx-hand.png/_jcr_content/renditions/cq5dam.web.4096.4096.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="cleanSection" ref="cleanSection">
        <div class="main_container">
          <div class="section_row">
            <div class="text_content" ref="cleanHeading">
              <h2 class="heading">
                에어컨 상태에 맞게<br />
                관리도 달라야합니다
              </h2>
              <p class="paragraph">
                냄새, 곰팡이로 인한 스트레스에서 벗어날 수 있도록 최적의
                사용환경을 구축하여 관리비용 절감 및 성능향상을 도와드립니다.
              </p>
            </div>
            <div class="icon_wrapper">
              <div class="icon_card_list">
                <div class="card_item">
                  <div class="icon-img">
                    <img src="@/assets/images/cleanicon1.png" />
                  </div>
                  <p class="text_main">필터세척</p>
                  <p class="text_sub">필터 약품소독및 세척</p>
                </div>
                <div class="card_item">
                  <div class="icon-img">
                    <img src="@/assets/images/cleanicon2.png" />
                  </div>
                  <p class="text_main">기본세척</p>
                  <p class="text_sub">필터 + 그릴 세척</p>
                </div>
                <div class="card_item">
                  <div class="icon-img">
                    <img src="@/assets/images/cleanicon3.png" />
                  </div>
                  <p class="text_main">종합세척</p>
                  <p class="text_sub">
                    필터 + 그릴 + 드레인판 + 터보팬 + 증발기 세척
                  </p>
                </div>
                <div class="card_item">
                  <div class="icon-img">
                    <img src="@/assets/images/cleanicon4.png" />
                  </div>
                  <p class="text_main">표준세척</p>
                  <p class="text_sub">필터 + 그릴 + 드레인판 세척</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import InquiryBtn from '@/components/home/InquiryBtn.vue'
export default {
  name: 'home',
  transition: 'home',
  components: {
    InquiryBtn,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      serviceAnimation: null,
      cardAnimation: null,
      cleanAnimation: null,
    }
  },
  mounted() {
    this.setScrollTrigger();
    window.addEventListener("resize", function() {
    this.serviceAnimation.kill();
    this.cardAnimation.kill();
    this.cleanAnimation.kill();
    this.setScrollTrigger();
  });
  },
  methods: {
    setScrollTrigger() {
      gsap.registerPlugin(ScrollTrigger);
      this.serviceAnimation = gsap.from(this.$refs.serviceHeading, {
        opacity: 0,
        x: 100,
        ease: 'power1.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: this.$refs.serviceSection,
          start: 'top center',
        },
      })
      this.cardAnimation = gsap.from(this.$refs.cardHeading, {
        opacity: 0,
        x: -100,
        ease: 'power1.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: this.$refs.cardSection,
          start: 'top center',
        },
      })
      this.cleanAnimation = gsap.from(this.$refs.cleanHeading, {
        opacity: 0,
        y: 100,
        ease: 'power1.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: this.$refs.cleanSection,
          start: 'top center',
        },
      })
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

html {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  img {
    width: 100%;
    height: auto;
  }
  section {
    position: relative;
  }
  .overlay {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #ffffff8c;
    }
  }

  --heading-font-big: 300%;
  --heading-font-md: 250%;
  --heading-font-sm: 200%;

  --par-font-big: 120%;
  --par-font-md: 100%;

  .heading {
    font-size: var(--heading-font-sm);
    @media (min-width: 850px) {
      font-size: var(--heading-font-big);
    }
  }
  .paragraph {
    font-size: var(--par-font-md);
    @media (min-width: 850px) {
      font-size: var(--par-font-big);
    }
  }

  #heroSection {
    background: #d2e7f9;
    .main_container {
      padding-top: 50px;
      padding-bottom: 50px;
      @media (min-width: 850px) {
        padding-top: 100px;
        padding-bottom: 100px;
      }
    }
    .hero_grid {
      position: relative;
      display: grid;
      grid-template-columns: 60% 40%;
      @media (max-width: 850px) {
        grid-template-columns: 1fr;
      }
    }
    .text_content {
      @media (min-width: 850px) {
        padding-right: 50px;
      }
      @media (max-width: 850px) {
        order: 1;
      }
      .paragraph {
        padding: 20px 0 30px;
        line-height: 1.8;
        @media (min-width: 640px) {
          max-width: 555px;
        }
      }
    }
    .img_wrapper {
      position: relative;
      min-height: 300px;
    }
    .image {
      position: absolute;
      width: 300px;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      @media (min-width: 850px) {
        width: 100%;
      }

      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      svg {
        path {
          fill: none;
          stroke-width: 5;
          stroke-miterlimit: 10;
          stroke-dasharray: 0;
          stroke-dashoffset: 1500;
          animation: 8s pen infinite;
          stroke-dasharray: 1500;
        }
        #junText {
          font-weight: 600;
        }

        @keyframes pen {
          100% {
            stroke-dashoffset: 0;
          }
        }
      }
    }
  }

  #serviceSection {
    @media (max-width: 480px) {
      padding-top: 50px !important;
    }
    .section_row {
      display: flex;
      flex-wrap: wrap;
    }
    .text_content {
      padding-top: 42px;
      order: 1;
      @media (min-width: 850px) {
        margin-left: 50%;
        padding-top: 0;
      }
      .paragraph {
        padding: 40px 0 65px;
      }
      .count_list {
        .count_item {
          padding-bottom: 43px;
          .text_main {
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 150%;
            color: #0aa06e;
            @media (max-width: 850px) {
              font-size: 120%;
            }
            .check {
              width: 50px;
              height: 50px;
              margin-right: 10px;
            }
          }
          .text_sub {
            font-size: 100%;
          }
        }
      }
    }
    .image {
      width: 100%;
      margin-left: -12px;
      @media (min-width: 850px) {
        max-width: 50%;
        position: absolute;
        left: 0;
        top: 50px;
        margin-left: -50px;
      }
    }
  }

  #cardSection {
    .main_container {
      position: relative;
      z-index: 1;
    }
    .text_content {
      padding-top: 42px;
      text-align: center;
      @media (min-width: 850px) {
        padding-top: 0;
      }
      .paragraph {
        padding: 40px 0 65px;
      }
    }

    .card_list {
      padding-bottom: 43px;
      justify-content: center;
      padding-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .card_item {
        padding: 0 15px;
        margin-bottom: 30px;
        width: 100%;
        @media (min-width: 850px) {
          width: 50%;
        }
        &:nth-of-type(1) .card {
          background: #dfffe6;
        }
        &:nth-of-type(2) .card {
          background: #feffdf;
        }
        &:nth-of-type(3) .card {
          background: #dffdff;
        }
        &:nth-of-type(4) .card {
          background: #f6f0ff;
        }
        .card {
          display: flex;
          flex-flow: column;
          border-radius: 10px;
          padding: 20px;
          .text_main {
            font-weight: 600;
            font-size: 140%;
            line-height: 36px;
            letter-spacing: -0.5px;
            color: #555;
            @media (max-width: 850px) {
              font-size: 120%;
            }
          }
          .text_sub_list {
            .text_sub {
              margin-top: 14px;
              font-weight: 300;
              font-size: 120%;
            }
          }
        }
      }
    }

    .image {
      width: 100%;
      margin-left: -12px;
      display: none;
      @media (min-width: 850px) {
        max-width: 50%;
        position: absolute;
        right: 0;
        top: 50px;
        margin-left: -50px;
      }
    }
  }

  #cleanSection {
    text-align: center;
    padding: 100px 0;
    @media (max-width: 850px) {
      padding: 50px 0;
    }
    .section_row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      @media (max-width: 850px) {
        grid-template-columns: 1fr;
      }
    }
    .text_content {
      padding-top: 42px;
      @media (min-width: 850px) {
        padding-top: 0;
      }
      .paragraph {
        padding: 40px 0 65px;
      }
    }
    .icon_wrapper {
      width: 100%;
      @media (min-width: 850px) {
      }
    }
    .icon_card_list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 850px) {
        grid-template-columns: 1fr;
      }
      .card_item {
        background: #dffdff;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        margin: 20px;
        min-height: 160px;
        .icon-img {
          width: 50px;
        }
        .text_main {
          font-weight: 600;
          font-size: 17px;
        }
        .text_sub {
          margin-top: 5px;
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
