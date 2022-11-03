import { sendGetget } from "../../../core/services/apiService";
import { defineStore } from "pinia";
import { useAppStore } from "../../app";

export const useDistrictsStore = defineStore("districts", {
  state: () => ({
    blockedProgressLoading: false,
    districtsList: [],
  }),
  getters: {},
  actions: {
    async getDistrictsList() {
      const appStore = useAppStore();
      sendGetget("setting/addresses/1/districts")
        .then((response) => {
          this.districtsList = response.data.districts;
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        });
    },
  },
});
