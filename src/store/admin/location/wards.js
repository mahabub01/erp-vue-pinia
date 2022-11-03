import { sendGetget } from "../../../core/services/apiService";
import { defineStore } from "pinia";
import { useAppStore } from "../../app";

export const useWardsStore = defineStore("wards", {
  state: () => ({
    blockedProgressLoading: false,
    wardsList: [],
  }),
  getters: {},
  actions: {
    async getWardsList() {
      const appStore = useAppStore();
      sendGetget("setting/addresses/1/wards")
        .then((response) => {
          this.wardsList = response.data.wards;
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        });
    },
  },
});
