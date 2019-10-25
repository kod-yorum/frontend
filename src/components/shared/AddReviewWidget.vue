<template lang="pug">
  .rate-widget
    .rate-widget__item En son çalıştığınız şirketi değerlendirin:
    .rate-widget__item
      button.big-button Değerlendir
</template>

<style lang="scss" scoped>
.rate-widget {
    width: 100%;
    padding: 30px 20px;
    float: left;
    background: #fff;
    border-top: 6px solid #2164f3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__item {
        font-size: 20px;
        font-weight: 600;

        .big-button {
            height: 54px;
            background-color: #2164f3;
            color: #fff;
            padding: 0 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-size: 14px;
            transition: box-shadow .15s ease-in-out;

            &:focus {
                box-shadow: 0 0 0 0.2rem rgba(33,100,243,.5)
            }
        }
    }
}
</style>
