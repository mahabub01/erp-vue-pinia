<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../../../store/admin/user-curd";
import { watchEffect, ref, onMounted } from "vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useConfirm } from "primevue/useconfirm";
import { useI18n } from "vue-i18n";

const confirm = useConfirm();
const { t } = useI18n();

const { isLoading, data, selectedData, blockedProgressLoading } = storeToRefs(
  useUserStore()
);
const { getData, removeSingleRecord } = useUserStore();

onMounted(() => {
  getData();
});

watchEffect(() => [...data.value]);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
});

const handleSelectedDelete = () => {
  console.log("handle delete");
};

const handleSingleDelete = (selectedId) => {
  removeSingleRecord(t, confirm, selectedId);
};
</script>
<template>
  <ConfirmDialog></ConfirmDialog>
  <div class="grid crud-demo">
    <div class="col-12">
      <BlockUI :blocked="blockedProgressLoading">
        <BlockLoader
          v-if="blockedProgressLoading"
          :status="blockedProgressLoading"
        />
        <div class="card">
          <Toolbar class="mb-4">
            <template v-slot:start>
              <div class="my-2">
                <router-link
                  label="New"
                  icon="pi pi-plus"
                  class="p-button p-component p-button-success mr-2"
                  to="/admin/users/create"
                  ><span
                    class="pi pi-plus p-button-icon p-button-icon-left"
                  ></span
                  >New</router-link
                >

                <Button
                  label="Delete"
                  icon="pi pi-trash"
                  class="p-button-danger"
                  @click="handleSelectedDelete"
                  :disabled="!selectedData || !selectedData.length"
                />
              </div>
            </template>

            <template v-slot:end>
              <FileUpload
                mode="basic"
                accept="image/*"
                :maxFileSize="1000000"
                label="Import"
                chooseLabel="Import"
                class="mr-2 inline-block"
              />
              <Button
                label="Export"
                icon="pi pi-upload"
                class="p-button-help"
              />
            </template>
          </Toolbar>

          <DataTable
            :value="data"
            :paginator="true"
            :rows="10"
            dataKey="id"
            :rowHover="true"
            :filters="filters"
            :loading="isLoading"
            v-model:selection="selectedData"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 25, 50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            responsiveLayout="scroll"
          >
            <template #header>
              <div
                class="flex flex-column md:flex-row md:justify-content-between md:align-items-center"
              >
                <h5 class="m-0">Manage Users</h5>
                <span class="p-input-icon-left"
                  ><i class="pi pi-search" />
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Global Search"
                  />
                </span>
              </div>
            </template>

            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>

            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

            <Column
              field="id"
              header="ID"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                {{ slotProps.data.id }}
              </template>
            </Column>

            <Column
              field="name"
              header="Name"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <span class="image-text">{{ slotProps.data.name }}</span>
              </template>
            </Column>

            <Column
              field="role"
              header="Role"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <span class="image-text">{{ slotProps.data.role }}</span>
              </template>
            </Column>

            <Column
              field="company"
              header="Company"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <span class="image-text">{{ slotProps.data.companies }}</span>
              </template>
            </Column>

            <Column
              field="created_at"
              header="Created At"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <span class="image-text">{{ slotProps.data.created_at }}</span>
              </template>
            </Column>

            <Column
              field="status"
              header="Status"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <div v-html="slotProps.data.status"></div>
              </template>
            </Column>

            <Column
              field="action"
              header=""
              style="min-width: 8rem; text-align: right"
            >
              <template #body="slotProps">
                <template
                  v-for="single_btn in slotProps.data.action"
                  :key="single_btn"
                >
                  <label v-if="single_btn === 'view'">
                    <router-link
                      class="p-button p-component p-button-icon-only p-button-rounded p-button-success mr-2"
                      :to="`/admin/users/details/${slotProps.data.id}`"
                    >
                      <span class="pi pi-eye p-button-icon"></span
                    ></router-link>
                  </label>

                  <label v-if="single_btn === 'update'">
                    <router-link
                      class="p-button p-component p-button-icon-only p-button-rounded p-button-warning mr-2"
                      :to="`/admin/users/${slotProps.data.id}/edit`"
                      ><span class="pi pi-pencil p-button-icon"></span
                    ></router-link>
                  </label>

                  <label v-if="single_btn === 'delete'">
                    <Button
                      icon="pi pi-trash"
                      class="p-button-rounded p-button-danger"
                      @click.prevent="handleSingleDelete(slotProps.data.id)"
                    />
                  </label>
                </template>
              </template>
            </Column>
          </DataTable>
        </div>
      </BlockUI>
    </div>
  </div>
</template>
<style>
.p-column-header-content {
  display: block !important;
}
</style>
