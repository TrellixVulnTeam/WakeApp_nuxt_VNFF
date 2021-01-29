<template>
  <div>

    <!--    Content-->
    <div class="post">
      <p>{{ post.title }}</p>
      <p>{{ post.descr }}</p>
      <p>{{ post.content }}</p>
    </div>

    <!--    Controls-->
    <div class="post-controls">
        <AppButton
          class="btn link"
          @click="editPost"
        >
          Редактировать
        </AppButton>
        <AppButton
          class="btn delete"
          @click="deletePost(post.id)"
        >
          Удалить
        </AppButton>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletePost (id) {
      return this.$store.dispatch('deletePost', id)
    },
    editPost () {
      this.$router.push(`/${this.post.id}`)
    }
  }
}
</script>

<style lang="scss">
.post {
  > p {
    margin-bottom: 10px;
  }
}
.post-controls {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
}
</style>



