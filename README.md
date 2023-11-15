# ReactWordle
[Wordle 게임](https://www.powerlanguage.co.uk/wordle/)을 직접 구현해본 앱.
([앱 사용해보기](https://react-wordle-kuman514.vercel.app/))

# Objective (목적)
- [현행 Wordle 게임](https://www.powerlanguage.co.uk/wordle/)은 다시 플레이하려면 최장 24시간을 기다려야만 합니다. 하지만, 저는 Wordle 게임을 하루에 여러 판 플레이해보고 싶었습니다.
- 그래서 수천 개의 단어를 자료로 하여, 한 단어를 무작위로 뽑아 플레이하며, 기다리지 않고 재시작할 수 있는 Wordle 게임을 만들게 되었습니다.

# Sources (자료 출처)
- Five Letter Words ([ReadOnlyAPIEndpoints](https://github.com/kuman514/ReadOnlyAPIEndpoints)로 이관)
  - [https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt](https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt)

# Why I applied Redux (Redux를 적용한 이유)
- Redux 미적용 시, 특정 상위 컴포넌트(Board)가 앱의 모든 상태를 가지고 있었고, 그에 따라 Prop Drilling이 다수 발생하였음.
- 입력(알파벳 입력, 제출 등등)에 따라 상태가 빈번하게 바뀜.
- 한 번만 적용해야 됐을 키보드 입력 처리(`document.addEventListener`의 `keydown`)가 상태가 변할 때마다 반복적으로 적용되는 오류 발생.
- 이에 따라, 상태를 관리할 수 있는 단 하나의 근원이 요구됨에 따라, `Redux`를 적용하게 되었음.
- 현재, Redux 대신 Zustand를 적용 중. ([다른 프로젝트에서의 이유와 동일](https://github.com/kuman514/ReactGomoku/blob/main/docs/WHY_zustand.md))

# Objectives (과제)
- ~~TypeScript 적용 (js파일을 ts로 변환하는 것 포함) (추후 개발과 유지보수에 있을 타입 에러를 예방하기 위함)~~ `완료`
- ~~Create React App을 탈피하여 Yarn Berry + Vite 적용~~ (전체적인 프로젝트 성능 향상 목적) `완료`
- ~~Redux를 제거하고 Zustand를 적용~~ (유지보수에 필요한 스토어의 최소 변경 횟수를 줄이기 위함) `완료`
- ~~단어 데이터 백엔드로 이관시키기~~ (Axios를 통해 외부로부터 자료를 받아오려는 것을 시도하기 위함) `완료`
- 코드 리팩토링 `상시 진행`

# Tech Docs (기술적 문서)
- [Axios를 Fetch API 대신 적용한 이유](https://github.com/kuman514/ReactWordle/blob/main/docs/WHY_axios.md)

# Updated (업데이트)
- Feb-09-2022
  - 최초 릴리즈
  - 모바일 화면에서 입력판이 제대로 표시되지 않는 문제 해결
- Feb-10-2022: 잘못된 사항을 띄우는 방식 개선
- Feb-12-2022: 키보드 입력 방식 추가
- Feb-13-2022: 상태 관리(`Redux`) 적용 (앱 내 키보드 입력 및 앱 코드 구조 개선 목적)
- Feb-14-2022: 실패한 결과에 대해, 트위터로 공유 시 실패했다는 표시를 추가
- Feb-15-2022: 게임이 끝날 경우 리셋 버튼 활성화
- Feb-16-2022
  - 버튼 focus 표시
  - focus된 버튼이 있을 때 enter키 입력 시 submit되지 않음
  - 앱이 실행되지 않는 문제 해결
- Mar-10-2023: Yarn Berry와 Vite 적용
- Mar-12-2023: TypeScript와 Zustand 적용
- Mar-30-2023
  - 새로고침 후에도 게임 상태 보존하게 만듦
  - Axios를 통해 단어 목록을 내려받도록 앱 구조 변경
- Jun-08-2023: 배포를 Github Pages에서 Vercel로 변경
- Jul-09-2023: 단어 목록 로딩 중 에러 발생 시 표시할 컴포넌트 추가
- Jul-15-2023: 단어 목록 로딩 중 임시로 보여줄 스켈레톤 컴포넌트 추가
- Nov-15-2023: 기존에 쓰이던 Github Pages를 현 Vercel 배포로 리다이렉션

# Issues (오류)
- Feb-09-2022: ~~모바일 화면에서 입력판이 제대로 표시되지 않는 문제~~(해결됨)
- Feb-16-2022: ~~앱이 실행되지 않는 문제~~(해결됨)
- Jun-08-2023: ~~공유 링크가 이전 배포 주소로 되어있던 문제~~(해결됨)
- Jul-08-2023: ~~불러오는 중 에러 발생 시 계속 Loading되는 문제~~(해결됨)

# Feedbacks (피드백)
- Feb-09-2022: ~~잘못된 것을 알릴 때 팝업으로 띄워줄 수 있나~~(반영됨)
- Feb-10-2022: ~~키보드로도 입력하게 할 수 있나~~(반영됨)
- Feb-14-2022: ~~리셋 버튼을 만들어달라~~(반영됨)
