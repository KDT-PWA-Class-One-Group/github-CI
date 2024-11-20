const fs = require('fs');
const path = require('path');

class MarkdownFileReading {
  // private 멤버 변수
  // javascript의 최신문법으로 
  // 클래스 내부에서만 접근 가능한 멤버 변수
  // 클래스 외부에서는 접근 불가
  // closure 개념과 비슷
  // 이전에는 _ 언더스코어를 사용하여 접근 제한하는 '문화'가 있었지만,
  // 강제할수 없기때문에 비권장되므로 최신버전의 javascript에서는 사용하지 않음
  #filePath;
  #content;
  
  // useAbsolute 옵션을 생성자에서 받도록 수정
  constructor(directory, filename, useAbsolute = false) {
    if (useAbsolute === true) {
      // 절대 경로 사용
      this.#filePath = path.resolve(directory, filename);
    } else {
      // 상대 경로 사용
      this.#filePath = path.join(directory, filename);
    }
  }

  // getter: 파일 내용 반환
  get content() {
    return this.#content;
  }

  // getter: 파일 경로 반환
  get path() {
    return this.#filePath;
  }

  // 파일 읽기 메서드
  readFile() {
    console.group('파일 읽기 작업');
    console.time('읽기 시간');
    
    try {
      this.#content = fs.readFileSync(this.#filePath, 'utf8');
      console.log('파일 경로:', this.#filePath);
      console.log('파일 내용:', this.#content);
    } catch (err) {
      console.error('파일 읽기 오류:', err.message);
      this.#content = null;
    }

    console.timeEnd('읽기 시간');
    console.groupEnd();
    
    return this.#content;
  }
}

// 사용 예시
// 1. 상대 경로 사용 (기본값)
const reader1 = new MarkdownFileReading(__dirname, '../../README.md');
reader1.readFile();

// 2. 절대 경로 사용
const reader2 = new MarkdownFileReading(__dirname, '../../README.md', true);
reader2.readFile();