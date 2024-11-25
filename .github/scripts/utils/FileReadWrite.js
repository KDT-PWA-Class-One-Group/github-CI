/**
 * 파일 읽기와 쓰기를 담당하는 클래스입니다
 */
class FileReadWrite {
  /**
   * FileReadWrite 클래스의 생성자입니다
   * @param {string} filePath - 파일의 경로입니다
   * @param {string} encoding - 파일의 인코딩 방식입니다 (기본값: utf8)
   */
  constructor(filePath, encoding = 'utf8') {
    this.filePath = filePath;
    this.encoding = encoding;
    this.fs = require('fs');
  }

  /**
   * 파일의 내용을 읽어오는 메서드입니다
   * @returns {string} 파일의 내용을 문자열로 반환합니다
   * @throws {Error} 파일 읽기 실패시 에러를 발생시킵니다
   */
  readFile() {
    try {
      const content = this.fs.readFileSync(this.filePath, this.encoding);
      return content;
    } catch (error) {
      console.error('파일을 읽는 도중 오류가 발생했습니다:', error.message);
      throw error;
    }
  }

  /**
   * 파일에 내용을 쓰는 메서드입니다
   * @param {string} content - 파일에 쓸 내용입니다
   * @throws {Error} 파일 쓰기 실패시 에러를 발생시킵니다
   */
  writeFile(content) {
    try {
      this.fs.writeFileSync(this.filePath, content, this.encoding);
      console.log('파일이 성공적으로 작성되었습니다');
    } catch (error) {
      console.error('파일을 쓰는 도중 오류가 발생했습니다:', error.message);
      throw error;
    }
  }
}

module.exports = FileReadWrite; 