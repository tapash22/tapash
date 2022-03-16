<template>
  <div class="tapash">
    <Navigation />
    <div class="row2">
      <div class="col-md-12">
        <div class="image">
          <img src="./assets/pro2.jpg" />
        </div>
      </div>
    </div>
    <About  id="about"/>
    <Services id="services"/>
    <Clients id="client"/>
    <Contact id="contact"/>
  </div>
</template>

<script>
import Navigation from "./services/Navigation.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import Clients from "./pages/Clients.vue";
import Contact from "./pages/Contact.vue";
export default {
  components: {
    Navigation,
    About,
    Services,
    Clients,
    Contact,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');
.tapash {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.tapash .row2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.row2 .col-md-12{
  width: 100%;
  height:100%;
  padding:0;
  margin:0;
}
.row2 .col-md-12 .image{
  width: 100%;
  height: 700px;
  padding: 0;
  margin: 0;
}
.row2 .col-md-12 .image img{
  width: 100%;
  height:100%;
  padding:0;
  margin:0;
  object-fit: cover;
  background-position: center;
}
  
</style>

