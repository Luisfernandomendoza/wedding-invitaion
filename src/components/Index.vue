<template>
  <p>Bienvenido al Index</p>
  <div class="columns is-flex is-centered">
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
