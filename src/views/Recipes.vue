<template>

  <div class="home">
    <div class="col-md-6 centeralign">
      <p>Clicking on a card displays the recipe below.</p>
      <div class="card centeralign addmargin" style="width: 18rem;" v-for="recipe in recipeList" :key="recipe.id">
        <div class="card-body" v-on:click="setSelectedRecipe(recipe.name)">
          <h5 class="card-title">{{recipe.name}}</h5>
          <p class="card-text">{{recipe.ingredients}}</p>
          <p class="card-text">{{recipe.preparation}}</p>
        </div>
      </div>
    </div>
    <Display v-if="selectedRecipe!=''" :selectedRecipe="selectedRecipe" />
  </div>

</template>

<script>
// @ is an alias to /src
import Display from '@/components/Display.vue'
import axios from 'axios'
export default {
  name: 'recipes',
  mounted() {
    axios({
      method: "GET",
      "url": "assets/recipeList.json"
    }).then(response => {
      this.recipeList = response.data;
    }, error => {
      // eslint-disable-next-line
      console.error('Unable to retrieve list of recipes! Error: ', error);
    });
  },
  data() {
    return {
      recipeList: [],
      selectedRecipe: ""
    }
  },
  components: {
    Display
  },
  methods: {
    setSelectedRecipe: function(recipeName) {
      this.selectedRecipe = recipeName;
    }
  }
}
</script>
