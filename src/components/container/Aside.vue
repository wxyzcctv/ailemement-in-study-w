<template>
    <aside class="al-aside" :style="{ width }">
        <slot />
    </aside>
</template>
<script lang="ts">
export default {
    name: "AlAside"
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue';
interface PropValues {
    width?: string
}
withDefaults(defineProps<PropValues>(), {
    width: "300px"
})
</script>
<style lang="scss">
@import '../styles/mixin.scss';
@include b(aside){
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>