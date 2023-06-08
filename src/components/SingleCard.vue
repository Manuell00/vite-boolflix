<script>
// Importo lo STORE
import { store } from './../store.js';
import CountryFlag from 'vue-country-flag-next'


// Inserisco l'EXPORT
export default {
    name: 'SingleCard',
    props: {
        details: Object
    },

    components: {
        CountryFlag
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
        <div class="cardCharacter">
            <div class="info"><span class="bold">Titolo :</span> {{ details.title }}</div>
            <div class="info"><span class="bold">Titolo Completo :</span> {{ details.original_title }}</div>
            <div class="info"><span class="bold">Voto :</span> {{ details.vote_average }}</div>
            <div class="info">
                <span class="bold">Lingua :</span>
                <country-flag v-if="details.original_language === 'en'" :country="'gb-eng'" />
                <country-flag v-else-if="isLanguageInCountries(details.original_language)"
                    :country="details.original_language" />
                <template v-else>
                    {{ details.original_language }}
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

    .cardCharacter {
        background-color: $bg-color;
        text-align: left;

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



}
</style>