<template lang="pug">
transition(name="intro")
  .intro(v-if="!isFinished")
    section.intro__intro
      .intro__logo
        p.intro__logo__title Anchor
        p.intro__logo__subtitle アンカー

      .intro__moon-white
      .intro__moon-black
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'

@Component({})
export default class Intro extends Vue {
  @Mutation('intro/introFinished') introFinished!: () => void
  @Provide() isFinished: boolean = false

  mounted() {
    setTimeout(() => {
      this.isFinished = true
      this.introFinished()
    }, 5500)
  }
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);

  &__intro {
    opacity: 0;
    animation: appear 1s 1s ease forwards, disappear 1s 5s ease forwards;
  }

  &__logo {
    position: relative;
    padding: 20px;
    z-index: 5;

    @mixin title {
      color: $color-white;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    &__title {
      @include title;

      letter-spacing: 5px;
      font-size: 20px;
    }

    &__subtitle {
      @include title;

      letter-spacing: 3px;
      font-size: 12px;
      text-align: right;
    }
  }

  &__moon {
    @mixin moon {
      position: absolute;
      left: calc(50% - 100px);
      top: calc(50% - 100px);
      height: 200px;
      width: 200px;
      border-radius: 100%;
      z-index: 3;
    }

    &-white {
      @include moon;

      background-color: $color-white;
    }

    &-black {
      @include moon;

      background-color: $color-pureblack;
      transform: translate(215px, -215px) scale(0.95);
      animation: equinox 2.5s 1.5s ease-out forwards;

      @keyframes equinox {
        from {
          transform: translate(215px, -215px) scale(0.95);
        }

        to {
          transform: translate(15px, -15px) scale(0.95);
        }
      }
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      pointer-events: none;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes disappear {
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
    }
  }
}

.intro-enter-active,
.intro-leave-active {
  transition: opacity 0.5s ease;
}

.intro-enter,
.intro-leave-active {
  opacity: 0;
}
</style>
