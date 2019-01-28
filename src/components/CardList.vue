<template>
  <div class="book-card">
    <div class="thumb">
      <img mode='aspectFit' :src="book.image" class="img">
    </div>
    <div class="detail">
      <div class="row">
        <div class="right text-primary">
          {{book.rate}} <rate :value='book.rate'></rate>
        </div>
        <div class="left text-primary">
          {{book.title}}
        </div>
      </div>

      <div class="row">
        <div class="right">
          浏览量
        </div>
        <div class="left">
          {{book.author}}
        </div>
      </div>

      <div class="row">
        <div class="right">
          {{book.user_info.nickName}}
        </div>
        <div class="left">
          {{book.publish}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from './Rate'
export default {
  name: 'CardList',
  components: {
    Rate
  },
  props:['book']
}
</script>

<style lang="stylus" scoped>
.book-card
  padding 5rpx
  overflow hidden
  margin-top 5rpx
  margin-bottom 5rpx
  font-size 14px
  .thumb
    width 90rpx
    height 90rpx
    float left
    margin 0 auto
    overflow hidden
    .img 
      max-width 100%
      max-height 100%
  .detail
    margin-left 100px
    .row
      line-height 20px
      margin-bottom 3px
    .right
      float right 
    .left
      margin-right 80px
</style>
