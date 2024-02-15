<template>
  <label class="form-control w-full">
    <div v-if="hintTopLeft || hintTopRight" class="label">
      <span v-if="hintTopLeft" class="label-text text-pink">
        {{ hintTopLeft }}
      </span>
      <span v-if="hintTopRight" class="label-text-alt text-pink">
        {{ hintTopRight }}
      </span>
    </div>
    <div
      class="input input-bordered flex items-center gap-2"
      data-theme="light"
    >
      <slot />
      <input
        v-model="model"
        class="grow"
        :class="inputClass"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :min="min"
        :max="max"
      />
    </div>
    <div v-if="hintBottomLeft || hintBottomRight" class="label">
      <span v-if="hintBottomLeft" class="label-text-alt text-pink">
        {{ hintBottomLeft }}
      </span>
      <span v-if="hintBottomRight" class="label-text-alt text-pink">
        {{ hintBottomRight }}
      </span>
    </div>
  </label>
</template>

<script setup>
const model = defineModel({ type: String });

defineProps({
  inputClass: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  min: {
    type: String,
    default: "",
  },
  max: {
    type: String,
    default: "",
  },
  hintTopLeft: {
    type: String,
    default: "",
  },
  hintTopRight: {
    type: String,
    default: "",
  },
  hintBottomLeft: {
    type: String,
    default: "",
  },
  hintBottomRight: {
    type: String,
    default: "",
  },
});
</script>
