<template>
  <div>
    <h2>계산기</h2>
    <div>
      <input type="text" v-model="num1" v-focus />
      <span>+</span>
      <input type="text" v-model="num2" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
/** 1번 구현 */
// import { computed, reactive } from "vue";
// export default {
//   setup() {
//     // reactive 를 이용해 실시간 변경에 대한 반응형 적용
//     let state = reactive({
//       num1: 0,
//       num2: 0,
//       result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
//     });
//     return {
//       state,
//     };
//   },
//   created() {},
//   mounted() {},
//   unmounted() {},
//   methods: {},
// };

/** 2번 구현 */
// import { computed, reactive, toRefs } from "vue";
// 외부함수로 분리
// const plusCalculator = () => {
//   let state = reactive({
//     num1: 0,
//     num2: 0,
//     result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
//   });
//   return toRefs(state); // 반응형 state가 외부 function에서 동작하기 위해 toRefs를 사용
// };
// export default {
//   setup() {
//     // reactive 를 이용해 실시간 변경에 대한 반응형 적용
//     let { num1, num2, result } = plusCalculator();
//     return { num1, num2, result };
//   },
// };

/** 3번 구현 */
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
import { plusCalculator } from "../js/common";
export default {
  setup() {
    let { num1, num2, result } = plusCalculator();

    onBeforeMount(() => console.log("onBeforeMount!!"));
    onMounted(() => console.log("onMounted!!"));
    onBeforeUpdate(() => console.log("onBeforeUpdate!!"));
    onUpdated(() => console.log("onUpdated!!"));
    onBeforeUnmount(() => console.log("onBeforeUnmount!!"));
    onUnmounted(() => console.log("onUnmounted!!"));

    //happy-jjang-a.tistory.com/132 [jjang-a 블로그:티스토리]

    return { num1, num2, result };
  },
};
</script>
