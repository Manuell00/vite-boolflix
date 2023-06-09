<script>
// Importo lo STORE
import { store } from '../store.js';
import CountryFlag from 'vue-country-flag-next'


// Inserisco l'EXPORT
export default {
    name: 'SingleCardFilm',
    props: {
        detailsFilm: Object
    },

    components: {
        CountryFlag
    },
    computed: {
        stars() {
            const vote = this.detailsFilm.vote_average;
            const roundedVote = Math.ceil(vote / 2);

            return Array(roundedVote).fill(''); // Crea un array di '' con lunghezza pari al voto arrotondato
        }
    },


    methods: {
        isLanguageInCountries(language) {
            return store.countries.includes(language);
        },
    },

    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <!-- Card di esempio -->
    <div class="text-center card mb-3">

        <!-- Inserisco il contenitore dell'immagine -->
        <div class="image-container">
            <img v-if="detailsFilm.backdrop_path"
                :src="`${store.apiImagesURL}${store.apiImagesSmall}${detailsFilm.backdrop_path}`" alt="">
            <img v-else src="../../public/noavaibleimage.jpeg" alt="Immagine predefinita">
        </div>

        <!-- Inserisco le caratteristiche del film -->
        <div class="cardCharacter">
            <div class="info"><span class="bold">Titolo :</span> {{ detailsFilm.title }}</div>
            <div class="info"><span class="bold">Titolo Completo :</span> {{ detailsFilm.original_title }}</div>
            <div class="info">
                <span class="bold">Voto :</span>
                <span class="stars">
                    <i v-if="detailsFilm.vote_average !== 0" v-for="star in stars" class="fas fa-star"></i>
                    <i v-else class="fa-regular fa-thumbs-down"></i>
                </span>
            </div>

            <div class="info" id="overview">
                <span class="bold">Overview :</span>
                {{ detailsFilm.overview }}
            </div>

            <div class="info">
                <span class="bold">Lingua :</span>
                <country-flag v-if="detailsFilm.original_language === 'en'" :country="'gb-eng'" />
                <country-flag v-else-if="isLanguageInCountries(detailsFilm.original_language)"
                    :country="detailsFilm.original_language" />
                <template v-else>
                    {{ detailsFilm.original_language }}
                </template>
            </div>
        </div>
    </div>
</template>
  



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/partials/_variables.scss' as *;

.card {
    flex-basis: calc((100% / 5) - 10px);
    height: 450px;
    padding: 0;
    background-color: white;
    position: relative;

    .image-container {
        width: 100%;
        height: 450px;
        overflow: hidden;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            transition: transform 0.8s ease-in-out;
            /* Transizione più lenta */
            transform-origin: center;
        }
    }

    .cardCharacter {
        overflow: scroll;
        position: absolute;
        top: 0;
        left: 0;
        background-color: darkgrey;
        text-align: left;
        height: 450px;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        color: white;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        /* Transizione più lenta */
    }

    &:hover {
        .image-container {
            img {
                transform: rotateY(180deg) scale(1.2);
                /* Aggiungi una scala per un effetto più dinamico */
            }
        }

        .cardCharacter {
            opacity: 1;
            transition-delay: 0.3s;
            /* Ritardo nella transizione per un effetto di apparizione graduale */
        }
    }

    .info {
        margin-bottom: 10px;
    }

    .bold {
        font-weight: 600;
    }

    #overview {
        font-size: smaller;
    }
}
</style>
