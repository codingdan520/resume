<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="profile.birth"></el-input>
      </el-form-item>
      <el-form-item label="应聘岗位">
        <el-input v-model="profile.work"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["title",'profile']
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
  .el-form-item {
    margin-bottom: 5px;
  }
</style>

