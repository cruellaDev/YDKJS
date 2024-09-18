// 함수는 값이므로 함수를 객체의 프로퍼티로 할당할 수 있다.
var whatToSay = {
  greeting() {
    console.log("안녕하세요!");
  },
  question() {
    console.log("이름이 뭔가요?");
  },
  answer(myName) {
    console.log(`제 이름은 ${myName}입니다.`);
  }
}

whatToSay.greeting(); // 안녕하세요!
