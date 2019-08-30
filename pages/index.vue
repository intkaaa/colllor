<template lang="pug">
  .container
    Header

    .search
      .wrap
        input.input(placeholder="SEARCH COLLLOR!", ref="input", v-model="search" onclick="this.select(0,this.value.length)")
        //- .clear(@click="clear()")
      //- p.colorcode {{ color.code }}
      .palette(:class="search.length < 2 ? [] : ['visible']")
        ul.lists
          li.list(
            v-for="color in filteredColor"
            :key="color.name"
            :style="'backgroundColor: ' + color.code"
            @mouseover="mouseOver"
            :data-clipboard-text="color.code"
            :data-name="color.name"
          )
            //- img.copy(src="/icon-copy-white.svg", alt="copy")

    Footer
</template>

<script>
import ClipboardJS from 'clipboard'
import Data from '~/data/colors.json'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      colors: Data,
      search: '',
      activeItem: ''
    }
  },

  computed: {
    filteredColor() {
      let colors = []
      for (let i in this.colors) {
        let color = this.colors[i]
        if (color.name.indexOf(this.search) !== -1) {
          colors.push(color)
        }
      }
      return colors
    }
  },

  mounted() {
    // window adjust
    const viewportUnitsBuggyfill = require('viewport-units-buggyfill')
    viewportUnitsBuggyfill.init()

    // background
    // if (this.$refs.input.value.length < 1) {
    //   document.body.style.backgroundColor = 'white'
    // }

    // cripboard
    const clipboard = new ClipboardJS('.list')
    const btns = document.querySelectorAll('.list')
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseleave', clearTooltip)
    }
    function clearTooltip(e) {
      e.currentTarget.setAttribute('class', 'list')
    }
    function showTooltip(elem) {
      elem.setAttribute('class', 'list tooltip')
    }
    clipboard.on('success', function(e) {
      showTooltip(e.trigger)
    })
  },

  methods: {
    findBy(list, value) {
      return list.filter(function(color) {
        return color.name == value || value === ''
      })
    },

    mouseOver(e) {
      let bgColor = window.getComputedStyle(e.target, '').backgroundColor
      document.body.style.backgroundColor = bgColor

      let name = e.target.dataset.name
      // console.log(name)
      this.$refs.input.value = name
    }
  }
}
</script>

<style lang="stylus">
  .container
    display flex
    justify-content center
    align-items center
    width 100%
    height 100vh

  .search
    width 100%
    padding 0 16px
    +sp()
      padding 0

  .wrap
    position relative
    padding-top 40px
    +sp()
      padding 40px 16px 0

  .input
    appearance none
    border none
    display block
    position relative
    width 700px
    margin auto
    padding 20px 16px 16px
    color white
    font-family 'GothamRounded', sans-serif
    font-size 5rem
    text-align center
    text-transform uppercase
    line-height normal
    letter-spacing 0.32rem
    border-radius 12px
    background-color rgba(black, 0.26)
    +sp()
      width 100%
      font-size 2.4rem
      letter-spacing 0.16rem
    &::placeholder
      color white
      transition 0.3s
    &:focus
      outline 0
      &::placeholder
        color rgba(white, 0.3)

  // .clear
  //   visibility hidden
  //   position absolute
  //   top 0
  //   bottom 0
  //   right 12px
  //   width 20px
  //   height 20px
  //   margin auto
  //   border-radius 10px
  //   background-color rgba(white, 0.7)
  //   &::before
  //   &::after
  //     content ''
  //     display block
  //     position absolute
  //     top 0
  //     bottom 0
  //     left 0
  //     right 0
  //     width 12px
  //     height 2px
  //     margin auto
  //     border-radius 2px
  //     background-color gray
  //   &::before
  //     transform rotate(45deg)
  //   &::after
  //     transform rotate(-45deg)

  .colorcode
    display block
    margin-top 24px
    font-size 3.2rem
    text-align center
    color rgba(black, 0.26)
    +sp()
      margin-top 18px
      font-size 2.2rem

  .palette
    visibility hidden
    display flex
    justify-content center
    &.visible
      visibility visible

  .lists
    overflow-x auto
    white-space nowrap
    -webkit-overflow-scrolling touch
    padding-top 30px
    +sp()
      padding 18px 8px 0

  .list
    display inline-block
    position relative
    width 44px
    height 44px
    margin 10px
    border 2px solid rgba(black, 0.12)
    border-radius 22px
    cursor pointer
    +sp()
      width 32px
      height 32px
      margin 8px
    // &:hover
    //   .copy
    //     visibility visible

  .copy
    display none
    // visibility hidden
    // position relative
    // top -1px
    // width 18px
    // height 18px
    // opacity 0.7
    // transition 0.6s

  .tooltip::after
    content 'Copied!'
    display flex
    justify-content center
    align-items center
    position absolute
    top -30px
    left 50%
    width 64px
    height 30px
    margin auto
    font-size 1.2rem
    letter-spacing 0.08rem
    color white
    border-radius 0.4rem
    transform translate(-50%, 0)
    animation fade-tooltip .5s 1s 1 forwards
    background-color rgba(black, 0.54)
    +sp()
      top -26px
      height 20px
      font-size 1rem

  /* Animation */
  @keyframes fade-tooltip
    to opacity 0 
</style>
