# jquery.ko_suffix

한글 조사(은/는/이/가/을/를)를 맞춰주는 jquery 플러그인입니다.
실제 코드는 jquery 없이도 구동 가능하지만, 편의성을 위해 플러그인 형태로 래핑하였습니다.

# 사용법

## 셀렉터를 이용해 내용을 변환

```
  <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="jquery.ko_suffix.js"></script>
  
  <!-- 변환하고 싶은 대상 -->
  <p>우리{은} 민족 중흥의 역사적 사명{을}...</p>
  
  <!-- 변환 -->
  <script>
  $("p").ko_suffix();
  </script>
```
## 특정 문자열을 변환
```
  <script>
    alert( $.ko_suffix(user_name + "{은} 바보!") );
  </script>
```

# 지원 문법

{은} : 은/는
{을} : 을/를
{이} : 이/가
{랑} : 이랑/랑
{와} : 와/과
{로} : 으로/로

# 주의사항

사용하려는 페이지에 맞는 문자셋으로 js 파일을 변환 후 사용해 주세요.
현재 레포에 있는 파일은 utf-8 기준입니다.

