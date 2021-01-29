<template>
  <button class="btn"
          :class="btnClass"
          v-on="$listeners"
          v-bind="$attrs"
  >

    <!--    slot-->
    <slot/>

  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btnPrimary'
    }
  }
}
</script>

<style lang="scss">
.btn {
  padding: 10px;
  background: $success-color;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 400;
  margin: 0 10px;
  color: $default-color;
  &:hover {
    background: $success-hover;
  }
  &.link {
    background: $secondary-color;
    &:hover {
      background: $secondary-hover;
    }
  }
  &.delete {
    background: $danger-color;
    &:hover {
      background: $danger-hover;
    }
  }
  &.default {
    background: $neutral-color;
    &:hover {
      background: $neutral-hover;
    }
  }
}

</style>
