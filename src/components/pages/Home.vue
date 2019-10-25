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
              li.company-list__item(v-for="item in data")
                CompanyListing(:data="item")
            AddReviewWidget
</template>

<script>
import AppBanner from '@/components/shared/AppBanner'
import CompanyListing from '@/components/shared/CompanyListing'
import AddReviewWidget from '@/components/shared/AddReviewWidget'

export default {
  name: 'Home',
  data () {
    return {
      data: [
        {
          id: '1',
          name: 'Google',
          website: 'www.google.com',
          logo: 'https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
          job: '12',
          rate: 3,
          reviews: '12',
          salaries: '5',
          interviews: '9'
        },
        {
          id: '2',
          name: 'Facebook',
          website: 'www.facebook.com',
          logo: 'https://image.flaticon.com/icons/png/512/124/124010.png',
          job: '3',
          rate: 1,
          reviews: '5',
          salaries: '15',
          interviews: '2'
        },
        {
          id: '3',
          name: 'Biges',
          website: 'www.biges.com',
          logo: 'https://www.biges.com/gorsel/icerik/Logo-Lansman5.jpg',
          job: '0',
          rate: 5,
          reviews: '1',
          salaries: '5',
          interviews: '6'
        },
        {
          id: '4',
          name: 'Protel',
          website: 'www.protel.com',
          logo: 'http://www.computerworld.com.tr/wp-content/uploads/2016/09/protel-logo-cw.jpg',
          job: '44',
          rate: 5,
          reviews: '15',
          salaries: '1',
          interviews: '0'
        },
        {
          id: '5',
          name: 'Epigra',
          website: 'www.epigra.com',
          logo: 'https://hesapno.com/logo/uploads/epigra.png',
          job: '0',
          rate: 2,
          reviews: '5',
          salaries: '0',
          interviews: '0'
        }
      ]
    }
  },
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
