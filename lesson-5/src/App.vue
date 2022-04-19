<template>
  <div id="app">
    <form-component> </form-component>
    <hr />
    <InputComponent v-model="inputComponentValue">First Name</InputComponent>
    <hr />
    <ButtonComponent>
      <template v-slot:label>Label Name</template>
      Click Me6
    </ButtonComponent>
    <hr />
    <TabComponent :tabs="tabs"> Musa Akkaya </TabComponent>
    <hr />
    <PropsComponent :items="items"></PropsComponent>
    <hr />
    <div>
      <h3>{{ text }}: {{ count }}</h3>
      <NewComponent @add="add" @remove="remove" />
    </div>
    <hr />
  </div>
</template>

<script>
import NewComponent from "@/components/NewComponent";
import PropsComponent from "@/components/PropsComponent";
import TabComponent from "@/components/Tab";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/Input";
import FormComponent from "@/components/FormComponent";

export default {
  name: "App",
  components: {
    FormComponent,
    InputComponent,
    ButtonComponent,
    TabComponent,
    PropsComponent,
    NewComponent,
  },
  data() {
    return {
      count: 0,
      text: "",
      title: "",
      items: [],
      tabs: [
        { name: "tab 1", content: "Content 1" },
        { name: "tab 2", content: "Content 2" },
        { name: "tab 3", content: "Content 3" },
      ],
      inputComponentValue: "inputComponentValue default value",
    };
  },
  methods: {
    add({ text, component }) {
      this.items.push({
        text,
        component,
      });
    },
    remove() {
      this.items.pop();
    },
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
