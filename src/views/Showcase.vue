<template>
	<div class="note-page">
		<app-input
			name="name"
			label="Name"
			v-model="name"
		/>
		<app-button :is-full-width="true" :isLoading="false">Tes</app-button>
	</div>
</template>

<script>
import AppInput from '../components/frames/inputs/AppInput'
import AppButton from '../components/frames/inputs/AppButton'

export default {
	components: {
		AppInput,
		AppButton
	},

	data: () => {
		return {
			name: ''
		}
	}
}
</script>

<style>

</style>