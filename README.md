# Butcher-Shop
<img src=https://openimage.interpark.com/goods_image_big/0/2/3/2/8145940232_l.jpg width=300 height=300 />

# 🕵🏼 어떤 기술이 사용되었나요?

## FRONT
![](https://img.shields.io/badge/FRONT-React-61DAFB?style=for-the-badge&logo=React)

![](https://img.shields.io/badge/FRONT-Redux-764ABC?style=for-the-badge&logo=Redux)

## BACK
![](https://img.shields.io/badge/BACK-Node-3776AB?style=for-the-badge&logo=Node.js)

![](https://img.shields.io/badge/BACK-Express-092E20?style=for-the-badge)

# 🔨 Architecture
![image](https://user-images.githubusercontent.com/96035912/161689041-e80b1b5e-7fbf-47df-bec0-1992729dbc2c.png)

# 🗣 우리를 소개합니다.

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/codeFabian">
          <sub>
            <b>차진성</b>
          </sub>
        </a>
        <br>
      </td>
      <td>
        <strong>🚩 Frontend</strong>
      </td>
    </tr>
     <tr>
      <td align="center">
        <a href="https://github.com/sokim1616">
          <sub>
            <b>이춘우</b>
          </sub>
        </a>
        <br>
      </td>
      <td>
        <strong>🏁 Backend</strong>
      </td>
    </tr>
      <td align="center">
        <a href="https://github.com/bombamong">
          <sub>
            <b>전용남</b>
          </sub>
        </a>
        <br>
      </td>
      <td>
        <strong>🚩 Frontend</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/Kyung-Douhyun">
          <sub>
            <b>김주원</b>
          </sub>
        </a>
        <br>
      </td>
      <td>
        <strong>🏁 Backend</strong>
      </td>
    </tr>
    <tr>
  </tbody>
</table>

# 프로젝트 소개
>고기는 모두에게 행복을 줍니다 그래서, 맛있는 고기를 세상 모두에게 전해주기 위해
>코드스테이츠 정육점을 차렸습니다.
+ 프로젝트에 대한 전반적인 서비스 설명과 핵심기능
>상품 선택 시 장바구니에 추가 되는 애니메이션 제공,
>제품 상세 페이지에서 해당 제품으로 만들수 있는 음식 리스트를 제공합니다.

# 팀 룰
>
    -작업시간-
    10시~ 12시 작업
    1시~3시 작업
    3시~3시10분 휴식
    3시10분~6시# 

    -lint 규칙-
    K&R

    -Commit 규칙-
    Commit Message : [ADD], [FIX], [REMOVE] 말머리 형식
        ex) [ADD] App.js , 몇번째 줄 변경 [ 설명은 한글 사용가능 ] 
    Git Branch: Feature, Main

# 문서 링크 & 이미지 첨부

## 와이어프레임

### 메인페이지(로그인 전)

![로그인 전페이지](https://user-images.githubusercontent.com/95297566/161687083-9a6fe2b6-7911-4bb9-972c-829bec096b2c.PNG)

### 메인페이지(로그인 후)

![로그인 후 페이지](https://user-images.githubusercontent.com/95297566/161687103-da4661c0-bbe4-48ee-a07b-a17d02cde546.PNG)

### 회원가입 페이지

![회원가입 페이지](https://user-images.githubusercontent.com/95297566/161687138-8b6e643c-a586-4b5b-a900-5df8d11cdfce.PNG)

### 마이페이지

![마이페이지](https://user-images.githubusercontent.com/95297566/161687173-764a2ec5-e7da-4746-aee8-62fa6b026fdf.PNG)

### 상품 클릭 시 Modal 창

![상품 클릭 시 Modal 창](https://user-images.githubusercontent.com/95297566/161687223-8b457330-929c-4d8e-80ab-6bde13c8eec4.PNG)

### 장바구니 페이지

![장바구니 페이지](https://user-images.githubusercontent.com/95297566/161687254-16c3f73f-a6f6-4542-809f-df9a6767fb9b.PNG)

### 레시피 페이지

![레시피 페이지](https://user-images.githubusercontent.com/95297566/161687272-0cf03170-816a-4011-9294-3d10f9873042.PNG)



# DB 스키마

![image](https://user-images.githubusercontent.com/96035912/161679047-6bd0ad3e-b8fc-4861-b4bb-3343db388460.png)

# API 문서(문서 링크)




# Bare-Minimum
- 로그인 기능(회원가입, 로그인, 로그아웃, 회원상태 변경
- JWT를 이용한 로그인 구현
- 권한 부여(Authorization)에 따른 기능의 접근 제한 구현 
 - 예시 : 일반 사용자, 관리자 권한
 
< UI UX >
- 로그인 기능
  - 회원가입, 로그인, 로그아웃, 마이페이지, 회원탈퇴 기능 구현
- 회원가입, 로그인 및 회원정보 수정 시 유효성 검사
- 소셜 로그인 외 서비스 자체 회원가입 기능 제공
- 마이페이지를 통해 사용자 개인정보 수정 기능 제공
- (소셜 로그인이 아닐 경우) 비밀번호 수정 기능 제공
- 라이브러리를 사용하지 않고 React 컴포넌트 직접 작성
  - 유어클래스에서 다룬 것: 탭, 드랍다운, 모달 등

# Advanced
- 자동 완성 기능
- 검색 기능
- 검색 필터링 기능
- 스크롤에 의한 애니메이션 적용 (greensock 사용 권장)
- 무한 스크롤

# Nightmare
- 모바일 대응
- 국제화 (i18n) 적용
- 추천 시스템 구현