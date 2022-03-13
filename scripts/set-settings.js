const fs = require('fs')

const adMobUnitId = process.argv[2]

const rootDir = process.cwd()

const filePath = `${rootDir}/src/settings/adMobUnitId.ts`

var file = fs.readFileSync(filePath, 'utf8')

var result = file.replace('TestIds.BANNER',`'${adMobUnitId}'`)

fs.writeFileSync(filePath, result, 'utf8')