<script setup>
const model = defineModel({ type: String });

defineProps({
  inputClass: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "text",
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
  pattern: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
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
    <label class="input input-bordered flex items-center" :disabled="disabled">
      <slot />
      <input
        v-model="model"
        class="input grow border-none bg-transparent"
        :class="inputClass"
        :type="type"
        :placeholder="placeholder"
        :minlength="minLength"
        :maxlength="maxLength"
        :pattern="pattern"
        :required="required"
        :disabled="disabled"
      />
    </label>
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
