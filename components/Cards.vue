<template>
  <div class="card">
    <div class="background">
      <div class="frame">
        <div class="circle-icon">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  background-color: #F8EDFF;
  width: 150px;
  height: 220px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame {
  background-color: #3B3486;
  width: 133px;
  height: 205px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-icon {
  background-color: #F8EDFF;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url('/ICON/Chat.png'); 
  background-size: cover; 
  border: 5px solid white;
}
</style>
