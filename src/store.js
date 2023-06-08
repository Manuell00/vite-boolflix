// https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=harry+potter

import { reactive } from 'vue'

export const store = reactive({

    // Variabile per loader
    loading: true,

    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d",
    charactersList: [],

    // Variabile per ricercare valore
    searchText: ""

});