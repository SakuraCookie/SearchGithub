<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-show="users.length" v-for="u in users" :key="u.id">
      <a :href="u.html_url" target="_blank">
        <img :src="u.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text" v-text="u.login"></p>
    </div>
    <h1 v-show="info.isFirst">Welcome to use!</h1>
    <h1 v-show="info.isLoading">Loading...</h1>
    <h1 v-show="info.errMsg" style="color:red">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info:{
        isFirst:true,
        isLoading:false,
        errMsg:"",
      },
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("updateList",(val,info)=>{
      this.users=val
      this.info={...this.info,...info}
    })
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>