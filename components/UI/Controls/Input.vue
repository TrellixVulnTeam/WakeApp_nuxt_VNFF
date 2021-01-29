<template>
  <div class="control">
    <input class="input"
      v-bind="$attrs"
      :value="value"
      :type="type"
      :required="required"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="scss">
.control {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.input {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 12px;
  min-width: 300px;
}
</style>
