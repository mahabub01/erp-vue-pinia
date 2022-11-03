import { sendGetget } from "../../../core/services/apiService";
import { defineStore } from "pinia";
import { useAppStore } from "../../app";

export const useProvincesStore = defineStore("provinces", {
  state: () => ({
    blockedProgressLoading: false,
    provincesList: [],
  }),
  getters: {},
  actions: {
    async getProvincesList() {
      const appStore = useAppStore();
      sendGetget("setting/companies/create")
        .then((response) => {
          this.provincesList = response.data.provinces;
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        });
    },
  },
});
