<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from 'components/footer/footer'
export default {
  name: 'App',
  components: {
    MFooter
  }
}
</script>

<style scoped>

</style>
