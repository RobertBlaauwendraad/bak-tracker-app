<template>
  <MainHeader/>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Receive help from a volunteer!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dui vestibulum, lobortis sem vehicula, euismod nisi.
          </p>
          <router-link :to="{name: 'available-volunteers'}" class="btn btn-outline-light">See available volunteers</router-link>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Become a volunteer!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dui vestibulum, lobortis sem vehicula, euismod nisi.
          </p>
          <router-link class="btn btn-outline-light disabled" to="">Not implemented yet</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {MainHeader}

}
</script>

<style scoped>

</style>