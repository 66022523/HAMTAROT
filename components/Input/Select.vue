<script setup>
const model = defineModel({ type: String });

defineProps({
  selectClass: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
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
  <label class="form-control">
    <div v-if="hintTopLeft || hintTopRight" class="label">
      <span v-if="hintTopLeft" class="label-text">
        {{ hintTopLeft }}
      </span>
      <span v-if="hintTopRight" class="label-text-alt">
        {{ hintTopRight }}
      </span>
    </div>
    <select
      v-model="model"
      class="select select-bordered"
      :class="selectClass"
      :required="required"
    >
      <option v-if="title" disabled selected>{{ title }}</option>
      <slot />
    </select>
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
