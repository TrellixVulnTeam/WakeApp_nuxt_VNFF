<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">

      <p class="title dark">Внести изменения</p>

      <!--      Edit post-->
      <PostForm :postEdit="post" @submit="editPost"/>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {API_ENDPOINT} from "~/models/constants/api";
import PostForm from "@/components/Post/PostForm";

export default {
  components: {PostForm},
  validate ({params, store}) {
    return store.state.postsLoaded.findIndex(b => b.id === params.id) > -1;
  },
  async asyncData (context) {
    // Loading this post
    const res = await axios.get(`${API_ENDPOINT}/posts/${context.params.id}.json`);
    return { post: {...res.data, id: context.params.id} };
  },
  methods: {
    async editPost (post) {
      await this.$store.dispatch('editPost', post);
      return this.$router.push('/');
    }
  }
}
</script>
