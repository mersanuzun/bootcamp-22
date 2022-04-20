<template>
  <div>
    <CustomComponent @changeText="changeText" />
    <hr />
    <CustomComponent2 />
  </div>
</template>

<script>
import CustomComponent from "@/components/CustomComponent";
import CustomComponent2 from "@/components/CustomComponent2";
export default {
  name: "FormComponent",
  components: { CustomComponent, CustomComponent2 },
  methods: {
    changeText(text) {
      this.text = text;
    },
  },
};
</script>

<style scoped></style>
