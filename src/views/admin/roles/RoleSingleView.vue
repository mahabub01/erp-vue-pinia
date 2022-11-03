<script setup>
import { storeToRefs } from "pinia";
import { useRoleStore } from "../../../store/admin/role";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { setStatus } from "../../../core/helper/status";

const route = useRoute();

const { singleData, blockedProgressLoading } = storeToRefs(useRoleStore());
const { getSingleRecord } = useRoleStore();

getSingleRecord(route.params.id);

watchEffect(() => [singleData.value]);
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
          <h5 class="m-0">Role Information</h5>
          <hr />
          <table cellpadding="10" cellspacing="0">
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{{ singleData?.name }}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>:</td>
              <td>{{ singleData?.company }}</td>
            </tr>

            <tr>
              <td>Guard Name</td>
              <td>:</td>
              <td>{{ singleData?.guard_name }}</td>
            </tr>

            <tr>
              <td>Active</td>
              <td>:</td>
              <td><span v-html="setStatus(singleData?.active)"></span></td>
            </tr>
          </table>
        </div>
      </BlockUI>
    </div>
  </div>
</template>
