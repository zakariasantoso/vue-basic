<template>
	<div class="todo-api-card bordered">
		<div class="tac-title">{{ title }}</div>

		<div class="tac-body">
			<p>
                {{body}}
            </p>
		</div>

		<div class="tac-action">
			<app-button
				theme="primary"
				@click="sendEdit()"
			>
				Edit
			</app-button>
			
			<app-button
				theme="error"
				:isLoading="deletingIds.includes(id)"
				@click="sendDelete()"
			>
				Delete
			</app-button>
		</div>
	</div>
</template>

<script>
import AppButton from '../frames/AppButton'

export default {
	components: {
		AppButton
	},

	props: {
		title: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		},
		deletingIds: {
			type: Array,
			required: false,
			default: null
		},
		id: {
			type: Number,
			required: true
		}
	},

	methods: {
		sendComplete() {
			this.$emit('complete')
		},
		sendEdit() {
			this.$emit('edit')
		},
		sendDelete() {
			this.$emit('delete')
		}
	}
}
</script>

<style lang="scss">
.todo-api-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 20px;
	min-height: 200px;

	background-color: white;

	.tac-title {
		text-align: center;
		padding: 0px 10px 10px;
		border-bottom: 1px solid #DFDFDF;
	}

	.tac-body {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.tac-action {
		display: flex;
		flex-direction: column;
		padding: 10px;

		border-top: 1px solid #DFDFDF;

		> * {
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
	}
}
</style>