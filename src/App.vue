<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/shared/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  @import "/assets/css/style";
</style>
