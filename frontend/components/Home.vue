<template>
  <section>
    <h1>{{ homePage.homePage[0].pageBuilder[0].h1 }}</h1>
    <section class="hero">
      <div class="hero-img">
        <SanityImage
          :asset-id="homePage.homePage[0].pageBuilder[0].heroImage.asset._ref"
          :alt="homePage.homePage[0].pageBuilder[0].heroImage.caption"
        />
      </div>
      <div class="p-container">
        <p class="hero-description-1">
          {{ homePage.homePage[0].pageBuilder[0].heroDescription1 }}
        </p>
        <p class="hero-description-2">
          {{ homePage.homePage[0].pageBuilder[0].heroDescription2 }}
        </p>
        <p class="hero-link">
          <NuxtLink :to="homePage.homePage[0].pageBuilder[0].heroLinkUrl">{{
            homePage.homePage[0].pageBuilder[0].heroLinkText
          }}</NuxtLink>
        </p>
      </div>
    </section>
    <section class="game">
      <h2>{{ homePage.homePage[0].pageBuilder[1].heading }}</h2>
      <div class="game-container">
        <SanityImage
          :asset-id="homePage.homePage[0].pageBuilder[1].gameImage.asset._ref"
          :alt="homePage.homePage[0].pageBuilder[1].gameImage.caption"
        />
        <div class="p-container">
          <p class="game-description">
            {{ homePage.homePage[0].pageBuilder[1].gameDescription }}
          </p>
          <p class="game-link">
            <a href="/">{{
              homePage.homePage[0].pageBuilder[1].gameLinkText
            }}</a>
          </p>
        </div>
      </div>
    </section>
    <section class="about">
      <h2>{{ homePage.homePage[0].pageBuilder[2].heading }}</h2>
      <div class="about-container">
        <div class="p-container">
          <p class="about-description">
            {{ homePage.homePage[0].pageBuilder[2].kimDescription }}
          </p>
          <p class="about-link">
            <NuxtLink :to="homePage.homePage[0].pageBuilder[2].kimLinkUrl">{{
              homePage.homePage[0].pageBuilder[2].kimLinkText
            }}</NuxtLink>
          </p>
        </div>
        <SanityImage
          :asset-id="homePage.homePage[0].pageBuilder[2].kimImage.asset._ref"
          :alt="homePage.homePage[0].pageBuilder[2].kimImage.caption"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`{ "homePage": *[_type == "homePage"]}`;

export default {
  async fetch() {
    this.homePage = await this.$sanity.fetch(query);
  },
  data: () => ({ homePage: "" }),
};
</script>
