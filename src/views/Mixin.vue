<template>
  <div class="mixin-page">
    <app-input label="Mixins Input"></app-input>
  </div>
</template>

<script>
import FormMixin from "../mixins/form"
export default {
  mixins: [
    FormMixin
  ]
}
</script>

<style>

</style>