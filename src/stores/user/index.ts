import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => {
    return {
      name: "默认值",
    };
  },
  actions: {
    setUserName(params: string) {
      this.name = params;
    },
  },
});
