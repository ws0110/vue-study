import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      count: 0,
      arr: ["A", "B", "C"],
    };
  },
  // 동기 처리, state 직접 변경 불가
  mutations: {
    inc(state) {
      console.log("call mutations!!");
      state.count++;
    },
  },
  getters: {
    arrCount: (state) => {
      return state.arr.length;
    },
  },

  // 여러개의 mutations 호출 가능, 비동기 처리 방식
  actions: {
    inc(context) {
      console.log("call actions!!");
      context.commit("inc");
    },
  },
  plugins: [
    persistedstate({
      paths: ["count"], // 화면 갱신 시 유지시킬 변수 등록
    }),
  ],
});

export default store;
