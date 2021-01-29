<template>
  <form class="form" @submit.prevent="onSubmit">

    <!--    Inputs-->
    <AppInput
      v-model="post.title"
      placeholder="Title"
    />
    <AppInput
      v-model="post.descr"
      placeholder="Description"
    />
    <AppInput
      v-model="post.content"
      placeholder="Content"
    />

    <!--        buttons-->
    <div class="controls">
      <AppButton>Сохранить</AppButton>
      <AppButton
        v-if="postEdit"
        btn-class="link"
        @click="cancel"
      >Назад</AppButton>
    </div>

  </form>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      post: this.postEdit ? {...this.postEdit} : {
        title: '',
        descr: '',
        content: ''
      }
    }
  },
  methods: {
    cancel () {
      this.$router.push('/')
    },
    onSubmit () {
      this.$emit('submit', {...this.post})

      // Reset
      if (!this.postEdit) {
        this.post.title = ''
        this.post.descr = ''
        this.post.content = ''
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.controls {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
</style>
