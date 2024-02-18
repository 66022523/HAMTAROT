<script setup>
const model = defineModel({ type: String });

defineProps({
  inputClass: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  minLength: {
    type: String,
    default: null,
  },
  maxLength: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  hintTopLeft: {
    type: String,
    default: null,
  },
  hintTopRight: {
    type: String,
    default: null,
  },
  hintBottomLeft: {
    type: String,
    default: null,
  },
  hintBottomRight: {
    type: String,
    default: null,
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
    <textarea
      v-model="model"
      class="textarea textarea-bordered"
      :class="inputClass"
      :placeholder="placeholder"
      :minlength="minLength"
      :maxlength="maxLength"
      :required="required"
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
