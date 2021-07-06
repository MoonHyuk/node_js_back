const moment = require("moment-timezone");
const pool = require("../model/db");

async function get (req, res) {
  const sql = `SELECT * FROM long_term WHERE checkTime >= ? AND checkTime < ? order by checkTime;`;

  const startTime = req.query.startDatetime ? moment(req.query.startDatetime) : moment().tz("Asia/Seoul").add(-6, 'hours');

  let endTime, interval;
  switch (req.query.type) {
    case "STEL":
      endTime = moment(startTime).add(15, 'minutes');
      interval = 1;
      break;
    default:
      endTime = moment(startTime).add(6, 'hours');
      interval = 20;
  }

  const result = await pool.query(sql, [
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
