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

		<section>
			<h3>App Loading</h3>
			<div class="content-center">
				<app-loading 
					size="30"
					color="black"
				>
					App Button
				</app-loading>
			</div>
		</section>
	</div>
</template>

<script>
import AppInput from '../components/frames/inputs/AppInput'
import AppButton from '../components/frames/inputs/AppButton'
import AppLoading from '../components/frames/AppLoading'

export default {
	components: {
		AppInput,
		AppButton,
		AppLoading
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

		> .content-center {
			display: flex;
			justify-content: center;
		}
	}

	h3 {
		text-align: center;
	}
}
</style>