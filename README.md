# GitHub Actions 워크플로우 개요

## README 파일 읽기 자동화

이 저장소는 GitHub Actions를 사용하여 README.md 파일의 내용을 자동으로 읽고 확인하는 CI/CD 파이프라인을 구현합니다.

### 워크플로우 구성

- **트리거**: main 브랜치에 push 이벤트 발생 시 실행
- **실행 환경**: Ubuntu 최신 버전
- **Node.js 버전**: 20 LTS

### 주요 기능

1. **파일 시스템 접근**
   - Node.js의 `fs` 모듈을 사용하여 README.md 파일 읽기
   - 절대 경로 생성을 위한 `path` 모듈 활용

2. **에러 처리**
   - 파일 읽기 실패 시 에러 로깅
   - 프로세스 종료 코드를 통한 상태 전달

3. **실행 결과**
   - README 파일 내용을 콘솔에 출력
   - 구분선과 함께 가독성 있게 표시

### 관련 파일 구조

.github/
├── workflows/
│   └── read-readme.yml    # GitHub Actions 워크플로우 설정
└── scripts/
    └── read-readme.js     # README 파일 읽기 스크립트

### 실행 방법

main 브랜치에 변경사항을 push하면 자동으로 워크플로우가 실행됩니다.
Actions 탭에서 실행 결과와 로그를 확인할 수 있습니다.

---

내용 잘 읽히는지 확인!