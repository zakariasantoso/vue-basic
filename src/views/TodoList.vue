<template>
	<div class="todo-list-page">
		<app-form title="Todo List">
			<app-input
				name="title"
				label="Title"
				v-model="form.title"
			/>
			<app-check
				name="isCompleted"
				label="Is Done?"
				v-model="form.isCompleted"
			/>
			<app-button 
				:is-full-width="true"
				:isLoading="false"
				theme="success"
				@click="submitTodo()"
			>
				Submit
			</app-button>

			<app-button v-if="edittedIndex != null"
				:is-full-width="true"
				:isLoading="false"
				@click="cancelEditted()"
			>
				Cancel
			</app-button>
		</app-form>
		
		<div class="tlp-list">
			<todo-card v-for="(item, index) in todos" :key="index"
				:title="item.title"
				:isCompleted="item.isCompleted"
				@complete="completeTodo(index)"
				@delete="deleteTodo(index)"
				@edit="setEditted(index)"
			/>
		</div>
	</div>
</template>

<script>
import AppForm from '../components/frames/inputs/AppForm'
import AppInput from '../components/frames/inputs/AppInput'
import AppCheck from '../components/frames/inputs/AppCheckBox'
import AppButton from '../components/frames/AppButton'

import TodoCard from '../components/elements/TodoCard'

export default {
	components: {
		AppForm,
		AppInput,
		AppCheck,
		AppButton,
		TodoCard
	},

	data: () => {
		return {
			edittedIndex: null,
			form: {
				title: '',
				isCompleted: false
			},

			todos: [
				{title: "Todo 1", isCompleted: false}
			]
		}
	},

	methods: {
		clearForm() {
			this.form.title = '',
			this.form.isCompleted = false
		},

		submitTodo() {
			const todo = {
				title: this.form.title,
				isCompleted: this.form.isCompleted
			}

			if (this.edittedIndex == null) {
				this.addTodo(todo)
			} else {
				this.editTodo(todo)
			}
		},

		addTodo(todo) {
			this.todos.push(todo)
			this.clearForm()
		},

		completeTodo(index) {
			this.todos[index].isCompleted = true
		},

		setEditted(index) {
			this.edittedIndex = index
			const currentItem = this.todos[index]

			this.form.title = currentItem.title
			this.form.isCompleted = currentItem.isCompleted
		},

		cancelEditted() {
			this.edittedIndex = null
			this.clearForm()
		},

		editTodo() {
			this.todos[this.edittedIndex].title = this.form.title
			this.todos[this.edittedIndex].isCompleted = this.form.isCompleted

			this.edittedIndex = null
			this.clearForm()
		},

		deleteTodo(index) {
			this.todos.splice(index, 1)
		}
	}
}
</script>

<style lang="scss">
.todo-list-page {
	padding: 10px 20px;

	.tlp-list {
		display: flex;
		flex-wrap: wrap;
		margin: 0px -10px;

		> * {
			margin: 10px;
			flex: 0 1 calc(100%/3 - 20px);
		}
	}
}
</style>