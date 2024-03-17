<template>
  <!-- 조건에 맞을 때만 html생성, 조건에 맞지 않으면 html 자체를 제거 
       toggle 시 자원 많이 사용 됨
    -->
  <div>
    <h1 v-if="type === 'A'">A</h1>
    <h1 v-else-if="type === 'B'">B</h1>
    <h1 v-else>C</h1>
  </div>

  <!-- 무조건 html생성 함 
       toggle에 대한 자원 효율적 사용 
    => 화면에서 자주 toggle이 발생하면 v-show가 효과적 -->
  <h1 v-show="type === 'A'">show A</h1>

  <div>
    <select v-model="type">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      type: "A",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
