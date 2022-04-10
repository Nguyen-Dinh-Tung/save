//  khai báo biến .
var  fullName = 'Tung'

//*** hàm built-in là loại hàm có sẵn để người dung sử dụng
//* alert(fullName) in ra một thông báo tại màn hình chính 
//* confirm(fullName) in ra một thông báo gồm xác nhận một điều kiện gì đó
//*console.log(fullName) in ra thanh công cụ console một thông tin cụ thể
//* prompt(fullName) in ra một ô input ra cho người dùng nhập vào thông tin 

//* setTimeout(function(){
//     alert('Thong bao')
// }, 1000)  hàm này cho phép tạo thông báo ra web sau khoảng thời 1 lần duy nhất
//* setInterval(function(){
//     alert('ttt')
// } , 5000) hàm này cho phép khởi tạo thông báo ra trình duyệt sau khoảng thời gian và lặp lại nhiều lần
//* console.error(fullName) hàm này cho phép thông báo lỗi ra console.log

//*** toán tử posfix hậu tố , prefix tiền tố 

/** toán tử gán
 * = | x = y | x = y 
 * -= | x -= y | x = x - y 
 * += | x += y | x = x + y
 * *= | x *= y | x = x * y
 * /= | x /= y | x = x / y
 * **= | x **= y | x = x**y tại đây x = x^y
 */
// fullName+= ' Nguyen';

//* ++ , -- posfix hậu tố , prefix tiền tố 

// var a = 4 ;
// var b = 21;
// var t = b%a
// console.log('t: ' , t)

//*  posfix prefix
// var a = 4 ;
// var t = a++ ; 
// console.log('t: ' , t)
// console.log('a: ' , a)

//* toán tử nối chuỗi bằng phương pháp gán
// console.log(fullName)
// ** toán tử so sánh 
// var a = 7;
// var b = 6; 
// if(a<b){
//     console.log('Đúng ')
// }else{
//     console.log('Sai')
// }

// * thêm kí tự vào chuỗi cách đơn giản
// fullName += 'tung'
// console.log(fullName)
// trong object có thể chứa array và function
// var  tesst = {
//     Name : 'Tung Phich',
//     Dis: [123],
//     clone :{
//         name: 123
//     },
//     tét : function(){
//         console.log('test')
//     }
// }
// console.log(tesst)

// var a = 4 ; var b = '2 ';
// if(a<b){
//     console.log('a<b')
// }else{
//     console.log('a>b')
// }

// *** dạng toán tử so sánh 
// ===
// !==
// var a = 2 ; var b = 2;
// if(a===b){
//     console.log('giong')
// }else{
//     console.log('khac')
// }

// function showTest(a , a2 ){
//     if(a){
//         console.log( a )
//     }
//     if(a2){

//         console.log( a2 )
//     }

// }
// showTest(2,3)

//*** hàm arguments
// function writeDialog(){
//    var myString = ''
//    for(var param of arguments){
//        myString += `${param}-`
//    }
//    console.log(myString)
// }
// writeDialog('log','log-2','log-3')

// var isConfirm = confirm('Messege')
// console.log(isConfirm) 
// function sum (a,b){
//     var result = a+b
//     return console.log(result)
   
// }
// sum(12,13);

// function triple(x){
//     var result = x*3;
//     return console.log(result);
// }
// triple(10)
// var cts = function(conts){
//     console.log('abs')
// }
// cts()

var ss = 'asdasd sdasdas asdasd'
// var ccc = '23'
// nối 2 chuỗi đơn giản
// console.log(ss +' '+ ccc)
//** */ kiểm tra số phần tử
// console.log(ss.length)
//** */ kiển tra vị trí đứng của phần tử
// console.log(ss.indexOf('h'))
//** */ cắt kí tự 
// console.log(ss.slice(6,8))
//** Thay đổi kí tự trong chuỗi
// console.log(ss.replace(('js'),('javaScript')))
//** */ Thay đổi ký tự thành viết hoa hoặc viết phương
// console.log(ss.toLocaleLowerCase())
// console.log(ss.toLocaleUpperCase())
//  loại bỏ khoảng trắng ở 2 đầu .
//** */ kiểm tra số kí tự đã bỏ
//** */ console.log(ss.trim().length)
// console.log(ss.trim())

// console.log(ss.split('s'))
// var languages = 'Javascrip , PHP , Ruby'
// tìm vị trí phân biệt và chuyển đổi giữ liệu này sang dữ liệu khác
// console.log(languages.split(' , '))
//  tìm ra kí tự trong chuỗi bằng vị trí đứng
// console.log(ss.charAt(5))
// function getContentLength(content) {
//     console.log(content)
// }
// getContentLength(123)

// var age = {
//     Name: '213'
// }
// var PI = 3.14
// var myString = PI.toString()
// console.log(typeof age)
// console.log(PI.toFixed(5))
// var array = ['js', [1,2],'PHP','Ruby',[3,2]]
// console.log(Object.isArray([]))
// var language = ['javascript' , 'PHP' , 'Ruby']
// console.log(typeof language)
//  để kiểm tra đổi tượng là array hoặc object thì chúng ta dùng phương thức sau
// console.log(Array.isArray([]))
// console.log(array[2])
// console.log(array.toString()) // chuyển đổi dữ liệu từ mãng về string
// console.log(array.join(' , ')) // thêm kí tự vào mãng
// console.log(array.pop()) // xoá phần tử cuối cùng của mảng
// console.log(array.shift()) // xoá phần tử đầu tiên


// var myObject = {
//     Name: 123
// }
// console.log(array.push('123')) // thêm phần tử ở cuối mảng
// console.log(array.unshift('123')) // thêm phân tử vào đầu array
// cú pháp kiểm tra xem là dữ liệu gì
// console.log(Array.isArray(array))
// console.log(array.slice(4,5))  xoá dữ liệu trong mãng từ vị trí chỉ định đến sau vị trí chọn xoá

// console.log(array.splice(2,3,'12','13')) // thêm hoặc xoá phần tử ở vị trí chỉ dịnh và thêm phần tử
// var concat = [23,'sss']  
// console.log(concat.concat(array)) // nối 2 array lại với nhau
// console.log(array)

// làm việc với object
// var myInfo = {
//     Name: 'Nguyễn Đình Tùng',
//     Age: 24,
//     Address: 'Thành Phối Nhồi',
//     getName: function(){
//         return this.Address
        
//     }
// }
// myInfo.Email = 's30.Tung@gmail.com' // thêm phần tử vào object
// myInfo[23] = '123' // thêm vào object một phần tử mà key là số hoặc kí tự đặc biệt., chứa key và kí tự đặc biệt cần sử dụng cú pháp
// delete myInfo.Age  // xoá phần tử trong object bằng key
// myInfo[.23] = '12'
//định nghĩa cho object , tạo key và truyền tham số
//  console.log(myInfo.getName)
/*
function user(Name , Age , Address){
    this.Name = Name
    this.Age = Age
    this.Address = Address
    this.getName = function(){
        return `${this.Name} ${this.Age}`
}
}

var dinhTung = new user('Tung' , 23 , 'Nhoi')
var caoThuy = new user('Thuy' , 20 , 'Ham Rong')
// console.log(dinhTung)
// console.log(caoThuy) 
user.prototype.getClass = '123' // thêm thuộc tính vào hàm đã tạo , đối tượng này được nằm trong proto
user.prototype.getClassName = function(){
    return this.getClass
}
console.log(dinhTung.getClassName())*/
/* hàm check ngày tháng năm 
var date = new Date()
console.log(date)
var year = date.getFullYear()
console.log(year)
var month = date.getMonth() + 1
console.log(month)
var day = date.getDay()
console.log(`${day}\\${year}\\${month}`) */
//  Các hàm toàn học đơn giản
// console.log(Math.PI) // PI của 1 hình tròn
// console.log(Math.round(4.50)) // hàm làm tròn từ 0.5
// console.log(Math.abs(-4.2))  // hàm giá trị tuyệt đối 
// console.log(Math.ceil(4.2)) // hàm làm tròn lên , khi giá trị của số là số hữu hạn
// console.log(Math.floor(4.2)) // làm tròn xuống một số hữu hạn
// console.log(Math.random()) // trả về một dãy số thấp phân tự nhiên
// var random = Math.floor(Math.random() *100)
// var bonus = [
//     'coin 10',
//     'coin 20',
//     'coin 30',
//     'coin 40',
//     'coin 50'
// ]
// console.log(bonus[random])
// if(random<5){
//     console.log('Cuong hoa thnah cong')
// }else{
//     console.log('Cuong hoa fasle')

// }

// console.log(Math.max(2,5,33,0,2))  // tìm số nhỏ nhất
// console.log(Math.min(2,5,33,0,2)) // tìm số lớn nhất
/*** lệnh if else
var date = 2 
if(date === 2){
    console.log('Hôm nay là thứ 2')
}else if(date ===3){
    console.log('Hôm nay là thứ 3')
}else if(date ===4){
    console.log('Hôm nay là thứ 4')
}else if(date ===5){
    console.log('Hôm nay là thứ 5')
}
*/

/** câu lệnh swith tương tự như vòng lặp for , tuy nhiên chúng ta có thể tạo điểm dừng bằng break
var day = 25;
switch(day){
    case 2:
        console.log('Hôm nay là thứ 2')
        break
    case 3:
         console.log('Hôm nay là thứ 3')
         break
         case 4:
        console.log('Hôm nay là thứ 4')
        break
        case 5:
        console.log('Hôm nay là thứ 5')
        break
        case 6:
        console.log('Hôm nay là thứ 6')
        break
}{
    console.log('undefind')
}

*/
var course = {
    course: 'Js',
    coin: 25
}
/*
if(course.coin >0){
    console.log('Khoá học mất phí')
}else if(course.coin === 0){
    console.log('Khoá học miễn phi')
}*/
/** toán tử 3 ngôi so sánh-:-?
var result = course.coin>0?'Khoá học mất phí':'Khoá học miễn phí'
console.log(result)*/
/** Vòng lặp for
for(var i = 0 ; i<1000; i++){
    console.log(i)
} 
/** sử dụng vòng lặp for để in ra các phần tử của array
var myArray = [
    'js',
    'PHP',
    'Ruby',
    'Dart'
]
var arraylength = myArray.length
for(var i = 0 ; i<arraylength ; i++){
    console.log(myArray.length)
}

console.log(typeof course) */
/** lấy ra value từ key hoặc từ value bằng vòng lặp for/in
var myInfo = {
    name: 'Tùng',
    age: 24,
    address: 'Nhồi'
}
for(var key in myInfo){
    console.log(myInfo[key])
}

var test = [
    'js' ,
    'PHP' ,
    'Ruby' ,
]

for( var value in test){
    console.log(test[value])
} */
/** lấy ra value và key với vòng lặp for , trả về là object hoặc string
var languages = [
    'js' , 
    'PHP' ,
    'Ruby'
]
for(var value of languages){
    console.log(languages[value])
}

var language2 = {
    name: 'tung',
    age:24 ,
    address:'Nhoi'
}
console.log(Object.keys(language2))
console.log(Object.values(language2))
for(var key of Object.keys(language2)){
    console.log(key)
    console.log(language2[key])
}
for( var value of Object.values(language2)){
    console.log(value)
}*/

/** vòng lặp do while
var i = 0;
while(i<100){
    console.log(i)
    i++
}

var myArrayWhile = [
    'js',
    'PHP',
    'Dart'
]
while(i < myArrayWhile.length){
    console.log(myArrayWhile[i])
        i++
}

var isSuccess = false

do{
    i++
    console.log('Nap thẻ lần' ,i)
    if(false){
        isSuccess= true
    }
} while(!isSuccess && i<=3)
*/
/*
for (var i = 0 ; i<10 ;i++){
    /* continue bỏ qua các giá trị không cần thiết
    if(i%2 ===0){
        continue
    }*/
    /* break  dừng vòng lặp tại một điểm nhất định
    if(i>5){
        break
    }
    console.log(i)
}
*/
/*
var myArrayNested = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]

for(var i = 0  ; i<myArrayNested.length ; i++){
    for( var j = 0 ; j<myArrayNested[i].length ; j++){
        console.log(myArrayNested[i][j])
    }
}

for (var i = 0 ; i<=100 ; i+=5){
    console.log(i)
}
*/



// for(var value of myObject){
//     console.log(myObject[value])
// }
/*
var test = {
    name: 'Tung',
    age: 18,
    address: 'Nhoi'
}
for(var key of Object.keys(test)){
    console.log(key)
    console.log(test[key])
}
var array = [
    'js',
    'PHP',
    'Ruby'
]
*/
// console.log(Object.values(array))
// console.log(Object.keys(array))
/*
var myArray = [
    'js',
    'PHP',
    'Ruby',
    'Dart'
]
var arraylength = myArray.length
for(var i = 0 ; i<arraylength ; i++){
    console.log(myArray[i])}*/

// console.log(Object.values(myArray))

// var arrayDq = ['a','b','c','d','x','c','d','x']
// console.log(...[new Set(arrayDq)]) // contructor function Set 'toán tử giải[] để lọc ra các phần tử không lặp lại và đưa về array
//** 1. xác định điểm dừng của hàm
//**2. logic handle > tạo ra điểm dừng

// function countDown(number){
//     if(number <= 4){
//         console.log(number)
//         return countDown(number + 1)
//     }
//     return number
// }

// countDown(1)
/* hàm đệ quy 
var array = [
    1,2,3,4,5
]

var deQuy = ['a','b','c','d','x','k']

function loop( start , end , cb ){
    if( start < end){
        cb(start)
        return loop(start + 1 , end , cb)
    }
}
loop(0 , array.length , function(index){
    console.log(array[index])
})

loop(4, deQuy.length ,function(index){
    console.log(deQuy[index])
}) */ 

// var a = 2;
// var b = 3;
// var resul = a + b
// console.log(resul)
// var result = 1
// for (i = 6 ; i>=1 ; i--){
//     result*=i
//     console.log(result)
// }
// function giaitThua(number){
//     var output = 1
//     for(var i = 1 ; i<=number ; i++){
//         output*=i
//         console.log(output)
//     } 
//     return output
// }
// console.log(giaitThua(6))



// var test = ['js','ruby','dart','PHP']

// function loop(start , end , cb){
//     if(start < end){
//         cb(start)
//         return loop (start + 1 , end , cb)
//     }
// }

// loop(0 , test.length ,function(index){
//     console.log(test[index])
// })
// function giaiThua (number){
//    if(number < 6){
//        return number * giaiThua(number + 1)
//    }
//    return number
// }
// console.log(giaiThua(6))
//  vong lap for in ra cac phan tu va vi tri index
// var test3 = ['js', 'PHP' , 'Ruby']


// function loop(start , end , cb){
//     if(start < end){
//         cb(start)
//         return loop(start + 1 , end , cb)
//     }
// }


// loop(0 , test3.length ,function(index){
//     console.log(test3[index])
// })
// vòng lặp for giai thua
// function giaiThua(number){
//     var output = 1 
//     for(var i = 1 ; i<=number ; i++){
//         output = i * output
//     }
//     console.log(output)
// }

// giaiThua(6)
// hàm đệ quy giai thua
// function giaiThua(number){
//     if(number > 0 ){
//         return number * giaiThua(number - 1)
//     }
//     return 1
// }

// console.log(giaiThua(3))

// function giaiThua(number){
//     if(number > 0){
//         return number * giaiThua( number - 1)
//     }
//     return 1
// }

// console.log(giaiThua(3))


// function giaiThua(number){
//     var result = 1 
//     for(var i = 1 ; i < number ; i++){
//         result = result * i
//     }
//     return number * result
// }
// console.log(giaiThua(6))

// function giaiThua(number){
//     if(number > 0){
//      return number * giaiThua (number - 1)
//     }
//     return number = 1
// }

// console.log(giaiThua(6))

/*
var courses = [
    {
        id: 1,
        name: 'js',
        coin:250
    },
    {
        id: 2,
        name: 'Ruby',
        coin:0
    },
    {
        id: 3,
        name: 'Dart',
        coin:250
    },
    {
        id: 4,
        name: 'PHP',
        coin:0
    },
    {
        id: 5,
        name: 'Dart',
        coin:250
    },
    {
        id: 6,
        name: 'Dart',
        coin:250
    }
]*/

// ** forEach sử dụng thuộc tính để in ra các phần tử và giá trị trong mảng
// courses.forEach(function(course , index){
//     console.log(course.id)
// })
// }) // in ra các phần tử trong array chứa object

// **every lặp qua từng phần tử của mảng và lấy ra  phần tử  đầu tiên
// so sánh key được chọn nếu đúng hàm sẽ tiếp tục lấy ra 
// phần tử tiếp theo để so sánh , nếu phần tử nào trong mảng sai
//  sẽ return về kết quả luôn và bỏ qua các phần tử khác
//  và trả về kết quả boleam 
// var isPay = courses.every(function(course , index){
//     return course.coin !== 0
// })
// console.log(isPay)
// ** some sử dụng để lọc tất cả các phần tử của mảng
// chỉ cần 1 phần tử của mảng đúng 
// hệ thống sẽ trả về kết quả boleam
/*
var isSuccess = courses.some(function(course, index){
    return course.coin === 0
})
console.log(isSuccess) */
// ** find lọc qua tất cả các phần tử và tìm ra phần tử nào có 
// giá trị đúng với yêu cầu , thì return ra phần tử đó 
// bỏ qua các phần tử sau
/*
var isCourse = courses.find(function(course , index){
    return course.coin === 250
})
console.log(isCourse) */
//** tìm ra các phần tử trong mảng có chứa giá trị theo yêu cầu
// và lấy ra tất cả các phần tử đạt yêu cầu
/*
var course = courses.filter(function(course , index){
    return course.coin === 250
})

console.log(course) */
// ** thuộc tính map() bắt buộc phải sử dụng hàm expresion function
// thuộc tính này cho phép truy xuất vào tất cả các phần tử của mảng
// và sửa , xoá , thêm vào tất cả các mảng 1 phương thức mới
// cũng có thể lấy ra một phần tử trong mảng
/*
function courseHandler(course ,index,originArray ){
    return {
        id: course.id,
        name: `Khoá học: ${course.name}`,
        coin: course.coin,
        textCoin: `Giá ${course.coin}`,
        ten:`Tung Phich`,
        index:index,
        length: courses.length,
        originArray:originArray
    }
}

var newCourses = courses.map(courseHandler)

console.log(newCourses) */
/** thuộc tính map còn có thể trả về kết quả là một thẻ 
function courseHandler(course ,index,originArray ){
    return `<h2>${course.name}</h2>`

}

var newCourses = courses.map(courseHandler)
console.log(newCourses.join(''))*/


// thuộc tính reduce trong function handler return giá trị gì 
// thì giá trị đó là giá trị lưu chữ
/*
var totalCoin = 0;
for(var course of courses){
    totalCoin+= course.coin
}
console.log(totalCoin)*/

// var i =0
// function coinHandler(accumulator , currentValue , currentIndex , originArray){
    /**i++; // ví dụ mở ra để tham khảo về quá trình lặp
    var total = accumulator + currentValue.coin
    // console.log(currentIndex , currentValue ,originArray)
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ': accumulator,
        'Giá khoá học': currentValue.coin,
        'Tích trữ được': total
    })*/
    // return accumulator + currentValue.coin
// }

// var totalCoin = courses.reduce(coinHandler , 0)
// console.log(totalCoin)
/*
var i = 0
var totalCoin = courses.reduce(function(total , course){
    i++
    console.log(i, total , course)
    return total + course.coin
},0)
console.log(typeof totalCoin)
var numbers = [2,3,4,5,6,9,9]
var totalNumbers = numbers.reduce(function(total , number){
    return total + number
})
console.log(totalNumbers) */
/*
var depthArray = [2,3,[3,4],5,6,[7,8,9]]
var flatArray = depthArray.reduce(function(flatOutput , depthItem){
    return flatOutput.concat(depthItem)
}, [])
console.log(flatArray)
//  làm phẳng mảng trong mảng
var stringArray = ['h',['t','m','s'],'t','k','m',['h','t'] ]
var flatstringArray = stringArray.reduce(function(a,b){
    return   a.concat(b)
}, [''])
console.log(flatstringArray) */
/*
var topics = [
    {
        topic: 'front-end',
        courses:[
            {
                id: 1,
                title: 'HTMLCSS'
            },
            {
                id: 3,
                title: 'Dart'
            }
        ]

    },
    {
        topic: 'front-end',
        courses:[
        {
            id: 4,
            title: 'Ruby'
        },
        {
            id: 5,
            title: 'PHP'
        },
        {
            id: 6,
            title: 'js'
        }]
    }
]

var test = topics.reduce(function(a,b){
    return a.concat(b.courses)
}, [])
console.log(test)

var test1 = test.reduce(function(a,b){
    return a.concat(b.title)
}, [])
console.log(test1)
var newTest1 = test1.map(function(a,b){
    return `<div>${a} <p>${b}</p></div>`
})

console.log(newTest1.toString()) */

/*
var newCourses = topics.reduce(function(a,b){
    return a.concat(b.courses)
}, [])

console.log(newCourses)

var courses = newCourses.reduce(function(a,b){
    return a.concat(b.title)
},[])
console.log(courses)
var htmls = newCourses.map(function(a){
    return `<div><h2>${a.title}</h2> <p>id:${a.id}</p></div>`

})
console.log(htmls)*/
/*
const numbers = [1,2,3,4,5]

Array.prototype.reduce2 = function(callback , result){
    var i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[0] 
    }
    for( ; i < this.length ; i++){
        result = callback(result , this[i])
        result = result + this[i]
    }
    return result
}

var totalNumbers = numbers.reduce2(function(total) {
    return total
})
console.log(totalNumbers) */
/*
const numbers = [1,2,3,4,5]

Array.prototype.reduceForme = function(a,b){
    var i = 0
    if(arguments.length < 2){
        i = 1
        b = this[0]
    }
    for( ; i <this.length ; i++){
        b = a(b , this[i])
        console.log(b)
        b = b + this[i]
    } 
    return b
}

var totalNumbers = numbers.reduceForme(function(total){
    return   total  
})

console.log(totalNumbers)

var totalNumber = numbers.reduce(function(a,b){
    return a+b
})
console.log(totalNumber) */

//** includes methods  hàm này có sẵn cho string / array
// cấu trúc console.log(title.includes('kí tự cần tìm ' , vị trí bắt đầu tìm kiếm))
// sau khi tìm kiếm kết quả hảm sẽ trả về false & true
// var title =  [
//     'js', 'PHP' , 'Dart'
// ]

// console.log(title.includes('js'))
// console.log(title.splice(1,1,'ruby','reactjs'))
// console.log(title)
/*
var topics = [
   {
       topic: 'fron-tend',
       courses: [
           {
               id: 1,
               course: 'js'
           },
           {
               id: 1,
               course: 'HTML'
           },
           {
            id: 1,
            course: 'CSS'
            },
            {
                id: 1,
                course: 'Reactjs'
            }

       ]
   },
   {
        topic: 'fron-tend',
        courses: [
            {
            id: 1,
            course: 'HTML'
            },
            {
                id: 1,
                course: 'CSS'
            },
            {
                id: 1,
                course: 'Node js'
            },
            {
                id: 1,
                course: 'js'
            }

        ]

   }
]

var topic = topics.reduce(function(a,b,index){
    return a.concat(b.courses)
},[])
console.log(topic)

var newCourses = topic.map(function(a,b){
    return `<h2>${b}${a.course}</h2>`
})
console.log(newCourses) */

/*
var numbers = [3,1,4,5,6,8,8]
Array.prototype.reduce2 = function(a,b){
    var i = 0 ;
    if(arguments.length < 2){
        i = 1 ;
        b = this[0]
    }
    for( ; i < this.length ; i++){
        b = a(b , this[i])
        console.log(b)
        b = b + this[i]
    }
    return b
}

var totalNumbers = numbers.reduce2(function(a,b){
    return a
})
console.log(totalNumbers) */

/*
var topics =[
    {
        topic: ' front-end',
        courses: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 1,
                title: 'CSS'
            },
            {
                id: 1,
                title: 'js'
            },
            {
                id: 1,
                title: 'Reactjs'
            }
        ]
    },
    {
        topic: ' Back-end',
        courses: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 1,
                title: 'CSS'
            },
            {
                id: 1,
                title: 'js'
            },
            {
                id: 1,
                title: 'node js'
            }
        ]
    }
]

var newCourses = topics.reduce(function(a,b){
    return a.concat(b.courses)
},[])
console.log(newCourses)

var course = newCourses.reduce(function(a,b){
    return a.concat(b.title)
},[])
console.log(newCourses)


var htmls = course.map(function(a,b){
    return `id: ${b} <h2>${a.title}</h2>`
})
console.log(htmls)


var courses = newCourses.reduce(function(a,b){
    return a.concat(b.title)
},[])

console.log(courses) */

//** callback 
/**
 * 1 là Hàm
 * và được chuyền qua đối số của hàm khác
 * được gọi lại trong hàm nhận đối số
 */
/*
function myFunction(param){

    if( typeof param === 'function'){

        param('Hoc Lap trinh')
    }
}

function myCallback(values){
    console.log('Values: ' ,values)
}
myFunction(myCallback)*/
/*
var courses = [
    'javascript',
    'PHP',
    'Ruby'
]
Array.prototype.map2 = function(a ,b){
    var output = [];
    arraylength = this.length 
    for(var i = 0 ; i < arraylength ; i++){
        b = a(this[i]) , i
        console.log('value',b)
        output.push(b)
    }
    return output
}
var htmls = courses.map2(function(a,b){
    return `<h2>${a}</h2>`
})
console.log(htmls.join(''))
// var htmls = courses.map2(function(a){
//     return `<h2>${a}</h2>`
// })

// console.log(htmls.join(''))*/


/** Thiết kế hàm forEach 
 * khi cần lặp qua tất cả phần tử thì dùng cấu trúc 
 * (var i = 0 ; i<this.length ; i++)
 * để lặp qua tất cả phần tử
 * nếu 0 dùng cấu trúc 
 * (var index in this){
 * console.log(index)
 *  console.log(index,this.hasOwnProperty(index)){
 *  cấu trúc này giúp phân biệt xem key trong mảng this
 * có thuộc phần tử phương thức gần nhất ko
 * nếu thuộc thì hàm sẽ lặp qua các phần tử đó và in ra ngoài
 * }
 * }
*/
/*
var courses = ['js', 'PHP','Dart']

Array.prototype.forEach2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            cb(this[index],index , this)
        }
    }
}
courses.length = 100
courses.push('Dart','Ruby')
courses.forEach2(function(a , b , c){
    console.log(a , b , c)
})


// console.log(output) */
/*
var courses = [
    {
        name: 'javascript',
        coin: 250
    },
    {
        name: 'Ruby',
        coin: 0
    },
    {
        name: 'Dart',
        coin: 250
    },
    {
        name: 'node js',
        coin: 250
    },
    {
        name: 'Reactjs',
        coin: 0
    }
];*/
/*
Array.prototype.filter2 = function(cb){
    output = []
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index] , index , this)
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}

var filter = courses.filter2(function(course){
    return course.coin > 0
})
console.log(filter)
*/
/*
Array.prototype.forEach2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            cb(this[index], index)
        }
    }
}

var outputCourses = courses.forEach2(function(course,index){
    console.log(index,course.coin)
})

Array.prototype.filter2 = function(cb){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index))// lọc ra phần tử của phương thức gần nhất
        {
            var result = cb(this[index],index)
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}

var coursesFilter = courses.filter2(function(course){
    return course.coin > 0
})
console.log(coursesFilter) */
/*

Array.prototype.some2 = function(cb){
    var output
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index],index)
            if(result){
                output = true
            }else{
                output = false
            }
        }
    }
    return output
}

var someCourses = courses.some2(function(course){
    return course.name === 'Reactjs'
})
console.log(someCourses) */

/*
Array.prototype.some2 = function(cb){
    var output
    for( var index in this){
        if(this.hasOwnProperty(index)){
            result = cb(this[index],index)
            if(result){
                output = true
            }else{
                output = false
            }
        }
    }
    return output
}

var someCourses = courses.some2(function(course){
    return course.coin === 1000
})
console.log(someCourses)*/
/*
Array.prototype.every2 = function(cb){
    var output = true
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index],index)
            if(!result){
                output = false
                break
            }
        }
    }
    return   output
}

var everyCourses = courses.every2(function(course){
    return course.coin > 0
})

console.log(everyCourses)*/
/*
// filter

Array.prototype.filter2 = function(cb){
    var output = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            result = cb(this[index],index)
            if(result){

                output.push(this[index])
            }
        }
    }
    return output
}
var filterCourses = courses.filter2(function(course){
    return course.coin > 0
})
console.log(filterCourses)
// some 
Array.prototype.some2 = function(cb){
    var output = false
        for(var index in this){
            if(this.hasOwnProperty(index)){
                result = cb(this[index],index)
                if(result){
                    output = true
                    break
                }
            }
        }
        return output
}

var someCourses = courses.some2(function(course){
    return course.name == '0'
})
console.log(someCourses)

// forEach 
Array.prototype.forEach2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            cb(this[index],index)
        }
    }
}

var forEachCourses = courses.forEach2(function(course){
    console.log(course.name)
})
// every 
Array.prototype.every2 = function(cb){
    var output = true
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index],index)
            if(!result){
                output = false
                break
            }
        }
    }
    return output
}
var everyCourses = courses.every2(function(course){
    return course.coin >= 0
})
console.log(everyCourses) */

/**HTML DOM
 *  HTML DOM là hình mẫu có sẵn của tổ chức w3c
 * DOM có 3 thành phần
 * Element  là các thẻ của web
 * Attribute là thuộc tính , ví dụ : trong thẻ h1 có class , id là thuộc chính , 
 * thẻ img có src là thuộc tính , thẻ a cũng vậy
 * text là đoạn chữ , đoạn văn bản
 */

// Tất cả các điểm giao nhau của web là Node

// HTML DOM và DOM API
//  javascript cung cấp các phương tiện giúp truy cập vào tài liệu của HTML DOM
// js có thể chạy trên : Browser (front end)| sever (nodejs) (back end)

// Browser : HTML ->  DOM -> WEB API
//  Document Object là đại diện cho toàn bộ website , mỗi khi muốn truy suất 
//  vào các thành phần của website thì cần phải mượn document để truy suất đến

// console.log(document)
// document.write('Helo') phương thức write giúp truy suất và in ra content 
//  thông qua js ra layout web

/**
 * 1. Element: document. id , class , tag , CSS selector 
 * HTML Collection (tập dữ liệu của HTML)
 */
//  mẫu lấy ra element
//  trong một trang web id chỉ được đặt duy nhất 1 tên cho 1 id , nếu cố tình vi phạm
//  Quy chuẩn DOM sẽ không lấy ra được id đặt trùng nhau đó
/* cách gọi ra elemen 1
var headerNodeId = document.getElementById('header')
var headerNodeClass = document.getElementsByClassName('header')
var headerNodeTab = document.getElementsByTagName('p')
*/


// getElementsBy (ClassName , id  , Tab...)
/*
console.log({
    element: headerNodeId
})
console.log({   
    element: headerNodeClass
})
console.log({
    element: headerNodeTab
}) */
// ** cách truy suất ra element 2
// document.querySelector('#ID , .Class , tab')
// var headerNodeClass = document.querySelectorAll('#head-1 .header-2')
/**querySelectorAll('#head-1 .header-2) */
/** querySelector('#head-1 .header-2:nth-child(1)'); 
 cách lấy ra class nếu trong thẻ cha chứa nhiều class giống nhau*/
// console.log(headerNodeClass[1])
/* HTML Collection (forms) gọi forms
console.log(document.forms[1])
console.log(document.forms['form-1'])*/
// /* 
// console.log(document.anchors)


// var listItemNodes = document.querySelectorAll('.box-1 li')
// console.log(listItemNodes)
/** Phương pháp gọi ra element methods 3
var boxNode = 
    document.querySelector('.box-1')
console.log(boxNode.querySelectorAll('li'))
// */
// var getId = document.querySelector('.box__item-1')
// console.log(getId.getElementsByClassName('box-content-1'))


// var boxNode = document.querySelector('.box__list-1')
// var contentNode = document.querySelector('.content')
// console.log(boxNode)
//  thêm trực tiếp giá trị vào thẻ , qua toán tử gán
// boxNode.href = 'http://Heading'
//  thêm một thuộc tính cho element
//  Nếu thêm thuộc tính tự định nghĩa , chúng ta không thể lấy ra 
// thuộc tính thông qua gọi trực tiếp như thuộc tính được định nghĩa 
// phải sử dụng getAtribu để lấy ra
// boxNode.setAttribute('id', 'Heeding')
// console.log(boxNode.getAttribute('id', 'Heeding'))
//  thuộc tính tự định nghĩa 
// contentNode.setAttribute('data' , ' random')
// console.log(contentNode.getAttribute('data'))
// contentNode.title = 'Heeding2'
// contentNode.setAttribute('src', 'https://dame')
// contentNode.style = 'color:red'
// contentNode.setAttribute('id' , 'tét')
// console.log(contentNode.id)
// console.log(contentNode.title)
// boxNode.setAttribute('data' , 'tesst')
// boxNode.title = 'Heeding'
// console.log(boxNode)
// console.log(boxNode.title)
// console.log(boxNode.getAttribute('data'))
// console.log(boxNode.id)
// boxNode.style = 'color: yellow'

// var boxNode = document.querySelector('.content:nth-child(2)')
// boxNode.setAttribute('class','tet') 
// console.log(boxNode.getAttribute('class'))
// console.log(boxNode)

// console.log(document.images)
// innerText , textContent,  sử dụng 1 trong 2 thuộc tính để lấy ra text

// var secondElement = document.querySelector('.box__item-2 .box-content-2')
//  thực thi đoạn mã để lấy ra văn bản của class 
// console.log(secondElement.innerText) 
// innerText trả lại đầy đủ tất cả thuộc tính của class
//  và hiển thị đúng góc nhìn từ trang code lên web
// console.log(secondElement.textContent) // sử dụng textContent sẽ bỏ qua tẩ cả nội dung trong element
//  đoạn mã được thực thi khi chạy hết tất cả các thẻ
// không sử dụng được 2 lệnh cùng 1 lúc
// console.log(secondElement.innerText)

// secondElement.innerText = `

// te
// te

// `
// secondElement.textContent = `

// tesst


// `
// secondElement.innerText , textConttent sử dụng để sửa đoạn văn bản của element được chích 
//  và xoá đoạn văn bản gốc
//  innerHTML với thuộc tính này chúng ta có thể thêm được atb , text và element cho 1 thẻ
// outerHTML
// var boxElement = document.querySelector('.box-2')
// console.log(boxElement.outerHTML)
// innerHTML tt này sẽ thêm vào bên trong element gốc 1 element mới
// boxElement.innerHTML = '<p class="hedding">123</p>'
//  khi console.log tt này sẽ in ra các phần tử bên trong element gốc
// console.log(boxElement.innerHTML)
// outerHTML tt này sẽ xoá bỏ element gốc và thay thế bằng chính bản thân no
// boxElement.outerHTML = '<p>test</p>' 
// outerHTMl khi in nó ra tab console.log() , nó sẽ in ra chính bản thân element Gốc 
// console.log(boxElement.outerHTML)

// *** xoá phần tử trong list 
// ** xoá phần tử đầu tiên trong list
// var firstElement = document.querySelector('.boxItem')
// firstElement.removeChild(firstElement.firstElementChild)
// ** thêm vào cuối cùng list 1 phần tử 
// var textNode = document.createTextNode('water')
// firstElement.appendChild(textNode)
//  nextSibling sử dụng để lấy element tiếp theo của element đang đứng
// var linksElement = document.querySelector('a')
// console.log(linksElement)
// linksElement.setAttribute('data','link')
// console.log(linksElement.getAttribute(data))


// var boxElement = document.querySelector('span')

// console.log(boxElement)
/*
boxElement.title = '21'
boxElement.setAttribute('random' , 'blue')
console.log(boxElement.getAttribute('random'))

console.log([boxElement])*/



// boxElement.innerHTML = '<div class="box-new"><ul class="box-item"><li class = "box-link">javascript</li></ul></div>'
// boxElement.outerHTML = '<div class="box-outer"><ul class ="box-list"><li class = "box-item">javascript</li></ul></div>'
/** style phương pháp điều chỉnh thuộc tính css qua element
console.log(boxElement.style)
boxElement.style.width = '100px'
boxElement.style.height = '100px'
boxElement.style.backgroundColor = 'blue'

Object.assign(boxElement.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'green'
}) */

// console.log(boxElement.style.backgroundColor)

// ** classlist property phương thức này là 1 hàm nên cần đối số
/**
 * add thêm class vào element
 * contains kiểm tra xem có class trong element k 
 * remove xoá bỏ class trong element 
 * toggle nếu không có class trong element thì sẽ thêm class mới , nếu có thì sẽ xoá bỏ class đó
 */
// console.log(boxElement.classList.value) // trả về value trong class ,
// [] mảng phần tử trả về phần tử theo mảng
// thuộc tính này có thể thêm nhiều class cùng 1 lúc , cách nhau bằng dấu ,
// boxElement.classList.add('red' ,'blue' ,'yelow') 
/*
setTimeout(() =>{
    boxElement.classList.remove('blue')

},5555)
setInterval(() =>{
    boxElement.classList.toggle('red')

},500)

console.log(boxElement.classList.contains('yelow')) */

// DOM events là hành vi sự kiện diễn ra trong lúc ng dùng tương tác với web
//  và cả sự kiện của web
/**
 * Attribute events thêm thuộc tính vào events
 * assign events using the element node gán thuộc tính vào events
 * 
 */
//  sự kiện click , sự kiện này xảy ra khi người dùng click vào 1 phần tử
// khi sử dụng các thuộc tính ui , event cần thêm tiền tố on trước thuộc tính 
//  ví dụ : onclick , ondrag , ondbclick .....
//<ul class="box__list-1" onclick="style.color = 'blue'" ondrag = "style.display = 'none'">
//  cấu trúc Attribute trên thẻ html
/*
var boxElements = document.querySelector('.boxItem .content')
console.log(boxElements)
console.log(boxElements.classList.values)
boxElements.classList.add('red')
boxElements.classList.remove('content')

setInterval(() => {
    boxElements.classList.toggle('red')
},0) */

// var elements = document.querySelectorAll('.content')
// console.log(elements)
/*
for(var i = 0 ; i < elements.length ; i++){
    elements[i].onclick = function(e){
        e.target.style.color = 'blue'
    }
} */
/**
 * DOM events
 * 1. input/select
 * 2.Key up / down
 */
// input & change
// var element = document.querySelector('input[type=text]')
// console.log(element)
// var inputValue
// cấu trúc hàm trả về giá trị khi điền vào ô input
// element.oninput = function(e){
//     console.log(e.target.value)
//     // console.log(inputValue)
// }
// cấu trúc hàm key up trả về giá trị ngay | down trả về value  sau giá trị mới 
// keypress giữ phim và chạy thuộc tính liên tục
// element.onkeydown = function(e){
//     console.log(e.target.value)
// // }
// element.onkeydown = function(e){
//     console.log(e.which)
// kiểm tra phím và check người dùng nhấm phím để xử lý event
//     switch(e.which){
//         case 27:
//             console.log('exit');
//             break;
//     }
// }
/*
document.onkeydown = function(e){
    // console.log(e.which);
    switch(e.which){
        case 27:
            console.log('exit')
            break;
        case 13: 
            console.log('send chat')
            break;
    }
}
var element2 = document.querySelector('input[type=checkbox]')
// cấu trúc hàm trả về giá trị true & false khi check vào ô checkbox\
element2.onchange = function(e){
    console.log(e.target.checked)
}
// cấu trúc hàm trả về giá trị của thẻ select | option
var element3 = document.querySelector('select')
console.log(element3)
element3.onchange = function(e){
    console.log(e.target.value)
}

*/

/** DOM EVENTs
 * 1. preventDefault sử dụng phương thức này để loại bỏ hành vi mặc định của thẻ HTML trên web
 * 2. stopPropagation loại bỏ sự kiện nổi bọt 
 */
//  anchors => lấy được thẻ a khi có thuộc tính name=""
// var elements = document.querySelectorAll('.box__list-1 a')
// console.log(elements)
// preventDefault cấu trúc xử lý loại bỏ hành vi mặc định.
// for(var i = 0 ; i<elements.length ; i++){
    // elements[i].onclick = function(e){
        // if(!e.target.href.startsWith('https://www.facebook.com/pharrealjun/')){
        // e.preventDefault();
        // }
    // }
// }

// var elements = document.querySelector('.courses')
// elements.onmousedown = function(e){
//     e.preventDefault()
// }
// elements.onclick = function(e){
//     console.log(e.target)
// }

// var noibot = document.querySelector('.noibot')
// noibot.onclick 
// =function(e){
//     console.log('div')
// }

// var noibot2 = document.querySelector('.noibot button')

// noibot2.onclick 
// =function(e){
//     e.stopPropagation() // stop propagation ngăn chặn nổi bọt
//     console.log('click me')
// }

/*
var aElements = document.querySelectorAll('.boxItem a')
console.log(aElements)

for (var i = 0 ; i<aElements.length ; i++){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('https://www.facebook.com/pharrealjun/')){
            e.preventDefault();
        }
    }
}
var liElement = document.querySelector('.courses')
console.log(liElement)

liElement.onmousedown = function(e){
    e.preventDefault()
}

var i2Element = document.querySelector('input[type=text]')

i2Element.onkeydown = function(e){
    console.log(e.target.value)
}

var ipElement = document.querySelector('input[type=checkbox]')
ipElement.onclick = function(e){
    console.log(e.target.checked)
}

var sElement = document.querySelector('select')
console.log(sElement)



sElement.onchange = function(e){
console.log(e.target.value)
}

var noibot = document.querySelector('.noibot')
var noibot2 = document.querySelector('.noibot2')

noibot.onclick = function(e){
    console.log('div')
    e.stopPropagation()
}
noibot2.onclick = function(e){
    console.log('click me')
    e.stopPropagation()
}*/

// DOM event sử dụng khi cần lắng nghe sự kiện nào đó và k muốn gỡ bỏ
// event listener sử dụng vừa lắng nghe vừa gỡ bỏ event 

// *** Event listener
/**
 * addeventlistener dùng để thêm sự kiện 
 * removeEvenlistener dùng để huỷ bỏ sự kiện
 */
/*
var btn = document.querySelector('.btn')
function workOne (){
    console.log('Viec 1')
}

btn.addEventListener('click', workOne)

function workTwo(){
    console.log('Viec 2')
}

btn.addEventListener('click', workTwo)
setTimeout(function(){
    btn.removeEventListener('click', workTwo)
}, 5000)
*/

//** JSON là 1 định dạng dữ liệu(chuỗi)
// javaScript object Notation 
// JSON thể hiện các dạng dữ liệu : number , boolean , null , array , object
// chuyển đổi mã / dịch lại mã
// encode | decode
//  để ngăn cách các dữ liệu trong JSON , chúng ta sử dụng cặp nháy kep và dấu phẩy
var json = '["js","PHP"]'
// var json = '{"name":"Tung Phich","age": 24}' // viết dạng js -> JSON

var a = 'null'
// console.log(JSON.parse(json)) // chuyển từ dạng JSON -> js parser
// var workOject = JSON.parse(json)

console.log(JSON.stringify({
    name:'tung phich',
    age: 24
})) // chuyển đổi từ javascript sang json


// ** promise 

// sync là đồng bộ 
// Async bất đồng bộ
//  setTimeout , setInterval , fetch , XMLHttpreqest , file reading
// request animation frame
// callback
/* bất đồng bộ
setTimeout(function(){
    console.log(1)
},0)
console.log(2)*/

// callback hell
// pyramid of doom
/* callback hell
setTimeout(function(){
    console.log(1) //1
    setTimeout(function(){
        console.log(1) //2
        setTimeout(function(){
            console.log(1) //3
            setTimeout(function(){
                console.log(1) //4
                setTimeout(function(){
                    console.log(1) //5
                }) 
            })
        })
    })
}) */
// Promise là 1 object contructor , truyền vào tham số là 1 function
// 1.new Promise
// 2. tạo function excutor
// 1.pannding chờ
// 2.fulilled 
// 3. rejected thất bại
/*
var promise = new Promise (
    // executor
    function(resolve , reject){ // trong hàm này này truyền vào 2 tham số 
                                //  resolve là thành công 
                                // reject là thất bại
        // viết logic 
        // khi thành công : gọi resolve()
        // khi thất bại : reject()
        // fake call API
        reject('false')
    }
)
// trước khi có promise chúng ta thường sử dụng callback để xử lý dữ liệu 
//  tuy nhiên thường xảy ra vấn đề callback hell 
// và người ta sinh ra promise để xử lý vấn đề này
promise
    //  khi dữ liệu được xử lý , nếu thành công sẽ chạy vào then , thất bại chạy vào catch
    // finally chạy khi có kết quả của then hoặc catch
    .then(function(success) {
        console.log(success)
    })
    .catch(function(a){
        console.log(a)
    })
    .finally(function(){
        console.log('Done')
    })
*/
/*
var newPromise = new Promise(function(resolve, reject){
    resolve()
})


newPromise
    .then(function() {
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,3,4])
            },3000)
        })
    })
    .then(function(data) {
        console.log(data)
        return 2
    })
    .then(function(data) {
    console.log(data)
        return 3
    })
    
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('Done')
}) 
*/
/*
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
    .then(function(data){
            console.log(2)
            return new Promise(function(resolve , reject){
                return reject('co loi')
            })
    })
    .then(function(data){
            console.log(3)
            return sleep(1000)
    })
    .catch(function(error){
        console.log(error)
    })

*/

// 1. Promise.resolve
// 2.Promise.reject
// 2.Promise.all

// var promise = new Promise(function(resolve, reject){
//     // resolve('Success')
//     reject('Error!')
// })
// nếu đã có dữ liệu sẵn đúng hoặc sai chúng ta gọi trực tiếp resolve hoặc reject để xử lý
// var promise = Promise.resolve(2)
// var promise = Promise.reject('Error!')
// promise
//     .then(function(success){
//         console.log(success)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

//  có 1 số thư viện : output luôn luôn là 1 promise
/*
var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1])
    },2000)
})
var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2,3])
    },3000)
})
Promise.all([promise1, promise2])
.then(function(result) {
    var flat = result.reduce(function(a,b){
        return a.concat(b)
    })
    console.log(flat)
})*/


//  thực hành 
/*
var users = [
    {
        id: 1,
        name: 'Tung Phich',
    },
    {
        id: 2,
        name: 'son dang',
    },
    {
        id: 3,
        name: 'java',
    }
]

var cmts = [
    {
        id: 1 , 
        user_id: 1,
        content: 'Chua ra video'
    },
    {
        id: 2 , 
        user_id: 2,
        content: 'vua xong e e'
    },
    {
        id: 1 , 
        user_id: 1,
        content: 'thank ^^'
    },
]
*/
//  1. lấy cmts
//  2. từ cmts lấy ra user_id
//  3. từ user_id lấy ra user tương ứng

// Fake API
/*
function getCmts(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(cmts)
        },1000)
    })
}

function getUsersByIds(usersIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return usersIds.includes(user.id)
        })
        resolve(result)
    })
}

getCmts()
    .then(function(cmts){
        var userIds = cmts.forEach(function(a){
            console.log(a.user_id)
        })
    })
getUsersByIds([1,2])
    .then(function(user){
        console.log(user)
    }) 

*/
/*
function getComents(){
    return new Promise(function(resolve){
        resolve(cmts)
    })
}

function getUsersByIds(cmtsIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return cmtsIds.includes(user.id)
        })
        resolve(result)
    })
}
getComents()
    .then(function(coments){
        var cmtsIds = cmts.map(function(cmtsElements){
            return cmtsElements.user_id
        })
        getUsersByIds(cmtsIds)
            .then(function(users){
                console.log(users)
            })
    })
*/
/*
function getIdsCmts(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(cmts)
        },2000)
    })
}
function getUsersByIds(cmtsIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return cmtsIds.includes(user.id)
        })
        resolve(result)
    })
}

getIdsCmts()
    .then(function(coments){
        var cmtsIds = cmts.map(function(cmtsElements){
            return cmtsElements.user_id
        })
        getUsersByIds(cmtsIds)
            .then(function(user){
                console.log(user)
            })
        console.log(cmtsIds)
    })
*/
/*
function getCmts(){
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve(cmts)
        },3000)
    })
}

function getUserByIdcmts(getIdsCmts){
    return new Promise (function(resolve){
        var result = users.filter(function(user){
            return getIdsCmts.includes(user.id)
        })
        console.log(result)
        resolve(result)
    })
}

getCmts()
    .then(function(coment){
        var getIdsCmts = cmts.map(function(cmt){
            return cmt.user_id
        })
        return getUserByIdcmts(getIdsCmts)
            .then(function(user){
              return {
                user:user,
                coment:coment
              }
            })
    })
    /*
    .then(function(data){
        console.log(data)
       var commentBlock =  document.getElementById('coment-box');
       var html = '';
        data.coment.forEach(function(comment){
            var user = data.user.find(function(user){
                return user.id === comment.user_id
            })
            html+= `<li>${user.name}: ${comment.content} </li>`
            console.log(comment.content)
        })
        commentBlock.innerHTML = html
    }) */
/*
    .then(function(data){
        console.log(data)
        var comentBox = document.getElementById('coment-box');
        var html = '';
        data.coment.forEach(function(comment){
            console.log(comment.content)
            var userBlock = data.user.find(function(user){
                return user.id === comment.user_id
            })
           html+= `<li>${userBlock.name}: ${comment.content}</li>`
        })
        comentBox.innerHTML = html
    })*/

// 1. front-end: xây dựng giao diện ng dùng
// 2. xây dựng logic xử lý + cơ sở dữ liệu
// API Application programing interface 
// Được định nghĩa là giao diện, lập trình, ứng dụng
// Là cổng giao tiếp giữa các phần mềm
// Backen(ok) -> API (url) -> Fetch -> JSON|XML
// -> JSON.parse -> trả về javascript types
// Render ra giao giện với HTML
var postApi = 'https://jsonplaceholder.typicode.com/posts' // link fetch
//  trả về luồng dữ liệu 
/*
fetch(postApi)
    .then(function(response){
        return  response.json()
        // JSON.parse: JSON -> js types
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
           <li> ${post.title}</li>
           <p> ${post.body}</p>
            </li>`
        })
        var html = htmls.join('')
        console.log(html)
        document.getElementById('post-box').innerHTML = html

    })
    .catch(function(err){
        console.log(err)
    })

*/
/*
fetch(postApi)
    .then(function(response){
        return response.json() // sử dụng phương thức .json() để hàm trả về js parse
    })
    // tiếp theo in dữ liệu từ js parse ra layout
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                <li>${post.title}</li>
                <li>${post.body}</li>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-box').innerHTML = html
    })
    .catch(function(err){
        console.log(err)
    })
*/

// JSON server : API server (faje) / Mock API --->ok
// CRUD
//      -Create: tạo mới --> POST tạo dữ liệu
//      -Read: lấy dữ liệu --> lấy dữ liệu GET
//      - Update: chỉnh sửa dữ liệu PUT /Path
//      - Delete: Xoá -->  DELETE
//  -Postman
/*
var coursesApi = ('http://localhost:3000/courses')

fetch(coursesApi)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        var html = ''
        var newCourses = courses.map(function(course){
            return `<li>
                test json server
                <li>content: ${course.name}</li>
                <li>description: ${course.description}</li>
            </li>`
        })
        html = newCourses.join('')
        document.getElementById('post-box').innerHTML = html
    }) */
/*

    var coursesApi = 'http://localhost:3000/courses'

    function start(){
        getCourse(renderCourses)
        handleCreateForm()

    }

    start()


    // functions

    function getCourse(callback){
        fetch(coursesApi)
            .then(function(response){
                return response.json()
            })
            .then(callback)
    }

    function  createCourse(data){

    }

    function renderCourses(courses){
        var listCourseBlocks = document.querySelector('.list-courses')
        var htmls = courses.map(function(course){
            return`<li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>`
        })
        listCourseBlocks.innerHTML = htmls
    }

    function handleCreateForm(){
        var createBtn = document.querySelector('#create')
        createBtn.onclick = function(){
            var name = document.querySelector('input[name="name"').value
            var description = document.querySelector('input[name="Description"').value
            console.log(name)
            console.log(description)
        }
    } */

    var coursesApi = 'http://localhost:3000/courses'
    var listCoursesBlocks = document.querySelector('.list-courses')
    function start(){
        getCourses(renderCourses)
        handleCreateForm()
    }
    start()
     

    function getCourses(callback){
        fetch(coursesApi)
            .then(function(response){
                return response.json()
            })
            .then(callback)
    }

    function renderCourses(courses){
        var htmls = courses.map(function(course){
            console.log(course)
            return `
                <li class= "course-item-${course.id}">
                <h4>${course.name || course.editName}</h4>
                <p>${course.description || course.editDescription}</p>
                <button onclick="handleDeleteCourses(${course.id})">Xoá</button>
                <button onclick="handleEditCourses(${course.id})">Sửa</button>
                </li>
            `
        })
        var layoutBlock = document.querySelector('.list-courses').innerHTML = 
        htmls.join('')
    }
    function handleCreateForm(){
        var createBtn = document.querySelector('#create')
        createBtn.onclick = function(){
            var name = document.querySelector('input[name = "name"]').value
            var description = document.querySelector('input[name = "description"]').value
            var formData = {
                name:name,
                description:description
            }
            createCourse(formData , function(){
                getCourses(renderCourses)
            })
        }
    }

    function createCourse(data , callback){ 
        var options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        }
        fetch(coursesApi, options)
            .then(function(response){
                response.json
            })
            .then(callback)

    }

    function handleDeleteCourses(id){
        var options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
        }
        fetch(coursesApi + '/' +id, options)
            .then(function(response){
                response.json
            })
            .then(function(){
               var courseItem =  document.querySelector('.course-item-' + id)
               if(courseItem){
                courseItem.remove()
               }
            })

    }
    function handleEditCourses(id , callback){
        var name = document.querySelector('input[name = "name"]').value =
        document.querySelector(`.course-item-${id} h4`).innerText
        var description = document.querySelector('input[name = "description"]').value =
        document.querySelector(`.course-item-${id} p`).innerText;
        var btnEdit = document.querySelector('#update')
        btnEdit.onclick = function(){
            var editName = document.querySelector(`.course-item-${id} h4`).innerText = 
            document.querySelector('input[name = "name"]').value
            var editDescription = document.querySelector(`.course-item-${id} p`).innerText = 
            document.querySelector('input[name = "description"]').value
            var formdata = {
                editName: document.querySelector('input[name = "name"]').value,
                editDescription:document.querySelector('input[name = "description"]').value
            }
            editCourse(formdata , id , callback)
        }
    }

    function editCourse(data, id,callback){
        var opstions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        }
        fetch(coursesApi +'/'+ id, opstions)
            .then(function(response){
                return response.json();
            })
            .then(callback)
            setTimeout(function(){
                var name = document.querySelector('input[name = "name"]').value
                =''
                var description = document.querySelector('input[name = "description"]').value
                =''
            },2222)
    }

