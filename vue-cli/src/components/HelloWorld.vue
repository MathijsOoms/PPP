<template>
  <div class="hello">Hello Vue.js</div>
  <div style="color: blue; background: black; padding: 20px;">Hello Vue.js</div>
  <div> {{ msg }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: red;
}
</style>
