<template>
  <div>
    <div id="app">hello world</div>
    <ProfileComp :user="user"></ProfileComp>
    <hr />
    <ProfileComp :user="user" :with-male="true">
      <template v-slot="{ userGender, userName }">
        {{ userName }} | {{ userGender }}
      </template>
    </ProfileComp>
    <hr />
    <KeepAliveDemo></KeepAliveDemo>
    <hr />
    <div>
      <CounterComp></CounterComp>
      <RatingComp></RatingComp>
    </div>
    <hr />
    <span v-once>This will never change: {{ msg }}</span>
    <span>{{ msg }}</span>
    <hr />
    <span v-theme="'primary'">Primary</span> <br />
    <span v-theme="'secondary'">Secondary</span>
  </div>
</template>

<script>
import ProfileComp from "@/components/ProfileComp";
import KeepAliveDemo from "@/components/KeepAliveDemo";
import CounterComp from "@/components/Counter";
import RatingComp from "@/components/Rating";
export default {
  name: "App",

  components: { RatingComp, CounterComp, KeepAliveDemo, ProfileComp },

  data() {
    return {
      msg: "hello",
      user: {
        name: "ersan",
        gender: "male",
      },
    };
  },

  created() {
    console.log(this.$translate("tr.hello"));
    setTimeout(() => {
      this.msg = "selam";
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
