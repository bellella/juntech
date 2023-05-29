<template>
  <div id="contact">
    <div class="main_container">
      <div class="contact_main">
        <div class="intro">
          <h2 class="main_title">기술력이 바탕이되는 고객중심 서비스</h2>
          <p class="mission">
            고객 맞춤형 서비스로 신속하고,정확한 서비스를 제공하는 것이 우리의
            사명(Mission)이며, 고객의 불편을 최소화 하여 고객과 더불어 함께
            성장해 나가는 것이 우리의 목표(Vision) 입니다.
          </p>
          <div class="paragraph">
            저희 준테크는 고객을 최우선으로 하는 고객중심의 경영철학과 서비스
            정신으로 최고의 서비스를 제공하고자 임직원 전원이 끊임없이 노력하고
            있습니다. 고객이 필요로 할 때 항상 함께하고, 고객이 불편을 느낄 때
            가장 빠르게 달려가는 서비스를 실현 하고자 합니다. 또한 전문화된
            조직을 바탕으로 제품판매~설치~서비스에 이르기까지 One Stop서비스를
            실현하고 있으며 앞으로도 ㈜준테크는 고객의 작은 소리도 귀 기울이고
            보다나은 서비스를 제공하기위해 전 임직원 모두가 노력 하겠습니다.
            고객님의 변함없는 관심과 사랑을 부탁드립니다.
          </div>
          <p class="name">㈜준테크 대표이사 홍승천</p>
        </div>
        <div class="infos">
          <ul class="text_list">
            <div class="map-wrapper">
              <div id="map" class="map" ref="map"></div>
            </div>
            <li class="text_item">
              <h3 class="main_text">주소</h3>
              <p class="sub_text">
                경기 수원시 영통구 영통동 980-3 디지컬엠파이어 E동 135호
              </p>
            </li>
            <li class="text_item">
              <h3 class="main_text">법인명</h3>
              <p class="sub_text">(주)준테크</p>
            </li>
            <li class="text_item">
              <h3 class="main_text">대표자</h3>
              <p class="sub_text">홍승천</p>
            </li>
            <li class="text_item">
              <h3 class="main_text">사업의 종류</h3>
              <p class="sub_text">
                전자제품/ 통신제품 판매, 전자상거래, 전자칠판 판매,
                전자/통신제품 유지보수, 화상회의 시스템 / 멀티기자재 판매,
                인터넷 유통업
              </p>
            </li>
            <li class="text_item">
              <h3 class="main_text">연락처</h3>
              <p class="sub_text">TEL. 1566-2942 FAX. (031)225-6610</p>
            </li>
            <li class="text_item">
              <h3 class="main_text">설립년도</h3>
              <p class="sub_text">2011년 6월 1일</p>
            </li>
            <li class="text_item">
              <h3 class="main_text">연혁</h3>
              <ul>
                <p class="sub_text">2011.06 (주)준테크 법인설립</p>
                <p class="sub_text">2011.07 삼성전자B2B전문점</p>
                <p class="sub_text">2011.10 프린터 렌탈사업</p>
                <p class="sub_text">2011.10 에어컨서비스사업</p>
                <p class="sub_text">2012.05 마에스트로 대리점</p>
                <p class="sub_text">2013.03 에어컨 유지보수사업</p>
                <p class="sub_text">2014.03 시스템 세척사업</p>
                <p class="sub_text">2016.03 삼성전자 서비스 세척 협력사</p>
                <p class="sub_text">2016.03 안산지점 개설</p>
                <p class="sub_text">2016.03 안양지점 개설</p>
                <p class="sub_text">2016.04 인터넷 쇼핑몰사업</p>
                <p class="sub_text">
                  2017.06 벤처기업인증(에어컨서비스 기술부문)
                </p>
              </ul>
            </li>
            <li class="text_item">
              <h3 class="main_text">사업자 등록증</h3>
              <ul>
                <li>
                  <img src="@/assets/images/cert1.gif" alt="" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  transition: 'home',
  components: {},
  data() {
    return {
      navItems: [
        {
          name: '회사소개',
          link: '/intro',
        },
        {
          name: '오시는길',
          link: '/intro/contact',
        },
      ],
      latitude: 37.245398,
      longitude: 127.06063
    }
  },
  mounted() {
    console.log(window.kakao, 'kakao')
    if (window.kakao && window.kakao.maps) {
      console.log('init')
      this.initMap()
    }
  },
  methods: {
    initMap() {
      const option = {
        center: new kakao.maps.LatLng(this.latitude, this.longitude),
        level: 3,
      }
      let map = new kakao.maps.Map(this.$refs.map, option)
      var zoomControl = new kakao.maps.ZoomControl()
      // 지도의 우측에 확대 축소 컨트롤을 추가한다
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      var markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      })

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map)
    },
  },
}
</script>

<style lang="scss" scoped>
#contact {
  .contact_main {
    position: relative;
    padding-top: 30px;
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
    }
  }
  .intro {
    @media (min-width: 1024px) {
      position: sticky;
      top: 0;
      height: fit-content;
    }
    .main_title {
      width: 80%;
      @media (max-width: 1024px) {
        font-size: 200%;
        width: 100%;
      }
    }
    .mission {
      margin-top: 15px;
      color: var(--main-color);
      font-weight: 600;
      line-height: 2;
      font-size: 120%;
    }
    .paragraph {
      margin-top: 15px;
      line-height: 2;
      font-size: 90%;
    }
    .name {
      margin-top: 20px;
      font-weight: 600;
    }
  }
  .main_title {
    font-size: 250%;
  }
  .map-wrapper {
    padding: 1em 0;
    .map {
      width: 100%;
      height: 300px;
    }
  }
  .infos {
    .text_list {
      .text_item {
        margin-bottom: 20px;
      }
      .main_text {
        padding-bottom: 15px;
        font-size: 80%;
        @media (min-width: 1024px) {
          font-size: 100%;
        }
      }
      .sub_text {
        font-size: 100%;
      }
    }
  }
}
</style>
