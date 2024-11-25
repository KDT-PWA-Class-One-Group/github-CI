/**
 * Git 커밋 로그를 마크다운 테이블 형식으로 변환하는 함수입니다
 * @param {string} gitLog - Git에서 가져온 커밋 로그 문자열입니다
 * @returns {string[]} - 마크다운 테이블 형식으로 변환된 커밋 로그 배열을 반환합니다
 * @throws {Error} - gitLog가 비어있거나 올바르지 않은 형식일 경우 에러를 발생시킵니다
 */
function formatCommitsToTable(gitLog) {
  if (gitLog === '') {
    console.error('커밋 로그가 비어있으므로 처리할 수 없습니다');
    return [];
  }

  const lines = gitLog.split('\n');
  const formattedCommits = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const commitParts = line.split('|');
    
    if (commitParts.length !== 3) {
      console.error('커밋 로그의 형식이 올바르지 않아 처리할 수 없습니다');
      continue;
    }

    const hash = commitParts[0];
    const date = commitParts[1];
    const message = commitParts[2];
    
    // 마크다운 테이블 행 형식으로 변환
    const tableRow = `| ${i + 1} | ${date} | ${hash} | ${message} |`;
    formattedCommits.push(tableRow);
  }

  return formattedCommits;
}

module.exports = {
  formatCommitsToTable
}; 