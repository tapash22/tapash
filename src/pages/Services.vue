<template>
  <div class="about">
    <div class="row">
      <div class="col-md-4 title">
        <h3>Works</h3>
        <p>I have much to work with!</p>
      </div>
      <div class="col-md-8 others">
        <div class="container">
          <div class="row">
            <Carousel/>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../services/Carousel.vue";

export default {

  components:{
    Carousel,
  }
}
</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #fff5bb;
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
  font-family: "Playfair Display", serif;
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
.others .row {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

</style>