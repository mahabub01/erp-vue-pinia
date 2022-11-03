<script setup>
import { storeToRefs } from "pinia";
import { useRoleStore } from "../../../store/admin/role";
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useI18n } from "vue-i18n";
import { watchEffect, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const companies = ref([]);

const { t } = useI18n();

const {
  formState,
  submitted,
  singleData,
  blockedProgressLoading,
  roleCreateData,
} = storeToRefs(useRoleStore());

const { getSingleRecord, updateRecord, resetFormState, getRoleCreateData } =
  useRoleStore();

onMounted(() => {
  resetFormState();
  getSingleRecord(route.params.id);
  getRoleCreateData();
});

//for load created value
watchEffect(() => {
  if (roleCreateData.value != null) {
    companies.value = roleCreateData.value.companies;
  }
});

//for load updated value
watchEffect(() => {
  if (singleData.value != null) {
    if (route.params.id != "") {
      formState.value.name = singleData.value.name;
      formState.value.company_id = singleData.value.company_id;
    }
  }
});

const rules = {
  name: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  company_id: {
    required: helpers.withMessage(t("validation.required"), required),
  },
};

const v$ = useVuelidate(rules, formState);

const handleSubmit = () => {
  v$.value.$validate();
  submitted.value = true;
  if (!v$.value.$error) {
    submitted.value = false;
    updateRecord(formState.value, route.params.id);
  }
};
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <BlockUI :blocked="blockedProgressLoading">
        <BlockLoader
          v-if="blockedProgressLoading"
          :status="blockedProgressLoading"
        />

        <div class="card p-fluid">
          <h5 class="m-0">Edit Role</h5>
          <hr />
          <form @submit.prevent="handleSubmit">
            <div class="formgrid grid">
              <div class="field col-6">
                <label
                  for="name"
                  :class="{ 'p-error': v$.name.$invalid && submitted }"
                  >Name <span class="mandatory">*</span></label
                >
                <InputText
                  id="name"
                  type="text"
                  v-model="formState.name"
                  :value="formState.name"
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
                  for="company_registry"
                  :class="{
                    'p-error': v$.company_id.$invalid && submitted,
                  }"
                  >Company <span class="mandatory">*</span></label
                >

                <Dropdown
                  v-model="formState.company_id"
                  :options="companies"
                  optionLabel="text"
                  optionValue="value"
                  :editable="true"
                  :class="{
                    'p-invalid': v$.company_id.$invalid && submitted,
                  }"
                />

                <span v-if="v$.company_id.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.company_id.$errors"
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
                  <router-link to="/admin/roles/roleslist">
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
