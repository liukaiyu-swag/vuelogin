<template>

        <div class="edit-content">
            <form>
                <div class="form-group">
                    <label for="name">姓名</label>
                    <input type="text" class="form-control" id="name" name="name">
                </div>
                <div class="form-group">
                    <label for="age">年龄</label>
                    <input type="" class="form-control" id="age" name="age">
                </div>
                <div class="form-group">
                    <label for="class">班级</label>
                    <input type="" class="form-control" id="class" name="class">
                </div>
                <div class="form-group">
                    <label for="items">科目</label>
                    <input type="" class="form-control" id="items" name="items">
                </div>
                <div class="form-group">
                    <label for="scroe">分数</label>
                    <input type="" class="form-control" id="scroe" name="scroe">
                </div>
                <button type="submit" class="btn btn-default editCon">添加</button>
            </form>
        </div>

</template>
<script>
    export default {
        name: 'xxx'
    }
</script>
<style>
	.edit-content{
		width: 1200px;
		margin: 0 auto;
	}
</style>