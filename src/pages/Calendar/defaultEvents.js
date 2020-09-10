import moment from 'moment';

const genRand = (from, to) => Math.floor(Math.random() * to + from);

const defaultEvents = [
  {
    id: 0,
    start: moment().toDate(),
    end: moment().add(genRand(2, 4), "days").toDate(),
    title: "Work on all assigned Tickets"
  },
  {
    id: 1,
    start: moment().add(genRand(7, 10), "days").toDate(),
    end: moment().add(10, "days").toDate(),
    title: "Make OSC on MomentJS"
  },
  {
    id: 2,
    start: moment().toDate(),
    end: moment().toDate(),
    title: "Daily Stand-up Meeting"
  },
  {
    id: 3,
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Speak with Project Manager"
  },
  {
    id: 4,
    start: moment().add(genRand(2, 4), "days").toDate(),
    end: moment().add(4, "days").toDate(),
    title: "Complete work on MineField project"
  },
  {
    id: 5,
    start: moment().add(genRand(10, 13), "days").toDate(),
    end: moment().add(13, "days").toDate(),
    title: "Network on LinkedIn"
  },
  {
    id: 6,
    start: moment().add(genRand(10, 13), "days").toDate(),
    end: moment().add(13, "days").toDate(),
    title: "Work on NodeJS article"
  },
  {
    id: 7,
    start: moment().add(genRand(4, 7), "days").toDate(),
    end: moment().add(7, "days").toDate(),
    title: "Fix bug on Mobile App"
  },
  {
    id: 8,
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Speak with Roberts"
  },
  {
    id: 9,
    start: moment().add(genRand(7, 9), "days").toDate(),
    end: moment().add(9, "days").toDate(),
    title: "Mentor Junior colleageue Zack"
  },
]

export default defaultEvents;