// 重复写次模块会增加代码量，可以用模板的方式去循环组件，减少代码量，此组件可不要 
<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <el-form>
      <div class="content">
        <i class="el-icon-delete icon"></i>
        <el-form-item label="学校">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input></el-input>
        </el-form-item>
        <el-button type="primary">添加</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
// background: #fff;
h2 {
  margin-bottom: 10px;
}
hr {
  margin-bottom: 8px;
  height: 3px;
  background-color: #acb1b9;
  border: none;
}
.content {
  position: relative;
  .icon {
    font-size: 25px;
    font-weight: bold;
    color: #58b7ff;
    position: absolute;
    top: 6px;
    right: 10px;
  }
  .el-form-item {
    margin-bottom: 5px;
  }
  .el-button{
    margin-top: 10px;
  }
}
</style>
