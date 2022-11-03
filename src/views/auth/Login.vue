<template>
  <div class="pages-body flex justify-content-between p-m-auto">
    <Toast position="top-center" />
    <div class="flex-1 flex align-items-center justify-content-center">
      <div
        class="surface-card p-4 lg:p-6 shadow-2 border-round align-self-center align-self-center m-auto"
      >
        <div class="text-center mb-5">
          <router-link class="" to="/">
            <div class="logo">
              <img
                src="/media/logos/logo.png"
                alt="Image"
                height="80"
                class="mb-3"
              />
            </div>
          </router-link>
          <div class="text-900 text-3xl font-medium mb-3">Đăng nhập</div>
          <span class="text-600 font-medium line-height-3"
            >Bạn là tổ chức, doanh nghiệp mới?</span
          >
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            >Đăng ký tại đây</a
          >
        </div>

        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <label for="email" class="block text-900 font-medium mb-2"
              >Email<span class="pink-color">*</span></label
            >
            <div class="p-input-icon-right">
              <i class="pi pi-envelope" />
              <InputText
                id="email"
                v-model="v$.model.email.$model"
                :class="{ 'p-invalid': v$.model.email.$invalid && submitted }"
                aria-describedby="email-error"
              />
            </div>
            <span v-if="v$.model.email.$error && submitted">
              <span
                id="email-error"
                v-for="(error, index) of v$.model.email.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
            <small
              v-else-if="
                (v$.model.email.$invalid && submitted) ||
                v$.model.email.$pending.$response
              "
              class="p-error"
              >{{
                v$.model.email.required.$message.replace("Value", "Email")
              }}</small
            >
          </div>

          <div class="field">
            <label for="password1" class="block text-900 font-medium mb-2"
              >Mật khẩu</label
            >
            <Password
              id="password"
              v-model="v$.model.password.$model"
              :class="{ 'p-invalid': v$.model.password.$invalid && submitted }"
              toggleMask
            >
              <template #header>
                <h6>Hãy nhập mật khẩu mạnh</h6>
              </template>
              <template #footer="sp">
                {{ sp.level }}
                <Divider />
                <p class="mt-2">Gợi ý</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>Có ít nhất một ký tự thường</li>
                  <li>Có ít nhất một ký tự hoa</li>
                  <li>Có ít nhất một ký tự số</li>
                  <li>Tối thiểu 8 ký tự</li>
                </ul>
              </template>
            </Password>
            <small
              v-if="
                (v$.model.password.$invalid && submitted) ||
                v$.model.password.$pending.$response
              "
              class="p-error"
              >{{
                v$.model.password.required.$message.replace("Value", "Password")
              }}</small
            >
          </div>

          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <Checkbox
                id="rememberme1"
                :binary="true"
                v-model="checked"
                class="mr-2"
              ></Checkbox>
              <label for="rememberme1">Nhớ tài khoản</label>
            </div>
            <a
              class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
              >Quên mật khẩu?</a
            >
          </div>

          <Button
            type="submit"
            label="Đăng nhập"
            icon="pi pi-user"
            class="w-full p-button-lg"
          ></Button>
        </form>
      </div>
    </div>
    <div
      class="flex-1 flex align-items-center justify-content-center bg-white p-5"
    >
      <Image
        src="/media/illustrations/verification.png"
        alt="Image"
        imageClass="w-40rem"
        width="450"
      />
    </div>
  </div>
</template>

<script>
import { required, email, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { mapState } from "pinia";
import { useAuthStore } from "../../store/auth";
import { useAppStore } from "../../store/app";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";

export default {
  setup: () => {
    const { t } = useI18n();
    const authStore = useAuthStore();
    const appStore = useAppStore();
    const toast = useToast();
    const router = useRouter();

    authStore.$subscribe((mutation, state) => {
      const isAuthenticated = state.isAuthenticated;
      if (isAuthenticated) {
        router.push({ name: "home" });
      }
    });

    appStore.$subscribe((mutation, state) => {
      const appToast = state.toast;
      if (appToast.visible) {
        toast.add(appToast);
      }
    });

    appStore.$reset();

    return {
      v$: useVuelidate(),
      authStore,
      t,
    };
  },
  data() {
    return {
      model: {
        email: "admin@admin.com",
        password: "admin",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState(useAppStore, ["toast"]),
  },

  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }

      this.authStore.login(this.model);
    },
  },
  validations() {
    return {
      model: {
        email: {
          required: helpers.withMessage(
            this.t("validation.required"),
            required
          ),
          email: helpers.withMessage(this.t("validation.email"), email),
        },
        password: {
          required: helpers.withMessage(
            this.t("validation.required"),
            required
          ),
        },
      },
    };
  },
};
</script>

<style scoped></style>
