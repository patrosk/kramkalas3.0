<template>
  <section>
    <h1 class="about-h1">{{ page.page[0].pageBuilder[0].h1 }}</h1>
    <section class="hero">
      <div class="about p-container">
        <p class="hero-description-1">
          {{ page.page[0].pageBuilder[0].heroDescription1 }}
        </p>
        <p class="hero-description-2">
          {{ page.page[0].pageBuilder[0].heroDescription2 }}
        </p>
        <p class="email">
          <a :href="'mailto:' + page.page[0].pageBuilder[0].heroEmailText">{{
            page.page[0].pageBuilder[0].heroEmailText
          }}</a>
        </p>
      </div>
    </section>
    <section class="contact-container">
      <div class="contact-card">
        <div class="img-container">
          <SanityImage :asset-id="page.page[3].photo.asset._ref" />
        </div>
        <div class="contact-content">
          <h3>{{ page.page[3].firstName + " " + page.page[3].lastName }}</h3>
          <p class="email">
            <a :href="'mailto:' + page.page[3].email">{{
              page.page[3].email
            }}</a>
          </p>
          <p>{{ page.page[3].phone }}</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="img-container">
          <SanityImage :asset-id="page.page[2].photo.asset._ref" />
        </div>
        <div class="contact-content">
          <h3>{{ page.page[2].firstName + " " + page.page[2].lastName }}</h3>
          <p class="email">
            <a :href="'mailto:' + page.page[2].email">{{
              page.page[2].email
            }}</a>
          </p>
          <p>{{ page.page[2].phone }}</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="img-container">
          <SanityImage :asset-id="page.page[1].photo.asset._ref" />
        </div>
        <div class="contact-content">
          <h3>{{ page.page[1].firstName + " " + page.page[1].lastName }}</h3>
          <p class="email">
            <a :href="'mailto:' + page.page[1].email">{{
              page.page[1].email
            }}</a>
          </p>
          <p>{{ page.page[1].phone }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`{ "page": *[_type == "contactPage"] + *[_type == "people"]}`;

export default {
  async fetch() {
    this.page = await this.$sanity.fetch(query);
  },
  data: () => ({ page: "" }),
};
</script>
