<template>
  <div>
    <!-- 네이버 로그인 버튼 노출 영역 -->
    <div id="naver_id_login"></div>

    <!-- Google 로그인 버튼 -->
    <div id="G_OAuth_btn"></div>
    <div>
      <p>email: {{ googleUser.email }}</p>
      <p>name: {{ googleUser.name }}</p>
    </div>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";

// 네이버 개발자센터에서 어플리케이션 등록 시 발급된 값
const clientId = "xxxxxxxxxxxxx";

export default {
  components: {},
  data() {
    return {
      googleUser: {},
    };
  },
  mounted() {
    this.naverInit();
    this.googleInit();
  },

  methods: {
    naverInit() {
      this.naverLogin = new window.naver_id_login(
        clientId,
        "http://localhost:8080/naverlogin"
      );
      var state = this.naverLogin.getUniqState();
      this.naverLogin.setButton("white", 2, 40); // 버튼설정
      this.naverLogin.setDomain("http://localhost:8080");
      this.naverLogin.setState(state);
      //this.naverLogin.setPopup(); // 팝업 여부
      this.naverLogin.init_naver_id_login();
    },
    googleInit() {
      let google = window.google;
      google.accounts.id.initialize({
        client_id: "xxxxxxxxxxxxxxxx.apps.googleusercontent.com",
        callback: this.googleCallback,
      });

      google.accounts.id.renderButton(document.getElementById("G_OAuth_btn"), {
        theme: "outline",
        size: "large",
      });
    },
    googleCallback(res) {
      console.log("res: ", res);

      this.googleUser = VueJwtDecode.decode(res.credential);
      console.log(this.googleUser);
    },
  },
};
</script>
