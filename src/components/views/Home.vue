<template>
  <MainHeader/>
  <div class="container py-4">
    <h3 class="mb-0">Start a new game!</h3>
    <NewBak/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import NewBak from "@/components/NewBak";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {MainHeader, NewBak}

}
</script>