<template>
  <div class="main">
    <Contact />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Kramkalas: kontakt",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Kontakta oss på Kramkalas. Kramkalas är ett litet bolag som, på ett unikt sätt, jobbar för samhällets olika delar. Jämställdhet, jämlikhet och inkludering är våra värderingar. Vi tror på att vi kan använda våra talanger, tillsammans, för att göra skillnad.",
        },
        {
          hid: "image",
          name: "og:image",
          content: "../images/kramkalaslogo.svg",
        },
      ],
    };
  },
};
</script>
