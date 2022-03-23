npm run set-settings-admob ${ADMOB_UNIT_ID} ${ADS_APPLICATION_ID}

if [ ${APP_ENV} = "prod" ]; then
    npm run set-settings-firebase ${firebase_project_number} ${firebase_project_id} ${firebase_storage_bucket} ${firebase_mobilesdk_app_id} ${firebase_client_id} ${firebase_current_key} ${ADS_APPLICATION_ID} ${firebase_configuration_version}
fi

npm install -g react-native-cli

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

rm -rf ./android/app/src/main/res/drawable-*

rm -rf ./android/app/src/main/res/raw
