<template>
  <div class="about">
    <div class="row">
      <div class="col-md-4 title">
        <h3>Works</h3>
        <p>
           I have much to work with!
        </p>
      </div>
      <div class="col-md-8 others">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/ace_logo.png"/>
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
  background: rgba(223, 221, 221, 0.603);
  
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
  text-align: center;
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
}
.others .row{
  width: 100%;
  height:100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.others .row .col-md-4{
  width: 33%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.others .row .col-md-4 .card{
  width: 280px;
  height: 120px;
  padding: 5px;
  margin: 0;
  overflow: hidden;
}
.others .row .col-md-4 .card img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: 0.5s transform ease-out;
}
.others .row .col-md-4 .card img:hover{
    transform: scale(1.08);
  transition: 0.3s transform ease-out;
}

</style>