<template lang="pug">
  .footer
    p.copyright
      a.icon(href="https://github.com/intkaaa/colllor", target="_blank", rel="noopener") #[img(src="/icon-github.svg", alt="GitHub")]
      span.dot
      span.text Made by 
      a.profile(href="https://higr.jp", target="_blank", rel="noopener") intkaaa
</template>

<style lang="stylus">
.footer
  display flex
  justify-content center
  align-items center
  position absolute
  bottom 0
  left 0
  width 100%
  height 70px
  padding 0 32px

  .copyright
    display flex
    align-items center
    color rgba(white, .7)

    .icon
      display block
      width 20px
      height 20px
      img
        width 100%
        height auto

    .dot
      width 4px
      height 4px
      margin 0 12px
      border-radius 2px
      background-color rgba(white, .7)

    .text
      position relative
      top 1px

    .profile
      position relative
      top 1px
      margin-left 6px
      color rgba(white, .7)
      text-decoration underline
</style>
