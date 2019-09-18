<template>
    <nav class="navbar" :class="{ 'navbar--colored' : isHeaderColored }">
        <div class="container">
            <div class="fluid align align--space-between">
                <a href="#"></a>
                <div>
                    <a href="#" class="button button--dark">Login</a>
                    <a href="#" class="button button--yellow">Register</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      isHeaderColored: false
    }
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY > 50) {
        this.isHeaderColored = true
      } else {
        this.isHeaderColored = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    position: fixed;
    width: 100%;
    background-color: transparent;
    padding: 50px 1rem;
    z-index: 99;
    -webkit-transition: .2s ease-out;
    transition: .2s ease-out;

    &--colored {
        background: rgba($color: #fff, $alpha: .8);
        padding: 30px 1rem;
    }
}
</style>
