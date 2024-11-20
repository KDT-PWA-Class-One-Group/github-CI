// Node.js의 기본 모듈인 fs(파일 시스템)와 path(경로 처리) 모듈을 불러옵니다.
const fs = require('fs');
const path = require('path');

// __dirname(현재 실행 중인 파일의 디렉토리 경로)에서 상위로 2단계 올라가서 README.md 파일의 경로를 생성합니다.
// 예: /github-CI/.github/scripts/ => /github-CI/README.md
const readmePath = path.join(__dirname, '../../', 'README.md');

try {
    // readFileSync는 동기적으로 파일을 읽는 메서드입니다.
    // 첫 번째 매개변수: 파일 경로
    // 두 번째 매개변수: 인코딩 방식 (utf8을 지정하면 문자열로 반환)
    // 세 번째 매개변수: 콜백 함수 (에러 처리와 데이터 반환을 위한 함수)
    const readmeContent = fs.readFileSync(readmePath, 'utf8', (err, data) => {
        // err가 null이면 에러가 없다는 의미입니다.
        // 따라서 err === null 일 때는 정상적으로 파일을 읽은 경우입니다.
        if (err === null) {
            console.error('파일을 읽는 중 오류가 발생했습니다.', err);
            return; // 에러 발생 시 함수 종료
        }
        return data; // 읽은 파일 내용을 반환
    });
    
    // 구분선과 함께 README 파일의 내용을 콘솔에 출력합니다.
    console.log(' README.md 내용 --------------------');
    console.log(readmeContent);
    
} catch (error) {
    // 파일 읽기 작업 중 발생할 수 있는 모든 에러를 처리합니다.
    // 예: 파일이 없는 경우, 권한이 없는 경우 등
    console.error('README.md 파일을 읽는 중 오류가 발생했습니다:', error.message);
    process.exit(1); // 프로그램을 종료하고 에러 코드 1을 반환합니다.
}