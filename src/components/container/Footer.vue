<template>
    <footer class="al-footer" :style="{height}">
        <slot></slot>
    </footer>
</template>
<script lang="ts">
export default {
    name: 'AlFooter'
}
</script>
<script setup lang="ts">
import { withDefaults } from "vue";
interface Props {
    height?: string
}
withDefaults(defineProps<Props>(),{
    height: '60px'
})
</script>
<style lang="scss">
@import '../styles/mixin.scss';
@include b(al-footer){
    padding: $--footer-padding;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>