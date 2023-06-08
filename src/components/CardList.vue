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
            store
        }
    }
}
</script>


<!-- TEMPLATE -->
<template>
    <section class="container">
        <h1>Film :</h1>
        <div id="cardList">
            <SingleCardFilm v-for="character in store.charactersListFilm" :key="character.id" :detailsFilm="character" />
        </div>
    </section>
    <section class="container">
        <h1>Serie :</h1>
        <div id="cardList">
            <SingleCardSeries v-for="character in store.charactersListSeries" :key="character.id"
                :detailsSeries="character" />
        </div>
    </section>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.container {
    color: white;
    border: 50px solid white;

    #cardList {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>
