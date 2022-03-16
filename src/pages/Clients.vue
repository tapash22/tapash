<template>
  <div class="about">
    <div class="row">
      <div class="col-md-4 title">
        <h3>Clients</h3>
        <p>Honorable client mine!</p>
      </div>
      <div class="col-md-8 others">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="image">
                <img src="../assets/ace_logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: rgba(253, 253, 253, 0.966);
  
}
.about .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.row .title {
  width: 25%;
  height: 100%;
  padding: 10px;
  margin-top: 150px;
  display: block;
}
.title h3 {
  font-size: 3rem;
  font-weight: 900;
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
.title p {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: justify;
  font-family: "Montserrat", sans-serif;
  padding: 5px;
  margin: 5px;
}
.row .others {
  width: 75%;
  height: 100%;
  padding: 10px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.others .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.others .row .col-md-3 {
  width: 25%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.others .row .col-md-3 .image {
  width: 230px;
  height: 80px;
  padding: 5px;
  margin: 5px;
  background: #fff;
  border: 1px dotted black;
}
.others .row .col-md-3 .image img {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
  transform: scale(1);
  transition:0.5s transform ease-out;
}
.others .row .col-md-3 .image img:hover{
    transform: scale(0.95);
  transition:0.3s transform ease-out;
}
</style>