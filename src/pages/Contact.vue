<template>
  <div class="about">
    <div class="row">
      <div class="col-md-4 title">
        <h3>Contact</h3>
        <p>
          Feel free to contact...
        </p>
      </div>
      <div class="col-md-8 others">
        <div class="box">
          <div class="card">
            <i class="fa fa-envelope"></i>
          </div>
        </div>
        <div class="box">
          <form>
            <div class="form-group my-2">
              <input
                type="text"
                placeholder=" Enter your Name"
                class="form-control"
              />
            </div>
            <div class="form-group my-2">
              <input
                type="text"
                placeholder=" Enter your Email"
                class="form-control"
              />
            </div>
            <div class="form-group my-2">
              <input
                type="text"
                placeholder=" Enter your phone"
                class="form-control"
              />
            </div>
            <div class="form-group my-2">
              <input
                type="text"
                placeholder=" Enter your subject"
                class="form-control"
              />
            </div>
            <div class="form-group my-2">
              <textarea
                class="form-control"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="sendMessage()">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row2">
      <ul>
        <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
      </ul>
      <p>@Tapash22</p>
    </div>

  </div>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #006666;
}
.about .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
    background: rgba(223, 221, 221, 0.603);
    box-shadow: 0 0 20px rgba(250, 249, 249, 0.966);
}
.row .title {
  width: 25%;
  height: 100%;
  padding: 10px;
  margin-top: 50px;
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
  font-family: 'Playfair Display', serif;
  padding: 5px;
  margin: 5px;
}
.row .others {
  width: 75%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
        
}
.others .box {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.box .card {
  width: 350px;
  height: 350px;
  padding: 100px;
  margin: 10px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 40px rgb(252, 251, 251);
}
.box .card i {
  font-size: 6rem;
  font-weight: 900;
  text-align: center;
  color: rgba(0, 0, 0, 0.616);
  border-radius: 50%;
  box-shadow: 0 0 100px rgb(248, 248, 248);
  padding: 25px;
  opacity: 0.7;
  transform: scale(1);
  transition: 0.4s transform ease-out;
}
.box .card i:hover{
  transform: scale(1.1);
  transition: 0.3s transform ease-out;
  box-shadow: 0 0 50px rgba(148, 147, 147, 0.918);
}
.box form{
    width: 100%;
    height:100%;
    padding: 20px;
    margin: 0;
}

.about .row2{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #006666;
  box-shadow: 0 0 50px #fff;
}
.row2 ul{
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
}
.row2 ul li{
  width: 60px;
  height: 60px;
  display: flex;
  margin: 5px;
  justify-content: center;
  list-style: none;
  transition :0.3s border ease-out;
  border-radius: 10px;
}
.row2 ul li:hover{
    box-shadow: 0 0 10px #fff;
  transition :0.6s border ease-out;
}
.row2 ul li a{
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.row2 ul li a i{
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
  padding: 10px;
}
.row2 p{
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
}

</style>