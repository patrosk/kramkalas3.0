<template>
  <div class="main">
    <Kim />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Kramkalas: Nallebjörnen Kim",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Om Nallebjörnen Kim. Kramkalas är ett litet bolag som, på ett unikt sätt, jobbar för samhällets olika delar. Jämställdhet, jämlikhet och inkludering är våra värderingar. Vi tror på att vi kan använda våra talanger, tillsammans, för att göra skillnad.",
        },
        {
          hid: "image",
          name: "og:image",
          content: "../images/kramkalaslogo.svg",
        },
        {
          hid: "google-site-verification",
          name: "google-site-verification",
         content="tffNJnN5EORQkDKq91hgAq1PEVS5NzMjCd4RWpFCVdg",
        }
      ],
    };
  },
};
</script>
