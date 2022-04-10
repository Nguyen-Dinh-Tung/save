//  Khai  báo biến . từ đầu tiên viết thường toàn bộ , từ thứ 2 trở đi viết hoa chữ cái đầu tiên
// var fullName = 'Nguyen Dinh Tung';
// var age = 26;
/*

//  gọi hạm thông báo alert
// alert(fullName);
// alert(age);

// hàm built-in 
/**
 * alert
 * console
 * confirm
 * prompt
 * set time out
 * set interval
 */
// tạo thông báo trong cuồi crl
// console.error(fullName)
// tạo thông báo trước khi vào web
// confirm('Xác nhận bạn đủ tuổi')
// tạo thông báo trước khi vào web và ô input giúp user nhập mã
// prompt('Xác nhận bạn đủ tuổi')


// hàm này giúp chúng ta lựa chọn thời gian bao lâu sau khi mở web sẽ sử dụng hàm .
// setTimeout(function() {
//     alert('Thong bao')
// }, 5000) 

// hàm setInterval là hàm thông báo sau khoảng thời gian bao lâu sẽ được hiện lên
// setInterval(function() {
//     console.log('Day la thong bao' + Math.random)
// }, 1000)

// console.error(fullName)
// confirm(fullName)
// prompt(fullName)
// setTimeout(function(){
//     alert(fullName)
// }, 1000)


// setInterval(function() {
//     console.log('day la thong bao' + Math.random)
// }, 1000)

// var a = 9;
// var b = 2;
// var c = a%b;
// console.log(c)



// toán tử posfix hậu tố , prefix tiền tố .

/**
 * = | x = y | x=y
 * += | x+= y | x= x+y
 * -= |x-=y |x=x-y
 * *=| x*=y | x= x*y
 * /=| x/=y | x=x/y
 * **= | x**=y | x= x**y
 */

// var a = 4;
// var t=a++
// console.log('t: ' ,t)
// console.log('a: ' ,a)

// toán tử nối chuỗi
// var firstName = 'Dinh';
// firstName+= 'tung';

// console.log(firstName)

// toán tử so sánh

// var a = 1;
// var b = 2;
// if(a==b){
//     console.log('Dung')
// } else{
//     console.log('Sai')
// }
// var age = 16;
// var canBuyAlcohol = age > 18;
// console.log(canBuyAlcohol)
// 6 giá trị của javascript
/**
 * number
 * false
 * null
 * undefined
 * NaN
 * ''_""
 */


// if(false){
// console.log('Dung')
// }else{
// console.log('Sai')
// }

// var a=1;
// var b=2;
// var c = 3;
// if(!(a<0)){
//     console.log('Dung')
// }

/**1 dữ liệu nguyên thuỷ : primitive data
 * number
 * string
 * boolean
 * undefined
 * null
 * symbol
 * 2 dữ liệu phức tạp complex data
 * function
 * object
 */

// number type
// var a= 1;

// string type
// var fullNam='Tùng'
// khi muốn thêm dấu nháy đơn trong ngoặc thì cần thêm dấu \ trước ngoặc
// var fullNam='Tùng \'tung'

// boolean type kiểu dữ liệu chỉ thể hiện đúng sai

// var isSuccess = true
// undefined type là kiểu dữ liệu biến không đặt giá trị
// var ah;

//  null type là kiểu dữ liệu thể hiện không có gì 
// var isNull = null

// symbol là kiểu dữ liệu'

// var id = Symbol('')

// function

// var myFunction = function(){
    // alert('hi')

// myFunction();

// object types

// var myObject = {
//     name:'Tung',
//     age:18,
//     adress: 'Thanh Hoa',
//     myFunction: function(){

//     }
// };
// console.log('Myobject', myObject)

// var myArray = [
//     'javascript',
//     'PHP',
//     'ruby'
// ];
// console.log(myArray)

// console.log(typeof id)

/**
 * ===
 * !==
 * 2 dạng so sánh này sẽ so sánh cả data type lẫn value 
 */
// var a = 1 ; 
// var b = 2;

// if(a<b){
//     console.log("a<b")
// }else{
//     console.log('a>b')
// }&

// tên hàm có thể chứa chữ số từ a-z 0-9 và chữ hoa , k được đặt số ở kí tự đầu tiên

// function showDialog(){
//     alert('hi cac ban')
// }
// toán tử call () dùng để gọi hàm .

// showDialog();

// truyền tham số 
// function showTest(a , a2 ){
//     if(a){
//         console.log( a )
//     }
//     if(a2){

//         console.log( a2 )
//     }

// }
// showTest()

// hàm arguments
// function writeLog(){
//     var myString ='';
//     for(var param  of arguments){
//         myString+=`${param}-`
//     }
//     console.log(myString)
// }
// writeLog('Log1','Log2',3)

// var isConfirm = confirm('Messege')
// console.log(isConfirm) 

// function sum(a,b){
//     return a+ b ;
// }
// var result = sum(10,20)
// function write(){
//     var myString = ''
//     for(var param of arguments){
//         myString+=`${param}-`
//     }
//     console.log(myString)
// }
// write('log1', 'log2', 'log3');
// console.log(result)
// var result= cong(2,8)
// console.log(result)
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,8))

// function triple(x) {
//     return x * 3;
// }
// var result = triple(10)
// console.log(result)
// showMessage();

// function showMessage(){
//     console.log('Declaration function');
// }
// var showMesaage = function(){
//     console.log('Expression function');
// }
// showMesaage();
// var firtName = 'Tung Phich'
// var lastName = 'Tung Gambino'
// console.log(firtName + ' ' + lastName)

// var myString ='Hoc js tai f8 Tung Phich'
// 1. length kiểm tra độ dài của chuỗi
// console.log(myString.length)
// 2. find index kiểm tra vị trí của chuỗi trong đoạn code tra về kết quả là chuỗi đầu tiên tìm thấy
// console.log(myString.indexOf('ch'))
// 3. Cut string cắt chuỗi 
// console.log(myString.slice(1,3))
// 4.replace 
// console.log(myString.replace(/js/g ,('Javascript')))
// console.log(myString.replace('js'),('Javascript')))

// 5. convert to upper case , phương thức thay đổi hàm thành viết hoa
// console.log(myString.toLocaleUpperCase())

// 6. convert to lower case viết thường chuỗi .
// 7. trim loại bỏ tất cả khoảng trắng ở 2 đầu
// var myString3 =' f8 Tung Phich       '

// console.log(myString3.trim().length)

// 8. split
// var languages = 'Javascrip , PHP , Ruby'
// console.log(languages.split(' , '))
// var myString2 ="Tung Phich"
// console.log(myString2.charAt[3])
// function getContentLength(content) {
   
    
// }


// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength('JavaScript'));
// // console.log(getContentLength('Hello World'));
// Number.isInteger(20)
// console.log(isInteger)
// // 

// Làm việc với số .
// 1. cách tạo 
// cách 1
// var age = 18;
// var PI = 3.14;
// cách 2
// var otherNumber = new Number(9)

// var myString = PI.toString()
// console.log(typeof myString)
// console.log(PI.toFixed())
// Mảng trong javascript
// 1.Tạo mảng
// var language = ['javascript' , 'PHP' , 'Ruby']
// console.log(typeof language)
//  để kiểm tra đổi tượng là array hoặc object thì chúng ta dùng phương thức sau
// console.log(Array.isArray([]))
// truy xuất số lượng phần tử
// console.log(language.length) length là số lượng phần tử
// Lấy phần tử theo index là vị trí đứng của phần tử
// console.log(language[2])

// làn việc với mảng ***
// var language = ['javascript' , 'PHP' , 'Ruby' ,'java','dart','c++']
// 1.to string chuyển kiểu dữ liệu từ array sang string
// console.log(language.toString()); 
// console.log(language.join(' - ')); 
// 3.Pop xoá element  cuối mảng và trả về phần tử đã xoá >< """Shift""" ngược lại với pop
// console.log(language.pop())
// console.log(language)
// nếu xoá hết tất cả phần tử trong mãng , và tiếp tục sử dụng pop sẽ trả về undefind
// 4. Push thêm một hoặc nhiều phần tử vào cuối mãng >< unshft ngược lại với push sẽ đưa vào đầu mãng phần tử mới
// console.log(language.push('Dart','java'))
// console.log(language.unshift('C++'))

// splicing giúp xoá đi phần tử , từ vị trí chỉ định index của phần tử + số lượng phần tử muốn xoá nếu không xoá thêm tham số thứ 3 để thêm phần tử
// language.splice(4,0,'C' /* có thể thêm vô số phần tử*/)
// console.log(language)
// 8.Concat giúp nối 2 mảng với nhau
// var language2 = ['modifier','ABC']
// console.log(language2.concat(language))
// slicing 
// console.log(language.slice(1,2))


// var Test = ['js','PHP','html','css']
// console.log(Test.pop())
// console.log(Test.join(' , '))
// console.log(Test.shift())
// console.log(Test.push('Of'))
// console.log(Test.unshift('Fedin'))
// console.log(Test.splice(2,1,'tt','pp'))
// console.log(language.concat(Test))
// console.log(Test.slice(0,3))
// var FB = 'facebook'
// var myInfo ={
//     age:18,
//     Name:'Tung Phich',
//     address: 'Thanh Pho nhoi',
//     [FB]:'Tùng Phích',
//     getName: function(){
//         return this.address
//     }
// }
// myInfo.email='s30.tung@gmail.com'
// myInfo['my-option'] = 'asds'
// var newZiLean ='Name'
// myInfo['mao-tu'] = '123'
// delete myInfo.address
// Nếu trong object có function thì gọi là phương thứ
// other gọi là thuộc tính property
// console.log(myInfo.getName())

// function User(firstName , lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }
// var author = new User('Tung' , 'Phich' , 'IMG');
// var author = new User('Hien' , 'Hồ' , 'IMG');
// console.log(author)

// console.log(User)

// function person(Name , Age , address){
//     this.Name = Name;
//     this.Age = Age;
//     this.address = address;
//     this.getName = function(){
//         return `${this.Name} ${this.Age}`
//     }
// }
// person.calc = '8s'
// var Thuy = new person ('Thuỷ' , '18' , 'Hàm Rồng')
// var Tung = new person ('Tùng' , '24' , 'Nhồi')

// Thuy.title ='Siu dễ thương'

// console.log(Thuy.calc)
// console.log(Thuy.getClassNam)
// object protype sử dụng để thêm thuộc tính hoặc phương thứ vào trong contructor
// person.prototype.getClassNam = function(){
//     return this.getClassNam
//     }
// đối tượng date dùng để check ngày giờ tháng năm .
// var date = new Date();
// var year = date.getFullYear()
// var month    = date.getMonth() + 1
// var day = date.getDay()

// console.log(date)
// console.log(year)
// console.log(month)
// console.log(`${day}/${month}/${year}`)
//  math object  math k phải contructor 
// math.PI trả về tỷ số giữa chu vi hình tròn với đường kính
// console.log(Math.PI)
// Math.round() làm tròn một số
// console.log(Math.round(2.49))
// Math.abs giá trị tuyệt đối của ố
// console.log(Math.abs(4.1))
// Math.ceil làm tròn giá trị lên 
// console.log(Math.ceil(4.1))
// Math.floor làm tròn giá trị xuống 
// console.log(Math.floor(4.1))
// Math..ramdom() trả về một dãy số thập phân nhỏ hơn một bất kì
// console.log(Math.random())

// var random = Math.floor(Math.random() *10)
// var bonus = [
//     'coin 10',
//     'coin 20',
//     'coin 30',
//     'coin 40',
//     'coin 50',
// ]
// console.log(bonus[random])
// if(random < 5){
//     console.log('Cường hoá thành công!');
// }

// Math.min tìm ra số bé nhất trong chuỗi
// console.log(Math.min(-10,5,3,12,364));

// Math.max tìm ra số lớn nhất trong chuỗi
// console.log(Math.max(-10,5,3,12,364));

// Câu lệnh rẽ nhánh 0 if else , 
// var date = 5 ;
// Nếu đối tượng đầu tiên đúng thì sẽ đc in ra giá trị đối tượng đầu tiên k tính các trượng hợp tiếp theo
// if(date === 2){
//     console.log('hôm nay là thứ 2')
// }else if(date === 3){
//     console.log('hôm nay là thứ 3')
// }else if(date === 4){
//     console.log('hôm nay là thứ 4')
// }else{
//     console.log('Không biết')
// }
// Câu lệnh rẽ nhánh - switch, 
// var day = 25;
// tương tự vòng lặp , nhánh switch cho phép tính toán trong các case nếu gặp case đúng sẽ lấy kết quả của case đó luôn và bỏ qua các trường hợp sau
// switch(day){
//     case 2:
//         console.log('hom nay thu 2')
//         break;
//     case 3:
//         console.log('hom nay thu 3')
//         break;
//     case 4:
//         console.log('hom nay thu 4')
//         break;
//     case 5:
//         console.log('hom nay thu 5')
//         break;
//         default:
//             console.log('Khong biet')
// }

// // * toán tử 3 ngôi - Ternary operator
// var coure = {
//     name: 'javascript',
//     coin: 00
// }

// if(coure.coin > 0){
//     console.log(`${coure.coin} coins`);
// }else{
//     console.log('mien phi');
// }

// var resul = coure.coin >0?`${coure.coin} coins`:'Miễn phí'
// console.log(resul)

// var a = 1;
// var b = 2;
// var c = a >0?a:b;

// * vòng lặp - loop*
/**
 * 1 for lặp với điều kiện đúng
 * for/in - lawpj qua key của đối tương
 * for/of - lặp qua value của đối tượng
 * do/while - lặp ít nhất 1 lần nếu lần sau đúng sẽ dừng
 */
// Vòng lặp for
// for(var i = 0 ; i<10000 ;i++){
//     console.log(i)
// }
// for/in lặp với key của đối tượng
// var myArray = [
//     'PHP',
//     'JS',
//     'Ruby',
//     'Dart'
// ]
// var arrayLength = myArray.length
// for(var i = 0 ; i<myArray.length ;i++){
//     console.log(myArray[i])
// }

// * for/in loop
// sử dụng key để lấy ra value và lấy ra key của object
// var myInfo = {
//     Name: 'Dinh Tung',
//     Freind: 'Thuy',
//     Age: 24
// }
// for(var key in myInfo){
//     console.log(myInfo[key])
// }

// var languages = [
//     'js',
//     'PHP',
//     'Ruby',

// ]
// var test = 'javascript'
// for(var key in test){
//     console.log(test[5])
// }
// // * for/of loop 
// // lấy ra các giá trụ từ array
// var languagesOf = [
//     'javascript',
//     'PHP',
//     'Java'
// ]
// for (var value of languages2){
//     console.log(value)
// }
// Lấy ra các giá trị từ object


// var languageOf2 = {
//     Name: 'Tung',
//     Age: 18,
//     Adress: 'Thanh Pho Nhoi'
// }
// console.log(Object.keys(languageOf2))
// console.log(Object.values(languageOf2))

// for(var value of Object.keys(languageOf2)){
//     console.log(value)
//     console.log(languageOf2[value])

// }
// for(var value of Object.values(languageOf2)){
//     console.log(value)

// }

//* Vòng lặp whi loop
// var myArrayWhile = [
//     'js',
//     'PHP'
// ]
// var i = 0;

// while(i<1000){
//     console.log(i)
//     i++;
// }

// while(i < myArrayWhile.length){
//     console.log(myArray[i])
//     i++
// }
//* do/while dù điều kiện đúng hay sai , vòng lặp sẽ luôn chạy vòng lặp 1 lần
// var i = 0;
// var isSuccess = false;

// do{
//     i++
//     //code
//     console.log('Nap thẻ lần ' + i)
//     if(false){
//         isSuccess = true ;
//     }
// }while(!isSuccess && i <= 3);
// * break & continue in loop
// for(var i =0 ; i<10 ; i++){
//     // bỏ qua các vòng lặp không cần thiết continue
//     if(i%2 !==0){
//         continue
//     }
//     console.log(i)
//     // break khiến vòng lặp dừng lại khi đến một điểm
//     // if(i>=5){
//     //     break
//     // }
    
// }

// Vòng lặp lồng nhau Nested loop
// var myArrayNested =[
//     [1,3],
//     [5,6],
//     [10,12]
// ];
// for(var i=0 ; i < myArrayNested.length ; i++){
//     for(var j = 0 ; j<myArrayNested[i].length ;j++){
//         console.log(myArrayNested[i][j]);
//     }
// }

// Thêm ví dụ về vòng lặp
// for(var i = 100 ; i>0 ; i--){
//     console.log(i)
// }
// for(var i = 0 ; i<=100 ; i+=5){
//     console.log(i)
// }
// for( var i = 100 ; i>0 ; i-=5){
//     console.log(i)
// }
// Hàm đệ quy , hàm đệ quy là hàm sẽ tự gọi lại chính nó
// var arrayDq = ['a','b','c','d','z','x','k' ,'a','b','c']
// console.log([...(new Set(arrayDq))])
// 1. xác định điểm dừng
// 2. Logic handle => tạo ra điểm dừng
// function countDown(num){
//     if(num < 10){
//         console.log(num)
//     return countDown( num +1)
//     }
//     return num
// }

// countDown(0)
// function loop(start, end , cb){
//     if(start < end ){
//         cb(start)
//         return loop(start + 1 , end , cb)
//     }
// }

// var array = ['js' , 'PHP' , 'Ruby']
// loop(0 , array.length , function(index){
//     console.log(array[index])
// })

// function giaiThua (number){
//     if(number > 0){
//         return number *giaiThua(number - 1)
//     } return 1;
// }

// console.log(giaiThua(6))
/**
 * Array methods:
 * forEach() => sử dụng để duyệt qua từng phần tử của mảng
 * every()
 * some()
 * find()
 * filter()
 * map()
 * ruduce()
 */
// var courses = [
// {
//     id:1,
//     Name:'js',
//     Coin:250
// },
// {
//     id:1,
//     Name:'Ruby',
//     Coin:0
// },
// {
//     id:1,
//     Name:'HTML , css',
//     Coin:0
// },
// {
//     id:1,
//     Name:'PHP',
//     Coin:250
// },
// {
//     id:1,
//     Name:'PHP',
//     Coin:250
// },
// {
//     id:1,
//     Name:'Reactjs',
//     Coin:250
// }
// ]
//  forEach in ra các phần tử trong mảng .
// courses.forEach(function(index, course){
//     console.log(courses)
// });
// lọc ra các phương thức của các mảng phải thoả mãn điều kiện gì đó ,trả về true false
// var isFree = courses.every(function(course){
//     return course.Coin >= 0;
// });
// console.log(isFree)

// some lọc ra các phương thức của các mảng phải thoả mãn 1 điều kiện gì đó ,trả về true false
// var isFree = courses.some(function(course){
//     return course.Coin < 0;
// });
// console.log(isFree)

// find() tim một phần tử đúng và trả về phương thức chứa phần tử đó , nếu có phương nào trùng lặp thì luôn luôn trả về phương thức xếp trước
// var course = courses.find(function(course, index){
//    return course.Name === 'PHP';
// });
// console.log(course)

// filter tìm ra phần tử có chứa giá trị và lấy ra ngoài , (số nhiều phần tử được lấy ra nếu trùng lặp)
// var listcourses = courses.filter(function(course, index){
//    return course.Name === 'PHP';
// });
// console.log(listcourses)


// map() sẽ sử dụng khi muốn thay đổi phần tử của phương thức .
// function coursesHanler(course, index, originArray){
//     // console.log(course)
//     return {
//         id: course.id,
//         Name:`Khoá học: ${course.Name}`,
//         Coin: course.Coin,
//         CoinText: `Giá: ${course.Coin}`,
//         index:index,
//         originArray: originArray,
//     }

// }
// var editCourses = courses.map(coursesHanler)
// console.log(editCourses)

// reduce() tổng giá trị của một phần tử trong phương thức .
// var totalCoin = 0;
// for(var course of courses){
//     totalCoin+=course.Coin
// }
// console.log(totalCoin)
// var i = 0
// function coinHandler (accumulator , currentValue , currentIndex , originArray){
//  i++;
//  var total = accumulator + currentValue.Coin ;
//  console.table({
//      'Lượt chạy: ': i,
//      'Biến tích trữ: ':accumulator,
//      'Giá khoá học: ' :currentValue.Coin,
//      'Tích trữ được: ' :total
// , })
    
// return accumulator + currentValue.Coin 
// }
// var totalCoin = courses.reduce(coinHandler,0)
// console.log(totalCoin)

// var totalCoin = courses.reduce(function(total , course){
//     return total+=course.Coin   
// },0)
// console.log(totalCoin)

// var numbers= [250,0,0,250,250,250,]
// var totalNumbers = numbers.reduce(function(0 , number){
//     return total+=number
// },0)
// console.log(totalNumbers)
// hàm chạy này có thể chứa 1-3 tham số là : phần tử trong mãng , ví trị(index) , và mảng gốc có thể đặt biến tuỳ trọn cho mảng gốc
// function coursesHandler (course , index , iginArray){
//     return{
//         id: course.id,
//         Name:`Khoá học: ${course.Name}`,
//         Coin: course.Coin,
//         TextCoin: `Gía ${course.Coin}`,
//         index:index,
//         iginArray:iginArray,
//     }
// }
// var editCourses = courses.map(coursesHandler)
// console.log(editCourses)
// flat làm phẳng mảng dưới đây
// var depthArray  = [1,2,[3,4],5,6,[7,8,9,'3']]
// var flatArray = depthArray.reduce(function(flatArray,depthItem){
//     return flatArray.concat(depthItem)        
// },[])
// console.log(flatArray)

// var topics =[
//     {
//         topics:'Front-end',
//         courses: [
//             {
//                 id:1,
//                 title:'HTML , CSS'
//             },
//             {
//                 id:2,
//                 title: 'Js'
//             }
//         ]
//     },
//     {
//         topics:'Back-end',
//         courses: [
//             {
//                 id:1,
//                 title:'PHP'
//             },
//             {
//                 id:2,
//                 title: 'NodeJs'
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function(courses ,topic) {
//     return courses.concat(topic.courses)
// },[])
// console.log(newCourses)

// Array.prototype.reduce2 = function(callback, result){
//     let i = 0 
//     if(arguments.length<2){
//         i = 1
//         result = this[0]
//     }
//     for(; i<this.length ; i++){
//         result = callback(result , this[i],i,this) 
//     }
//     return result;
// };
// const numbers = [1,2,3,4,5];
// const totalNumbers = numbers.reduce2(function(total,numner,index,array){
//     console.log(total,numner,index,array)
//     return total+=numner
// });// giá trị khởi tạo , có thể sử dụng là '' , number ,{} , []
// console.log(totalNumbers);

// Array.prototype.reduce3 = function(callback , result){
//     let i = 0 ;
//     if(arguments<this<2){
//         i = 1
//         result = this[0]
//     }
//     for (; i<this.length ; i++ ){
//         result = callback(result,this[i],i , this)
//     } 
//     return result
// }

// const arrayNumbers = [1,2,3,4,5,6,7]
// const totalArrayNumbers = arrayNumbers.reduce3(function(total,number){
//     return total+= number
// })
// console.log(totalArrayNumbers)

// incules method
// var courses = ['js' , 'PHP' , 'Dart'];
// tìm kiêm chuỗi có xuất hiện trong string không , tham số thứ nhất là kí tự cần tìm , tham số thứ 2 là vị trí bát đầu cần tìm
// console.log(title.includes('web desing', 1))
// console.log(courses.includes('PHP'))

// *** callback 
/**
 * 1 callback là hàm được truyền qua đối số khi gọi hàm khác
 * điều kiện : bản thân nó là 1 hàm 
 * callback phải là hàm
 * truyền qua đối số trong hàm nhận đối số
 * được gọi lạ
 */
// function myFunction(param){
//     if(typeof param === 'function'){

//         param(222)
//     }
// }

// function myCallback(value){
//     console.log('Giá trị: ' , value)
// }

// myFunction(myCallback)

// callbal phần 2

// Array.prototype.map2 = function(callback){
//     var arraylength = this.length
//     for(var i = 0 ; i<arraylength;i++){
//         callback(this[i] , i)
//     }
// }
// var courses = ['js' , 'PHP' ,'Ruby']

// courses.map2(function(course,index){
//     console.log(index, course)
// })

// var htmls = courses.map2(function(course){
//     return`<h2>${course}</h2>`
// })
// console.log(htmls.join(''))

Array.prototype.map2 = function(callback){
    var output = [] , arrayLength = this.length
    for ( var i = 0 ; i<arrayLength ; ++i){
       var result  = callback(this[i], i)
       console.log('result: ',result)
       output.push(result)
    }
    return output
}


var courses = ['PHP' , 'JS' , 'Ruby']
var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`
})
console.log(htmls.join(''))