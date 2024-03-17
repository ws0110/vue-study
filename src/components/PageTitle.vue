<template>
  <h2>{{ title.id ? title.id : title }}</h2>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Page Title 1",
    },
  },
};
</script>
