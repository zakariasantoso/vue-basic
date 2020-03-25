<template>
	<div class="todo-card bordered">
		<div class="tc-title">{{ title }}</div>

		<div class="tc-body">
			<app-button v-if="!isCompleted"
				theme="success"
				@click="sendComplete()"
			>
				Complete
			</app-button>
			<span class="tc-completed" v-else>Completed</span>
		</div>

		<div class="tc-action">
			<app-button
				theme="primary"
				@click="sendEdit()"
			>
				Edit
			</app-button>
			
			<app-button
				theme="error"
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
		isCompleted: {
			type: Boolean,
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
.todo-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 20px;
	min-height: 200px;

	background-color: white;

	.tc-title {
		text-align: center;
		padding: 0px 10px 10px;
		border-bottom: 1px solid #DFDFDF;
	}

	.tc-body {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.tc-completed {
		font-size: 20px;
		font-weight: bold;
		color: limegreen;
		text-transform: uppercase;
		text-align: center;
	}

	.tc-action {
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