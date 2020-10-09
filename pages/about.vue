<template lang="pug">
.about
  .about__message
    h3.about__message__title Anchor.
    p.about__message__text 数々の思考や技術、作り手のこだわりが詰まった私達の創作物。
      br
      | 同じ創作を嗜む仲間たちと静かに作業したり、時に見せ合い、フィードバックをもらったり。
    p.about__message__text 同じ「創作」でも、仲間と作業をすれば普段とは違う成果が生まれたり、いつもは見ることのない世界に触れられることがあるかもしれません。
    p.about__message__text 創作をこよなく愛するあなたに、敬意をこめて。
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class AboutPage extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  background-color: $color-pureblack;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;

  &__message {
    max-width: 600px;
    padding: 30px 20px;
    border: solid 1px $color-white;

    &__title {
      font-size: 12px;
      letter-spacing: 3px;
      font-weight: bold;
      margin-bottom: 40px;
      text-transform: uppercase;
    }

    &__text {
      font-size: 10px;
      font-weight: normal;
      line-height: 30px;
      margin-bottom: 30px;

      &:last-of-type {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
