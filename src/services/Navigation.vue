<template>
    <div class="navigation">
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Works</a></li>
                <li><a href="#client">Client</a></li>
                <li><a href="#contact">tapasp263@gmail.com</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');

.navigation{
    width: 100%;
    height: 60px;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index:90;
    /* background: rgba(0, 0, 0, 0.301); */
}
.navigation nav{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: right;
            /* background:#006666; */
}
nav ul{
    width: 50%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    /* border-bottom: 10px solid #006666; */
        background:#006666fb;
        border-bottom-left-radius: 200px;
}
nav ul li{
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    list-style: none;
}
nav ul li a{
    font-size: 1.4rem;
    font-weight: 600;
     font-family: 'Playfair Display', serif;
    text-decoration: none;
    padding: 5px;
    margin: 0;
    color: #000;
}
nav ul li:last-child a{
    color: #fff;
}

</style>