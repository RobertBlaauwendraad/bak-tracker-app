<template>
  <tr>
    <th scope="row">{{ index }}</th>
    <td>{{ attempt.attempt_taker }}</td>
    <td>{{ attempt.attempt_time }}</td>
  </tr>
</template>

<script>
import {useAttemptGroupStore} from "@/store/attemptGroup";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Attempt",
  setup() {
    const attemptGroupStore = useAttemptGroupStore()
    return {
      attemptGroupStore
    }
  },
  props: {
    index: {
      required: true
    },
    attempt: {
      required: true
    }
  },
  methods: {
    // async created() {
    //   await this.attemptGroupStore.fetchAttempts();
    // }
  }
}
</script>

<style scoped>

</style>