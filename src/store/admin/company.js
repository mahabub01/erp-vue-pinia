import {
  sendGetget,
  sendDelete,
  sendPost,
  sendPut,
} from "../../core/services/apiService";
import { defineStore } from "pinia";
import { useAppStore } from "../app";

export const useCompanyStore = defineStore("company", {
  state: () => ({
    blockedProgressLoading: false,
    isLoading: true,
    error: [],
    companies: [],
    company: null,
    selectedCompanies: null,
    formState: {
      name: "",
      logo: "",
      tax_code: "",
      company_registry: "",
      parent_id: "1",
      email: "",
      phone: "",
      website: "",
      active: "1",
      description: "",
      address: {
        address: "",
        province: "",
        district: "",
        ward: "",
      },
      currency_id: "",
      tenant_id: "3",
    },
    submitted: false,
  }),
  getters: {
    getModifyData(state) {
      return (id) => state.companies.filter((item) => item.id !== id);
    },
  },
  actions: {
    async getData() {
      const appStore = useAppStore();
      this.isLoading = true;
      sendGetget("setting/companies?page=1&sortField=created_at&sortDir=desc")
        .then((response) => {
          this.isLoading = false;
          this.companies = response.data.data;
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getSingleRecord(selectedId) {
      const appStore = useAppStore();
      this.blockedProgressLoading = true;
      sendGetget("setting/companies/" + selectedId)
        .then((response) => {
          this.company = response.data;
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        })
        .finally(() => {
          this.blockedProgressLoading = false;
        });
    },
    addRecord(payload) {
      this.blockedProgressLoading = true;
      const appStore = useAppStore();
      sendPost("setting/companies", payload)
        .then((response) => {
          if (response.status !== 200) {
            response.data.errors.forEach((item) => {
              appStore.$patch({
                toast: {
                  detail: `${item.key} ! ${item.value}`,
                  severity: "error",
                  visible: true,
                  summary: "Server Error",
                },
              });
            });
          } else {
            this.submitted = false;
            this.resetFormState();
            appStore.$patch({
              toast: {
                detail: response.message,
                severity: "info",
                visible: true,
              },
            });
          }
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        })
        .finally(() => {
          this.blockedProgressLoading = false;
        });
    },
    updateRecord(payload, selectedId) {
      const appStore = useAppStore();
      this.blockedProgressLoading = true;
      sendPut("setting/companies/" + selectedId, payload)
        .then((response) => {
          if (response.status !== 200) {
            response.data.errors.forEach((item) => {
              appStore.$patch({
                toast: {
                  detail: `${item.key} ! ${item.value}`,
                  severity: "error",
                  visible: true,
                  summary: "Server Error",
                },
              });
            });
          } else {
            this.getSingleRecord(selectedId);
            appStore.$patch({
              toast: {
                detail: response.message,
                severity: "info",
                visible: true,
              },
            });
          }
        })
        .catch((error) => {
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        })
        .finally(() => {
          this.blockedProgressLoading = false;
        });
    },
    removeSingleRecord(t, confirm, selectedId) {
      const appStore = useAppStore();

      confirm.require({
        message: t("confirmation.message"),
        header: t("confirmation.header"),
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.blockedProgressLoading = true;
          sendDelete("setting/companies/" + selectedId)
            .then((response) => {
              this.companies = this.getModifyData(selectedId);
              appStore.$patch({
                toast: {
                  summary: t("confirmation.confirm_summery"),
                  detail: response.message,
                  severity: "info",
                  visible: true,
                },
              });
            })
            .catch((error) => {
              appStore.$patch({
                toast: {
                  detail: error.message,
                  severity: "error",
                  visible: true,
                },
              });
            })
            .finally(() => {
              this.blockedProgressLoading = false;
            });
        },
        reject: () => {
          appStore.$patch({
            toast: {
              summary: t("confirmation.rejected_summery"),
              detail: t("confirmation.rejected_details"),
              severity: "error",
              visible: true,
            },
          });
        },
      });
    },
    removeMultiRecord(t, confirm, selectedIds) {
      const appStore = useAppStore();

      confirm.require({
        message: t("confirmation.message"),
        header: t("confirmation.header"),
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          console.log(selectedIds);
          appStore.$patch({
            toast: {
              summary: "Warning Message",
              detail: "Multi Record remove Api is not Ready",
              severity: "error",
              visible: true,
            },
          });
        },
        reject: () => {
          appStore.$patch({
            toast: {
              summary: t("confirmation.rejected_summery"),
              detail: t("confirmation.rejected_details"),
              severity: "error",
              visible: true,
            },
          });
        },
      });
    },
    resetFormState() {
      this.formState = {
        name: "",
        logo: "",
        tax_code: "",
        company_registry: "",
        parent_id: "1",
        email: "",
        phone: "",
        website: "",
        active: "1",
        description: "",
        address: {
          address: "",
          province: "",
          district: "",
          ward: "",
        },
        currency_id: "",
        tenant_id: "3",
      };
    },
  },
});
