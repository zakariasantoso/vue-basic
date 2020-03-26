<template>
	<div class="showcase-page">
		<section>
			<h3>Authenticated User</h3>
			<div class="content-center">
				<div>{{ getUser.name }}</div>
				<div>{{ getUser.email }}</div>
				<div>{{ getUser.age }}</div>
			</div>
		</section>

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

		<section>
			<h3>App Modal</h3>
			<div class="content-center">
				<app-modal
					title="Modal"
					:isModalOpen="isModalOpen"
					@close="isModalOpen = false"
				>
					Modal Body
				</app-modal>

				<app-button 
					:is-full-width="true"
					:isLoading="false"
					@click="isModalOpen = true"
				>
					Open Modal
				</app-button>
			</div>
		</section>

		<section>
			<h3>App Check Box</h3>
			<div class="content-center">
				<app-check 
					name="isChecked"
					v-model="isChecked"
					:disabled="true"
				/>
			</div>
		</section>
	</div>
</template>

<script>
import AppInput from '../components/frames/inputs/AppInput'
import AppButton from '../components/frames/AppButton'
import AppLoading from '../components/frames/AppLoading'
import AppModal from '../components/frames/AppModal'
import AppCheck from '../components/frames/inputs/AppCheckBox'

export default {
	components: {
		AppInput,
		AppButton,
		AppLoading,
		AppModal,
		AppCheck
	},

	data: () => {
		return {
			name: '',
			isModalOpen: false,
			isChecked: true
		}
	},

	computed: {
		getUser() {
			return this.$store.getters.getAuthenticatedUser
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
			align-items: center;
			flex-direction: column;
		}
	}

	h3 {
		text-align: center;
	}
}
</style>