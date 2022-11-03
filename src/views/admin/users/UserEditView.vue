<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../../../store/admin/user-curd";
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useI18n } from "vue-i18n";
import { watchEffect, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const { t } = useI18n();
const route = useRoute();
//const seletedCompany = ref("");

const {
  formState,
  submitted,
  loadFormData,
  blockedProgressLoading,
  singleData,
} = storeToRefs(useUserStore());

const { updateRecord, getFormDataForUser, getSingleRecord, resetFormState } =
  useUserStore();

onMounted(() => {
  resetFormState();
  getFormDataForUser();
  getSingleRecord(route.params.id);
});

const companies = ref([]);
const roles = ref([]);

watchEffect(() => {
  if (loadFormData.value != null) {
    companies.value = loadFormData.value.companies;
    roles.value = loadFormData.value.roles;
  }
});

watchEffect(() => {
  if (singleData.value != null) {
    formState.value.name = singleData.value.name;
    formState.value.email = singleData.value.email;
    //     formState.value.roles = [
    //     {
    //       company_id: formState.value.selected_company_id,
    //       company_roles: formState.value.selected_role_id,
    //     },
    //   ];
  }
});

const rules = {
  name: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  email: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  selected_company_id: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  selected_role_id: {
    required: helpers.withMessage(t("validation.required"), required),
  },
};

const v$ = useVuelidate(rules, formState);

const handleSubmit = () => {
  formState.value.roles = [
    {
      company_id: formState.value.selected_company_id,
      company_roles: formState.value.selected_role_id,
    },
  ];
  console.log(formState.value);
  console.log("click submit...");
  v$.value.$validate(formState.value);
  submitted.value = true;
  if (!v$.value.$error) {
    updateRecord(formState.value, route.params.id);
  }
};
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <BlockUI :blocked="blockedProgressLoading">
        <div class="card p-fluid">
          <BlockLoader
            v-if="blockedProgressLoading"
            :status="blockedProgressLoading"
          />
          <h5 class="m-0">Edit User</h5>
          <hr />

          <form @submit.prevent="handleSubmit">
            <div class="formgrid grid">
              <div class="field col-6">
                <label
                  for="name"
                  :class="{ 'p-error': v$.name.$invalid && submitted }"
                  >Name*</label
                >
                <InputText
                  id="name"
                  type="text"
                  v-model="formState.name"
                  :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                />
                <span v-if="v$.name.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.name.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col-6">
                <label
                  for="email"
                  :class="{ 'p-error': v$.email.$invalid && submitted }"
                  >Email*</label
                >
                <InputText
                  id="email"
                  type="text"
                  v-model="formState.email"
                  :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                />
                <span v-if="v$.email.$error && submitted">
                  <span
                    id="email-error"
                    v-for="(error, index) of v$.email.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col-6">
                <label
                  for="company_registry"
                  :class="{
                    'p-error': v$.selected_company_id.$invalid && submitted,
                  }"
                  >Company*</label
                >

                <Dropdown
                  v-model="formState.selected_company_id"
                  :options="companies"
                  optionLabel="name"
                  optionValue="id"
                  :editable="true"
                  :class="{
                    'p-invalid': v$.selected_company_id.$invalid && submitted,
                  }"
                />

                <span v-if="v$.selected_company_id.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.selected_company_id.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col-6">
                <label
                  for="role_id"
                  :class="{
                    'p-error': v$.selected_role_id.$invalid && submitted,
                  }"
                  >Roles *</label
                >

                <MultiSelect
                  v-model="formState.selected_role_id"
                  :options="roles"
                  optionLabel="name"
                  optionValue="id"
                  display="chip"
                  :editable="true"
                  :class="{
                    'p-invalid': v$.selected_role_id.$invalid && submitted,
                  }"
                />

                <span v-if="v$.selected_role_id.$error && submitted">
                  <span
                    id="selected_role_id-error"
                    v-for="(error, index) of v$.selected_role_id.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col-1">
                <div class="my-2">
                  <Button
                    label="Submit"
                    class="p-button-raised p-button-success"
                    type="submit"
                    style="display: inline-block"
                  />
                </div>
              </div>
              <div class="field col-2">
                <div class="my-2">
                  <router-link to="/admin/users">
                    <Button
                      label="Back to List"
                      icon="pi pi-arrow-left"
                      class="p-button-raised p-button-info"
                      type="button"
                      style="display: inline-block"
                  /></router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </BlockUI>
    </div>
  </div>
</template>
