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
    <section class="containeritem">
        <h1 class="section-title">FILM :</h1>
        <div id="cardList" class="card-list">
            <SingleCardFilm v-for="character in store.charactersListFilm" :key="character.id" :detailsFilm="character" />
        </div>
    </section>
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

.containeritem {
    color: white;
    border: 5px solid rgba(41, 37, 37, 0.48);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 50px;
    margin: 0 auto;
    width: 1600px;

    .section-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .card-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 20px;
    }
}
</style>
