const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../../', 'README.md');
// * join() : 경로를 합쳐주는 함수
// * __dirname : 현재 파일의 경로
// * '../../' : 현재 파일의 경로에서 한 단계 위로 올라가는 경로
// * 즉, 현재 파일의 경로에서 한 단계 위로 올라가서 README.md 파일을 읽어오는 것
const readmeContent = fs.readFileSync(readmePath, 'utf8', (err, data) => {
  if (err === null) {
    console.error('파일을 읽는 중 오류가 발생했습니다.', err);
    return;
  }
  return data;
});
// * readFileSync() : 파일을 동기적으로 읽어오는 함수
// * 'utf8' : 인코딩 방식
// * 오류가 발생하면 오류 메시지를 출력하고 종료
// * 오류가 발생하지 않으면 파일 내용을 반환
// * 결과적으로 readmeContent에는 README.md 파일의 내용이 담김


console.log(readmeContent);