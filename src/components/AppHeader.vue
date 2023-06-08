<script>
// Importo lo STORE
import { store } from '../store.js';

// Inserisco l'EXPORT
export default {
    name: 'AppHeader',

    data() {
        return {
            store
        }
    },

}
</script>

<!-- TEMPLATE -->
<template>
    <header>
        <h1 class="title">Boolflix</h1>
        <div id="search">
            <!-- Aggancio il v-model al searchText, trim invece taglia gli spazi all'inizioe alla fine -->
            <input class="form-control" type="text" id="search-character" placeholder="Search Film"
                v-model.trim="store.searchText" @keyup.enter="$emit('mysearch')">

            <!-- Creo un bottone che cerchi nell'API -->
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2" @click.prevent="$emit('mysearch')">Search</button>
            </div>

        </div>
    </header>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';


header {
    height: 100px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    h1 {
        font-size: 40px;
        font-weight: 300;
        text-transform: uppercase;
        color: red;
    }

    #search {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

}
</style>