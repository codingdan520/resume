<template>
  <div class="topbar">
    <div class="logo">
      <i class="el-icon-menu iconcolor"></i>
      Atuo Resume
    </div>
    <div class="action">
      <el-button disabled>注册</el-button>
      <el-button type="success" disabled>登录</el-button>
      <el-button type="primary" @click="preview">预览</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTopbar",
  methods: {
    preview() {
      this.$emit('preview')
    }
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  font-size: 25px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  align-items: center;
  .logo .iconcolor{
    color: #58B7FF;
    margin-right: 6px;
  }
}
</style>
