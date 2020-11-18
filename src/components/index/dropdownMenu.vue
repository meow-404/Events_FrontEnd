<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item :value="value1" :options="option1" />
      <van-dropdown-item :value="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        option1: [
          { text: '全部种类', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '全部城市', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
        value1: 0,
        value2: "a",
      }
    },

    methods: {
      // onChange(e) {
      //   debugger
      //   console.log("hello")
      //   console.log(e)
      // },
    }
  }
</script>

<style lang="scss">

</style>
