<template>
    <div>
      <AppBanner/>
      <div class="container">
        <div class="company-listing row">
          <div class="col-md-12">
            <h2 class="align align--horizontal-center">Companies</h2>
            <p class="align align--horizontal-center">Explore communities that share your passion with millions of people</p>
            <ul class="company-list">
              <li class="company-list__item">
                <CompanyListing/>
              </li>
              <li class="company-list__item">
                <CompanyListing/>
              </li>
              <li class="company-list__item">
                <CompanyListing/>
              </li>
              <li class="company-list__item">
                <CompanyListing/>
              </li>
              <li class="company-list__item">
                <CompanyListing/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
}
.company-list {
  &__item {
    width: 100%;
    height: 100px;
    float: left;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }
}
</style>
