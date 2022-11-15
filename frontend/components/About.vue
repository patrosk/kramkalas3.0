<template>
  <section>
    <h1>{{ aboutPage.aboutPage[0].pageBuilder[0].h1 }}</h1>
    <section class="hero">
      <p class="hero-description-1">
        Kramkalas är ett litet bolag som, på ett unikt sätt, jobbar för
        samhällets olika delar. Jämställdhet, jämlikhet och inkludering är våra
        värderingar. Vi tror på att vi kan använda våra talanger, tillsammans,
        för att göra skillnad.
      </p>
      <p class="hero-description-2">
        Vårt nuvarande projekt, nallebjörnen Kim, kommer lanseras inom kort. I
        detta projekt har vi skrivit barnböcker i rim, gjort musik och
        uppmuntrar barn till att leka med ord. 50% av vinsten på böckerna kommer
        att gå till olika organisationer som gynnar barn.
      </p>
      <p class="hero-description-3">
        Vi tar gärna emot donationer och sponsorer.
      </p>
    </section>
    <section class="team">
      <h2>Vårt team</h2>
      <p class="team-description">
        Vi som är Kramkalas kommer från olika yrkeskategorier såsom
        betongbranschen, marknadsföring, musikbranschen och webbutveckling.
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
      <h2>Våra partners</h2>
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
      <h2>Framtida projekt</h2>
      <div class="projects-container">
        <p>
          Vi har många idéer för framtida projekt som främjar rättvisa,
          jämställdhet och likabehandling.
        </p>
        <p>
          Är ni ett företag eller en organisation som vill samarbeta med oss? Ni
          kanske har en grym idé till ett projekt som vi kan samarbeta på? Hör
          av er till oss!
        </p>
        <p class="email"><a href="#">mejla oss!</a></p>
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
