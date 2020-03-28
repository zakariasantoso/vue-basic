<template>
	<div class="todo-api-page">
		<app-form title="Todo Api">
			<app-input name="userId" label="User ID" v-model="form.userId" />
			<app-input name="title" label="Title" v-model="form.title" />
			<app-input name="body" label="Body" v-model="form.body" />
			<app-button
				:is-full-width="true"
				:isLoading="isSubmitLoading"
				theme="success"
				@click="submitTodo()"
			>
				Submit
			</app-button>

			<app-button
				v-if="edittedId != null"
				:is-full-width="true"
				:isLoading="false"
				@click="cancelEditted()"
			>
				Cancel
			</app-button>
		</app-form>

		<app-loading v-if="isApiLoading" class="ta-loading"/>
		<div class="no-data" v-if="todos.length < 1 && !isApiLoading">No Data</div>
		<div class="ta-list" v-else-if="todos.length > 0 && !isApiLoading">
			<template v-for="(todo, index) in todos">
				<router-link :to="`/todo/${todo.id}`" :key="index">
				<todo-api
					:id="todo.id"
					:title="todo.title"
					:body="todo.body"
					:deletingIds="deletingIds"
					@delete="deleteTodo(todo.id)"
					@edit="setEditted(todo.id)"
				></todo-api>
				</router-link>
			</template>
		</div>
	</div>
</template>

<script>
import AppForm from "@/components/frames/inputs/AppForm";
import AppInput from "@/components/frames/inputs/AppInput";
import AppButton from "@/components/frames/AppButton";
import AppLoading from "@/components/frames/AppLoading";

import TodoApi from "@/components/elements/TodoApiCard";

import { getTodosApi, postTodoApi, putTodoApi, deleteTodoApi } from "@/apis/todo";

export default {
	components: {
		AppLoading,
		AppForm,
		AppInput,
		AppButton,
		TodoApi
	},

	data: () => {
		return {
			isSubmitLoading: false,
			edittedId: null,
			deletingIds: [],

			form: {
				userId: "",
				title: "",
				body: ""
			},
			todos: [],
			isApiLoading: false,
			isApiLoaded: false
		};
	},
	methods: {
		clearForm() {
			this.form.userId = "";
			this.form.title = "";
			this.form.body = "";
		},

		submitTodo() {
			const todo = {
				userId: this.form.userId,
				title: this.form.title,
				body: this.form.body
			};
			if (this.edittedId == null) {
				this.addTodo(todo);
			} else {
				this.editTodo(todo);
			}
		},

		addTodo(todo) {
			this.isSubmitLoading = true;

			postTodoApi(todo.userId, todo.title, todo.body)
				.then(response => {
					this.todos.unshift(response.data);
				})
				.catch(error => {
					console.log(error)
					const id = this.todos[0].id + 1;
					const data = {
						id,
						...this.form
					}
					this.todos.unshift(data);
				})
				.finally(() => {
					this.isSubmitLoading = false;
					this.clearForm();
				});
		},

		setEditted(id) {
			this.edittedId = id;
			const currentItem = this.todos.find((todo) => {
				return todo.id == id;
			});

			this.form.userId = currentItem.userId;
			this.form.title = currentItem.title;
			this.form.body = currentItem.body;
		},

		cancelEditted() {
			this.edittedId = null;
			this.clearForm();
		},

		editTodo(todo) {
			this.isSubmitLoading = true;

			putTodoApi(this.edittedId, todo.userId, todo.title, todo.body)
				.then((response) => {
					const index = this.todos.findIndex((todo) => {
						return todo.id == this.edittedId;
					});
				this.todos[index] = response.data;
				})
				.catch((error) => {	
					const index = this.todos.findIndex((todo) => {
						return todo.id == this.edittedId;
					});
					const data = {
						id: this.edittedId,
						...this.form
					}
					this.todos[index] = data;
					console.log(error.response);
				})
				.finally(() => {
					this.isSubmitLoading = false;
					this.edittedId = null;
					this.clearForm();
				})
		},

		deleteTodo(id) {
			this.deletingIds.push(id);

			deleteTodoApi(id)
				.then(() => {
					const index = this.todos.findIndex((todo) => {
						return todo.id == id;
					});
					this.todos.splice(index, 1);
				})
				.catch((error) => {
					console.log(error);
					const index = this.todos.findIndex((todo) => {
						return todo.id == id;
					});
					this.todos.splice(index, 1);
				})
				.finally(() => {
					const index = this.deletingIds.findIndex((deletingId) => {
						return deletingId == id;
					});
					this.deletingIds.splice(index, 1);
				})
		}
	},

	mounted() {
		this.isApiLoading = true
		getTodosApi()
			.then(response => {
				this.todos = response.data;
				this.isApiLoaded = true;
			})
			.catch(() => {
				this.todos = [
					{
						userId: 1,
						id: 1,
						title: "Latihan Vue.JS",
						body: "Belajar Vue.JS"
					},
					{
						userId: 1,
						id: 2,
						title: "Latihan Javascript",
						body: "Belajar Javascript"
					}
				]
			})
			.finally(() => {
				this.isApiLoading = false;
			})
	}
};
</script>

<style lang="scss">
.todo-api-page {
	padding: 20px 30px;

	.ta-list {
		display: flex;
		flex-wrap: wrap;
		margin: 0px -10px;

		> * {
			margin: 10px;
			flex: 0 1 calc(100% / 3 - 20px);
		}
	}
	.ta-loading {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px;
	}
}
</style>