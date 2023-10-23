# SKKU.THON Team7

## 다음과 같은 기능이 포함되어 있습니다. 
### 1. 시각장애인 맞춤 고대비 디자인, 챗봇 ui
![image](https://github.com/skku-sw/SKKU.THON-Team7/assets/106944045/0c441cf7-4638-49c6-b623-9f5649a417a9)

### 2. 카테고리 별 맛집 불러오기
![image](https://github.com/skku-sw/SKKU.THON-Team7/assets/106944045/74101bab-eb76-484e-b2b9-a850377e8c1a)

### 3. 다양한 정렬 기능
![image](https://github.com/skku-sw/SKKU.THON-Team7/assets/106944045/5f8d8141-462a-400c-87da-af89df48c088)

### 4. 가게 최근 리뷰 한 줄 요약
![image](https://github.com/skku-sw/SKKU.THON-Team7/assets/106944045/70f69b0b-dda4-4b0c-a6d3-5e3b36dcf9c1)

### 5. TTS / STT 서비스


### 6. 직관적인 장바구니 / 결제하기 기능

### 7. 간편결제 / 전화결제
![image](https://github.com/skku-sw/SKKU.THON-Team7/assets/106944045/597b5eed-eabf-4cb6-84eb-701c7b48f539)

## 레포지토리 설명
1. frontend: React-native 기반 웹앱 플랫폼
2. backend: Express.js 기반 백엔드 플랫폼
3. crawler: Python 기반 웹 크롤러

## 프로젝트에서 사용한 기술 
- React Native
- Figma
- Aws(EC2, RDS)
- Express

## Dev Server 실행 방법
```bash
 git clone https://github.com/skku-sw/SKKU.THON-Team7.git
```
### frontend
#### vscode
```bash
 cd frontend
 npm install
 npx react-native start
```
#### android studio
```bash
 frontend/android 로 파일 열기
 Run 'app' 클릭하여 에뮬레이터 실행
```
<br>

### backend
```bash
 cd backend
 npm install
 .env 작성
 npm start
```
<br>


## Production 배포 방법
`현재 백엔드 서버는 EC2 에 배포 완료된 상태로, http://ec2-44-217-88-206.compute-1.amazonaws.com:3000 에서 작동 중임`


## 환경 변수 및 시크릿
환경 변수는 `.env` 파일에서 관리 중이며, 관련 sample 은 `.env.sample` 파일을 통해 형식화 하였음
<br>
현재는 backend, crawler 에서 MySQL 연동을 위해 사용 중

```bash
/* .env file example */
MYSQL_HOST = "Your Host"
MYSQL_USER = "Your User"
MYSQL_PASSWORD = "Your Password"
MYSQL_DATABASE = "Your DB"
MYSQL_PORT = "3306"
```

## 기타
현재 본 레포지토리의 default branch 는 `dev` 로 최종 결과물은 `dev`에 커밋 완료된 상태임.
