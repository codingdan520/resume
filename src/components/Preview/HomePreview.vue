<template>
  <div id="preview">
    <div class="layouttop">
      <div class="basicdata">
        <p>{{'姓名 / '+(resume.profile.name || '请填写名称')}}</p>
        <p>{{'所在城市 / '+(resume.profile.city || '请填写所在城市')}}</p>
        <p>{{'出生日期 / '+(resume.profile.birth || '请填写出生日期')}}</p>
        <p>{{'应聘岗位 / '+(resume.profile.work || '请填写应聘岗位')}}</p>
      </div>
      <div class="photo">
        <svg class="icon icon-pic" aria-hidden="true">
          <use xlink:href="#icon-unie64d"></use>
        </svg>
      </div>
      <div class="contactme">
        <p>{{'手机号码 / '+(resume.contact.phone || '请填写手机号码')}}</p>
        <p>{{'邮箱 / '+(resume.contact.email || '请填写邮箱')}}</p>
        <p>{{'微信 / '+(resume.contact.webchat || '请填写微信')}}</p>
        <p>{{'github / '+(resume.contact.github || '请填写github')}}</p>
        <p>{{'住址 / '+(resume.contact.address || '请填写住址')}}</p>
      </div>
    </div>
    <div class="layoutbottom">
      <section v-if="filter(resume.education).length>0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-polygon"></use>
        </svg>
        <h2>教育经历</h2>
        <ul>
          <li v-for="education in filter(resume.education)" :key="education.id">
            <span>{{education.school}}</span>
            <span>{{education.timeline}}</span>
            <span>{{education.profession}}</span>
            <span>{{education.degree}}</span>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.workexperience).length>0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-polygon"></use>
        </svg>
        <h2>工作经历</h2>
        <ul>
          <li v-for="work in filter(resume.workexperience)" :key="work.id">
            <span>{{work.company}}</span>
            <span>{{work.time}}</span>
            <div>{{work.experience}}</div>
          </li>
        </ul>
      </section>

      <section v-if="filter(resume.project).length>0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-polygon"></use>
        </svg>
        <h2>项目经历</h2>
        <ul>
          <li v-for="project in filter(resume.project)" :key="project.id">
            <span>{{project.title}}</span>
            <span>{{project.time}}</span>
            <div>{{project.content}}</div>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.awards).length>0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-polygon"></use>
        </svg>
        <h2>获奖经历</h2>
        <ul>
          <li v-for="awards in filter(resume.awards)" :key="awards.id">
            <span>{{awards.awardname}}</span>
            <span>{{awards.awardtime}}</span>
          </li>
        </ul>
      </section>
      <div class="bottompic"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resume"],
  //实现过滤空值
  methods: {
    filter(array) {
      return array.filter(item => !this.isEmpty(item)); //箭头函数，找出非空对象,isEmpty是一个属性，所以要使用this
    },
    isEmpty(object) {
      //实现：只要有一个value不是空，就返回false
      let empty = true;
      for (let key in object) {
        if (object[key]) {
          empty = false;
          break;
        }
      }
      return empty;
    }
  }
};
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: white;
  overflow: hidden;
}
#preview {
  min-height:520px;
  color: #fff;
  background: url(../../../static/backgroundpic.png) no-repeat;
  background-size: cover;
  .layouttop {
    height: 200px;
    padding: 48px;
    background-color: transparent;
    color: #44536a;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .basicdata {
      width: 200px;
      position: relative;
      left: 25px;
      // background-color:blue;
      p {
        margin-bottom: 8px;
        font-size: 14px;
      }
    }
    .photo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #b0b0b0;
      position: relative;
      .icon-pic {
        font-size: 120px;
        font-weight: bold;
        position: absolute;
        left: 14px;
        top: 15px;
      }
    }
    .contactme {
      width: 200px;
      position: relative;
      right: 20px;
      p {
        margin-bottom: 8px;
        font-size: 14px;
      }
    }
  }
  .layoutbottom {
    height: 100%;
    // padding-left:78px;
    padding: 32px 0px 820px 78px;
    // background-color: rgba(249,127,124,0.6);
    background-color: rgba(88, 183, 255, 0.6);
    position: relative;
    > section {
      display: block;
      // border: 1px solid red;
      margin-bottom: 8px;
    }
    > section > .icon {
      font-size: 40px;
      font-weight: bold;
    }
    > section > h2 {
      color: #44536a;
      font-size: 20px;
      margin-bottom: 8px;
      display: inline-block;
      vertical-align: middle;
      padding-left: 8px;
    }
    > section > ul {
      margin-bottom: 8px;
    }
    > section > ul > li > span {
      display: inline-block;
      // border: 1px solid red;
      margin-right: 16px;
      font-size: 18px;
      margin-bottom: 4px;
      color: white;
    }
    > section > ul > li > div {
      // border: 1px solid red;
      font-size: 14px;
      line-height: 1.5;
      margin: 4px 0px;
      word-wrap: break-word;
      color:#222;
      // position: relative;
    }
  }
}
</style>
