<template>
  <section>
    <h1>{{ aboutPage.aboutPage[0].pageBuilder[0].h1 }}</h1>
    <section class="hero">
      <p class="hero-description-1">
        {{ aboutPage.aboutPage[0].pageBuilder[0].heroDescription1 }}
      </p>
      <p class="hero-description-2">
        {{ aboutPage.aboutPage[0].pageBuilder[0].heroDescription2 }}
      </p>
      <p class="hero-description-3">
        {{ aboutPage.aboutPage[0].pageBuilder[0].heroDescription3 }}
      </p>
    </section>
    <section class="team">
      <h2>{{ aboutPage.aboutPage[0].pageBuilder[1].heading }}</h2>
      <p class="team-description">
        {{ aboutPage.aboutPage[0].pageBuilder[1].teamDescription }}
      </p>
      <div class="team-container">
        <div class="team-card">
          <div class="img-container">
            <img src="../images/javacutie.jpg" alt="" />
          </div>
          <h3>Oskar Fritz</h3>
          <p class="bio">
            Författare av böckerna om Kim och grundare av Kramkalas. Skriver och
            framför låtarna om Kim tillsammans med Nema.
          </p>
          <p class="email"><a href="#">skicka ett mejl till Oskar</a></p>
        </div>
      </div>
    </section>
    <section class="partners">
      <h2>{{ aboutPage.aboutPage[0].pageBuilder[2].heading }}</h2>
      <p class="partners-description">
        {{ aboutPage.aboutPage[0].pageBuilder[2].partnersDescription }}
      </p>
      <div class="partners-container">
        <div class="partner-card">
          <div class="img-container">
            <img src="../images/javacutie.jpg" alt="" />
          </div>
          <h3>BRIS</h3>
          <p class="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            architecto iusto ipsum nihil corporis minus pariatur accusamus, at
            explicabo ducimus rem doloremque nostrum nulla perferendis tenetur?
            Expedita impedit aliquam quidem?
          </p>
          <p class="link"><a href="#">länk till deras hemsida</a></p>
        </div>
      </div>
    </section>
    <section class="projects">
      <h2>{{ aboutPage.aboutPage[0].pageBuilder[3].heading }}</h2>
      <div class="projects-container">
        <p>
          {{ aboutPage.aboutPage[0].pageBuilder[3].projectsDescription1 }}
        </p>
        <p>
          {{ aboutPage.aboutPage[0].pageBuilder[3].projectsDescription2 }}
        </p>
        <p class="email">
          <a href="#">{{
            aboutPage.aboutPage[0].pageBuilder[3].companyEmailText
          }}</a>
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`{ "aboutPage": *[_type == "aboutPage"]}`;

export default {
  async fetch() {
    this.aboutPage = await this.$sanity.fetch(query);
  },
  data: () => ({ aboutPage: "" }),
};
</script>
