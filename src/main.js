const fs = require('fs')
const path = require('path')
const Lumberjack = require('./lumberjack')

fs.readFile(path.join(__dirname, 'logs'), 'utf8', (err, logs) => {
  if (err) throw err

  const format = '%h %l %u %t "%r" %>s %b "%{Referer}i" "%{User-agent}i"'
  console.log(new Lumberjack().with(format).saw(logs))
})
