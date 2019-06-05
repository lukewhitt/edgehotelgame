<template>
  <div id="app" class="h-100 min-vh-100">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  height: 100%;
}

#app {
  font-family: 'Gill Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .no-margin {
    margin-left: 0;
    margin-right: 0;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
