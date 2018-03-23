<template>
  <div id="app">
    <header>
      <div class="wel-left">
        <div class="glyphicon glyphicon-home" @click="navback"></div>
        <div class="glyphicon  glyphicon-chevron-left" @click="backs"></div>
        <h3 class="header-title">学生信息管理表</h3>
      </div>
      <div class="user-info">
        <p>欢迎xxx登陆</p>
        <a href="">退出</a>
      </div>
    </header>
    <transition>
      <router-view/>
    </transition>
    <div class="glyphicon  glyphicon-plus" @click="add"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
      navback(){
          this.$router.push({path:'/'})
      },
      backs(){
          this.$router.push({path:'/'})
      },
      add(){
          this.$router.push({path:'/add'})
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  padding:0;
  margin:0;
  list-style: none;
  text-decoration: none;
}
header{
  width: 1200px;
  height:50px;
  background: #95d4ff;
  overflow: hidden;
  margin:auto;
  position: relative;
}
  .wel-left{
    width: 100%;
    height:100%;
  }
  .wel-left{
    float: left;
  }
  .glyphicon{
    width: 20px;
    height:100%;
    font-size: 20px;
    line-height: 50px;
    color:black;
    float: left;
    margin-left: 10px;
  }
  .header-title{
    line-height: 15px;
    margin-left:20px;
  }
  .user-info{
    position: absolute;
    right:0;
    top:0;
    font-size: 18px;
    line-height: 50px;
  }
  .user-info p{
    float: left;
  }
  .user-info a{
    display: block;
    float: right;
  }
</style>
