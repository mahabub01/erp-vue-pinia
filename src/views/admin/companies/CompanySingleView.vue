<script setup>
import { storeToRefs } from "pinia";
import { useCompanyStore } from "../../../store/admin/company";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const { company, blockedProgressLoading } = storeToRefs(useCompanyStore());
const { getSingleRecord } = useCompanyStore();

getSingleRecord(route.params.id);

watchEffect(() => [company.value]);
</script>
<template>
  <div class="grid crud-demo">
    <div class="col-12">
      <BlockUI :blocked="blockedProgressLoading">
        <BlockLoader
          v-if="blockedProgressLoading"
          :status="blockedProgressLoading"
        />
        <div class="card">
          <h5 class="m-0">Company Information</h5>
          <hr />
          <table cellpadding="10" cellspacing="0">
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{{ company?.name }}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>{{ company?.phone }}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{{ company?.email }}</td>
            </tr>

            <tr>
              <td>Company registry</td>
              <td>:</td>
              <td>{{ company?.company_registry }}</td>
            </tr>

            <tr>
              <td>Tax Code</td>
              <td>:</td>
              <td>{{ company?.tax_code }}</td>
            </tr>

            <tr>
              <td>Currency</td>
              <td>:</td>
              <td>{{ company?.currency_id }}</td>
            </tr>

            <tr>
              <td>Website</td>
              <td>:</td>
              <td>{{ company?.website }}</td>
            </tr>

            <tr>
              <td>Address</td>
              <td>:</td>
              <td>{{ company?.address }}</td>
            </tr>

            <tr>
              <td>Description</td>
              <td>:</td>
              <td>{{ company?.description }}</td>
            </tr>
          </table>
        </div>
      </BlockUI>
    </div>
  </div>
</template>
