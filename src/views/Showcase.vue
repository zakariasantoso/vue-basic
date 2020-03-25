<template>
	<div class="showcase-page">
		<section>
			<h3>App Input</h3>
			<app-input
				name="name"
				label="Name"
				v-model="name"
			/>
		</section>

		<section>
			<h3>App Button</h3>
			<app-button 
				:is-full-width="true"
				:isLoading="false"
			>
				App Button
			</app-button>
		</section>
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

<style lang="scss">
.showcase-page {
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 10px 20px;
		padding: 10px;

		border: 1px solid black;
		border-radius: 5px;
	}

	h3 {
		text-align: center;
	}
}
</style>