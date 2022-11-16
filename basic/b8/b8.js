// EXNext에서 추가되건, 변경된 문법 7
// 자바스크립트는 비동기처리가 기본 루틴
// 비동기 처리를 위해서 -> 콜백함수를 활용하여 순서를 맞춘다 -> 자꾸 진행이 되면 -> 코드가 아주 깊어진다 -> 콜백핼이 발생
//해결방안
/**
 *  - Pormise - then
 *  - generator - yield
 *  - async- await -> 비동기적 코드를 동기적 코드로 변환 처리해서 사용(가장 많이 사용됨)
 *      - 통신, 디비 등 엑세스 할때 사용
 */ 
// 파일 3개로 준비하여 순차적으로 읽어서 출력하는 코드 작성

// js -> FS(FileSystem)를 처리하는 모듈 -> node에서 제공, npmks.org 가면 전세계에서 제공
const FS= require('fs')

class Test {
    constructor () 
{
        this.File1 = './basic/a.txt'
        this.File2 = './basic/b.txt'
        this.File3 = './basic/c.txt'
}
    tostr (src) {
        return new String(src).toString()
    }
    tostr2  = (src) => {
        return new String(src).toString()
    }
    tostr3 = function (src) {
        return new String(src).toString()
    } 
    tostr4 = src => new String(src).toString()
    normal() 
{
        /**
         * 비동기 함수 -> 처리 결과는 등록된 콜백함수를 호출하면서 전달됨
         * 콜백함수의 1번인자는 무족건 에러
         */ 
        console.log('1. 파일을 읽는다.')
        FS.readFile(this.File1, (err, data)=>{
            console.log(`2.${this.File1}파일을 다 읽었습니다.`, err, this.tostr(data))
        })
        console.log('3. 작업 종료')
}
}
let t = new Test()
t.normal()