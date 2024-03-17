<template>
  <div>
    <h1>{{ fullName }}</h1>
    <h1>{{ fullName }}</h1>
    <button type="button" @click="changeLastname">Change LastName</button>
    <button type="button" @click="changeWatchValue">Change WatchValue</button>
    <h1>{{ watchValue }}</h1>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      fName: "GilDong",
      lName: "Hong",
      watchValue: "watchValue",
    };
  },
  computed: {
    fullName() {
      return this.fName + this.lName;
    },
  },
  watch: {
    watchValue(newValue, oldValue) {
      console.log("oldValue: ", oldValue);
      console.log("newValue: ", newValue);
      // TODO watch 값이 변경됐을 경우 SomeThing 액션
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    // 매번 함수 호출 됨, 데이터 변경에 대한 감지가 안됨
    fullNameCall() {
      console.log("call fullName!");
      return this.fName + this.lName;
    },
    changeLastname() {
      this.lName = "Kim";
    },
    changeWatchValue() {
      this.watchValue = "Changed!!";
    },
  },
};
</script>
