<template>
  <div>
    <div v-if="showAlert" class="custom-alert">
      <a class="alert-text"
        >คุณดูดวงในหมวดหมู่นี้ไปแล้ว แน่ใจหรือไม่ที่จะดูต่อ?</a
      >
      <strong @click="hideAlert" class="close-button">ดูต่อไป</strong>
    </div>
    <button @click="showAlert = true" class="toggle-button">
      Toggle Alert
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false,
    };
  },
  methods: {
    hideAlert() {
      this.showAlert = false;
    },
  },
};
</script>

<style scoped>
.custom-alert {
  background-color: #ffeaa7;
  color: #2d3436;
  border: 1px solid #fdcb6e;
  padding: 10px;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.close-button {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
}

.toggle-button {
  padding: 8px 16px;
  background-color: #0984e3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #74b9ff;
}
</style>
