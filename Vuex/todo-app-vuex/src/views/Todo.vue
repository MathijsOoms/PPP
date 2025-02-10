<template>
    <div>
        <Navbar/>
    </div>
    <div>
        <h1><AddTodo/></h1>
        <div>
            <h1><Count/></h1>
        </div>
        <div>
            <h1><ListTodo/></h1>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import AddTodo from '@/components/AddTodo.vue'
import Count from '@/components/Count.vue'
import ListTodo from '@/components/ListTodo.vue'
</script>

<style scoped>

</style>