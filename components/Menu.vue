<template lang="pug">
transition(name="intro")
  .menu
    .menu__items
      Animator(:delay="0")
        .menu__items__link(@click="transitionWithAnimation('about')")
          i.material-icons help
          span About

      Animator(:delay="0.1")
        .menu__items__link(@click="transitionWithAnimation('rule')")
          i.material-icons rule
          span Rule

      Animator(:delay="0.2")
        .menu__items__link(@click="transitionWithAnimation('foo')")
          i.material-icons groups
          span Member

      Animator(:delay="0.3")
        .menu__items__link(@click="transitionWithAnimation('foo')")
          i.material-icons construction
          span Creation

      Animator(:delay="0.4")
        a.menu__items__link(href="https://discord.gg/PBR8twj" target="_blank")
          i.material-icons person_add
          span Join

      Animator(:delay="0.5")
        .menu__items__link(@click="transitionWithAnimation('foo')")
          i.material-icons security
          span Bot
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'
import Animator from '~/components/Animator.vue'

@Component({
  components: {
    Animator,
  },
})
export default class Intro extends Vue {
  @Mutation('page-transition/startPageTransition')
  startPageTransition!: () => void

  @Provide() isFinished: boolean = false

  mounted() {
    setTimeout(() => {
      this.isFinished = true
    }, 5500)
  }

  transitionWithAnimation(dist: string) {
    this.startPageTransition()
    this.$router.push(dist)
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media screen and (max-width: $width-tablet-small) {
      grid-template-columns: repeat(2, 1fr);
    }

    &__link {
      color: $color-white;
      display: block;
      padding: 5px 20px;
      border: solid 1px $color-white;
      text-align: center;
      transition: filter 0.2s ease;
      background-color: $color-pureblack;
      min-width: 120px;
      user-select: none;
      cursor: pointer;

      i {
        display: inline-block;
        line-height: 30px;
        font-size: 15px;
        margin-right: 5px;
        max-width: 15px;
        filter: invert(0);
        transition: margin-right 0.1s linear;
      }

      span {
        display: inline-block;
        text-transform: uppercase;
        font-size: 9px;
        line-height: 30px;
        font-weight: normal;
        vertical-align: top;
        max-width: 100%;
        transition: 0.3s ease;
        overflow: hidden;
      }

      &:hover {
        span {
          max-width: 0;
        }

        i {
          margin-right: 0;
        }
      }

      &:active {
        filter: invert(1);
      }
    }
  }
}
</style>
