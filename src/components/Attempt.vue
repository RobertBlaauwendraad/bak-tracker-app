<template>
  <div class="list-group-item list-group-item-action d-flex">
    {{ attempt }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Attempt",
  props: {
    attempt: {
      required: true
    }
  },
}
</script>

<style scoped>

</style>