<template lang="pug">
.bot
  .bot__message
    h3.bot__message__title
      i.material-icons security
      | SHIELD BOT
    p.bot__message__text 金城鉄壁、盤石なサーバーを担保するボットです。
      br
      | シームレスな権限付与、荒らし防御であなたの創作環境を護ります。
    p.bot__message__text Made with ♥ and Typescript.
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class AboutPage extends Vue {}
</script>

<style lang="scss" scoped>
.bot {
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
      display: flex;
      align-items: center;
      font-size: 12px;
      letter-spacing: 3px;
      font-weight: bold;
      margin-bottom: 40px;
      text-transform: uppercase;

      i {
        font-size: 20px;
        margin-right: 5px;
      }
    }

    &__text {
      display: block;
      width: 100%;
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
