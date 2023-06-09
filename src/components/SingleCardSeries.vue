<script>
// Importo lo STORE
import { store } from '../store.js';
import CountryFlag from 'vue-country-flag-next'


// Inserisco l'EXPORT
export default {
    name: 'SingleCardSeries',
    props: {
        detailsSeries: Object
    },

    components: {
        CountryFlag
    },
    computed: {
        stars() {
            const vote = this.detailsSeries.vote_average;
            const roundedVote = Math.ceil(vote / 2);

            console.log(roundedVote); // Controlla il valore di roundedVote


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
        <div class="image-container">
            <img v-if="detailsSeries.backdrop_path"
                :src="`${store.apiImagesURL}${store.apiImagesSmall}${detailsSeries.backdrop_path}`" alt="">
            <img v-else src="../../public/noavaibleimage.png" alt="Immagine predefinita">
        </div>
        <div class="cardCharacter">
            <div class="info"><span class="bold">Titolo :</span> {{ detailsSeries.name }}</div>
            <div class="info"><span class="bold">Titolo Completo :</span> {{ detailsSeries.original_name }}</div>
            <div class="info">
                <span class="bold">Voto :</span>
                <span class="stars">
                    <i v-if="detailsSeries.vote_average !== 0" v-for="star in stars" class="fas fa-star"></i>
                    <i v-else class="fa-regular fa-thumbs-down"></i>
                </span>
            </div>

            <div class="info" id="overview">
                <span class="bold">Overview :</span>
                {{ detailsSeries.overview }}
            </div>

            <div class="info">
                <span class="bold">Lingua :</span>
                <country-flag v-if="detailsSeries.original_language === 'en'" :country="'gb-eng'" />
                <country-flag v-else-if="isLanguageInCountries(detailsSeries.original_language)"
                    :country="detailsSeries.original_language" />
                <template v-else>
                    {{ detailsSeries.original_language }}
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
    height: 500px;
    padding: 0;
    border-radius: 10px;
    background-color: black;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03);
    }

    .image-container {
        width: 100%;
        height: 500px;
        overflow: hidden;

        img {
            object-fit: cover;
            object-position: center;
            height: 100%;
            width: 100%;
            transition: transform 0.8s ease-in-out;
            /* Transizione più lenta */
            transform-origin: center;
        }
    }

    .cardCharacter {
        overflow-y: scroll;
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: left;
        height: 100%;
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
        font-size: 12px;
    }

    .stars {
        color: #FDB813;

        i {
            margin-left: 2px;
        }
    }
}
</style>
