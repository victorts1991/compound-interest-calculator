npm install -g react-native-cli

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

rm -rf ./android/app/src/main/res/drawable-*

rm -rf ./android/app/src/main/res/raw