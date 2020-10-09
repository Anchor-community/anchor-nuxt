<template lang="pug">
.rule
  .rule__message
    h3.rule__message__title Rules
    p.rule__message__text アンカーでは、クリエイターの皆様に安心して創作していただけるように以下のルールの遵守をお願いしております。
    ul
      li.rule__message__list 他の人が不快になる内容を投稿・発言しないこと。
      li.rule__message__list 他の人の作業を意図的に妨害しないこと。
      li.rule__message__list 集中チャンネルで煩わしい音を出さないこと。
      li.rule__message__list 他のクリエイター職を尊重すること。
      li.rule__message__list サーバー内でゲームをしないこと。(ミュートお願いします。)
    p.rule__message__text 以上のルールを守って頂けない場合や、他の方々に迷惑となる事案が発生した場合、注意させていたいたり、退会して頂くこともございます。
    p.rule__message__text どうかご理解よろしくお願い致します。
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class AboutPage extends Vue {}
</script>

<style lang="scss" scoped>
.rule {
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  background-color: $color-pureblack;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;

  &__message {
    width: 600px;
    padding: 30px 20px;
    border: solid 1px $color-white;

    @media screen and (max-width: $width-tablet-small) {
      max-width: 600px;
    }

    &__title {
      font-size: 12px;
      letter-spacing: 3px;
      font-weight: bold;
      margin-bottom: 40px;
      text-transform: uppercase;
    }

    &__text {
      display: block;
      font-size: 10px;
      font-weight: normal;
      line-height: 30px;
      margin-bottom: 30px;

      &:last-of-type {
        margin-bottom: 10px;
      }
    }

    &__list {
      display: block;
      font-size: 10px;
      font-weight: normal;
      line-height: 30px;
      margin-bottom: 10px;

      &:last-of-type {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
