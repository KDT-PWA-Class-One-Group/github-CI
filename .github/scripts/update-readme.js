const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../../', 'README.md');

try {
    const readmeContent = fs.readFileSync(readmePath, 'utf8', (err, data) => {
        if (err === null) {
            console.error('파일을 읽는 중 오류가 발생했습니다.', err);
            return;
        }
        return data;
    });
    
    console.log(' README.md 내용 --------------------');
    console.log(readmeContent);
    
} catch (error) {
    console.error('README.md 파일을 읽는 중 오류가 발생했습니다:', error.message);
    process.exit(1);
}