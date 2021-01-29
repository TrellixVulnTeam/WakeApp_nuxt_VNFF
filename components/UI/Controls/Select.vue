<template>
  <div class="wrapper__filter">

    <!--    Select filter-->
  <div class="filter">
    <p class="filter-text"
       @click="visibleOptions = !visibleOptions"
    >Сортировать по: {{ selected }} <span class="arrow"/>
    </p>

    <!--    Options-->
    <div class="options"
         v-if="visibleOptions"
    >
     <p v-for="option in options"
           :key="option.value"
        @click="selectOptions(option)"
     >
      {{option.prefix}} {{option.name }}
     </p>
    </div>

  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        { prefix: 'По', name: 'названию', value: 'title'},
        { prefix: 'По', name: 'id', value: 'id'}
      ],
      visibleOptions: false,
      selected: 'названию'
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.hideSelect)
  },
  methods: {
    selectOptions (option) {
      this.selected = option.name
      this.$emit('sort', option.value)
      this.visibleOptions = false
    },
    hideSelect () {
      this.visibleOptions = false
    }
  }
}
</script>


<style lang="scss" scoped>
.filter-text {
  text-align: center;
  color: $black-color;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 18px;
}
.wrapper__filter {
  display: flex;
  justify-content: flex-end;
}
.filter {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  width: 300px;
  cursor: pointer;
  @include mq(table, min) {
    justify-content: flex-end;
  }
  .options {
    z-index: 2;
    margin-top: 20px;
    position: absolute;
    top: 20px;
    right: 0;
    width: 160px;
    height: auto;
    background: $default-color;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    p {
      padding: 8px 8px 8px 15px;
      text-align: left;
      color: $black-color;
      &:hover {
        background: #F8F8F8;
      }
    }
  }
}
.arrow {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: gray;
  border-bottom: 0;
  display: inline-block;
  margin: 3px;
}
</style>
