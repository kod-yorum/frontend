<template>
    <nav class="navbar">
      <div class="container-fluid">
        <a href="#" class="logo">KODYORUM</a>
      </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  position: fixed;
  background-color: transparent;
  height: 50px;
  z-index: 99;
  transition: .2s ease-out;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
}
.logo {
  color: #1a1e21;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  float: left;
  display: flex;
  align-items: center;
  transition: .2s ease-out;
  letter-spacing: .1em;
}
</style>
