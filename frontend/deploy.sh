# npm run build
# firebase deploy
# cd json
# >test.js
# ls
# cd ..
# ls

cp ./mainjson/firebase.js ./src/utils/
npm run build
# mkdir shoaib
# cp -r build shoaib/build
# cp .firebaserc shoaib/.firebaserc
# cp firebase.json shoaib
# cd shoaib
rm -rf ./build/static/js/*.map
firebase deploy
cp ./demojson/firebase.js ./src/utils/
# cd ..
# rm -r shoaib