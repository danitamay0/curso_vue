
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button class="btn btn-info" v-on:click="count++">Me ha pulsado {{ count }} veces.</button>'
  })

