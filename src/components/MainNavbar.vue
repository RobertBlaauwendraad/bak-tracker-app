<template>
  <nav class="navbar px-5 navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name: 'home'}">Bak Tracker</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
          <router-link class="nav-link" :to="{name: 'leaderboard'}">Leaderboard</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar"
}
</script>

<style scoped>

</style>