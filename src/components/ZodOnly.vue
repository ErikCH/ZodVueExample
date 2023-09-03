<script setup lang="ts">
import * as z from "zod";
import { fromZodError } from "zod-validation-error";

import { ref } from "vue";

const form = ref({
  firstName: "",
  lastName: "",
  address: "",
});

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "Needs to be at least 3 characters" })
      .max(50),
    lastName: z.string().min(3).max(50),
    address: z.string().min(5).max(100),
  })
  .required({ firstName: true });
type formSchema = z.infer<typeof formSchema>;
const errors = ref<z.ZodFormattedError<formSchema> | null>(null);

const onSubmit = (event: Event) => {
  console.log("event", event);
  const valid = formSchema.safeParse(form.value);
  if (!valid.success) {
    errors.value = valid.error.format();
    const test = fromZodError(valid.error, {});
    console.log("test", test);
  } else {
    errors.value = null;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl mb-4">Form</h1>
    <form
      class="flex flex-col gap-4 border-solid border-2 p-4 rounded w-1/3"
      @submit.prevent="onSubmit"
    >
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        v-model="form.firstName"
        class="input"
        placeholder="First Name"
        type="text"
      />
      <div v-if="errors?.firstName" className="text-red-800">
        <span v-for="error in errors?.firstName?._errors"> {{ error }}</span>
      </div>
      <label for="lastName">Last Name</label>
      <input
        v-model="form.lastName"
        class="input"
        id="lastName"
        placeholder="Last Name"
        type="text"
      />
      <div v-if="errors?.lastName" className="text-red-800">
        <span v-for="error in errors?.lastName?._errors"> {{ error }}</span>
      </div>
      <label for="address">Address</label>
      <input
        v-model="form.address"
        class="input"
        id="address"
        placeholder="Address"
        type="text"
      />
      <div v-if="errors?.address" className="text-red-800">
        <span v-for="error in errors?.address?._errors"> {{ error }}</span>
      </div>
      <button
        class="p-4 border-solid text-white border-2 bg-green-500 rounded hover:bg-green-900"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style scoped></style>
