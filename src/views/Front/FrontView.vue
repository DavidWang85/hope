<template>
  <FrontNavbar></FrontNavbar>
  <router-view />
  <FrontFooter></FrontFooter>
  <ClickToTop></ClickToTop>
  <div id="fb-root"></div>
</template>

<script>
import FrontNavbar from "@/components/FrontNavbar.vue";
import FrontFooter from "@/components/FrontFooter.vue";
import ClickToTop from "@/components/ClickToTop.vue";

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    ClickToTop,
  },
};
</script>
