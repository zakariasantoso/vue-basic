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
import {mapActions, mapGetters} from "vuex"
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
      },
    }
  },
  methods: {
    login() {
      this.loginStore({
        email: this.form.email,
        password: this.form.password
      })
      // this.$store.dispatch("login", {
      //   email: this.form.email,
      //   password: this.form.password
      // })
    },
    // ...mapActions(["login"]) 
    ...mapActions({
      loginStore: "login"
    }) 
  },

	computed: {
		// getUser() {
		// 	return this.$store.getters.getAuthenticatedUser
    // },
    ...mapGetters(["getAuthenticatedUser"])
	}
}
</script>

<style>
.store-page {
  padding: 20px 30px;
}
</style>