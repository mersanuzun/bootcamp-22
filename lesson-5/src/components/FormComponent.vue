<template>
  <form class="form" @submit.prevent="submitForm">
    <div>
      <input type="text" v-model="formData.value" />
      <span class="error" v-if="submitted && !formData.value">
        Bu alan boş olamaz
      </span>
    </div>

    <hr />

    <div>
      <input type="checkbox" v-model="formData.checkbox" value="musa" />
      <span class="error" v-if="submitted && !formData.checkbox">
        Bu alan zorunludur
      </span>
    </div>

    <hr />

    <input type="radio" name="radio" v-model="formData.radio" value="1" />
    <input type="radio" name="radio" v-model="formData.radio" value="2" />
    <input type="radio" name="radio" v-model="formData.radio" value="3" />

    <hr />

    <select v-model="formData.select">
      <option v-for="val in [1, 2, 3, 4, 5, 6, 7]" :value="val" :key="val">
        {{ val }}
      </option>
    </select>

    <hr />

    <select v-model="formData.selectMultiple" multiple>
      <option v-for="val in selectList" :value="val" :key="val.id">
        {{ val.label }}
      </option>
    </select>

    <div>
      <button type="submit">Submit Form</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      formData: {
        value: "",
        selectMultiple: [],
      },
      value: "",
      checkbox: [],
      radio: null,
      select: 5,
      selectMultiple: [],
      selectList: [
        { id: 1, label: "label 1" },
        { id: 2, label: "label 2" },
        { id: 3, label: "label 3" },
        { id: 4, label: "label 4" },
      ],
      submitted: false,
    };
  },
  computed: {
    getSelectMultiple() {
      return this.selectMultiple.map((item) => item.label).join(",");
    },
  },
  methods: {
    submitForm() {
      this.submitted = true;
      const notValid = Object.values(this.formData).filter((data) => !data);
      if (notValid.length > 0) {
        console.log("bu form valid değil", this.formData);
      } else {
        console.log("bu form validdir");
      }
    },
  },
};
</script>

<style scoped>
.form {
  border: 1px solid #145da0;
  padding: 10px;
}
select {
  min-width: 100px;
}
.error {
  color: red;
}
</style>
