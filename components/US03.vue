<template>
    <div class="card-container">
      <div class="card-d mx-20">
        <div class="background">
          <div class="frame">
            <div class="circle-icond">
              <div class="card-descriptiond">
                <section>
                  <h1>รายวัน</h1>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-l mx-20">
        <div class="background">
          <div class="frame">
            <div class="circle-iconl">
              <div class="card-description">
                  <h1>การเงิน</h1>             
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-s mx-20">
        <div class="background">
          <div class="frame">
            <div class="circle-icons">
              <div class="card-description">
                <h1>การเรียน</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card-container">
      <div class="card-w mx-20">
        <div class="background">
          <div class="frame">
            <div class="circle-iconw">
              <div class="card-description">
                <h1>การงาน</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-h mx-20">
        <div class="background">
          <div class="frame">
            <div class="circle-iconh">
              <div class="card-description">
                <h1>สุขภาพ</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: transform 0.3s ease;
    margin: 90px; /* เพิ่มระยะห่างระหว่างการ์ด */
  }
  
  .background {
    background-color: #F8EDFF;
    width: 250px;
    height: 380px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease; /* เพิ่ม transition */
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
  
  .circle-icond,
  .circle-iconl,
  .circle-icons,
  .circle-iconw,
  .circle-iconh {
    background-color: #F8EDFF;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background-size: cover;
    border: 5px solid white;
  }
  
  .circle-icond {
    background-image: url('/ICON/Sun.png');
  }
  
  .circle-iconl {
    background-image: url('/ICON/Chat.png');
  }
  
  .circle-icons {
    background-image: url('/ICON/image 8.png');
  }
  
  .circle-iconw {
    background-image: url('/ICON/Portfolio.png');
  }
  
  .circle-iconh {
    background-image: url('/ICON/Health care.png');
  }
  
  .card-descriptiond,
  .card-description,
  .card-description {
    text-align: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 350%;
    padding-bottom: 10%; /* เพิ่มระยะห่างด้านล่างของข้อความ */
  }
  
  h1 {
    font-weight: bold; /* ทำให้ตัวอักษรหนา */
    font-size: 20px; /* ขนาดตัวอักษร */
  }
  
  p {
    font-size: 12px; /* ขนาดตัวอักษร */
  }
  
  .background:hover {
    background-color: #F8E559; /* สีเมื่อโดน hover */
  }
  </style>
  