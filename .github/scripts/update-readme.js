/**
 * README.md 파일 자동 업데이트 스크립트
 * 
 * 이 스크립트의 주요 기능:
 * 1. Git 저장소의 커밋 이력을 가져옴
 * 2. README.md 파일을 읽어서 커밋 로그를 테이블 형식으로 추가
 * 3. 변경된 내용을 다시 README.md 파일에 저장
 */

// 필수 Node.js 모듈 불러오기
const fs = require("fs");  // 파일 시스템 작업을 위한 모듈
const path = require("path");  // 파일 경로 처리를 위한 모듈
const { execSync } = require("child_process");  // Git 명령어 실행을 위한 모듈

/**
 * 파일 경로 설정
 * __dirname: 현재 스크립트의 디렉토리 경로
 * "../../": 상위 디렉토리로 두 번 이동
 * "README.md": 대상 파일
 * 
 * 예시: 
 * __dirname = "/.github/scripts"
 * 최종 경로 = "/README.md"
 */
const readmePath = path.join(__dirname, "../../", "README.md");

/**
 * Git 로그 명령어 형식 설명
 * git log: 커밋 이력 조회
 * --pretty=format:"%h|%ad|%s": 커밋 로그 출력 형식 지정
 *   - %h: 짧은 커밋 해시
 *   - %ad: 커밋 날짜
 *   - %s: 커밋 메시지
 * --date=format:"%Y-%m-%d": 날짜 형식을 YYYY-MM-DD로 지정
 * 
 * 출력 예시: "a1b2c3d|2024-03-20|feat: 새로운 기능 추가"
 */

try {
  // Git 로그 가져오기
  const gitLog = execSync(
    'git log --pretty=format:"%h|%ad|%s" --date=format:"%Y-%m-%d"'
  ).toString();

  const readmeContent = fs.readFileSync(readmePath, "utf8");

  // 커밋 로그를 테이블 형식으로 변환
  const commits = gitLog.split("\n").map((line, index) => {
    const [hash, date, message] = line.split("|");
    return `| ${index + 1} | ${date} | ${hash} | ${message} |`;
  });

  // 테이블 헤더 생성
  const tableHeader = `
| 번호 | 커밋된 날짜 | 커밋해시 | 커밋 내용 |
|------|------------|-----------|-----------|`;

  // 새로운 README 내용 생성
  const newContent = `${readmeContent}\n${tableHeader}\n${commits.join("\n")}`;

  // README.md 파일 업데이트
  fs.writeFileSync(readmePath, newContent, "utf8");

  console.log("README.md 파일이 성공적으로 업데이트되었습니다.");
} catch (error) {
  console.error("오류가 발생했습니다:", error.message);
  process.exit(1);
}
