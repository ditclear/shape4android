<template>
  <div id="app">
    <Shape/>
  </div>
</template>

<script>
import Shape from './components/Shape.vue'
export default {
  name: 'app',
  components: {
    Shape
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
