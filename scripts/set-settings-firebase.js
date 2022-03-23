const fs = require('fs')

const firebaseProjectNumber = process.argv[2]
const firebaseProjectId = process.argv[3]
const firebaseStorageBucket = process.argv[4]
const firebaseMobilesdkAppId = process.argv[5]
const firebaseClientId = process.argv[6]
const firebaseCurrentKey = process.argv[7]
const firebaseAdmobAppId = process.argv[8]
const firebaseConfigurationVersion = process.argv[9]

const rootDir = process.cwd()

//Change the settings at the firebase
const googleServicesfilePath = `${rootDir}/android/app/google-services.json`
const googleServicesfile = fs.readFileSync(googleServicesfilePath, 'utf8')

const googleServicesResult = googleServicesfile.replace('[firebase_project_number]', firebaseProjectNumber)
                                               .replace('[firebase_project_id]', firebaseProjectId)
                                               .replace('[firebase_storage_bucket]', firebaseStorageBucket)
                                               .replace('[firebase_mobilesdk_app_id]', firebaseMobilesdkAppId)
                                               .replace('[firebase_client_id]', firebaseClientId)
                                               .replace('[firebase_client_id]', firebaseClientId)
                                               .replace('[firebase_current_key]', firebaseCurrentKey)
                                               .replace('[firebase_admob_app_id]', firebaseAdmobAppId)
                                               .replace('[firebase_configuration_version]', firebaseConfigurationVersion)

fs.writeFileSync(googleServicesfilePath, googleServicesResult, 'utf8')

