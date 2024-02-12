<template>
  <div class="card-container mr-60">
    <div
      v-for="index in 22"
      :key="index"
      class="card"
      @click="handleCardClick(index)"
      :style="{ transform: activeCard === index ? 'translateY(-40px)' : 'translateY(0)' }">
      <div class="background">
        <div :class="{ 'frame': true, 'active': activeCard === index }">
          <div class="circle-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCard: null
    };
  },
  methods: {
    handleCardClick(index) {
      if (this.activeCard === index) {
        this.activeCard = null;
      } else {
        this.activeCard = index;
      }
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: transform 0.3s ease;
}

.card {
  margin: 20px;
  cursor: pointer;
  align-self: center;
}

.background {
  background-color: #F8EDFF;
  width: 250px;
  height: 380px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

.frame {
  background-color: #3B3486;
  width: 225px;
  height: 355px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.frame.active {
  background-color: #332941;
}

.circle-icon {
  background-color: #F8EDFF;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-image: url('favicon.ico');
  background-size: cover;
  border: 5px solid white;
}
</style>
