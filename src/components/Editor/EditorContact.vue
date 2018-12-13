<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <el-form>
      <el-form-item label="手机号码">
        <el-input v-model="contact.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="contact.email"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="contact.webchat"></el-input>
      </el-form-item>
      <el-form-item label="github">
        <el-input v-model="contact.github"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="contact.address"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["title","contact"]
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
