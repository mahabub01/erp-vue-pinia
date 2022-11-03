import {
  sendGetget,
  sendDelete,
  sendPost,
  sendPut,
} from "../../core/services/apiService";
import { defineStore } from "pinia";
import { useAppStore } from "../app";

export const useUserStore = defineStore("role", {
  state: () => ({
    blockedProgressLoading: false,
    isLoading: true,
    error: [],
    data: [],
    singleData: null,
    selectedData: null,
    loadFormData: null,
    formState: {
      name: "",
      email: "",
      default_company: 1,
      selected_company_id: "",
      selected_role_id: [],
      roles: [
        {
          company_id: "",
          company_roles: [],
        },
      ],
      active: "1",
    },
    submitted: false,
  }),
  getters: {
    getModifyData(state) {
      return (id) => state.data.filter((item) => item.id !== id);
    },
  },
  actions: {
    getFormDataForUser() {
      this.blockedProgressLoading = true;
      const appStore = useAppStore();
      sendGetget("setting/users/create")
        .then((response) => {
          this.loadFormData = response.data;
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
    async getData() {
      const appStore = useAppStore();
      this.isLoading = true;
      sendGetget("setting/users?page=1&sortField=created_at&sortDir=desc")
        .then((response) => {
          this.isLoading = false;
          this.data = response.data.data;
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
      sendGetget("setting/users/" + selectedId)
        .then((response) => {
          this.blockedProgressLoading = false;
          this.singleData = response.data;
        })
        .catch((error) => {
          this.blockedProgressLoading = false;
          appStore.$patch({
            toast: { detail: error.message, severity: "error", visible: true },
          });
        });
    },
    addRecord(payload) {
      const appStore = useAppStore();
      this.blockedProgressLoading = true;
      sendPost("setting/users", payload)
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
      console.log("run update Record Method.");
      const appStore = useAppStore();
      this.blockedProgressLoading = true;
      sendPut("setting/users/" + selectedId, payload)
        .then((response) => {
          console.log(response);
          console.log(selectedId);
          if (response.status !== 200) {
            appStore.$patch({
              toast: {
                detail: response.message,
                severity: "error",
                visible: true,
                summary: "Server Error",
              },
            });
          } else {
            this.submitted = false;
            //this.getSingleRecord(selectedId);
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
          sendDelete("setting/users/" + selectedId)
            .then((response) => {
              this.data = this.getModifyData(selectedId);
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
        email: "",
        default_company: 1,
        selected_company_id: "",
        selected_role_id: [],
        roles: [
          {
            company_id: "",
            company_roles: [],
          },
        ],
        active: "1",
      };
    },
  },
});
