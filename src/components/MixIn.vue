<template>
  <div></div>
</template>
<script>
// import { onMounted } from "vue";
//import mixinsApi from "../mixins/mixins";
export default {
  //mixins: [mixinsApi], // main.js파일에서 전역으로 등록해줘서 불필요 함
  data() {
    return {
      productList: [],
    };
  },
  async mounted() {
    this.productList = await this.$api(
      "https://d0e5e857-af59-42ba-81f8-0d79785c4c53.mock.pstmn.io/productList",
      "get"
    );
    console.log(this.productList);
  },
  //   setup() {
  //     let productList = [];

  //     onMounted(() => {
  //       productList = this.$api(
  //         "https://d0e5e857-af59-42ba-81f8-0d79785c4c53.mock.pstmn.io/productList",
  //         "get"
  //       );
  //     });

  //     return { productList };
  //   },
};
</script>
