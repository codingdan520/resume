<template>
  <div class="home" :class="{show:previewMode}">
    <home-topbar class="topbar" v-on:preview="preview"></home-topbar>
    <div class="container">
      <home-editor :resume="resume" class="editor"></home-editor>
      <home-preview :resume="resume" class="preview"></home-preview>
    </div>
    <el-button type="primary" class="exit" @click="exitpreview">退出预览</el-button>
  </div>
</template>

<script>
import HomeTopbar from "./Topbar/HomeTopbar";
import HomeEditor from "./Editor/HomeEditor";
import HomePreview from "./Preview/HomePreview";
export default {
  name: "Home",
  data() {
    return {
      previewMode: false,
      resume: {
        // labelPosition: "top",
        profile: { name: "", city: "", birth: "", age: "", work: "" },
        education: [{ school: "", timeline: "", profession: "", degree: "" }],
        workexperience: [{ company: "", time: "", experience: "" }],
        project: [{ title: "", time: "", content: "" }],
        awards: [{ awardname: "", awardtime: "" }],
        contact: { phone: "", email: "", webchat: "", github: "", address: "" }
      }
    };
  },
  components: {
    HomeTopbar,
    HomeEditor,
    HomePreview
  },
  methods: {
    preview() {
      this.previewMode = true;
    },
    exitpreview() {
      this.previewMode = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .show {
    //此处为点击预览后的样式，
    .topbar {
      display: none;
    }
    .editor {
      display: none;
    }
    .preview {
      max-width: 800px;
      margin: 32px auto 0px auto !important;
    }
    .exit {
      display: inline-block;
      position: fixed;
      right: 16px;
      bottom: 8px;
    }
  }
  .topbar {
    // 此处为预览时的样式
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    position: relative;
    // z-index: 1;
  }
  .container {
    display: flex;
    height: 100%;
    background: #f9fafc;

    .editor {
      width: 560px;
      margin: 16px 8px 16px 16px;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.3);
      border-radius: 4px;
      overflow: hidden;
    }
    .preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.3);
      border-radius: 4px;
      overflow: auto;
    }
  }
  .exit {
    display: none;
    position: fixed;
    right: 16px;
    bottom: 8px;
  }
</style>