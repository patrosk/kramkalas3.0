<template>
  <section>
    <h1>{{ page.page[0].pageBuilder[0].h1 }}</h1>
    <section class="hero">
      <div class="p-container">
        <p class="hero-description-1">
          {{ page.page[0].pageBuilder[0].heroDescription1 }}
        </p>
        <p class="hero-description-2">
          {{ page.page[0].pageBuilder[0].heroDescription2 }}
        </p>
        <p class="hero-description-3">
          {{ page.page[0].pageBuilder[0].heroDescription3 }}
        </p>
      </div>
    </section>
    <section class="team">
      <h2>{{ page.page[0].pageBuilder[1].heading }}</h2>
      <p class="team-description">
        {{ page.page[0].pageBuilder[1].teamDescription }}
      </p>
      <div class="team-container">
        <div class="team-card">
          <div class="img-container">
            <SanityImage
              :asset-id="page.page[3].photo.asset._ref"
              :alt="page.page[3].photo.caption"
            />
          </div>
          <h3>{{ page.page[3].firstName + " " + page.page[3].lastName }}</h3>
          <p class="bio">
            {{ page.page[3].bio }}
          </p>
          <p class="email">
            <a :href="'mailto:' + page.page[3].email"
              >skicka ett mejl till {{ page.page[3].firstName }}</a
            >
          </p>
        </div>
        <div class="team-card">
          <div class="img-container">
            <SanityImage
              :asset-id="page.page[2].photo.asset._ref"
              :alt="page.page[2].photo.caption"
            />
          </div>
          <h3>{{ page.page[2].firstName + " " + page.page[2].lastName }}</h3>
          <p class="bio">
            {{ page.page[2].bio }}
          </p>
          <p class="email">
            <a :href="'mailto:' + page.page[2].email"
              >skicka ett mejl till {{ page.page[2].firstName }}</a
            >
          </p>
        </div>
        <div class="team-card">
          <div class="img-container">
            <SanityImage
              :asset-id="page.page[1].photo.asset._ref"
              :alt="page.page[1].photo.caption"
            />
          </div>
          <h3>{{ page.page[1].firstName + " " + page.page[1].lastName }}</h3>
          <p class="bio">
            {{ page.page[1].bio }}
          </p>
          <p class="email">
            <a :href="'mailto:' + page.page[1].email"
              >skicka ett mejl till {{ page.page[1].firstName }}</a
            >
          </p>
        </div>
      </div>
    </section>
    <section class="partners">
      <h2>{{ page.page[0].pageBuilder[2].heading }}</h2>
      <p class="partners-description">
        {{ page.page[0].pageBuilder[2].partnersDescription }}
      </p>
      <div class="partners-container">
        <div class="partner-card">
          <div class="img-container">
            <SanityImage
              :asset-id="page.page[4].image.asset._ref"
              :alt="page.page[4].image.caption"
            />
          </div>
          <h3>{{ page.page[4].name }}</h3>
          <p class="description">
            {{ page.page[4].description }}
          </p>
          <!-- <p class="link">
            <a href="#">{{ page.page[4].linkText }}</a>
          </p> -->
        </div>
      </div>
    </section>
    <section class="projects">
      <h2>{{ page.page[0].pageBuilder[3].heading }}</h2>
      <div class="projects-container">
        <p>
          {{ page.page[0].pageBuilder[3].projectsDescription1 }}
        </p>
        <p>
          {{ page.page[0].pageBuilder[3].projectsDescription2 }}
        </p>
        <p class="email">
          <a
            :href="'mailto:' + page.page[0].pageBuilder[3].companyEmailAddress"
            >{{ page.page[0].pageBuilder[3].companyEmailText }}</a
          >
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`{ "page": *[_type == "aboutPage"] + *[_type == "people"] + *[_type == "partners"]}`;

export default {
  async fetch() {
    this.page = await this.$sanity.fetch(query);
  },
  data: () => ({ page: "" }),
};
</script>
