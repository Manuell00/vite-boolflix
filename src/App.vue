<script>
// Importo lo STORE
import { store } from './store.js';
// Importo AXIOS 
import axios from 'axios';

// Importo i COMPONENTI
import AppLoader from './components/AppLoader.vue'
import AppHeader from './components/AppHeader.vue'
import CardList from './components/CardList.vue'


// Inserisco l'EXPORT
export default {
  components: {
    AppLoader,
    AppHeader,
    CardList
  },

  // Inserisco i dati
  data() {
    return {
      store,
    }
  },

  // Inserisco i metodi
  methods: {
    getCharacters() {
      let myUrl = store.apiURL
      let myFilm = ""; // Dichiarazione delle variabili
      let mySeries = "";

      if (store.searchText !== "") {
        // Film
        myFilm = `${myUrl}movie?${store.apiKey}&query=${store.searchText}`

        // Serie
        mySeries = `${myUrl}tv?${store.apiKey}&language=it_IT&query=${store.searchText}`;
      }

      // PRIMA chiamata axios popolo l'array charactersListFilm
      axios.get(myFilm).then(res => {
        store.charactersListFilm = res.data.results;
      })
        .catch(err => {
          console.error(err);
        })

        // Inserisco questo metodo per visualizzare la pagina di loading
        .finally(() => {
          store.loading = true
          setTimeout(() => {
            store.loading = false;
          }, 1000);
        });

      // SECONDA chiamata axios popolo l'array charactersListSeries
      axios.get(mySeries).then(res => {
        store.charactersListSeries = res.data.results;
      })
        .catch(err => {
          console.error(err);
        })
    },
  },

  // CREATED viene utilizzato al posto di mounted perchè svolge l'attività quando viene creata l'app
  created() {
    this.getCharacters()
  }
}
</script>



<!-- TEMPLATE -->
<template>
  <!-- In questo caso visualizzo il componente AppLoader solo quando la variabile store.loading è == true, quando in realtà la pagina è caricata questo diventerà false e quindi non sarà più visualizzato  -->
  <div v-if="store.loading">
    <AppLoader />
  </div>

  <div v-else>
    <!-- Modificando il valore della variabile message, il componente figlio (AppHeader cambiera il valore della propria variabile) -->
    <AppHeader @mysearch="getCharacters" />

    <main>
      <CardList />
    </main>

  </div>
</template>


<!-- Inserisco lo style -->
<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

main {
  background-color: $bg-color;
  height: auto;
  min-height: calc(100vh - 100px);
  padding-bottom: 100px;

}
</style>
