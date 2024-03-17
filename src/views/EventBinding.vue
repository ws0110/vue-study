<template>
  <div>
    <button type="button" @click="incCounter">Add 1</button>
    <button type="button" @click="setInit(0)">Set 0</button>
    <button type="button" @click="call1(), call2()">multiMethodCall</button>
    <p>Counter: {{ counter }}</p>
  </div>

  <div>
    <select v-model="selectedValue" @change="chagneSelect">
      <option value="서울">서울</option>
      <option value="제주">제주</option>
    </select>
  </div>

  <div>
    <input
      type="text"
      v-model="inputValue"
      @keyup.enter="callEnter"
      @keydown.alt.enter="clear"
    />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    0;
    return {
      counter: 0,
      selectedValue: "",
      inputValue: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    incCounter() {
      this.counter = this.counter + 1;
    },
    setInit(num) {
      this.counter = num;
    },
    call1() {
      console.log("call 1");
    },
    call2() {
      console.log("call 2");
    },

    chagneSelect() {
      console.log(this.selectedValue);
    },

    callEnter() {
      console.log("Call Enter!! ", this.inputValue);
    },
    clear() {
      this.inputValue = "";
    },
  },
};
</script>
