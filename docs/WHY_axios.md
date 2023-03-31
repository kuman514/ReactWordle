# Configure Axios
- API를 통해 외부(Mock API ([저장소](https://github.com/kuman514/ReadOnlyAPIEndpoints)))로부터 자료를 받아오려는 것을 시도하기 위함
- 왜 Axios를 사용하는가? Fetch API보다 더욱 간편한 점이 두드러졌기 때문.
  - 매개변수 관련
    - Fetch API로 GET, POST, PATCH, DELETE 등의 연산을 하려면 옵션 객체를 매개변수로 넘겨주어야 했다.
    - 반면, 이 기능들을 Axios로 작성 시, axios.get, axios.post, axios.patch, axios.delete 등등으로 더욱 간편하고 직관적인 코드가 작성된다.
  - 간편한 JSON 변환
    - Fetch API는 body를 반드시 명시적으로 stringify나 json화시켜야 했으나,
    - Axios는 body를 stringify나 json화시키는 동작이 디폴트로 장착되어 있다.
  - 에러 처리
    - Fetch API는 네트워크 장애 등등의 특정 상황에서만 거부 Promise를 반환하는데,
    - Axios는 상태 코드가 200번대를 넘어가면 reject한다.

## Reference
- https://velog.io/@eunbinn/Axios-vs-Fetch
