<template lang="pug">
  .header
    h1.logo #[nuxt-link(to="/") colllor.io]
    //- .admin
    //-   a(href="") SIGN UP
</template>

<style lang="stylus">
.header
  display flex
  // justify-content space-between
  justify-content center
  align-items center
  position absolute
  top 0
  left 0
  width 100%
  height 120px
  padding 0 32px
  +sp()
    height 100px
    padding 0 16px

  .logo
    a
      color white
      font-size 3.2rem
      letter-spacing 0.08rem
      +sp()
        font-size 2.8rem
        letter-spacing 0

  .admin
    a
      color white
      letter-spacing 0.08rem
</style>
