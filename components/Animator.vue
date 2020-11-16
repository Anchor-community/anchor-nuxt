<template lang="pug">
.animator(:class="{'active': isActive}")
  .animator__panel-1(v-if="!isCompleted")
  .animator__panel-2(v-if="!isCompleted")
  .animator__panel-3(v-if="!isCompleted")
  transition(name="panel")
    .animator__panel-4(v-if="!isCompleted")
  transition(name="panel")
    .animator__content(:class="{'shown': isCompleted}")
      slot
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Animator extends Vue {
  @Prop() delay?: number

  @Provide() isActive: boolean = false
  @Provide() isCompleted: boolean = false

  mounted() {
    setTimeout(() => {
      this.isActive = true
    }, (this.delay ?? 0) * 1000)

    setTimeout(() => {
      this.isCompleted = true
    }, (this.delay ?? 0) * 1000 + 1800)
  }
}
</script>

<style lang="scss" scoped>
.animator {
  position: relative;

  &__panel {
    &-1,
    &-2,
    &-3 {
      position: absolute;
      height: 100%;
      width: 0;
      left: 0;
      top: 0;
    }

    &-1 {
      background-color: $color-black;
    }

    &-2 {
      background-color: $color-gray;
    }

    &-3 {
      background-color: $color-white;
    }

    &-4 {
      position: absolute;
      left: 1px;
      top: 1px;
      height: calc(100% - 2px);
      width: calc(100% - 2px);
      transform: scale(0);
      background-color: $color-pureblack;
    }

    @keyframes slide-in {
      from {
        width: 0;
        height: 100%;
      }

      to {
        height: 100%;
        width: 100%;
      }
    }

    @keyframes scale-in {
      0% {
        transform: scale(0);
      }

      to {
        transform: scale(1);
      }
    }
  }

  &.active {
    .animator__panel {
      &-1 {
        animation: slide-in 0.5s 0.2s forwards ease;
      }

      &-2 {
        animation: slide-in 0.5s 0.4s forwards ease;
      }

      &-3 {
        animation: slide-in 0.5s 0.6s forwards ease;
      }

      &-4 {
        animation: scale-in 0.5s 1.1s forwards ease;
      }
    }
  }

  &__content {
    opacity: 0;

    &.shown {
      opacity: 1;
    }
  }
}

.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.5s ease;
}

.panel-enter,
.panel-leave-active {
  opacity: 0;
  pointer-events: none;
}
</style>
