<script>
// Importo lo STORE
import { store } from './../store.js';

// Importo i COMPONENTI
import SingleCardFilm from './SingleCardFilm.vue'
import SingleCardSeries from './SingleCardSeries.vue'

// Inserisco l'EXPORT
export default {
    name: 'CardList',
    components: {
        SingleCardFilm,
        SingleCardSeries,
    },

    data() {
        return {
            activeIndex: 0,
            store
        }
    },
    computed: {
        hasValidImages() {
            return this.store.charactersListFilm.some(character => character.backdrop_path);
        }
    },

    methods: {
        nextSlide() {
            if (this.store.charactersListFilm[this.activeIndex + 1]) {
                this.activeIndex++;
            } else {
                this.activeIndex = 0;
            }
        },
        prevSlide() {
            if (this.activeIndex > 0) {
                this.activeIndex--;
            } else {
                this.activeIndex = this.store.charactersListFilm.length - 1;
            }
        },

    },
}
</script>


<!-- TEMPLATE -->
<template>
    <!-- Inserisco il CAROUSEL -->
    <section v-if="hasValidImages" class="containeritem" id="carousel-containeritem">
        <h1 class="section-title">LE NOSTRE PROPOSTE :</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li v-for="(character, index) in store.charactersListFilm" :key="character.id"
                    :data-target="'#carouselExampleIndicators'" :data-slide-to="index"
                    :class="{ active: index === activeIndex }">
                </li>
            </ol>
            <div class="carousel-inner">
                <div v-for="(character, index) in store.charactersListFilm" :key="character.id"
                    :class="{ 'carousel-item': true, 'active': index === activeIndex }">
                    <img v-if="character.backdrop_path" class="d-block w-100"
                        :src="`${store.apiImagesURL}${store.apiImagesSmall}${character.backdrop_path}`"
                        :alt="`Slide ${index + 1}`">
                    <div class="slide-number">{{ index + 1 }}</div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"
                @click.prevent="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>

            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"
                @click.prevent="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </section>

    <!-- Inserisco le carte dei FILM -->
    <section class="containeritem">
        <h1 class="section-title">FILM :</h1>
        <div id="cardList" class="card-list">
            <SingleCardFilm v-for="character in store.charactersListFilm" :key="character.id" :detailsFilm="character" />
        </div>
    </section>

    <!-- Inserisco le carte delle SERIE -->
    <section class="containeritem">
        <h1 class="section-title">SERIE :</h1>
        <div id="cardList" class="card-list">
            <SingleCardSeries v-for="character in store.charactersListSeries" :key="character.id"
                :detailsSeries="character" />
        </div>
    </section>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

#carousel-containeritem {
    height: 1000px;

    #carouselExampleIndicators {
        height: 90%;

        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

}

.containeritem {
    color: white;
    border: 5px solid rgba(41, 37, 37, 0.48);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 50px;
    margin: 0 auto;
    width: 1600px;
    overflow: hidden;
    /* Aggiunto overflow: hidden per nascondere lo scroll orizzontale */

    .section-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }


    // Gestisco lo stile del carousel
    .carousel {
        position: relative;
        height: 400px;
        overflow: hidden;
    }

    .carousel-inner {
        position: relative;
        height: 100%;
        display: flex;
        /* Aggiunto display: flex per allineare gli elementi interni */
        transition: transform 0.3s ease-in-out;
    }

    .carousel-item {
        position: relative;
        // ... altri stili ...

        .slide-number {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 5px 10px;
            border-radius: 5px;
            color: #fff;
            font-size: 18px;
        }
    }

    .carousel-indicators li::marker {
        content: "";
    }



    .carousel-item.active {
        opacity: 1;
    }

    .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }

    .carousel-control-prev,
    .carousel-control-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease-in-out;
        z-index: 1;
    }

    .carousel-control-prev:hover,
    .carousel-control-next:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        width: 20px;
        height: 20px;
        fill: #fff;
    }

    // Definisco la griglia delle cards
    .card-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 20px;
    }
}

body {
    /* Impedisce lo scroll della pagina */
    overflow: hidden;
}
</style>
