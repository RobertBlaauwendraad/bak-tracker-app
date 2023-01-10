<template>
  <h3>Leaderboard</h3>
  <p v-if="attempts.length === 0">No attempts were made!</p>
  <div v-else>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Time</th>
      </tr>
      </thead>
      <tbody>
        <Attempt
          v-for="(attempt, index) in attempts"
          :key="attempt.attempt_id"
          :attempt="attempt"
          :index="index + 1"
        />
      </tbody>
    </table>
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
  mounted() {
    this.axios.get('http://localhost:3000/api/v1/attempt-groups/1/attempts')
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