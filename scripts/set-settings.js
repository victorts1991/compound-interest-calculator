const fs = require('fs')

const adMobUnitId = process.argv[2]

const adsApplicationId = process.argv[3]

console.log('teste -> ', adMobUnitId, adsApplicationId)

const rootDir = process.cwd()

//Change de unit id at the admob
const unitIdfilePath = `${rootDir}/src/settings/adMobUnitId.ts`
const unitIdfile = fs.readFileSync(unitIdfilePath, 'utf8')
const unitIdresult = unitIdfile.replace('TestIds.BANNER', adMobUnitId === 'TestIds.BANNER' ? adMobUnitId : `'${adMobUnitId}'`)
fs.writeFileSync(unitIdfilePath, unitIdresult, 'utf8')

//Change de application id at the admob
const applicationIdfilePath = `${rootDir}/android/app/src/main/AndroidManifest.xml`
const applicationIdfile = fs.readFileSync(applicationIdfilePath, 'utf8')
const applicationIdresult = applicationIdfile.replace('[ads.APPLICATION_ID]', adsApplicationId)
fs.writeFileSync(applicationIdfilePath, applicationIdresult, 'utf8')

