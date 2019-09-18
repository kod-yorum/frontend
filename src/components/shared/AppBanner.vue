<template>
    <div class="banner align align--horizontal-center align--vertical-center" style="background: url(https://kommunity.com/img/covers/hero-1@2x.jpg) center center / cover rgb(221, 221, 221);">
        <div class="col-lg-6 col-md-8 heroic">
            <h1>Connecting Companies</h1>
            <p>Explore communities that share your passion with millions of people</p>
            <div class="fluid align align--horizontal-center">
                <a href="#" class="button button--yellow">Get Started</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 650px;
    float: left;
    position: relative;

    &:before {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    }

    .heroic {
        > h1 {
            text-align: center;
            font-size: 54px;
            font-weight: 800;
            line-height: 1.17;
            color: #fff;
            margin: 0;
        }

        > p {
            text-align: center;
            margin-top: 15px;
            margin-bottom: 30px;
            color: #fff;
            font-size: 18px;
            line-height: 1.73;
            font-weight: 300;
        }
    }
}
</style>
