<template>
  <div>
    <h1>Välkommen till KRAMKALAS!</h1>
    <h3>Här är alla välkomna!</h3>
    <div v-for="person in people.results" :key="person._id">
      <img :src="'/backend/public' + person.image._urls['one-third']" />
      <h5>{{ person.image._urls["one-third"] }}</h5>
      <h5>{{ person.name }}</h5>
    </div>
    <img
      src="/backend/public/uploads/attachments/cla9uv6yw00095s3j097h169p-javacutie.full.jpg"
      alt=""
    />
    <h5>{{ people.results }}</h5>
    <!-- <h5>
      {{
        people.results[0].image.items[0]._image[0].attachment._urls["one-third"]
      }}
    </h5>
    <img
      :src="
        people.results[0].image.items[0]._image[0].attachment._urls['one-third']
      "
      alt=""
    />
    <h5>{{ people.results[0].bio }}</h5>
    <h5>{{ people.results[1].name }}</h5>
    <h5>{{ people.results[1].bio }}</h5> -->
  </div>
</template>

<script>
export default {
  async fetch() {
    const api = "http://localhost:3000/api/v1/people";
    this.people = await this.$axios.$get(api);
  },
  data() {
    return {
      people: {},
    };
  },
};
</script>
