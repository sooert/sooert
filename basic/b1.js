// 한줄 주석
/*
    여러줄 주석
*/ 
// 변수 : 타입 추론형
// 문법
/*
    키워드 변수명;
*/
// 의미 : 값을 저장하는 그릇, 값을 가리키고 있는 주소(참조, 레퍼런스)를 들고있다
// 키워드 : var(올드버전), const, let(최신버전)
//           const : 상수, var/let : 변수 
// 변수명 : 알파벳 or _ 로 시작, 두번째 문자부터는 숫자 가능
//         스타일 myName, my_name 등,..., 값을 설명하기 좋게 네이밍 처리

// var
var a = 10;
console.log(a);

a = 11;
console.log(a);

// 상수 예시(환경변수, 변하지 않는 설정값, 절대값, 고정값,...)
const MY_AGE = 20;
console.log(MY_AGE);

// 예외처리 -> s/w는 중단되면 안된다.
try {
    MY_AGE = 21; 
} catch (error) {
  console.log(error);
} 

// let : 뒤에서 별도로 설명

/////////////////////////////////////
// 프로그램 방식
// 절차적 프록램밍(초기시절) -> 재사용성을 높이자 -> 함수도입 
//                         -> 함수지향적 프로그래밍 -> 객체/클래스 도입 -> 객체지향프로그래밍
// 함수 : (메소드), 재사용성을 높인다 => 생산성 향상.. 모든 방식으로 프로그래밍 가능
//         트랜드 -> 함수지향적 프로그래밍 선호
// 문법 
/*
// 표준 함수
function 함수이름( [파라미터] ) {
    [statements(수행문)]
    [return [값]]
}
*/

// 더하기 함수 정의, 표준함수의 정의는 메모리상에 먼저 올라간다
// 순수함수, 전역변수가 전혀 함수 내부에 존재하지 않음, 외부 요인에 함수가 영향받지 않음
function add(x, y) {
    return x+y;
}
//함수 호출 
console.log(add(1, 2));

/*
익명 함수 -> 함수인데, 이름이 없음 => 1회성, 값처럼 처리하는 방식, 함수인자에서 사용

function ([parameters]) {}
       [statements]
*/
// console.log(add2(1, 100)) : 정의된곳보다 먼저 사용하면 오류
var add2 = function (x, y) {
    return x+y;
}
console.log(add2(2, 3));

// 익명함수, 함수인자로 사용, 일종의 콜백함수 스타일
function test(cb) {
   var b =  cb(1,2);
   console.log(b);
}
test(function (x,y){
    return x+y;
} )


// 에로우 함수 -> 뒤에서 체크(최신문법) ()=>{}

// 속성 : class, 객체
// Entity(엔티티), 이세상에 존재하는 모든 유형/무형의 존재
// 이런 엔티티를 프로그래밍에 표현하기 위해서는 어떤 문법이나 방식이 필요 => class 도입
// 엔티티를 프로그래밍 세계에 표현하기 위한 청사진 도구 문법 형식 방식,...
// 클래스 이름, 멤버, 속성, 메소드,.. 수퍼클래스, 부모, 자식, 상속,..
// class => 실제로 작동될려면 => 메모리상에 상주 => new 클레스명() : 객체가 생성되었다.
// 메모리상에 주소를 가지고 공간을 차지하고 뭔가 일을한다.
// 클레스의 인스턴스가 객체이다. 클레스는 객체의 청사진이다...
// 객체는 메모리상에 존재, 클레스는 코드를 작성할때 문법적으로만 존재(코드로만 존재)
// 객체 지향적 프로그래밍의 3대 속성(장점, 톡징)
// 상속성(업그레이드 유리), 다형성, 인캡슐레이션(보안)

// 키워드 => {} 객체 <=> json <=> 파이썬의 딕셔너리, 자바의 집합,...
// style 1 : 객체 리터럴, 1회성으로 사용, 여러개의 파라미터를 묶어서 전달할때 유리
var param = {
    name : '이름', // 멤버 변수
    age :  20,     // 멤버 변수
    getType : function(){} // 멤버 함수
};
console.log(param.name);
console.log(param.age);
console.log(param.getType);

// style 2 : object 객체를 확장
// style 3 : 생성자 함수
// style 4 : 생성자 함수 + prototype 확장(완성형, 메모리를 가장 효율적 사용)
// 생성자함수 + prototype(를 이용하여 확장)
function Person( name ){
    this.name = name;

}
Person.prototype.age = 10;
Person.prototype.getName = function(){}

var p = new Person( "모라" )
console.log(p)
console.log(p.age)

// style 5 (최신문법) : 가장 자바 문법과 유사함, class 키워드 사용

// 올드버전에서 기타, 연산자, 조건문 ,제어문, 반복문, 배열등 모두 생략