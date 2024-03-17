<template>
  <button type="button" @click="childFunc" ref="btn">Click!!</button>
  <p>{{ msg }}</p>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      msg: "...",
    };
  },

  methods: {
    childFunc() {
      console.log("Clicked!!");
    },
    callFromParent() {
      console.log("부모 컴포넌트에서 직접 호출!!");
    },
  },
};
</script>
