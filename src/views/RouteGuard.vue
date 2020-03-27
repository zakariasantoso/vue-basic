<template>
  <div class="route-guard-page">

  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("Before Create")
  },
  created() {
    console.log("Created")
    
  },
  beforeDestroy() {
    console.log("Before Destroy")

  },
  destroyed() {
    console.log("Destroyed")

  },
  beforeRouteEnter(to, from, next) {
    console.log("Before Route Enter")
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("Before Route Leeave")
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style>

</style>