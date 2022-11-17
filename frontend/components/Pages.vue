<template>
  <div>
    <h1>people</h1>
    <div>{{ people }}</div>
    <!-- <div>{{ pages.h1 }}</div>
    <div>{{ pages._children[0].title }}</div> -->
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
export default {
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "people"]`;
    const people = await $sanity.fetch(query);
    console.log(people);
    return { people };
  },
};
// export default {
//   async fetch() {
//     // const api =
//     //   "http://localhost:3000/api/v1/@apostrophecms/page/cla84vkd9001ols3j5el49b7s:en:published";
//     const api = "http://localhost:3000/api/v1/@apostrophecms/page";
//     this.pages = await this.$axios.$get(api);
//   },
//   data() {
//     return {
//       pages: {},
//     };
//   },
// };
</script>
