<template>
  <div class="list-content">
  <table class="table table-bordered">
    <tbody>
    <tr>
      <th>id</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>班级</th>
      <th>学科</th>
      <th>分数</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in datas">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
      <td>{{item.class}}</td>
      <td>{{item.items}}</td>
      <td>{{item.scroe}}</td>
      <td>
        <button type="button" class="btn btn-danger">删除</button>
        <button type="button" class="btn btn-success" @click="edit">编辑</button>
      </td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
    name:"list",
    data(){
        return {
            datas:[
                {id:1,name:"小明",age:18,class:1710,items:"语文",scroe:90},
                {id:2,name:"李四",age:22,class:1710,items:"语文",scroe:80},
                {id:3,name:"张三",age:20,class:1710,items:"语文",scroe:70},
            ]
        }
    },
    methods:{
        edit(){
            this.$router.push('/edit')
        }
    },
    mounted(){
        fetch('/api/select').then(function(e){
            return e.text();
        }).then((e)=>{
            console.log(e)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width:800px;
  margin:auto;
  font-size: 20px;
  color:black;
  text-align: center;
}
td,th{
	text-align: center;
}
  .btn{
    height: 30px;
    font-size:15px;
    line-height: 10px;
  }
</style>
