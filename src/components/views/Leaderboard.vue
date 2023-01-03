<template>
  <div class="container d-flex flex-column volunteer-container py-4">
    <AttemptGroupList/>
  </div>
</template>

<script>
import AttemptGroupList from "@/components/AttemptGroupList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Leaderboard",
  components: {AttemptGroupList}
}
</script>

<style scoped>

</style>