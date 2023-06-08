<script>
// Inserisco l'EXPORT
export default {
    name: 'AppLoader',
    message: 'Caricamento in corso...'
}
</script>

<template>
    <div class="loader">
        <div class="text">{{ label }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 32 3">
            <path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
        </svg>
        <div class="text">Loading...</div>
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
    background: white;
}

svg {
    fill: red;
    width: 64px;
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
}
</style>
