<template>
    <nav class="navbar">
      <div class="container-fluid">
        <a href="#" class="logo">KODYORUM</a>
        <a href="" class="login">Giriş Yap / Kayıt ol</a>
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
  line-height: 50px;
  float: left;
  display: flex;
  align-items: center;
  transition: .2s ease-out;
  letter-spacing: .1em;
}
.login {
  height: 50px;
  float: right;
  padding: 0px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #6f6f6f;
  line-height: 50px;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #000;
    border-bottom: 2px solid #2164f3;
  }
}
</style>
