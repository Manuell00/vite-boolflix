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
        <h1 class="title">
            <span id="letter1">B</span>
            <span id="letter2">o</span>
            <span id="letter3">o</span>
            <span id="letter4">l</span>
            <span id="letter5">f</span>
            <span id="letter6">l</span>
            <span id="letter7">i</span>
            <span id="letter8">x</span>
        </h1>
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
@use '../styles/partials/_variables.scss' as *;

header {
    height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .title {
        font-size: 40px;
        font-weight: 800;
        text-transform: uppercase;
        color: $title-color;
        letter-spacing: 3px;
        /* Aggiunto spazio tra le lettere */
        display: flex;
    }

    #letter1 {
        transform: rotate(-25deg) translateY(15px);
    }

    #letter2 {
        transform: rotate(-15deg) translateY(5px);
    }

    #letter3 {
        transform: rotate(-8deg) translateY(-3px);
    }

    #letter4 {
        transform: rotate(0deg) translateY(-6px);
    }

    #letter5 {
        transform: rotate(5deg) translateY(-5px);
    }

    #letter6 {
        transform: rotate(10deg) translateY(0px);
    }

    #letter7 {
        transform: rotate(15deg) translateY(5px);
    }

    #letter8 {
        transform: rotate(25deg) translateY(15px);
    }

    #search {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input[type="text"] {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid white;
        color: white;
        padding: 5px;
        font-size: 16px;
        outline: none;
        width: 250px;

        &::placeholder {
            color: white;
            opacity: 0.7;
        }
    }

    .btn-primary {
        background-color: $bg-color;
        border: none;
        font-weight: 600;
        font-size: 16px;
        padding: 8px 15px;
        text-transform: uppercase;
        cursor: pointer;
    }
}
</style>
