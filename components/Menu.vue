<template lang="pug">
transition(name="intro")
  .menu
    .menu__items
      Animator(:delay="0")
        nuxt-link.menu__items__link(to="hoge")
          i.material-icons help
          span About
      Animator(:delay="0.1")
        nuxt-link.menu__items__link(to="hoge")
          i.material-icons rule
          span Rule
      Animator(:delay="0.2")
        nuxt-link.menu__items__link(to="hoge")
          i.material-icons groups
          span Member
      Animator(:delay="0.3")
        nuxt-link.menu__items__link(to="hoge")
          i.material-icons construction
          span Creation
      Animator(:delay="0.4")
        a.menu__items__link(href="https://discord.gg/PBR8twj" target="_blank")
          i.material-icons person_add
          span Join
      Animator(:delay="0.5")
        nuxt-link.menu__items__link(to="hoge")
          i.material-icons security
          span Bot
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import Animator from '~/components/Animator.vue'

@Component({
  components: {
    Animator,
  },
})
export default class Intro extends Vue {
  @Provide() isFinished: boolean = false

  mounted() {
    setTimeout(() => {
      this.isFinished = true
    }, 5500)
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

    &__link {
      color: $color-white;
      display: block;
      padding: 5px 20px;
      border: solid 1px $color-white;
      text-align: center;

      i {
        line-height: 30px;
        font-size: 15px;
        margin-right: 5px;
        max-width: 15px;
      }

      span {
        display: inline-block;
        text-transform: uppercase;
        font-size: 9px;
        line-height: 30px;
        font-weight: normal;
        vertical-align: top;
      }
    }
  }
}
</style>
