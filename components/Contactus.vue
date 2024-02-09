<template>
    <section>
      <div class="circle-container">
        <div class="circle" @click="openEmailLink"></div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      openEmailLink() {
        window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&ifkv=ASKXGp0rnNCFY0Ra7VPvZ_r9PbeLpqul_LPu3yYdALqjaxnjKQ0E_408xag6SenFJuH5I9T9TH8_qw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S235453582%3A1707460840641436&theme=glif';
      }
    }
  }
  </script>
  
  <style>
  .circle-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end; 
  padding: 20px; 
  }
  
  .circle {
    width: 50px; 
    height: 50px; 
    background-color: #F8E559;
    border-radius: 50%;
    cursor: pointer;
    position: fixed; 
    bottom: 20px; 
    right: 27px; 
    background-image: url('/public/Question.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  </style>
  