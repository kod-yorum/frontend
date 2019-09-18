<template>
  <div class="listing">
    <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1.png" alt="" class="listing__image">
    <div class="recent-detail">
      <div class="recent-detail__title">Senior Frontend Developer</div>
      <small class="recent-detail__subtitle">Biges Güvenli Hayat Teknolojileri</small>
    </div>
    <div class="listing__location">
      <img src="../../assets/image/location.svg" class="listing__location-icon">
      İstanbul
      </div>
    <div class="listing__button">
      <rate :length="5" :value="2" :disabled="true"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  float: left;

  &__image {
    height: 60px;
    object-fit: cover;
    float: left;
  }

  .recent-detail {
    width: calc(55% - 160px);
    margin-left: 30px;
    float: left;
    &__title {
      width: 100%;
      float: left;
      font-size: 18px;
      font-weight: 500;
    }

    &__subtitle {
      width: 100%;
      float: left;
      font-size: 12px;
      font-weight: 300;
      margin-top: 5px;
      color: #666;
    }
  }

  &__location {
    width: 20%;
    float: left;
    font-size: 14px;
    margin-top: 10px;
    color: #666;

    &-icon {
      width: 16px;
      height: 16px;
      float: left;
      margin-right: 3px;
    }
  }

  &__button {
    width: 25%;
    float: right;
    font-size: 14px;
    text-align: right;
    margin-top: 10px;
  }
}
</style>
