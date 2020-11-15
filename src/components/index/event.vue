<template>
  <div>
    <scroll-view class="event_area" :scroll-y="true" @scrolltolower="scrollToLower" @scroll="scroll">
      <div class="events">
        <div class="events-details" v-for="(event,index) in processedEvents" :key="index" :style="'opacity:' + event.opacity">
          <div class="event-pic">
            <img :src="event.pics"/>
          </div>
          <div class="event-context">
            <div class="event-name">
              <span>{{event.name}}</span>
            </div>
            <div class="event-cate">
              <span>{{event.category}}</span>
            </div>
            <div class="event-city">
              <span>{{event.city}}</span>
            </div>
            <div class="event-btn">
              <button class="btn">收藏</button>
              <button class="btn">详情</button>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        events: [{
          id: "lln232432",
          name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
          category: "Art",
          city: "Newcastle Upon Tyne",
          location: "Tyne Theatre & Opera House",
          address: "Westgate Road, Newcastle Upon Tyne",
          startTime: "2020-12-18T19:00:00.000+00:00",
          endTime: "2020-12-18T20:15:00.000+00:00",
          detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does!Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
          pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
          originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
        },
        {
          id: "lln232433",
          name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
          category: "Art",
          city: "Newcastle Upon Tyne",
          location: "Tyne Theatre & Opera House",
          address: "Westgate Road, Newcastle Upon Tyne",
          startTime: "2020-12-18T19:00:00.000+00:00",
          endTime: "2020-12-18T20:15:00.000+00:00",
          detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does!Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
          pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
          originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
        },
        {
          id: "lln232434",
          name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
          category: "Art",
          city: "Newcastle Upon Tyne",
          location: "Tyne Theatre & Opera House",
          address: "Westgate Road, Newcastle Upon Tyne",
          startTime: "2020-12-18T19:00:00.000+00:00",
          endTime: "2020-12-18T20:15:00.000+00:00",
          detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does! Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
          pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
          originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
        },
        {
            id: "lln232434",
            name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
            category: "Art",
            city: "Newcastle Upon Tyne",
            location: "Tyne Theatre & Opera House",
            address: "Westgate Road, Newcastle Upon Tyne",
            startTime: "2020-12-18T19:00:00.000+00:00",
            endTime: "2020-12-18T20:15:00.000+00:00",
            detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does! Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
            pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
            originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
          },
        {
            id: "lln232434",
            name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
            category: "Art",
            city: "Newcastle Upon Tyne",
            location: "Tyne Theatre & Opera House",
            address: "Westgate Road, Newcastle Upon Tyne",
            startTime: "2020-12-18T19:00:00.000+00:00",
            endTime: "2020-12-18T20:15:00.000+00:00",
            detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does! Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
            pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
            originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
          },
        {
            id: "lln232434",
            name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
            category: "Art",
            city: "Newcastle Upon Tyne",
            location: "Tyne Theatre & Opera House",
            address: "Westgate Road, Newcastle Upon Tyne",
            startTime: "2020-12-18T19:00:00.000+00:00",
            endTime: "2020-12-18T20:15:00.000+00:00",
            detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does! Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
            pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
            originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
          },
        {
            id: "lln232434",
            name: "Jack and the Beanstalk: A Socially Distanced Pantomime",
            category: "Art",
            city: "Newcastle Upon Tyne",
            location: "Tyne Theatre & Opera House",
            address: "Westgate Road, Newcastle Upon Tyne",
            startTime: "2020-12-18T19:00:00.000+00:00",
            endTime: "2020-12-18T20:15:00.000+00:00",
            detail: "Does the Tyne Theatre have a pantomime this Christmas?… Oh yes it does! Climb up our socially distanced Beanstalk this December with a GIANT of a show starring the hilarious Charlie Richmond as Simple Simon and a cast of some of the North East’s best panto talent.This year’s production is a specially designed 75 minute, socially distanced, rib-tickling festive treat for all the family, with a reduced capacity and no interval to minimise crowding.Join dotty Dame Trott and her family as they are tricked into selling their beloved cow Daisy for a useless bag of beans. Laugh at silly Simple Simon and cheer-on our hero Jack as he tries to rescue his sweetheart Jill from the nasty Giant’s castle in the sky.We only have a very limited number of tickets for this year’s panto, so if you want to join in the fun and laughter this Christmas at the Tyne Theatre & Opera House book early to avoid disappointment.Fee Fi Fo Fum… It’s panto fun for everyone!For booking & safety information, please see our website: http://bit.ly/TTbeanstalk",
            pics: "https://thirdwx.qlogo.cn/mmopen/vi_32/pv6oGv8kico72icS59fY6Z2icaqna7Wu9GEEGkr25EN0GX2gned25zf6DCpQQPStCcOCJTAuOrZKicngExjB0RtT2A/132",
            originalLink: "https://www.facebook.com/events/3726572010695855/?acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D"
          }],

        processedEvents: []

      }
    },

    mounted() {
      this.processedEventsInfo()
    },

    methods: {
      processedEventsInfo() {
        for (let i = 0; i < this.events.length; i++) {
          let newEvent = {}
          newEvent.opacity = 1
          for (let attr in this.events[i]) {
            newEvent[attr] = this.events[i][attr]
          }
          this.processedEvents.push(newEvent)
        }
      },

      // 下滑效果
      // existStyle(position) {
      //   const index = Math.floor(position/80)
      //   const opacity = position/80 - index
      //   // 刷过后透明
      //   for (let i = 0; i < index + 2; i++) {
      //     if (i === index) {
      //       this.processedEvents[i].opacity = 1 - opacity
      //     } else {
      //       this.processedEvents[i].opacity = 1
      //     }
      //   }
      // },

      scrollToLower() {
        console.log("lowest")
      },

      scroll(e) {
        // this.existStyle(e.target.scrollTop)
        console.log(Math.floor(e.target.scrollTop / 80))
      }
    }
  }
</script>

<style lang="scss">
  .event_area {
    height: 100vh;
  }
  .events {
    width: 95%;
    margin: auto;
    .events-details {
      box-shadow:0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
      border-radius: 4px;
      color: #322f3b;
      font-weight: lighter;
      margin: auto auto 5px;
      display: flex;
      flex-direction: row;
      // height: 120px;
      height: auto;
      transition: width 0.2s;
      .event-pic {
        margin: auto 5px 5px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 4px;
        }
      }
      .event-context {
        margin-left: 5px;
        margin-top: 6px;
        margin-right: 5px;
        .event-name {
          background-color: #F5A362;
          width: auto;
          height: auto;
          border-radius: 4px;
          padding: 3px;
          font-weight: bolder;
          font-family: "Lucida Grande";
          margin-top: 2px;
        }
        .event-cate {
          background-color: #f4d35e;
          width: auto;
          height: auto;
          border-radius: 4px;
          padding: 3px;
          margin-top: 2px;
          font-family: "Lucida Grande";
        }
        .event-city {
          background-color: #ebebd3;
          width: auto;
          height: auto;
          border-radius: 4px;
          padding: 3px;
          margin-top: 2px;
          font-family: "Lucida Grande";
        }
        .event-btn {
          display: inline-flex;
          float: right;
          margin-top: 3px;
          margin-bottom: 3px;
          .btn {
            height: 20px;
            margin-left: 3px;
            font-size: 13px;
            line-height: 20px; // 文字垂直居中
            background-color: #87CEFA;
          }
        }
        span {
          text-align: left;
        }
      }
    }
  }
</style>
