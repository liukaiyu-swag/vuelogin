<template>
    <div class="login-from">
        <h1 class="title">登陆页</h1>
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
                没有用户 <a href="#" @click="regs">请注册</a>
            </div>
            <button class="btn btn-default" @click="loginfor">登陆</button>
        </form>
    </div>
</template>
<script>
    export default {
        name:"login",
        methods:{
            regs(){
                this.$router.push({path:'/reg'})
            },
            loginfor(){
                localStorage.login="yes";
                this.$router.push({path:'/'})
            }
        }
    }
</script>
<style>
    .login-from{
        width: 1200px;
        height:auto;
        margin:auto;
        border:1px solid gray;
        background: silver;
        text-align: center;
        color: white;
    }
    .login-from h1{
    	color: white;
    }
    .title{
        font-size: 24px;
        color:blue;
        font-weight: 400;
    }
</style>