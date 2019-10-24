<template lang="pug">
    .banner.align.align--horizontal-center.align--vertical-center
      .col-lg-8.col-md-8.heroic
        h1 Çalışacak harika yerler bul
        p 18 milyon şirket yorumu keşfedin
          .col-md-10.row
            form
                input.search-input(placeholder="Bir şirket adı girin")
                button.search-button Arama
</template>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 450px;
    float: left;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 440px;
      height: 100%;
      right: 0;
      top: 0;
      bottom: 0;
      background: url('../../assets/image/hero.png');
      background-size: cover;
      background-position: 0px 36px;
      background-repeat: no-repeat;
    }

    .heroic {
        > h1 {
            text-align: left;
            font-size: 44px;
            font-weight: 800;
            line-height: 1.17;
            margin: 0;
        }

        > p {
            text-align: left;
            margin-top: 15px;
            margin-bottom: 30px;
            font-size: 18px;
            line-height: 1.73;
            font-weight: 300;
        }
    }
}

.search-input {
  width: calc(100% - 240px);
  height: 54px;
  float: left;
  border: 2px solid #ccc;
  padding: 0px 27px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:focus {
    border-color: #085ff7;
  }
}
.search-button {
  width: 120px;
  height: 54px;
  float: left;
  background-color: #2164f3;
  color: #fff;
  padding: 0 1.5rem;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-left: -2px;
  cursor: pointer;
}
</style>
