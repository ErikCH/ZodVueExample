<script setup lang="ts">
import * as z from "zod";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

const validationSchema = toTypedSchema(
  z.object({
    firstName: z
      .string()
      .nonempty()
      .min(3, { message: "Needs to be at least 3 characters" })
      .max(50),
    lastName: z.string().nonempty().min(3).max(50),
    address: z.string().nonempty().min(5).max(100),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");
const { value: address } = useField("address");

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl mb-4">Form</h1>
    <form
      class="flex flex-col gap-4 border-solid border-2 p-4 rounded w-1/3"
      @submit="onSubmit"
    >
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        v-model="firstName"
        class="input"
        placeholder="First Name"
        type="text"
      />

      <span className="text-red-800"> {{ errors.firstName }}</span>
      <label for="lastName">Last Name</label>
      <input
        v-model="lastName"
        class="input"
        id="lastName"
        placeholder="Last Name"
      />
      <span className="text-red-800"> {{ errors.lastName }}</span>
      <label for="address">Address</label>
      <input
        v-model="address"
        class="input"
        id="address"
        placeholder="Address"
        type="text"
      />
      <span className="text-red-800"> {{ errors.address }}</span>
      <button
        class="p-4 border-solid text-white border-2 bg-green-500 rounded hover:bg-green-900"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style scoped></style>
