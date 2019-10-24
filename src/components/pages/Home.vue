<template lang="pug">
  div
    AppBanner
    .fluid
      .company-listing
        .col-md-12
          h2.align.align--horizontal-center Companies
          p.align.align--horizontal-center Explore communities that share your passion with millions of people
          ul.company-list
            li.company-list__item
              CompanyListing
            li.company-list__item
              CompanyListing
            li.company-list__item
              CompanyListing
            li.company-list__item
              CompanyListing
            li.company-list__item
              CompanyListing
            li.company-list__item
              CompanyListing
</template>

<script>
import AppBanner from '@/components/shared/AppBanner'
import CompanyListing from '@/components/shared/CompanyListing'

export default {
  name: 'Home',
  components: {
    AppBanner,
    CompanyListing
  }
}
</script>

<style lang="scss" scoped>
.company-listing {
  width: 100%;
  padding: 30px;
  float: left;
  background: #f5f5f5;
}
.company-list {
  width: 100%;
  float: left;
  &__item {
    width: 100%;
    height: 100px;
    float: left;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;

    &:nth-last-child(1) {
      border-bottom: none;
    }
  }
}
</style>
