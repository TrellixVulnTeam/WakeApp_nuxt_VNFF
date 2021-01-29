<template>
  <div>

    <!--    Search & Select-->
    <div class="wrapper__controls">
      <Search
        :value="search"
        placeholder="Поиск по названию..."
        @search="search = $event"
      />

      <AppSelect @sort="sort"/>
    </div>


    <!--    List-->
    <ul class="post-list" v-if="!getLoading && !getError">
      <li v-for="post in reposSort" :key="post.id" class="post-item">
        <Post :post="post"/>
      </li>
    </ul>


    <!--     preloader-->
    <div class="preload" v-if="getLoading">
      <preloader :width="90" :height="90"/>
    </div>


    <!--      Error-->
    <div class="error" v-if="getError || error">
      <p class="title err">{{ getError || error }}</p>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Post from "~/components/Post/Post";
import Search from "@/components/UI/Search";

export default {
  components: {Search, Post},
  data () {
    return {
      error: null,
      search: '',
      currentSort: 'title',
      currentSortDir: 'desc'
    }
  },
  computed: {
    ...mapGetters(['getPostsLoaded', 'getLoading', 'getError']),

    // Filter
    notesFilter () {

      let array = this.getPostsLoaded,
        search = this.search

      if (!search) {
        this.error = null
        return array
      }

      // Small
      search = search.trim().toLowerCase()

      // Filter
      array = array.filter( (item) => {
        if (item.title.toLowerCase().indexOf(search) !== -1) return item
      });

      // Error
      if (array.length <= 0) this.error = `${this.search} не найдено`


      return array
    },

    // Sort by select
    reposSort () {
      return this.notesFilter.slice().sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1;
        // const aStr = a[this.currentSort].toLowerCase();
        // const bStr = b[this.currentSort].toLowerCase();
        const Str = i => i[this.currentSort].toLowerCase()
        // if (aStr < bStr) return -1 * mod
        // if (aStr > bStr) return 1 * mod
        if (Str(a) < Str(b)) return -1 * mod
        if (Str(a) > Str(b)) return 1 * mod
        return 0
      })
    }
  },
  methods: {
    // Sorting order
    sort (e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    }
  }
}
</script>


<style lang="scss">
.wrapper__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  @include mq(table, min) {
    flex-direction: row;
  }
}

.post-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

}
.post-item {
  width: 100%;
  padding: 1em;
  margin: 1em 0;
  @include mq(table, min) {
    padding: 2em 3em;
  }
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(0,0,0,.1);
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  &:hover {
    box-shadow: 0 16px 16px rgba(0,0,0,.02);
    transform: translate(0,-3px);
    transition-delay: 0s !important;
  }
}
.error {
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
