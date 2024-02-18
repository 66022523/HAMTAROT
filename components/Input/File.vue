<script setup>
defineProps({
  inputClass: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
    default: null,
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
    <input
      type="file"
      class="file-input file-input-bordered w-full"
      :class="inputClass"
      :required="required"
      @change="onChange"
    />
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
