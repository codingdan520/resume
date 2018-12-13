// 通过总结，可以写一个公共模板，让各个组件去套用
<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <el-form>
      <div class="content" v-for="(item,index) in items" :key="index">
        <i class="el-icon-delete icon" @click="removeItem(index)"></i>
        <el-form-item v-for="key in keys" :key="key.id" :label="label[key] || key">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <el-button type="primary" @click="addItem()">添加</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["title", "items", "label"],
  computed: {
    keys() {
      // console.log(Object.keys(this.items[0]));
      return Object.keys(this.items[0]);
    }
  },
  methods: {
    addItem() {
      var empty = {};
      this.keys.map(key => {
        empty[key] = "";
      });
      this.items.push(empty);
    },
    removeItem(index) {
      if (index == 0) {
        alert("此项不能删！");
      } else {
        this.items.splice(index, 1);
      }
    }
  }
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
  overflow: auto;
  .icon {
    font-size: 25px;
    font-weight: bold;
    color: #58b7ff;
    position: absolute;
    top: 6px;
    right: 10px;
    z-index: 1;
  }
  .el-form-item {
    margin-bottom: 5px;
  }
  .el-button {
    margin-top: 10px;
  }
}
</style>
