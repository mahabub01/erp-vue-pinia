<script setup>
import { defineProps } from "vue";
const props = defineProps({
  status: { required: false, default: false },
});
console.log(props);
</script>
<template>
  <div
    class="p-progress-spinner"
    role="alert"
    aria-busy="true"
    data-v-06f1e060=""
    style="
      width: 50px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1200;
      visibility: hidden;
    "
    :class="{ isviewprogressbar: status }"
  >
    <svg
      class="p-progress-spinner-svg"
      viewBox="25 25 50 50"
      style="animation-duration: 0.5s"
    >
      <circle
        class="p-progress-spinner-circle"
        cx="50"
        cy="50"
        r="20"
        fill="transparent"
        stroke-width="8"
        strokeMiterlimit="10"
      ></circle>
    </svg>
  </div>
</template>

<style scoped>
.isviewprogressbar {
  visibility: visible !important;
}
</style>
