<template>
<div id="app">
  <nav>
    <router-link to="/produse">Home</router-link> |
    <!-- <router-link to="/create">Create</router-link> -->
    <button @click="showModal" class="btn btn-outline-success">Create</button>
  </nav>
  <!-- <CreatePopUp :open="isOpen" @close="isOpen = !isOpen"><CreatePopUpFields></CreatePopUpFields><CreatePopUp/> -->
  <CreatePopUp v-show="isModalVisible" @close="closeModal"><CreatePopUpFields></CreatePopUpFields></CreatePopUp>
</div>
  
  <router-view/>
</template>

<script>
  import CreatePopUp from './components/CreatePopUp.vue';
  import CreatePopUpFields from './components/CreatePopUpFields.vue'
  
  export default {
    name: 'app',
    components: {CreatePopUp, CreatePopUpFields},
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true
      },
      closeModal() {
        this.isModalVisible = false
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
