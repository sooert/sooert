/**
 * Optional chaining
 * - ?.
 * - if( a!=null) {}
 * - 널 세이프 개념이 도입
 */
const A = {
    name : "AA", // 맴버 변수
    proc : {
        id : 'coding',
        msg : {
            code : '2001'
        }
    }
}
const B = {
    name : "BB", // 맴버 변수

}
console.log(A.proc?.msg?.code)
console.log(B.proc?.msg?.code) //undefinded를 리턴할뿐 s/w 정상적으로 작동
//console.log(B.proc.msg.code) // s/w 셧다움

/**
 *  Nullish Coalescing Operator
 * - ??
 * - 조건식에서 사용
 */
// A&&B , A||B
// 값대 값으로 가는 경우 조건식으로 처리(true, false)가 안된다
console.log('AA'&& 'hi')

// null, '', 0, undefined -> 조건식에는 false로 간주
console.log('null'|| 'hi')

console.log( '' && 'hi') // ' '
console.log(  0 || 'hi') // 0을 원하는데 hi가 나오는 경우
// 조건식으로 보지 않고 실제적인 비교 연산으로 보고 싶다면 -> ??
console.log(  0 ?? 'hi')