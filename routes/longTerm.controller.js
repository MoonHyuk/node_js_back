const moment = require("moment-timezone");
const pool = require("../model/db");

async function get (req, res) {
  const sql = `SELECT * FROM long_term WHERE sensorId = ? AND checkTime >= ? AND checkTime < ? order by checkTime;`;

  let timeInterval, interval;
  switch (req.query.type) {
    case "STEL":
      timeInterval = moment.duration(15, "minutes");
      interval = 1;
      break;
    default:
      timeInterval = moment.duration(6, "hours");
      interval = 20;
  }

  const startTime = req.query.startDatetime ? moment(req.query.startDatetime) : moment().tz("Asia/Seoul").subtract(timeInterval);
  const endTime = moment(startTime).add(timeInterval);

  const result = await pool.query(sql, [
    req.query.sensorId ?? 1,
    startTime.format("YYYY-MM-DD HH:mm:ss"),
    endTime.format("YYYY-MM-DD HH:mm:ss")
  ]);

  const groupByType = result[0].reduce((acc, x) => {
    if (!acc.hasOwnProperty(x['type'])) {
      acc[x['type']] = {
        count: 0,
        data: []
      };
    }
    if (acc[x['type']]['count'] % interval === 0) {
      x['checkTime'] = moment(x['checkTime']).format('YYYY-MM-DD HH:mm:ss')
      acc[x['type']]['data'].push(x);
    }
    acc[x['type']]['count'] += 1;
    return acc;
  }, {})

  res.json(groupByType);
}

module.exports = {
  get,
}
