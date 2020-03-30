<template>
  <div class="todo-detail-page">
    <card 
      :title="todo.title" 
      :body="todo.body" 
      :id="todo.id" 
      v-if="!isDetailLoading" 
      :userId="todo.userId" 
    />
    <loader v-else></loader>
    <h1 v-if="todo < 1"><i>Todo list not found!</i></h1>
    <div class="tdp-button" v-if="!isDetailLoading">
      <router-link :to="`/todo/${parseInt($route.params.id) - 1}`">Back</router-link>
      <router-link :to="`/todo/${parseInt($route.params.id) + 1}`">Next</router-link>
    </div>
  </div>
</template>

<script>
import Card from "../components/elements/TodoDetail";
import Loader from "../components/frames/AppLoading";
import { getTodoApi } from "../apis/todo";
export default {
  data: () => {
    return {
      todo: {},
      isDetailLoading: false
    }
  },
  components: {
    Card,
    Loader
  },
  watch: {
    '$route.params.id': {
      // $route.params.id = ambil parameter id dari router
      immediate: true, 
      // fungsi immediate(segera) agar dijalankan dari awal 
      handler(newVal) {
        this.isDetailLoading = true
        // newVal = value baru dari $route.params.id
        getTodoApi(newVal)
        .then((resp) => {
          this.todo = resp.data
        })
        .catch((err) => {
          console.log(err)
          this.todo = {
            id: 1,
            userId: 2,
            title: "Todo 1",
            body: "Todo Body"
          };
        })
        .finally(() => {
          this.isDetailLoading = false
        })
        // if (todo == null) {
        //   this.$router.push("/todo");
        //   // this.$router.push(`${link}`) = redirect versi vue (kelebihan = !loading)
        // } else {
        //   this.todo = todo;
        // }
      } 
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log("Before Route Enter")
    // console.log(to)
    // console.log(from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // console.log("Before Route Leeave")
    // console.log(to)
    // console.log(from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    // console.log("Before Route Update")
    // console.log(to)
    // console.log(from)
    next()
  }
}
</script>

<style lang="scss">
  .todo-detail-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .tdp-button {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    &:first-child {
      // display: block;
      // flex: 1 1 100%;
    }
  }
</style>