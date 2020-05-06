<template>
  <div id="app">
      <router-link to="/AdjectiveSaurus"> adjectiveSaurus</router-link> <p> if you want to try something else </P>
       <router-link to="/Rhymesaurus"> Rhymesaurus</router-link> <p> if you want to go back </P>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
