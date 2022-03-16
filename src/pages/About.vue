<template>
  <div class="about">
    <div class="row">
      <div class="col-md-4 title">
        <h3>About</h3>
        <p>Introduce with me!</p>
      </div>
      <div class="col-md-8 others">
        <div class="box">
          <div class="card">
            <h4>I am</h4>
            <p>
              Hi, My name is Tapash Paul and I am from Bangladesh.Here I am,
              introducing myself.My hometown is Tangail district,Kalihati
              Upazila and my village name is Uttor Bethdoba. I belong to a
              middle class family.my hobby is traveling the whole of Bangladesh
              one day. I like playing cricket badminton and also like to hangout
              with friends.It's my healing power for my work and life.
            </p>
            <p>
              I'm full-stack developer.For front-end design i'm using vue.js
              with it's all new features.That's are vuex, vue ui, vue-router,
              etc. Making website interface user-friendly. But if you have any
              choice for your website, then discuss with me. If you are
              interested then you can see my client website. For Back-end
              support, i'm using laravel 8 and it's make your website faster
              than other. Also service provider for your website maintenance.
            </p>
            <p>
              As a front end developer i'am work with 1+ year and As a back-end
              developer work 6month +.In this period  i.m working some
              websites for different pharmaceutical companies and also make some
              blog with new webpage design. Make also SAp application and also
              restaurant manager, supershop with billing and scanning system.
              Provide graphics support with expert designer if you want?
            </p>
          </div>
        </div>
        <div class="box">
          <div class="card">
            <div class="card-header">
              <h4>Education</h4>
            </div>
            <div class="card-body">
              <div class="intro">
                <h5>Northern University Bangladesh</h5>
                <p>B.Sc. in Computer Science & Engineering</p>
                <p>Session:2013(Fall) to 2017(Fall)</p>
                <label>Activity</label>
                <address>
                  At my university I have done some projects. My first project
                  was tic tac toe. I know it's a very small project, but it's my
                  first.<br /><br />
                  After that I made a desktop application; it was a restaurant
                  management systema. My third project is web-based; it was an
                  online library.<br /><br />
                  My final project is an e-commerce website and it was a group
                  work.
                </address>
                <h5>Kalihati Collage</h5>
                <p>Dept: Science</p>
                <p>Session:2009 to 2011</p>
                <br />
                <h5>Kalihati R. S. Pilot Model high school</h5>
                <p>Dept: Science</p>
                <p>Passing Year:2009</p>
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
  background: rgba(223, 221, 221, 0.822);
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
.others .box {
  width: 50%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.box .card {
  width: 98%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
  border: none;
  box-shadow: 0 0 10px #fff;
}
.card h4 {
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin: 5px;
  padding: 5px;
}
.card p {
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  padding: 10px;
  margin: 10px;
}
.card .card-header {
  box-shadow: 0 0 10px rgb(33, 33, 34);
}
.card .card-body .intro h5 {
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 5px;
  margin: 0;
}
.card .card-body .intro p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  padding: 2px;
  margin: 0;
}
.card .card-body .intro label {
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 0 10px rgb(62, 62, 63);
  padding: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.card .card-body .intro address {
  padding: 5px;
  margin: 5px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-align: justify;
}
</style>