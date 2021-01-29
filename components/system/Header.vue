<template>
    <header>
      <div class="navbar">
        <div class="container navbar-container">
          <div class="navbar-content">
            <nuxt-link to="/" class="title">WakeApp_Nuxt</nuxt-link>
            <AppButton  @click="refresh">Обновить</AppButton>
          </div>
        </div>
      </div>
    </header>

</template>


<script>
export default {
  methods: {
    // Testing preloader
    refresh () {
      this.$store.dispatch('setLoading', true)
      setTimeout(() => {
        this.$store.dispatch('loadPost')
      }, 1800)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 10px 0;
  height: 60px;
  background: #606266;
  display: flex;
  align-items: center;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
