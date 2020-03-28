<template>
  <div class="todo-detail-page">
    <card :title="todo.title" :body="todo.body" :id="todo.id" :deletingIds="[]" @edit="$router.push(`/todo/${todo.id + 1}`)"></card>
  </div>
</template>

<script>
import Card from "../components/elements/TodoApiCard";
export default {
  components: {
    Card
  },
  data: () => {
    return {
      todo: {
        id: 1,
        userId: 2,
        title: "Todo 1",
        body: "Todo Body"
      },
      todos: [
        {
          id: 1,
          userId: 2,
          title: "Todo 1",
          body: "Todo Body"
        },
        {
          id: 2,
          userId: 2,
          title: "Todo 2",
          body: "Todo Body 2"
        },
        {
          id: 3,
          userId: 2,
          title: "Todo 3",
          body: "Todo Body ke3"
        },
      ]
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true, 
      handler(newVal) {
        const todo = this.todos.find((todo) => {
          return todo.id == newVal
        });
        if (todo == null) {
          this.$router.push("/todo");
        } else {
          this.todo = todo;
        }
      } 
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("Before Route Enter")
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("Before Route Leeave")
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Before Route Update")
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style>

</style>