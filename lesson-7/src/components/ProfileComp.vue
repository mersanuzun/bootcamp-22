<template>
  <div class="profile-comp-wrapper">
    <slot :userGender="user.gender" :userName="user.name">
      {{ user.name }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "ProfileComp",

  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.profile-comp-wrapper {
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px 30px;
  text-align: center;
  display: flex;
}
</style>
