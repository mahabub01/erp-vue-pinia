<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../../../store/admin/user-curd";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { statusForUser } from "../../../core/helper/status";

const route = useRoute();

const { singleData, blockedProgressLoading } = storeToRefs(useUserStore());
const { getSingleRecord } = useUserStore();

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
          <h5 class="m-0">User Information</h5>
          <hr />
          <table cellpadding="10" cellspacing="0">
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{{ singleData?.name }}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{{ singleData?.email }}</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>{{ singleData?.phone }}</td>
            </tr>

            <tr>
              <td>Companies</td>
              <td>:</td>
              <td>
                <span v-for="comValue in singleData?.companies" :key="comValue">
                  {{ comValue }}
                </span>
              </td>
            </tr>

            <tr>
              <td>Roles</td>
              <td>:</td>
              <td>
                <span v-for="roleValue in singleData?.roles" :key="roleValue">
                  {{ roleValue }}
                </span>
              </td>
            </tr>

            <tr>
              <td>Status</td>
              <td>:</td>
              <td><div v-html="statusForUser(singleData?.status)"></div></td>
            </tr>
          </table>
        </div>
      </BlockUI>
    </div>
  </div>
</template>
