<template>
  <div>
    <h1>pages</h1>
    <div>{{ pages.h1 }}</div>
    <div>{{ pages._children[0].title }}</div>
    <div>{{ pages._children[1].title }}</div>
  </div>
</template>

<script>
export default {
  async fetch() {
    // const api =
    //   "http://localhost:3000/api/v1/@apostrophecms/page/cla84vkd9001ols3j5el49b7s:en:published";
    const api = "http://localhost:3000/api/v1/@apostrophecms/page";
    this.pages = await this.$axios.$get(api);
  },
  data() {
    return {
      pages: {},
    };
  },
};
</script>
