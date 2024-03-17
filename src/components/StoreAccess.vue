<template>
  <div>
    <p>count: {{ count }}</p>
    <button type="button" @click="inc">+1</button>

    <p>arrCount: {{ arrCnt }}</p>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const arrCnt = computed(() => store.getters.arrCount); // getter사용

    // const inc = () => store.dispatch("inc"); // actions 호출
    const inc = () => store.commit("inc"); // mutations 호출
    return { count, inc, arrCnt };
  },
};
</script>
