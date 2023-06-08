<script>
// Inserisco l'EXPORT
export default {
    name: 'SingleCard',
    props: {
        details: Object
    }
}
</script>


<!-- TEMPLATE -->
<template>
    <!-- Card di esempio -->
    <div class="text-center card mb-3">
        <div class="cardCharacter">

            <div class="info"> <span class="bold">Titolo :</span> {{ details.title }}</div>
            <div class="info"> <span class="bold">Titolo Completo :</span> {{ details.original_title }}
            </div>
            <div class="info"><span class="bold">Voto :</span> {{ details.vote_average }}</div>
            <div class="info"> <span class="bold">Lingua :</span> {{ details.original_language }}</div>
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

            .info {}
        }

        .bold {
            font-weight: 600;
        }


    }



}
</style>