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
const FS = require('fs')

class Test {
    constructor() {
        this.File1 = './basic/a.txt'
        this.File2 = './basic/b.txt'
        this.File3 = './basic/c.txt'
    }
    tostr(src) {
        return new String(src).toString()
    }
    tostr2 = (src) => {
        return new String(src).toString()
    }
    tostr3 = function (src) {
        return new String(src).toString()
    }
    tostr4 = src => new String(src).toString()
    normal() {
        /**
         * 비동기 함수 -> 처리 결과는 등록된 콜백함수를 호출하면서 전달됨
         * 콜백함수의 1번인자는 무족건 에러
         */
        // 롤백함수의 1번인자는 무족건 에러
        // File1 읽고 값 출력 -> Fil2를 읽고 마무리 -> File3 읽고 출력 : 이 순서는 유지
        console.log('1. 파일을 읽는다.')
        FS.readFile(this.File1, (err, data) => {
            console.log(`2.${this.File1}파일을 다 읽었습니다.`, err, this.tostr(data))
            FS.readFile(this.File1, (err, data) => {
                console.log(`4.${this.File2}파일을 다 읽었습니다.`, err, this.tostr(data))
                FS.readFile(this.File1, (err, data) => {
                    console.log(`5.${this.File3}파일을 다 읽었습니다.`, err, this.tostr(data))
                })
            })

        })
        console.log('3. 작업 종료')
    }
    // Promise 패턴
    myPromise(fileName) {
        // 비동기 함수를 Promise로 감싸서, 콜백을 통해 외부로 전달하겠금 구성
        return new Promise((cb)=>{
            FS.readFile(fileName,(err, data)=>{
                cb(data)
            })
        })
    }
    test_myPromise() {
        //Promise 패턴으로 만들어진 객체를 사용
        this.myPromise(this.File1)
        .then((data)=>{
            console.log('a.txt 읽었습니다. =>', data, this.tostr(data))
            return this.myPromise(this.File2)
        })
        .then((data)=>{
            console.log('b.txt 읽었습니다. =>', data)
            return this.myPromise(this.File3)
        })
        .then((data)=>{
            console.log('c.txt 읽었습니다. =>', data, this.tostr(data))
        })
    }
    // async - await 패턴(핵심)
        myPromise2(fileName) {
            // 비동기 함수를 Promise로 감싸서, 콜백을 통해 외부로 전달하겠금 구성
            return new Promise((cb, rejcet)=>{
                FS.readFile(fileName,(err, data)=>{
                    cb(data)
                })
            })
        }
    
     // 비동기 함수 앞에는 await를 붙이고, 이름 감싸는 바깥쪽 함수는 async를 붙인다.
     async test() {
        console.log(this.tostr(await this.myPromise2(this.File1)))   
        await this.myPromise2(this.File2)
        console.log(this.tostr(await this.myPromise2(this.File3)))
       }
    }  
let t = new Test()
//t.normal()
//t.test_myPromise()
t.test()