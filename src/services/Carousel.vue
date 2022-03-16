<template>
  <carousel :items-to-show="2" itemsToScroll="2" :wrap-around="true">
    <slide v-for="service in services" :key="service.id">
      <div class="card">
        <div class="image">
          <img :src="service.image" />
        </div>
        <div class="box">
          <h2>Name</h2>
          <a :href="service.url">View</a>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  // props:['service'],

  data() {
    return {
      services: [
        {
          id: 1,
          image: require("../assets/ace_logo.png"),
          url: "https://google.com",
        },
        {
          id: 2,
          image: require("../assets/ace_logo.png"),
          url: "https://google.com",
        },
        {
          id: 3,
          image: require("../assets/ace_logo.png"),
          url: "https://google.com",
        },
        {
          id: 4,
          image: require("../assets/ace_logo.png"),
          url: "https://google.com",
        },
        {
          id: 5,
          image: require("../assets/ace_logo.png"),
          url: "https://google.com",
        },
        {
          id: 6,
          image: require("../assets/ace_logo.png"),
          url: "https://google.com",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 10px;
  background: #fff;
  box-shadow: 0 0 10px #000;
  position: relative;
}
.card .image {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.card .image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover;
  background-position: center;
  transform:scale(1);
  transition: 0.5s transform ease-in;
}
.card:hover img{
      transform:scale(1.09);
  transition: 0.5s transform ease-out;
}
.card .box{
    position: absolute;
    background:rgba(0, 0, 255, 0.377);
    width:100%;
    height: 100%;
    overflow: hidden;
      bottom: 0;
  left: 0;
  right: 0;
  transition: 0.3s ease;
  opacity: 0;
}
.card:hover .box{
  opacity: 1;
  transition: 0.2s ease-out;
}
.card .box h2{
    color: #000;
    font-size: 2.5rem;
    font-weight: 600;
      position: absolute;
  left: 40%;
  top: 50%;
}
.card .box a{
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
      position: absolute;
  left: 40%;
  top: 60%;
  text-decoration: none;
}

</style>