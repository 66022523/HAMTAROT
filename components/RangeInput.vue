<script setup>
const model = defineModel({ type: String });

defineProps({
  inputClass: {
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
  step: {
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
    <div>
      <input
        v-model="model"
        type="range"
        class="range"
        :class="inputClass"
        :min="min"
        :max="max"
        :step="step"
      />
      <div class="flex w-full justify-between px-2 text-xs">
        <slot />
      </div>
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
