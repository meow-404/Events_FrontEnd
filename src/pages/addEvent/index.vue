<template>
  <div>
    <!--<calculator></calculator>-->
    <div class="title">发布活动</div>
    <div class="eventForm">
      <van-field :value="name" required clearable show-action label="活动名称" placeholder="请输入活动名称" @blur="onblur"/>
      <div class="dateSelector">
        <div class="date">
          <van-cell title="活动开始时间" :value="eventItem.startTime" @click="showPopup" custom-style="width: 100%"/>
          <van-cell title="活动结束时间" :value="eventItem.endTime" @click="showPopup" custom-style="width: 100%"/>
        </div>
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
    </div>
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
        show: false,
        // notPick: false,
        minHour: 10,
        maxHour: 20,
        timePickerValue: new Date().getTime(),
        minDate: new Date().getTime(),
        maxDate: new Date(2025, 1, 1).getTime(),
        currentDate1: new Date().getTime(),
        currentDate2: new Date().getTime(),
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
        },
        eventItem: {
          name: '',
          startTime: '',
          endTime: '',
        }
      }
    },

    methods: {
      submit() {
        console.log(this.eventItem)
      },

      onblur(e) {
        if (e.mp.detail.value === '') {
          wx.showToast({
            title: '还没输入活动名称呢！',
            icon: 'none',
            duration: 2000
          })
        } else {
          console.log(e.mp.detail.value)
          this.eventItem.name = e.mp.detail.value
        }
      },

      showPopup() {
        this.show = true
      },

      onClose() {
        this.show = false
      },

      /**
       * 确认活动开始时间
       * @param e
       */
      onConfirm(e) {
        console.log('Pick a start date')
        console.log(e)
        this.currentDate1 = e.mp.detail
        //console.log(this.formatDate(this.currentDate))
        this.eventItem.startTime = this.formatDate(this.currentDate2)
        this.eventItem.endTime = this.formatDate(this.currentDate1)
        this.show = false
      },

      /**
       * 确认活动结束时间
       * @param e
       */
      onConfirm2(e) {
        console.log('Pick a end date')
        console.log(e)
        this.currentDate2 = e.mp.detail
        //console.log(this.formatDate(this.currentDate))
        this.eventItem.endTime = this.formatDate(this.currentDate2)
        this.show = false
      },

      /**
       * 取消活动开始时间
       */
      onCancel() {
        this.currentDate1 = null;
        this.eventItem.startTime = this.currentDate1
        this.show = false;
      },

      /**
       * 取消活动结束时间
       */
      onCancel2() {
        this.currentDate2 = null;
        this.eventItem.endTime = this.currentDate2
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
  .title {
    text-align: center;
    font-size: 20px;
  }

  .dateSelector {
    display: flex;
    flex-direction: row;
  }

</style>
