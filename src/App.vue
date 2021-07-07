<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

</style>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
// import { reqFoodList } from './api/index'

export default {
  mounted(){
    this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide
  },
  // async mounted(){
  //   const reqFoodLists = await reqFoodList();
  //   console.log(reqFoodLists);
  // }

}
</script>
