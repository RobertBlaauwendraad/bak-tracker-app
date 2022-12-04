<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" v-model="name" id="name" placeholder="Enter your name">
    </div>
    <button @click="newBak" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "NewBak",
  data() {
    return {
      name
    }
  },
  methods: {
    async newBak() {
      const name = this.name;
      await this.axios.post(`/bak`, name)
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

<style scoped>

</style>