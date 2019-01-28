<template>
  <div>
    <card-list v-for="book in books" :key="book.id" :book='book'></card-list>
    <p v-if="!more" class="text-footer">
      没有更多数据
    </p>
  </div>  
</template>

<script>
import { get } from '../../utli.js'
import CardList from '../../components/CardList'
export default {
  components: {
    CardList
  },
  data () {
    return {
      books: [],
      page: 0,
      more: true
    }
  },
  methods: {
    async getList (init) {
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist',{page:this.page})
      console.log(books)
      if(books.list.length<10 && this.page>0) {
        this.more = false
      }

      if(init) {
        this.books = books.list
        wx.stopPullDownRefresh()
      }else{
        this.books = this.books.concat(books.list)
      }
      wx.hideNavigationBarLoading()
    }
  },
  onPullDownRefresh() {
    this.getList(true)
  },
  onReachBottom() {
    if(!this.more) {
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  mounted () {
    this.getList(true)
  }
}
</script>

<style>

</style>
