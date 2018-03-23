<template>
    <div class="login-from">
        <h1 class="title">注册页</h1>
        <form>
            <div class="form-group">
                <label for="name">姓名</label>
                <input type="email" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="pass">密码</label>
                <input type="password" class="form-control" id="pass">
            </div>
            <div>
                已有用户 <a href="#" @click="logins">请登陆</a>
            </div>
            <button  class="btn btn-default " @click="logins">注册</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'reg',
        methods:{
            logins(){
                this.$router.push({path:'/login'})
            }
        }
    }
</script>
<style>
    .login-from{
        width: 500px;
        height:440px;
        margin:auto;
        border:1px solid gray;
        background: #defff7;
    }
    .title{
        font-size: 35px;
        color:blue;
        font-weight: 400;
    }
</style>