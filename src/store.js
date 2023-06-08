import { reactive } from 'vue'

export const store = reactive({

    // Variabile per loader
    loading: true,

    // Variabili per API request
    apiKey: "api_key=e99307154c6dfb0b4750f6603256716d",
    apiURL: "https://api.themoviedb.org/3/search/",
    apiImagesURL: "https://image.tmdb.org/t/p/",
    charactersListFilm: [],
    charactersListSeries: [],

    // Variabile per ricercare valore
    searchText: "",

    // Array lingue comprese con bandiere nell'estensione di vue
    countries: ['af', 'ax', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'bq', 'ba', 'bw', 'bv', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'cv', 'kh', 'cm', 'ca', 'ky', 'cf', 'td', 'cl', 'cn', 'cx', 'cc', 'co', 'km', 'cg', 'cd', 'ck', 'cr', 'ci', 'hr', 'cu', 'cw', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'tf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg'],

    // Dimensioni img
    apiImagesSmall: "w300/",
    apiImagesMedium: "w1000/",
    apiImagesBig: "w1920/"

});