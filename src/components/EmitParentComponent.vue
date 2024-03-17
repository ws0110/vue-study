<template>
  <!-- send-message를 받으면 receiveMsg 메소드 호출 -->
  <EmitChildComponentVue @send-message="receiveMsg" />
</template>
<script>
import EmitChildComponentVue from "./EmitChildComponent.vue";

export default {
  components: { EmitChildComponentVue },
  //   data() {
  //     return {
  //       msg: "자식 컴포넌트 메시지",
  //     };
  //   },
  //   mounted() {
  //     this.$emit("send-message", this.msg); // 메시지 전달
  //   },
  methods: {
    receiveMsg(msg) {
      console.log("child msg: ", msg);
    },
  },
};
</script>
