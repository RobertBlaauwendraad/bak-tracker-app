import {defineStore} from "pinia";
import axios from "@/assets/js/axios";

export const useAttemptGroupStore = defineStore('attemptGroup', {
  state: () => ({
    groupId: 1,
    groupName: 'Global',
    attempts: []
  }),
  getters: {
    getAttempts: (state) => state.attempts
  },
  actions: {
    async fetchAttempts() {
      await axios.get(`http://localhost:3000/api/v1/attempt-groups/${this.groupId}/attempts`)
        .then((response) => {
          this.attempts = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
})