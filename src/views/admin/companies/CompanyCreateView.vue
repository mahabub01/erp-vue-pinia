<script setup>
import { storeToRefs } from "pinia";
import { useCompanyStore } from "../../../store/admin/company";
import { useProvincesStore } from "../../../store/admin/location/provinces";
import { useDistrictsStore } from "../../../store/admin/location/districts";
import { useWardsStore } from "../../../store/admin/location/wards";
import {
  email,
  required,
  helpers,
  numeric,
  maxLength,
  minLength,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useI18n } from "vue-i18n";
import { onMounted, watchEffect } from "vue";

const { t } = useI18n();

const { formState, submitted, blockedProgressLoading } = storeToRefs(
  useCompanyStore()
);

function handleImage(e) {
  // console.log(e.files[0]);
  //formState.logo = e.target.files[0];
  formState.value.logo = e.files;
  //createBase64Image(e.target.files[0]);
}

// function createBase64Image(fileObject) {
//   const reader = new FileReader();
//   reader.onload = () => {
//     formState.value.logo = reader.result;
//   };
//   reader.readAsDataURL(fileObject);
// }

const { addRecord, resetFormState } = useCompanyStore();

const { provincesList } = storeToRefs(useProvincesStore());
const { getProvincesList } = useProvincesStore();

const { districtsList } = storeToRefs(useDistrictsStore());
const { getDistrictsList } = useDistrictsStore();

const { wardsList } = storeToRefs(useWardsStore());
const { getWardsList } = useWardsStore();

onMounted(() => {
  resetFormState();
  getProvincesList();
  getDistrictsList();
  getWardsList();
});

watchEffect(() => [...provincesList.value]);
watchEffect(() => [...districtsList.value]);
watchEffect(() => [...wardsList.value]);

const rules = {
  name: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  email: {
    required: helpers.withMessage(t("validation.required"), required),
    email: helpers.withMessage(t("validation.email"), email),
  },
  phone: {
    required: helpers.withMessage(t("validation.required"), required),
    numeric: helpers.withMessage(t("validation.numeric"), numeric),
    minLength: helpers.withMessage(
      t("validation.phone_min_length"),
      minLength(11)
    ),
    maxLength: helpers.withMessage(
      t("validation.phone_max_length"),
      maxLength(11)
    ),
  },
  tax_code: {
    required: helpers.withMessage(t("validation.required"), required),
    numeric: helpers.withMessage(t("validation.numeric"), numeric),
  },
  company_registry: {
    required: helpers.withMessage(t("validation.required"), required),
    numeric: helpers.withMessage(t("validation.numeric"), numeric),
  },
  currency_id: {
    required: helpers.withMessage(t("validation.required"), required),
    numeric: helpers.withMessage(t("validation.numeric"), numeric),
  },
  address: {
    address: {
      required: helpers.withMessage(t("validation.required"), required),
    },
    province: {
      required: helpers.withMessage(t("validation.required"), required),
    },
    district: {
      required: helpers.withMessage(t("validation.required"), required),
    },
    ward: { required: helpers.withMessage(t("validation.required"), required) },
  },
};

const v$ = useVuelidate(rules, formState);

const handleSubmit = () => {
  v$.value.$validate();
  submitted.value = true;
  if (!v$.value.$error) {
    addRecord(formState.value);
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

          <h5 class="m-0">Create Companies</h5>
          <hr />

          <form @submit.prevent="handleSubmit">
            <div class="formgrid grid">
              <div class="field col">
                <label
                  for="name"
                  :class="{ 'p-error': v$.name.$invalid && submitted }"
                  >Name <span class="mandatory">*</span></label
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
              <div class="field col">
                <label for="name2">Logo</label>
                <FileUpload
                  mode="basic"
                  accept="image/*"
                  :maxFileSize="1000000"
                  @select="handleImage($event)"
                />
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col">
                <label
                  for="company_registry"
                  :class="{
                    'p-error': v$.company_registry.$invalid && submitted,
                  }"
                  >Company Registry <span class="mandatory">*</span></label
                >
                <InputText
                  id="company_registry"
                  type="text"
                  v-model="formState.company_registry"
                  :class="{
                    'p-invalid': v$.company_registry.$invalid && submitted,
                  }"
                />
                <span v-if="v$.company_registry.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.company_registry.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>

              <div class="field col">
                <label
                  for="tax_code"
                  :class="{
                    'p-error': v$.tax_code.$invalid && submitted,
                  }"
                  >Tax Code <span class="mandatory">*</span></label
                >
                <InputText
                  id="tax_code"
                  type="text"
                  v-model="formState.tax_code"
                  :class="{
                    'p-invalid': v$.tax_code.$invalid && submitted,
                  }"
                />
                <span v-if="v$.tax_code.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.tax_code.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col">
                <label
                  for="phone"
                  :class="{
                    'p-error': v$.phone.$invalid && submitted,
                  }"
                  >Phone <span class="mandatory">*</span></label
                >
                <InputText
                  id="phone"
                  type="text"
                  v-model="formState.phone"
                  :class="{
                    'p-invalid': v$.phone.$invalid && submitted,
                  }"
                />
                <span v-if="v$.phone.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.phone.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>

              <div class="field col">
                <label
                  for="email"
                  :class="{
                    'p-error': v$.email.$invalid && submitted,
                  }"
                  >Email <span class="mandatory">*</span></label
                >
                <InputText
                  id="email"
                  type="text"
                  v-model="formState.email"
                  :class="{
                    'p-invalid': v$.email.$invalid && submitted,
                  }"
                />
                <span v-if="v$.email.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.email.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="formgrid grid">
              <div class="field col">
                <label
                  for="currency_id"
                  :class="{
                    'p-error': v$.email.$invalid && submitted,
                  }"
                  >Currency <span class="mandatory">*</span></label
                >
                <InputText
                  id="currency_id"
                  type="text"
                  v-model="formState.currency_id"
                  :class="{
                    'p-invalid': v$.currency_id.$invalid && submitted,
                  }"
                />
                <span v-if="v$.currency_id.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.currency_id.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>

              <div class="field col">
                <label for="website">Website</label>
                <InputText
                  id="website"
                  type="text"
                  v-model="formState.website"
                />
              </div>
            </div>

            <div class="field">
              <label>Address <span class="mandatory">*</span></label>
              <Textarea
                v-model="formState.address.address"
                :autoResize="true"
                rows="3"
                cols="30"
                :class="{
                  'p-invalid': v$.address.address.$invalid && submitted,
                }"
              />
              <span v-if="v$.address.address.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.address.address.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>

            <div class="formgrid grid">
              <div class="field col">
                <label>Province <span class="mandatory">*</span></label>
                <Dropdown
                  v-model="formState.address.province"
                  :options="provincesList"
                  optionLabel="name"
                  optionValue="code"
                  :editable="true"
                  :class="{
                    'p-invalid': v$.address.province.$invalid && submitted,
                  }"
                />
                <span v-if="v$.address.province.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.address.province.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>

              <div class="field col">
                <label>District <span class="mandatory">*</span></label>
                <Dropdown
                  v-model="formState.address.district"
                  :options="districtsList"
                  optionLabel="name"
                  optionValue="code"
                  :editable="true"
                  :class="{
                    'p-invalid': v$.address.district.$invalid && submitted,
                  }"
                />
                <span v-if="v$.address.district.$error && submitted">
                  <span
                    id="name-error"
                    v-for="(error, index) of v$.address.district.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
              </div>
            </div>

            <div class="field">
              <label>Ward <span class="mandatory">*</span></label>
              <Dropdown
                v-model="formState.address.ward"
                :options="wardsList"
                optionLabel="name"
                optionValue="code"
                :editable="true"
                :class="{
                  'p-invalid': v$.address.ward.$invalid && submitted,
                }"
              />
              <span v-if="v$.address.ward.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.address.ward.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>

            <div class="field">
              <label for="age1">Description</label>
              <Textarea
                v-model="formState.description"
                :autoResize="true"
                rows="5"
                cols="30"
              />
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
                  <router-link to="/admin/companies/companieslist">
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
