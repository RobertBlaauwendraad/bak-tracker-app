<template>
  <h3>Leaderboard</h3>
  <p v-if="attempts.length === 0">No attempts were made!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <Attempt
        v-for="attempt in attempts"
        :key="attempt.id"
        :attempt="attempt"
      />
    </div>
  </div>

</template>

<script>
import {useAttemptGroupStore} from "@/store/attemptGroup";
import Attempt from "@/components/Attempt.vue";

export default {
  name: "AttemptGroupList",
  components: {Attempt},
  setup() {
    const attemptGroupStore = useAttemptGroupStore()
    return {
      attemptGroupStore
    }
  },
  data: () => ({
    attempts: []
  }),
  created() {
    this.attemptGroupStore.fetchAttempts();
  },
  mounted() {
    this.axios.get('/attempts')
      .then((response) => {
        this.attempts = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>