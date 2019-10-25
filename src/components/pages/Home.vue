<template lang="pug">
  div
    AppBanner
    section.fluid
      .company-listing
        .col-md-12
          h2.align.align--horizontal-center Companies
          p.align.align--horizontal-center Explore communities that share your passion with millions of people
          .container
            ul.company-list
              li.company-list__item(v-for="item in 20")
                CompanyListing
            AddReviewWidget
</template>

<script>
import AppBanner from '@/components/shared/AppBanner'
import CompanyListing from '@/components/shared/CompanyListing'
import AddReviewWidget from '@/components/shared/AddReviewWidget'

export default {
  name: 'Home',
  components: {
    AppBanner,
    CompanyListing,
    AddReviewWidget
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
    width: calc(25% - 12px);
    height: 228px;
    float: left;
    margin: 0 14.5px 12px 0;

    &:nth-child(4n + 4) {
      margin-right: 0;
    }
  }
}
</style>
