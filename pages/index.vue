<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">

      <!--     new post-->
      <p class="title dark">Добавить запись</p>
      <PostForm @submit="onSubmit"/>


      <!--     content-->
      <div class="post-content">
        <p class="title dark">Список записей</p>
        <PostList />
      </div>


    </div>
  </div>
</template>

<script>
// UI
import preloader from '@/components/UI/Preloader'
import PostList from "~/components/Post/PostList";
import PostForm from "@/components/Post/PostForm";

export default {
  components: {PostForm, PostList, preloader },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('addPost', post)
    }
  }
}
</script>

<style lang="scss">
  .post-content {
    margin-top: 4em;
  }
  .preload {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 30vh;
  }
</style>
