<script>
// Inserisco l'EXPORT
export default {
    name: 'AppLoader',
}
</script>
<template>
    <div class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-b" width="100" height="100"
            viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
            <line x1="7" y1="12" x2="13" y2="12" />
        </svg>
        <div class="text">Boolflix is Loading...</div>
    </div>
</template>
  
  
  <!-- STYLE -->
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #ff8080, #ff1a1a);
}

svg {
    width: 150px;
    height: 150px;
    margin: 1rem 0;
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.6);
    }
}

.text {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 50px;
    color: $bg-color;
}
</style>
  