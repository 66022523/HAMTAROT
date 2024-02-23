<script setup>
defineProps({
  status: {
    type: String,
    default: "info",
    validator(value) {
      return ["info", "success", "warning", "danger"].includes(value);
    },
  },
  title: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
  primaryButtonText: {
    type: String,
    default: null,
  },
  primaryButtonClass: {
    type: String,
    default: null,
  },
  primaryButtonOnClick: {
    type: Function,
    default: null,
  },
  secondaryButtonText: {
    type: String,
    default: null,
  },
  secondaryButtonClass: {
    type: String,
    default: null,
  },
  secondaryButtonOnClick: {
    type: Function,
    default: null,
  },
});
</script>

<template>
  <div
    role="alert"
    :class="{
      alert: true,
      'alert-info': status === 'info',
      'alert-success': status === 'success',
      'alert-warning': status === 'warning',
      'alert-danger': status === 'danger',
      'shadow-lg': true,
    }"
  >
    <svg
      v-if="status === 'info'"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-6 w-6 shrink-0 stroke-info"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <svg
      v-if="status === 'success'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <svg
      v-if="status === 'warning'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <svg
      v-if="status === 'error'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span v-if="!title && text">{{ text }}</span>
    <div v-if="title && text">
      <h3 class="font-bold">{{ title }}</h3>
      <div class="text-xs">{{ text }}</div>
    </div>
    <Button
      v-if="primaryButtonText && !secondaryButtonText"
      class="btn-sm"
      :class="primaryButtonClass"
      @click="primaryButtonOnClick"
    >
      {{ primaryButtonText }}
    </Button>
    <div v-if="primaryButtonText && secondaryButtonText">
      <Button
        class="btn-sm"
        :class="primaryButtonClass"
        @click="primaryButtonOnClick"
      >
        {{ primaryButtonText }}
      </Button>
      <Button
        class="btn-sm"
        :class="secondaryButtonClass"
        @click="secondaryButtonOnClick"
      >
        {{ secondaryButtonText }}
      </Button>
    </div>
  </div>
</template>
