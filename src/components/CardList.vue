<script>
// Importo lo STORE
import { store } from './../store.js';

// Importo i COMPONENTI
import SingleCard from './SingleCard.vue'

// Inserisco l'EXPORT
export default {
    name: 'CardList',
    components: {
        SingleCard,
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
        <div id="cardList">
            <SingleCard v-for="character in store.charactersList" :key="character.id" :details="character" />
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
