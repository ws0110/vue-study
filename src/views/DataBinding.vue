<template>
  <!-- 문자열 바인딩 -->
  <h1>Hello, {{ title }}</h1>

  <div>{{ htmlString }}</div>

  <!-- HTML 바인딩 -->
  <div v-html="htmlString"></div>

  <!-- Input text 바인딩 -->
  <input type="text" v-model="valueModel" />

  <!-- Input number 바인딩 -->
  <input type="number" v-model.number="numberModel" />

  <!-- Textarea 바인딩 -->
  <textarea type="number" v-model="valueTextarea" />

  <!-- selectbox 바인딩 -->
  <select v-model="valueSelect">
    <option value="02">Seoul</option>
    <option value="064">Jeju</option>
  </select>

  <!-- checkbox 바인딩 -->
  <input
    type="checkbox"
    v-model="checked"
    true-value="yes"
    false-value="no"
  />체크
  <span>{{ checked }}</span>

  <!-- multi checkbox 바인딩 -->
  <div>
    <input type="checkbox" v-model="arrChecked" value="서울" />서울
    <input type="checkbox" v-model="arrChecked" value="제주" />제주
    <br />
    <span>{{ arrChecked }}</span>
  </div>

  <!-- radio 바인딩 -->
  <div>
    <input type="radio" v-bind:value="radioValue1" v-model="picked" />서울
    <input type="radio" v-bind:value="radioValue2" v-model="picked" />제주
    <br />
    <span>{{ picked }}</span>
  </div>

  <!-- img src 바인딩 -->
  <div><img :src="imgSrc" /></div>

  <!-- class 바인딩 -->
  <div class="container" :class="{ active: isActive, 'text-red': hasError }">
    Class Binding
  </div>

  <!-- style 바인딩 -->
  <div :style="[styleObject]">Inline Style Binding</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      title: "World",
      htmlString: "<h1>HTML!!</h1>",
      valueModel: "Vue3",
      numberModel: 3,
      valueTextarea: "Text Area~",
      valueSelect: "064",
      checked: "yes",
      arrChecked: [],
      picked: "",
      readioValue1: "서울",
      readioValue2: "제주",
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      isActive: true,
      hasError: true,
      styleObject: {
        color: "red",
        ontSize: "13px",
      },
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
