<template>

  <div class="home">
    <div class="col-md-6 centeralign">
      <p>Clicking on a card will take you to the menu view.</p>
      <div class="card centeralign addmargin" style="width: 18rem;" v-for="menu in menuList" :key="menu.id">
        <div class="card-body" v-on:click="goToRecipesPage(menu.name)">
          <h5 class="card-title">{{menu.name}}</h5>
          <p class="card-text">{{menu.description}}</p>
        </div>
      </div>
    </div>
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
      "url": "assets/menuList.json"
    }).then(response => {
      this.menuList = response.data;
    }, error => {
      // eslint-disable-next-line
      console.error('Unable to retrieve list of menus! Error: ', error);
    });
  },
  data() {
    return {
      menuList: []
    }
  },
  methods: {
    goToRecipesPage: function(menuName) {
      console.log(`Eventually this will show data for ${menuName}. But right now they're all the same.`);
      this.$router.push("/recipes/");
    }
  }
}
</script>
