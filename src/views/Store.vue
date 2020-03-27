<template>
  <div class="store-page">
    <app-form title="Login">
      <app-input v-model="form.email" name="email" label="Email"></app-input>
      <app-input v-model="form.password" name="password" label="Password"></app-input>
    <app-button @click="login()" :isFullWidth="true" theme="success">Login</app-button>
    </app-form>
  </div>
</template>

<script>
import AppButton from "@/components/frames/AppButton"
import AppForm from "@/components/frames/inputs/AppForm"
import AppInput from "@/components/frames/inputs/AppInput"
// import {SET_USER} from "@/store/mutations"
export default {
  components: {
    AppButton,
    AppForm,
    AppInput
    },
  data: () => {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.form.email,
        password: this.form.password
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