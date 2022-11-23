<template>
  <div class="main">
    <Pages />
    <div v-for="person in people" :key="person._id">
      <h3>{{ person.firstName + " " + person.lastName }}</h3>
      <p>{{ person.bio }}</p>
      <p>{{ person.email }}</p>
      <p>{{ person.phone }}</p>
    </div>
    <p>{{ partners }}</p>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
export default {
  data() {
    return {
      people: [],
      partners: [],
    };
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "people"]`;
    const query2 = groq`*[_type == "partners"]`;
    const people = await $sanity.fetch(query);
    const partners = await $sanity.fetch(query2);
    console.log(people);
    return { people, partners };
  },
};
</script>
