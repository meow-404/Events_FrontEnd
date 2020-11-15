<template>
  <div>
    <calculator></calculator>
    <div class="dateSelector">
      <van-cell title="选择时间" :value="date" @click="showPopup" custom-style="width: 100%"/>
      <van-popup
        :show="show"
        round
        position="bottom"
        custom-style="height: auto"
        @close="onClose"
      >
        <div>
          <van-datetime-picker
             title="时间选择"
             type="datetime"
             :value="timePickerValue"
             :min-date="minDate"
             :max-date="maxDate"
             :formatter="formatter"
             @confirm="onConfirm"
             @cancel="onCancel"
          />
        </div>
      </van-popup>
    </div>

<!--    <van-datetime-picker v-if="notPick"-->
<!--      title="时间"-->
<!--      type="datetime"-->
<!--      :value="timePickerValue"-->
<!--      :min-date="minDate"-->
<!--      :max-date="maxDate"-->
<!--      :formatter="formatter"-->
<!--      @confirm="onConfirm"-->
<!--      @cancel="onCancel"-->
<!--    />-->
    <button @click="submit">123</button>
  </div>
</template>

<script>
  import calculator from "../../components/add/calculator";

  export default {
    components: {
      calculator
    },

    data() {
      return {
        date: '',
        show: false,
        // notPick: false,
        minHour: 10,
        maxHour: 20,
        timePickerValue: new Date().getTime(),
        minDate: new Date().getTime(),
        maxDate: new Date(2025, 1, 1).getTime(),
        currentDate: new Date().getTime(),
        formatter(type, value) {
          if (type === 'year') {
            return `${value}年`;
          } else if (type === 'month') {
            return `${value}月`;
          } else if (type === 'day') {
            return `${value}日`;
          } else if (type === 'hour') {
            return `${value}时`;
          } else if (type === 'minute') {
            return `${value}分`;
          }
          return value;
        }
      }
    },

    methods: {
      submit() {
        console.log(this.date)
      },

      showPopup() {
        this.show = true
      },

      onClose() {
        this.show = false
      },

      onConfirm(e) {
        console.log('Pick a date')
        console.log(e)
        this.currentDate = e.mp.detail
        //console.log(this.formatDate(this.currentDate))
        this.date = this.formatDate(this.currentDate)
        this.show = false
      },

      onCancel() {
        this.currentDate = null;
        console.log(this.currentDate)
        this.date = this.currentDate
        this.show = false;
      },

      formatDate(date) {
        let newDate = new Date(date)
        let year = newDate.getUTCFullYear()
        let month = newDate.getMonth() + 1
        let day = newDate.getDate();
        let hour = newDate.getHours()
        let minute = newDate.getMinutes()
        month = month > 9 ? month : '0' + month
        day = day > 9 ? day : '0' + day
        hour = hour > 9 ? hour : '0' + hour
        minute = minute > 9 ? minute : '0' + minute
        return year+"-"+month+"-"+day+" "+hour+":"+minute;
      },

    }
  }

</script>

<style lang="scss">
  .dateSelector{
    display: flex;
    flex-direction: row;
  }

</style>
