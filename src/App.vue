<template lang="pug">
  #app
    include ./assets/icons.pug
    AppHeader
    AppModal
    router-view
    AppFooter
</template>

<script>
import AppHeader from '@/components/shared/AppHeader'
import AppFooter from '@/components/shared/AppFooter'
import AppModal from '@/components/shared/AppModal'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppModal
  }
}
</script>

<style lang="scss">
  @import "/assets/css/style";
</style>
