<template>
  <section>
    <h1>{{ contactPage.contactPage[0].pageBuilder[0].h1 }}</h1>
    <section class="hero">
      <p class="hero-description-1">
        {{ contactPage.contactPage[0].pageBuilder[0].heroDescription1 }}
      </p>
      <p class="hero-description-2">
        {{ contactPage.contactPage[0].pageBuilder[0].heroDescription2 }}
      </p>
      <p class="email">
        <a href="#">{{
          contactPage.contactPage[0].pageBuilder[0].heroEmailText
        }}</a>
      </p>
    </section>
    <section class="contact-container">
      <div class="contact-card">
        <div class="img-container">
          <img src="../images/javacutie.jpg" alt="" />
        </div>
        <div class="contact-content">
          <h3>Oskar Fritz</h3>
          <p class="email"><a href="#">emailaddress@gmail.com</a></p>
          <p>phone number</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="img-container">
          <img src="../images/javacutie.jpg" alt="" />
        </div>
        <div class="contact-content">
          <h3>Joakim Kaldemark</h3>
          <p class="email"><a href="#">emailaddress@gmail.com</a></p>
          <p>phone number</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="img-container">
          <img src="../images/javacutie.jpg" alt="" />
        </div>
        <div class="contact-content">
          <h3>Nema Vinkeloe Uuskyla</h3>
          <p class="email"><a href="#">emailaddress@gmail.com</a></p>
          <p>phone number</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`{ "contactPage": *[_type == "contactPage"]}`;

export default {
  async fetch() {
    this.contactPage = await this.$sanity.fetch(query);
  },
  data: () => ({ contactPage: "" }),
};
</script>
