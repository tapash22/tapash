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
.navigation{
    width: 100%;
    height: 60px;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index:90;
}
.navigation nav{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: right;
            background:rgba(148, 147, 147, 0.671);
}
nav ul{
    width: 50%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    border-bottom: 10px solid rgb(223, 221, 221);
        background:rgb(223, 221, 221);
}
nav ul li{
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    list-style: none;
}
nav ul li a{
    font-size: 1.2rem;
    font-weight: 600;
      font-family: "Ubuntu", sans-serif;
    text-decoration: none;
    padding: 5px;
    margin: 0;
    color: #000;
}
nav ul li:last-child a{
    color: #000;
}

</style>