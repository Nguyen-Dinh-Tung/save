//  ***var / let / const: Scope , Hosting
// const # var , let
// Code blocl : if else , loop , {} ... 
//  khi sử dụng var có thể khai báo if else mà k cần
// code if() ...
// {
//     var course = 'js'
//     console.log(course)
// }
// với let và const cần phải sử dụng câu lệnh if()
//  let và const có thể truy cập trực tiếp vào bên trong block
// TUy nhiên bên ngoài block lại k truy cập được
// {
//     var course = 'const let'
    
//     {
//         {
//             const course = 1234
//             console.log(course)
//         }
//     }
// }
//  var hosting là dạng định nghĩa biến và đưa lên đầu 
//  chúng ta có thể cho giá trị biến trước và định nghĩa sau 
//  khi code thuần js sử dụng var
// khi cần gán lại giá trị cho biến dùng var và let
//  code qua thư viện sử dụng const và let
//  và khi định nghĩa biến k gán lại giá trị với biến đó

//  ** template literals khi 
// sử dụng template string yêu cầu có cặp ``
//  sử dụng template nội stubArray
/*
const courseName = 'javascript'
const test = '123123'
const description = `Course Name: \$${courseName} ${test}`
console.log(description)
//  **
//  sử dụng \n để xuống dòng
const lines = `line 1 
line2 
line 3
`
console.log(lines)

const test1 = 'js'
const test2 = 'js'
const test3 = 'js'
const description2 = `${test} 
${test1} 
${test2}
asdasd
${test3}`
*/
//  *** arrow function hàm mũi tên 
/*
const logge = (log) =>{
    alert(log)
}

logge('mesage') */
// const sum = (a,b) => a+b
// console.log(sum(32123123 , 2))
//  nếu có dấu ngoặc nhọn sau =>
// hàm sẽ k return kết quả ngay 
// nếu muốn return kết quả ngay có dấu ngoặc nhọn 
//  cần gói trong 1 ()
// const sum2 = (a,b) => ({a:a,b:b})

// console.log(sum2(2,2))
/*
const course = {
    name: 'javascript',
    getName: () =>{
        return this.name // this nhận về 1 context
    }
}
console.log(course) */

//  với arrow function k thể tạo ra contructor function

//  ** classes trong class có phương thức contructor
// giúp khởi tạo contructor function

class Course{   
    constructor(name , price){
        this.name = name
        this.price = price
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }

}
const coursePHP = new Course('PHP','100')
const courseJS = new Course('js','100')
console.log(coursePHP)
console.log(courseJS)
