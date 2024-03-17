<template>
  <EventChildComponentVue ref="child_component" />
  <p>{{ msg }}</p>
</template>
<script>
import EventChildComponentVue from "./EventChildComponent.vue";

export default {
  components: { EventChildComponentVue },
  data() {
    return {};
  },
  computed: {
    msg() {
      return "A"; // this.$refs.child_component.msg;
    },
  },

  mounted() {
    console.log(this.$refs);
    this.$refs.child_component.$refs.btn.click(); // $refs를 통해서 자식 컴포넌트의 이벤트 호출!!

    this.$refs.child_component.callFromParent(); // 자식 컴포넌트의 함수 직접 호출!!

    this.$refs.child_component.msg = "자식 컴포넌트 데이터 직접 변경";
  },
  unmounted() {},
  methods: {},
};
</script>
