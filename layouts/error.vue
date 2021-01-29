<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
    <h1 v-if="error.statusCode === 404" class="title dark">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/" class="btn delete">
      Главная страница
    </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h1 {
  /*font-size: 20px;*/
  margin-bottom: 20px;
}
</style>
