<template lang="pug">
.top
  Intro(v-if="!isIntroShown")
  Menu(v-if="isIntroShown")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Getter } from 'vuex-class'
import Intro from '~/components/Intro.vue'
import Menu from '~/components/Menu.vue'

@Component({
  components: {
    Intro,
    Menu,
  },
})
export default class IndexPage extends Vue {
  @Getter('intro/isIntroShown') isIntroShown!: boolean
}
</script>

<style lang="scss">
.top {
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  background-color: $color-pureblack;
}

.scene-enter-active,
.scene-leave-active {
  transition: opacity 0.5s ease;
}

.scene-enter,
.scene-leave-active {
  opacity: 0;
}
</style>
