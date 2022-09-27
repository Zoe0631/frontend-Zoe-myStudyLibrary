# 4-frontend-Zoe-myStudyLibrary

## :books: 내 주변의 도서관 찾는 사이트 :books:

프로젝트 명: myStudyLibrary

작성자: 김예지

:clipboard: [프로젝트 링크](https://mystudylibrary.pe.kr)

* 참고사항: 보안상 letsencrypt에서 발급받은 ssl인증서를 적용했고 비밀번호는 암호화돼서 저장됩니다.


## :pushpin: 프로젝트 설명

개인 프로젝트입니다.

사용자의 지역을 입력하면 그 지역의 도서관이 검색되는 복지 사이트 입니다.

각 도서관 에 평점, 후기를 남길 수 있고 사이트 사용자들끼리 커뮤니티 글을 공유할 수 있습니다.


## 📕 개발 스택

* 사용 스택: html, css, js, node.js, express, terser, SweetAlert2 등


-------------------------------------------

## :orange_book: 주요 기능

* 메뉴바(gnb)

    * 뷰포트가 특정 넓이 이하(max-width: 1024px)로 내려갔을 때 오른쪽 상단의 메뉴 버튼을 누를 때만 메뉴창 활성화했습니다.
    
    * 메뉴 버튼을 눌렀을 때 1초간 fade-in 하도록 animation 설정했습니다. (@keyframes으로 fade-in 효과 정의)

* 무한 스크롤링
    
    * 페이지네이션이 필요한 부분에 무한 스크롤링 구현했습니다. 
    
    * 유저의 편의성을 위해 게시글 목록과 도서관 목록 페이지에 최상단으로 올라가는 버튼을 구현했습니다. 이 버튼은 유저의 입장에서 특정 컨테이너 범위 이내에서 고정된 위치에 보이도록 했습니다.

* 프로필 사진
    
    * 프로필 사진을 랜더링 할 때 사진의 넓이와 높이 중 어떤 것이 더 긴지에 따라 분기 처리를 통해 다른 css가 적용되도록 했습니다.


* 반응형 디자인
    
    * 기기들의 분기점(1024px, 768px, 480px)을 기준으로 미디어 쿼리 사용해서 데스크톱과 모바일에서 사이트 이용할 수 있도록 했습니다.
        * 모바일에서 의도한 구조가 깨져 보이지 않게 하기 위해서 백엔드 서버에서 가공해온 정보 사용(ex. 글 목록에서 글자 제목 수가 10글자 이상이면 파싱 후 ... 붙여주기) 
    
    * 구글 서치 콘솔에서 sitemap.xml 파일에 의해 연결된 페이지들이 모바일 친화적이라는 평을 받았습니다.
    
    * pageSpeed Insights를 확인하면서 모바일 성능 높이기 위해 노력했습니다. (최종 평가: 모바일 83/100 데스크톱 97/100)
        * terser 모듈 사용해서 js 코드 build(축소화)
        * 이미지 파일 높이와 넓이 명시       

<details>
    <summary> 🧷 유효성 검사 </summary>
    
* 필요한 경우 setCustomValidity 메서드를 사용해서 요소의 유효성 설정    
    
* 회원가입 이용약관 페이지에서 약관을 읽지 않을 시 '약관 동의' 체크박스에 체크되지 않도록 함
    
* 회원가입, 유저 정보 수정 시 백엔드 서버에 요청하지 않고도 유효성 검사해 줄 수 있는 부분 유효성 체크        
    * 입력 전 툴팁 아이콘에 커서를 올리면 유효 조건 체크 가능
    * 입력 시 정규 표현식으로 입력값의 형식과 글자 수 체크
    * 입력 창의 배경을 분기 처리해서 입력한 값이 유효한지 유효하지 않은지 가시적으로 구분 가능하도록 함
    
* 게시판 글, 댓글, 도서관 후기 작성 및 수정 시 글자 수 체크
* 게시글 해시태그 유효 조건 툴팁을 통해 미리 확인 가능하고 입력 후 유효하지 않을 시 구체적으로 어떤 부분이 유효하지 않은지 알림 뜨도록 함
    * 조건 1. 첫 글자가 #이어야 유효
    * 조건 2. #을 구분자로 파싱 했을 때 배열 길이가 5개 이하여야 유효
    * 조건 3. 하나의 배열 요소당 2~8글자 사이의 한국어로만 이루어져야만 유효
 
<!-- summary 아래 한칸 공백 두고 내용 삽입 -->

</details>

------------------------------------

## :ledger: 프로젝트 기획 및 설계
    
### 프로젝트 기획

ovenapp.io 툴 이용했습니다.  




<details>
    <summary> 🧷 기획 예시 사진 및 링크 </summary>
    <br>

* 예시 이미지
![image](https://user-images.githubusercontent.com/98700133/173318356-b076ce39-37cf-4abc-8ea7-c76c7eecfb4f.png)

1. :clipboard: [기획 링크](https://ovenapp.io/view/sM4TbEvWMLijyHLw5oZIhUubP99mgGUD/gHdLH)
2. 왼쪽 하단의 '메모 표시'를 누르면 각 페이지와 기능에 대한 설명을 볼 수 있습니다.
3. 화살표를 누르거나 '페이지 목록'을 누르면 다른 페이지로 넘어갈 수 있습니다.
4. '링크 영역 표시'를 누르면 누를 수 있는 영역을 확인할 수 있습니다.

* 해당 프로젝트를 진행하면서 초반 기획과 달라진 부분들이 꽤 있으니 참고 바랍니다.

<!-- summary 아래 한 칸 공백 두고 내용 삽입 -->

</details>

### 프로젝트 설계

![image](https://user-images.githubusercontent.com/98700133/173525786-726ad8f8-07ef-42e5-bc50-8012911aca4d.png)



--------------------
## :green_book: 문제점과 해결방안

기존에 구현해 둔 백엔드 서버와 연결하면서 생긴 문제도 해당 항목에 포함했습니다.

 :clipboard: [문제와 해결방안1](https://www.notion.so/myStudyLibrary-1-ce02d0c21c894e679ef855a4ad6b17aa)
 
 :clipboard: [문제와 해결방안2](https://www.notion.so/myStudyLibrary-2-f347d23512254d15a90abf3f47675e26)
 
 
-----------------------------
## 💭 프로젝트 진행 후 느낀점과 개선하고 싶은 점
### 느낀점

1. 주변 사람들의 피드백을 통해서 무한 스크롤링이 적용된 페이지에 페이지의 최상단으로 올라가는 버튼을 만들었습니다. 항상 유저의 편의성을 고려해야겠다는 생각을 되새겼습니다.

2. 사이트의 요소들이 원하는 대로 랜더링 되지 않을 때 개발자 도구를 열어서 적용된 html과 css를 확인해 보는 게 도움이 많이 된다는 생각을 했습니다.


### 개선하고 싶은 점

1. sitemap.xml에 동적 url을 추가해줄  수 있도록 해서 검색엔진에 누락되는 게시글이나 도서관 정보 없이 노출되게 하고 싶습니다.

2. document.write로 작성된 코드들을 원하는 노드 포인트에 노드를 추가하는 안전한 DOM 방식의 코드로 바꾸고 싶습니다.

3. 사이트의 홈페이지를 로그인했을 때 페이지와 로그인하지 않았을 때를 나누어 2개의 html 파일로 작성했습니다. 이를 동적으로 하나의 페이지로 표현하는 게 합리적이었을 것 같습니다.

4. 유저가 작성한 리소스 들을 조회할 때 개행문자가 반영돼서 보이게 하면 좋았을 것 같습니다.

------------------------------
## 📝 회고록


시간상의 문제로 처음 기획한 부분들을 많이 덜어내고 필수적인 기능 위주로 구현했는데 그 점이 많이 아쉬웠습니다. 다음에는 제가 한정된 시간 동안 할 수 있는 양에 대해서 미리 파악하고 시간 분배를 잘 하도록 노력해야겠습니다.


프로젝트를 진행하는 내내 사이트를 이용하는 유저들이 편하게 이용할 수 있도록 많은 고민을 한 뒤 코드를 작성했습니다. 그러나 프로젝트를 진행하다 보니 이미 작성한 코드인데 '이 코드는 지저분하다'라고 생각되는 부분이 군데군데 보이기 시작했습니다. 시간에 쫓기다 보니 주석도 유의미하게 달지 못했던 것 같고 나중에 작성된 프로젝트의 규모가 커지면서 코드 관리가 어려워졌습니다. 특히 css 파일에서 원하는 선택자 이름을 찾기 너무 힘들어졌습니다. 다음 프로젝트에는 같이 일하는 사람들을 위해서 클린 한 코드를 짜도록 노력해야겠습니다. 그를 위해 프로젝트 시작 전 해당 언어나 프레임워크에서의 코딩 컨벤션을 미리 찾아보거나 현업자 분들이 작성한 코드들을 많이 보고 적용해야겠습니다.

------------------------
## 📘 실제 사이트 사진

* 데스크
    * 홈페이지(로그인 시)
     
    ![image](https://user-images.githubusercontent.com/98700133/173558139-ebb55244-ba87-4940-8f99-cc7b87db5a27.png)
   

    * 회원가입
![image](https://user-images.githubusercontent.com/98700133/173557056-0c8db056-28ce-40bd-96c5-934a3dc1d41f.png)


    * 도서관 평점 등록
![image](https://user-images.githubusercontent.com/98700133/173556571-32a8c660-eff9-4266-a008-936e9f6e1cb4.png)


    * 자유게시판 로그인 안한 상태로 글작성 버튼 눌렀을 때
![image](https://user-images.githubusercontent.com/98700133/173557989-2999d02b-3cf5-4253-a658-9ec6b0309619.png)



    
* 모바일


<img src="https://user-images.githubusercontent.com/98700133/173549341-62af3ea1-53f0-475c-87e6-08ea34d33ace.png" width="40%"><img src="https://user-images.githubusercontent.com/98700133/173549496-e3569812-515b-462a-88c0-bf8d642bd9d3.png" width="40%">
