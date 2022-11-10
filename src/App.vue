<template>
  <MainNavbar/>
  <div class="navbar-height"></div>
  <router-view/>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";

export default {
  name: 'App',
  components: {
    MainNavbar,
  }
}
</script>