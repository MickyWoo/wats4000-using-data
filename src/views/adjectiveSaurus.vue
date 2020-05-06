<template>
  <div class="AdjectiveSaurus">
    <form v-on:submit.prevent="findWords"> 
      <p>Find adjectives for <input type="text" v-model="adjective"> related to <input type="text" v-model="phrase"> <button type="submit">Search</button></p>
    </form>
    
    <ul class="results" v-if="results.length && results > 0 " >
      <!-- for-of because of array[] / for-in = objects {} -->
      <li class="item" v-for="result of results" :key="result">
        <p><strong>{{result.word}}</strong></p>
        <p> {{result.score}} </p>
      </li>
    </ul>

    
    <div class="no-results" v-else-if="results.length && results == 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

 
    <ul class="errors" v-if="errors && errors.length > 0 ">
      
      <li v-for="error of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdjectiveSaurus',
  data () {
    return {
      results: null,
      errors: [],
      phrase: '',
      adjective: ''
    }
  },
   
    methods: {
      findWords: function(){
       axios.get('https://api.datamuse.com/words?rel_jjb=car', {
        params: {
          ml: this.phrase,
          rel_rhy: this.adjective
        }
     })
      .then( response => {
        this.results = response.data
      })
      .catch(error =>{
        this.errors.push(error);
      });

    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rhymesaurus {
  font-size: 1.4rem;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>