import { readFileSync } from 'fs';
import { resolve, join } from 'path';

interface FileReadResult {
  content: string | null;
  path: string;
}

export class MarkdownFileReading {
  private filePath: string;
  private content: string | null;

  constructor(
    private readonly directory: string,
    private readonly filename: string,
    private readonly useAbsolute: boolean = false
  ) {
    this.filePath = useAbsolute 
      ? resolve(directory, filename)
      : join(directory, filename);
    this.content = null;
  }

  public get fileContent(): string | null {
    return this.content;
  }

  public get filePath(): string {
    return this.filePath;
  }

  public readFile(): FileReadResult {
    console.group('파일 읽기 작업');
    console.time('읽기 시간');
    
    try {
      this.content = readFileSync(this.filePath, 'utf8');
      console.log('파일 경로:', this.filePath);
      console.log('파일 내용:', this.content);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('파일 읽기 오류:', error.message);
      }
      this.content = null;
    }

    console.timeEnd('읽기 시간');
    console.groupEnd();
    
    return {
      content: this.content,
      path: this.filePath
    };
  }
}

// 사용 예시
const reader1 = new MarkdownFileReading(__dirname, '../../README.md');
reader1.readFile();

const reader2 = new MarkdownFileReading(__dirname, '../../README.md', true);
reader2.readFile();