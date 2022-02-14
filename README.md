# ReactWordle
[Wordle 게임](https://www.powerlanguage.co.uk/wordle/)을 직접 구현해본 앱.   
([앱 사용해보기](https://kuman514.github.io/ReactWordle))

# Objective (목적)
- [현행 Wordle 게임](https://www.powerlanguage.co.uk/wordle/)은 다시 플레이하려면 최장 24시간을 기다려야만 합니다. 하지만, 저는 Wordle 게임을 하루에 여러 판 플레이해보고 싶었습니다.
- 그래서 수천 개의 단어를 자료로 하여, 한 단어를 무작위로 뽑아 플레이하며, 새로고침으로 빠르게 재시작할 수 있는 Wordle 게임을 만들게 되었습니다.

# Sources (자료 출처)
- Five Letter Words
  - [https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt](https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt)

# Why I applied Redux (Redux를 적용한 이유)
- Redux 미적용 시, 특정 상위 컴포넌트(Board)가 앱의 모든 상태를 가지고 있었고, 그에 따라 Prop Drilling이 다수 발생하였음.
- 입력(알파벳 입력, 제출 등등)에 따라 상태가 빈번하게 바뀜.
- 한 번만 적용해야 됐을 키보드 입력 처리(`document.addEventListener`의 `keydown`)가 상태가 변할 때마다 반복적으로 적용되는 오류 발생.
- 이에 따라, 상태를 관리할 수 있는 단 하나의 근원이 요구됨에 따라, `Redux`를 적용하게 되었음.

# Updated (업데이트)
- 02-09-2022: 최초 릴리즈
- 02-09-2022 (2): 모바일 화면에서 입력판이 제대로 표시되지 않는 문제 해결
- 02-10-2022: 잘못된 사항을 띄우는 방식 개선
- 02-12-2022: 키보드 입력 방식 추가
- 02-13-2022: 상태 관리(`Redux`) 적용 (앱 내 키보드 입력 및 앱 코드 구조 개선 목적)
- 02-14-2022: 실패한 결과에 대해, 트위터로 공유 시 실패했다는 표시를 추가

# Issues (오류)
- 02-09-2022: ~~모바일 화면에서 입력판이 제대로 표시되지 않는 문제~~(해결됨)

# Feedbacks (피드백)
- 02-09-2022: ~~잘못된 것을 알릴 때 팝업으로 띄워줄 수 있나~~(반영됨)
- 02-10-2022: ~~키보드로도 입력하게 할 수 있나~~(반영됨)
