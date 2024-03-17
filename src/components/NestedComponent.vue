<template>
  <PageTitle title="부모 컴포넌트 Props 전달" />
  <PageTitle :title="title" />
  <PageTitle :title="post" />
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: { PageTitle },
  data() {
    return {
      title: "동적 props 전달",
      post: {
        id: 1,
        title: "post title 1",
      },
    };
  },
};
</script>
