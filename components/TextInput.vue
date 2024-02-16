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

<template>
  <label class="form-control w-full">
    <div v-if="hintTopLeft || hintTopRight" class="label">
      <span v-if="hintTopLeft" class="label-text">
        {{ hintTopLeft }}
      </span>
      <span v-if="hintTopRight" class="label-text-alt">
        {{ hintTopRight }}
      </span>
    </div>
    <div class="input input-bordered flex items-center gap-2">
      <slot />
      <input
        v-model="model"
        class="grow"
        :class="inputClass"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :minlength="min"
        :maxlength="max"
      />
    </div>
    <div v-if="hintBottomLeft || hintBottomRight" class="label">
      <span v-if="hintBottomLeft" class="label-text-alt">
        {{ hintBottomLeft }}
      </span>
      <span v-if="hintBottomRight" class="label-text-alt">
        {{ hintBottomRight }}
      </span>
    </div>
  </label>
</template>
