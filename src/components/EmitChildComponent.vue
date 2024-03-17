<template>
  <div></div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      msg: "자식 컴포넌트 메시지",
    };
  },
  mounted() {
    this.$emit("send-message", this.msg); // 메시지 전달
  },
};
</script>
