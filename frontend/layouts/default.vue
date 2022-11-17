<template>
  <div>
    <MobileMenu
      v-show="showMobileMenu"
      @closeMobileMenu="showMobileMenu = false"
    />
    <TheHeader
      @showMobileMenu="showMobileMenu = true"
      v-show="!showMobileMenu"
    />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.showMobileMenu = false;
    },
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
