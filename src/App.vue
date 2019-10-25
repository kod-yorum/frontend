<template lang="pug">
  #app
    include ./assets/icons.pug
    AppHeader
    router-view
    AppFooter
</template>

<script>
import AppHeader from '@/components/shared/AppHeader'
import AppFooter from '@/components/shared/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import "/assets/css/style";
</style>
