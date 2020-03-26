<template>
  <div class="store-page">
    <div>
      <div>{{ getUser.name }}</div>
      <div>{{ getUser.email }}</div>
      <div>{{ getUser.age }}</div>
    </div>
    <app-button @click="login()">Button</app-button>
  </div>
</template>

<script>
import AppButton from "@/components/frames/AppButton"
// import {SET_USER} from "@/store/mutations"
export default {
  components: {
    AppButton
  },

  methods: {
    login() {
      this.$store.dispatch("login", {
        name: "Jhon",
        email: "jhon@jhon.jhon",
        age: 17
      })
    }
  },

	computed: {
		getUser() {
			return this.$store.getters.getAuthenticatedUser
		}
	}
}
</script>

<style>

</style>