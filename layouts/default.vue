<template lang="pug">
.container
  nuxt
  global-animator
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import GlobalAnimator from '~/components/GlobalAnimator.vue'

@Component({
  components: {
    GlobalAnimator,
  },
})
export default class DefaultLayout extends Vue {
  mounted() {
    let vh = window.innerHeight * 0.01

    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
}
</script>

<style lang="scss">
.container {
  background-color: $color-pureblack;
}
</style>
