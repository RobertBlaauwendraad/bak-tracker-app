<template>
  <MainHeader/>
  <div class="container py-4">
    <h3 class="mb-0">Start a new game!</h3>
    <NewBak/>
    <h3 class="mt-4">Bak Tracker Options</h3>
    <button @click="restartBakTracker" class="btn btn-success me-2">Restart</button>
    <button @click="resetBakTracker" class="btn btn-danger">Reset</button>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import NewBak from "@/components/NewBak";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {MainHeader, NewBak},
  methods: {
    async restartBakTracker() {
      await this.axios.get(`/restart`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
    },
    async resetBakTracker() {
      await this.axios.get(`/reset`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }
}
</script>