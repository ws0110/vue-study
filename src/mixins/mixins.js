import axios from "axios";

// 여러 컴포넌트에서 활용가능한 공통함수 Mixins 선언

export default {
  // mixin lifecycle hook 사용 샘플
  mounted() {
    console.log("mixin mounted!!");
  },
  unmounted() {
    console.log("mixin unmounted!!");
  },
  methods: {
    // $를 prefix로 붙이는 이유는 Mixin을 사용하는 컴포넌트 내에서 동일한 메소드명이 있어서 오버라이딩 되는 것을 방지하기 위함
    async $api(url, method, data) {
      return (
        await axios({
          method: method,
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
