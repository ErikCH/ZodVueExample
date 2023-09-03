<script setup lang="ts">
// import ZodOnly from './components/ZodOnly.vue'
import WithFormLib from "./components/WithFormLib.vue";
import "@aws-amplify/ui-vue/styles.css";
import { Authenticator } from "@aws-amplify/ui-vue";
</script>

<template>
  <!-- <ZodOnly /> -->
  <Authenticator>
    <template v-slot="{ signOut }">
      <WithFormLib />
      <button class="bg-orange-500 p-4 rounded text-white" @click="signOut">
        Sign Out
      </button>
    </template>
  </Authenticator>
</template>

<style scoped></style>
