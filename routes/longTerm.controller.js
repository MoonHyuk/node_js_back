const moment = require("moment-timezone");
const pool = require("../model/db");

async function get (req, res) {
  const sql = `SELECT * FROM long_term WHERE checkTime >= ? AND checkTime < ? order by checkTime;`;

  const startTime = moment(req.query.startDatetime) ?? moment().tz("Asia/Seoul");
  const endTime = moment(startTime).add(6, 'hours');

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
    if (acc[x['type']]['count'] % 10 === 0) {
      x['checkTime'] = moment(x['checkTime']).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm')
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
