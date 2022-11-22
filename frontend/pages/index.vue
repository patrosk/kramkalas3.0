<template>
  <div class="main">
    <Home />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  head() {
    return {
      title: "Kramkalas: hem",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Kramkalas är ett litet bolag som, på ett unikt sätt, jobbar för samhällets olika delar. Jämställdhet, jämlikhet och inkludering är våra värderingar. Vi tror på att vi kan använda våra talanger, tillsammans, för att göra skillnad.",
        },
        {
          hid: "image",
          name: "og:image",
          content: "../images/kramkalaslogo.svg",
        },
        {
          hid: "google-site-verification",
          name: "google-site-verification",
          content: "tffNJnN5EORQkDKq91hgAq1PEVS5NzMjCd4RWpFCVdg",
        },
      ],
    };
  },
};
</script>
