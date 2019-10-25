<template lang="pug">
  .card
    .card__badge
      svg.card__badge-icon #[use(xlink:href="#icon-card-job")]
      .card__badge-value 12
    img.card__logo(src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip")
    .card__title Google INC
    .card__link
      svg.card__link-icon #[use(xlink:href="#icon-card-link")]
      .card__link-text www.google.com
    .card__rate
      rate(:length="5" :value="2" :readonly="true")
    .card__bottom
      .card__bottom-item
        .card-detail-title REVIEWS
        .card-detail-value 12
      .card__bottom-item
        .card-detail-title SALARIES
        .card-detail-value 4
      .card__bottom-item
        .card-detail-title INTERVIEWS
        .card-detail-value 310
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 218px;
  float: left;
  position: relative;
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.05);
  border: 1px solid #d8d9dd;
  border-radius: 3px;
  transition: box-shadow .4s cubic-bezier(.56,1.19,.2,1.05),margin-top 0s,-webkit-transform .7s cubic-bezier(.56,1.19,.2,1.05),border .4s cubic-bezier(.56,1.19,.2,1.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 50px 0 rgba(0,0,0,.15);

    .card__badge {
      background: #333;
      color: #fff;

      &-icon {
        fill: #fff;
      }
      &-value {
      color: #fff;
      }
    }
  }

  &__badge {
    position: absolute;
    right: 20px;
    top: 20px;
    background: #ecf0f1;
    border-radius: 3px;
    padding: 4px 8px;
    cursor: pointer;
    transition: all .4s cubic-bezier(.56,1.19,.2,1.05);

    &-icon {
      width: 14px;
      height: 14px;
      float: left;
      fill: #333;
      transition: all .4s cubic-bezier(.56,1.19,.2,1.05);
    }

    &-value {
      float: left;
      color: #333;
      font-size: 12px;
      margin-top: 2px;
      margin-left: 6px;
      font-weight: 500;
      transition: all .4s cubic-bezier(.56,1.19,.2,1.05);
    }
  }

  &__logo {
    height: 50px;
    float: left;
    object-fit: cover;
  }

  &__title {
    width: 100%;
    float: left;
    font-size: 18px;
    font-weight: 400;
    margin-top: 6px;
  }

  &__link {
    width: 100%;
    float: left;
    margin-top: 4px;

    &-icon {
      width: 14px;
      height: 18px;
      float: left;
      fill: #9b9b9b;
    }

    &-text {
      font-size: 14px;
      float: left;
      margin-left: 6px;
      color: #9b9b9b;
    }
  }

  &__rate {
    width: 100%;
    float: left;
    margin-left: -5px;
    margin-top: 4px;
  }

  &__bottom {
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    border-top: 1px solid #d8d9dd;

    &-item {
      width: 33%;
      float: left;
      text-align: center;
      padding: 8px 0px;
      border-left: 1px solid #d8d9dd;
      cursor: pointer;

      &:nth-child(1) {
        border-left: none;
        width: calc(33% + 2px);
      }

      &:hover {
        background: #f1f1f1;
        // color: #fff;
      }

      .card-detail-title {
        width: 100%;
        float: left;
        font-size: 12px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
