# 조재호 포트폴리오(PF-3)
## 소개
> 가상클라이언트 C를 가정하여 만든 개인 포트폴리오 사이트입니다. 

---
## 배포링크
> 배포방식은 AWS: S3의 간이 배포를 이용하였습니다.

> [바로가기](http://eundoe-tourbooking.s3-website.ap-northeast-2.amazonaws.com)

---
## 개발 도구 및 환경
> 개발환경 : VScode, npm, React-native

> 개발도구 : HTML, CSS, Javascript, jQuery, React

## 프로젝트 설명
### 프로젝트 계획서 
> [계획서 열람하기](https://github.com/Eundoe/eundoe-tourbookingPVPF/files/10907848/C.Companay.Project.Simulation.Planning_JAEHO.CHO.230302.pdf)


### 헤더(Header) & 푸터(Footer)
* 헤더와 푸터를 별도 Component로 만들어서 작성했습니다.

### 메인페이지(App.js)
1. SPA구조로 진행하기 위해 React-Router를 이용하여 제작했습니다.
2. Booking에서 입력받은 데이터를 Confirm으로 옮기게 하기 위해서 useState를 활용했습니다.

### 예약 페이지(Booking.js)
1. 데이터구조는 JSON을 이용해서 상품리스트를 구현했습니다.
2. 더보기 아이콘을 클릭시 예약할수있는 창이 슬라이드 다운되는 형태로 구현했습니다.
3. 예약란에서 인원수, 이름, 전화번호를 입력하지 않으면 예약이 불가능하게 했습니다.
4. 메인 카테고리에서 정렬을 할 수 있게 만들었고 서브 정렬에서 가격대별로 정렬하게 했습니다.
5. 검색란에서는 상품이름으로 검색할 수 있게 구현했습니다.

### 조회 페이지(Confirm.js)
1. 예약한 내용이 없다면 나타나지 않게 했습니다.
2. 예약한 내용은 휴지통 아이콘 클릭시 삭제 되게 해두었습니다.
3. 데이터는 useState형태로 Array형식으로 push되게 만들어놓은 상태에서 불러왔습니다.

---
## 자기평가
### 부족한 점
1. 심플한 구조로 포트폴리오를 만들어보자는 생각에 구현한거라 디자인도 기능도 부족한 부분이 많았습니다.
2. 조금더 빠른시일내에 완성이 가능했을텐데 속도가 다소 아쉬운 부분이있었습니다.
3. Back-End역량이 부족해서 로그인, 회원가입등 기능을 추가하지 못했습니다. 추후 Back-End공부 후 추가하고 싶다고 생각했습니다.
