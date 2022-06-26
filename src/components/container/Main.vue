<template>
    <main class="al-main">
        <slot></slot>
    </main>
</template>
<script lang="ts">
export default {
    name:"AlMain"
}
</script>
<script setup lang="ts">

</script>
<style lang="scss">
@import '../styles/mixin.scss';
@include b(main){
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
}
</style>