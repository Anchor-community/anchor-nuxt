<template lang="pug">
.global-animator(:class="{'active': isInPageTransition}")
  .global-animator__panel-1
  .global-animator__panel-2
  .global-animator__panel-3
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { Getter, Mutation } from 'vuex-class'

@Component({})
export default class GlobalAnimator extends Vue {
  @Getter('page-transition/isInPageTransition') isInPageTransition!: boolean
  @Mutation('page-transition/finishPageTransition')
  finishPageTransition!: () => void

  @Watch('isInPageTransition')
  startTimer(newValue: boolean) {
    if (!newValue) return

    setTimeout(() => {
      this.finishPageTransition()
    }, 2400)
  }
}
</script>

<style lang="scss" scoped>
.global-animator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  pointer-events: none;

  &__panel {
    &-1,
    &-2,
    &-3 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translate(-125%) skewY(15deg);
      will-change: transform;
    }

    &-1 {
      background-color: $color-black;
    }

    &-2 {
      background-color: $color-darkgray;
    }

    &-3 {
      background-color: $color-gray;
    }

    @keyframes slide {
      from {
        transform: translateY(-125%) skewY(15deg);
      }

      to {
        transform: translateY(125%) skewY(15deg);
      }
    }
  }

  &.active {
    .global-animator__panel {
      &-1 {
        animation: slide 1.4s 0.2s forwards ease;
      }

      &-2 {
        animation: slide 1.6s 0.4s forwards ease;
      }

      &-3 {
        animation: slide 1.8s 0.6s forwards ease;
      }
    }
  }
}
</style>
