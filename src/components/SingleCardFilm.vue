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
            const roundedVote = Math.ceil(vote / 2); // Converte da scala 1-10 a scala 1-5
            return Array(roundedVote).fill('');
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
            <img v-if="detailsFilm.backdrop_path"
                :src="`${store.apiImagesURL}${store.apiImagesSmall}${detailsFilm.backdrop_path}`" alt="">
            <img v-else src="../../public/noavaibleimage.jpeg" alt="Immagine predefinita">
        </div>
        <div class="cardCharacter">
            <div class="info"><span class="bold">Titolo :</span> {{ detailsFilm.title }}</div>
            <div class="info"><span class="bold">Titolo Completo :</span> {{ detailsFilm.original_title }}</div>
            <div class="info"><span class="bold">Voto :</span>
                <div class="stars">
                    <i v-for="star in stars" class="fas fa-star"></i>
                </div>
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

    .image-container {
        width: 100%;
        height: 250px;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .cardCharacter {
        background-color: darkgrey;
        text-align: left;
        height: 200px;
    }

    .cardName {
        color: white;
        margin: 10px;
        text-transform: uppercase;
        text-align: center;
        height: 90px;

    }

    .bold {
        font-weight: 600;
    }


}
</style>