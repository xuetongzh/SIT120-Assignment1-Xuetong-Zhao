new window.Vue({
  el: '#app',
  data: {
    isAddingSchedule: false,
    createForm: {
      date: undefined,
      startTime: undefined,
      endTime: undefined,
      content: undefined,
    },
    searchForm: {
      date: undefined,
      content: undefined,
    },
    list: [
      {
        date: '2021-08-05',
        startTime: '09:00',
        endTime: '10:00',
        content: 'Go to breakfast',
      },
      {
        date: '2021-08-06',
        startTime: '12:00',
        endTime: '13:00',
        content: 'Go to lunch',
      },
    ],
  },
  computed: {
    searchedList() {
      let list = this.list;
      if (this.searchForm.date) {
        list = list.filter((it) => it.date === this.searchForm.date);
      }
      if (this.searchForm.content) {
        list = list.filter((it) =>
          it.content.includes(this.searchForm.content)
        );
      }
      return list;
    },
  },
  methods: {
    clickAddScheduleBtn() {
      this.isAddingSchedule = true;
    },
    clickCancelBtn() {
      this.isAddingSchedule = false;
    },
    clickConfirmBtn() {
      this.isAddingSchedule = false;
      const { date, startTime, endTime, content } = this.createForm;
      if (!date || !startTime || !endTime || !content) {
        window.alert('Please fill in all fields.');
      }
      this.list.push({
        date,
        startTime,
        endTime,
        content,
      });
    },
    deleteItem(index) {
      this.list.splice(index, 1);
    },
  },
});
