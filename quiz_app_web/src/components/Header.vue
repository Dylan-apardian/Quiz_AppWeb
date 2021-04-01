<template>
    <div class="entete">
    
        <header>
            <h1>DhafVoyage</h1>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Destinations</li>
                        <li>Reviews</li>
                        <li>À Propos</li>
                    </ul>
                </nav> 
        </header>    

        <section id="main-image">
                <h2>Organisez votre voyage sur mesure</strong></h2>
                <a>Voir les commentaires</a>
        </section> 
    </div>
</template>


<style scoped>
* {
    margin: 10 auto;
    padding: 0 10px;
}

#entete{
    background-color:gray;
}

h1 {
     float: left;
     margin-top: 0px;
     font-size: 32px;
}

nav {
    float: right;
}

nav ul li {
    display: inline-block; 
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 80px; 
}
</style>