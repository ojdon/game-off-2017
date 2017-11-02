<template>
  <div class="hello">
    <b-navbar toggleable type="dark" variant="dark" fixed="top">
        <b-nav-toggle target="nav_text_collapse"></b-nav-toggle>
        <b-navbar-brand>{{msg}}</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-nav is-nav-bar>
                <b-nav-text>ICON</b-nav-text>
            </b-nav>
        </b-collapse>
    </b-navbar>

    <b-navbar toggleable type="dark" variant="dark" fixed="bottom">
        <b-nav-toggle target="nav_text_collapse"></b-nav-toggle>
        <b-navbar-brand>{{msg}}</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-nav is-nav-bar>
                <b-nav-text>ICON</b-nav-text>
            </b-nav>
        </b-collapse>
    </b-navbar>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Game Off 2017'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
