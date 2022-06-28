
<template>
    <al-container>
        <al-header>Header</al-header>
        <al-main>Main</al-main>
        <al-footer>Footer</al-footer>
    </al-container>
    <hr>

    <al-container>
        <al-header>Header</al-header>
        <al-container>
            <al-aside width="200px">Aside</al-aside>
            <al-main>Main</al-main>
        </al-container>
    </al-container>
    <hr>
    <al-container>
        <al-aside width="200px">Aside</al-aside>
        <al-container>
            <al-header>Header</al-header>
            <al-main>Main</al-main>
            <al-footer>Footer</al-footer>
        </al-container>
    </al-container>
    <hr>
    <al-button type="primary">
        按钮
    </al-button>
    <al-button type="success">
        按钮
    </al-button>
    <al-button>按钮</al-button>
    <al-button size="small">
        按钮
    </al-button>
</template>

<script setup lang="ts">

</script>

<style>
body {
    width: 1000px;
    margin: 10px auto;
}

.al-header,
.al-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.al-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.al-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.al-container {
    margin-bottom: 40px;
}

.al-container:nth-child(5) .al-aside,
.al-container:nth-child(6) .al-aside {
    line-height: 260px;
}

.al-container:nth-child(7) .al-aside {
    line-height: 320px;
}
</style>
