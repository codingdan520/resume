<template>
  <div class="editor">
    <div class="left">
      <div
        class="left-item"
        v-for="(item,index) in icons"
        :key="index"
        :class="{active:currentTab === index}"
        @click="currentTab = index"
      >
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="item"></use>
        </svg>
      </div>
    </div>
    <div class="panes">
      <li :class="{hover:currentTab === 0}">
        <editor-profile :profile="resume.profile" title="个人信息"></editor-profile>
      </li>
      <li :class="{hover:currentTab === 1}">
        <editor-contact :contact="resume.contact" title="联系方式"></editor-contact>
      </li>
      <li v-bind:class="{hover:currentTab===2}">
        <editor-array
          v-bind:items="resume.education"
          title="教育经历"
          v-bind:label="{school:'学校',timeline:'时间段',profession:'专业',degree:'学位'}"
        ></editor-array>
      </li>
      <li v-bind:class="{hover:currentTab===3}">
        <editor-array
          v-bind:items="resume.workexperience"
          title="工作经历"
          v-bind:label="{company:'公司',time:'历时',experience:'工作内容'}"
        ></editor-array>
      </li>
      <li v-bind:class="{hover:currentTab===4}">
        <editor-array
          v-bind:items="resume.project"
          title="项目经历"
          v-bind:label="{title:'项目名称',time:'项目时间',content:'项目内容'}"
        ></editor-array>
      </li>
      <li v-bind:class="{hover:currentTab===5}">
        <editor-array
          v-bind:items="resume.awards"
          title="获奖经历"
          v-bind:label="{awardname:'奖项',awardtime:'获奖时间'}"
        ></editor-array>
      </li>
    </div>
  </div>
</template>

<script>
import EditorProfile from "./EditorProfile";
import EditorContact from "./EditorContact";
import EditorArray from "./EditorArray";
// import EditorEducation from "./EditorEducation";
export default {
  name: "HomeEditor",
  props: ["resume"],
  components: {
    EditorProfile,
    EditorContact,
    EditorArray
    // EditorEducation
  },
  data() {
    return {
      currentTab: 0,
      icons: [
        "#icon-shenfenzheng",
        "#icon-lianxiwomen",
        "#icon-jiaoyujingli",
        "#icon-xiangmu",
        "#icon-gongzuojingli",
        "#icon-web__jiangli"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.editor {
  min-height: 520px;
  background: #ffffff;
  display: flex;
  .left {
    width: 60px;
    background: #58b7ff;
    padding-bottom: 10px;
    .left-item {
      padding: 10px;
      .icon {
        width: 40px;
        height: 40px;
        // vertical-align: 0.05em;
        fill: white;
        overflow: hidden;
      }
      &.active {
        background: white;
        .icon {
          fill: #58b7ff;
        }
      }
    }
  }
  .panes {
    // background-color: #ffffff;
    flex: 1;
    width: 100%;
    height: 100%;
    margin: 20px;
    li {
      list-style: none;
      display: none;
      height: 100%;
      overflow: auto;
      // padding:24px;
      &.hover {
        display: block;
      }
    }
  }
}
</style>
