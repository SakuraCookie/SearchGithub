<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$bus.$emit("updateList", [], { isFirst: false, isLoading: true });
      // this.$http.get(url).then(res=>{},err=>{})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (res) => {
          this.$bus.$emit("updateList", res.data.items, { isLoading: false });
        },
        (err) => {
          this.$bus.$emit("updateList", [], {
            isLoading: false,
            errMsg: err.message,
          });
        }
      );
    },
  },
};
</script>

<style>
</style>