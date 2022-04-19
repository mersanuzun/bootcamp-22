<template>
  <div>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: tab.name === activeTab }"
      >
        <span @click="setActiveTab(tab.name)">{{ tab.name }}</span>
      </li>
    </ul>
    <div class="content">
      {{ getActiveTab.content }}
    </div>
    <button @click="addTab">addTab</button>
  </div>
</template>

<script>
export default {
  name: "TabComponent",
  props: ["tabs"],
  data() {
    return {
      activeTab: this.tabs[1].name,
      localTabs: this.tabs,
    };
  },
  computed: {
    getActiveTab() {
      return this.localTabs.find((item) => item.name === this.activeTab);
    },
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    addTab() {
      this.localTabs.push({
        name: `tab ${this.tabs.length + 1}`,
        content: `Content ${this.tabs.length + 1}`,
      });
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  border: 1px solid #145da0;
  padding: 5px;
  cursor: pointer;
}
ul li.active {
  background: #145da0;
  color: white;
}
.content {
  border: 1px solid #f8b400;
  padding: 1rem;
}
</style>
