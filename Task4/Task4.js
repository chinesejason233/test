//第一题
function add(a,b){
    return a+b;
}
alert(add(1,2));
//第二题
var arr=["周一","周二","周三","周四","周五"];
function shouldwork(date) {
    for(i=0;i<5;i++){
        if(date==arr[i]){
            alert("上班");
        }
    }
}
shouldwork("周三");
//第三题
function superAdd(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
alert(superAdd(1,2,3,4,5,6));
//第四题
function formateDate(date) {
    var year=date.getFullYear();
    console.log(year);
    var month=date.getMonth()+1;
    console.log(month);
    var date_1=date.getDate();
    console.log(date_1);
    var day=date.getDay()+1;
    console.log(year+"年"+month+"月"+date_1+"日是星期"+day);
}
formateDate(new Date('2016/4/6'));
//第五题：第一种方法
    function reverseString(str) {
        var splitString=str.split("");//将字符串拆分
        var reverseArray=splitString.reverse();//使用reverse()方法将字符串倒序组成一个新的字符数组
        var joinArray=reverseArray.join("")//使用join()方法将数组拼接成一个字符串
        return joinArray;
    }
alert(reverseString("abcde"));
// 第二种方法：
function reverseString(str) {
    var newString=("");//用来接收最后倒序拼接的字符串
    for(var i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
alert(reverseString("abcdef"));
//第六题
    function fn(str) {
        var arr=str.split("");//将字符串拆分存储在数组中
        alert(arr);
        var json={};//定义一个空的对象字面量
        for(var i=0;i<arr.length;i++){
            if(json[arr[i]]){//判断数组中的元素，在json中是否存在属性值
                json[arr[i]]+=1;
            }else{
                json[arr[i]]=1;
            }
        }
        //alert(json);//使用alert输出方式，会看不到结果。
        console.log(json);
    }
fn("abccadda");
//第七题
function filterAdult(array) {
    var newArray=[];
    for(var i=0;i<array.length;i++){
        if (array[i].age>18){
            newArray.push(array[i]);
        }
    }
    //return newArray
    console.log(newArray);

}
filterAdult([
    {age: 19, name:'Jack'},
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 25, name:'David'}
]);
//第八题
    function uniq(array){
        var newArr = [];
        for(var i=0;i<array.length;i++){
            //开闭原则
            var bool = true;
            //每次都要判断新数组中是否有旧数组中的值。
            for(var j=0;j<newArr.length;j++){
                if(array[i] === newArr[j]){
                    bool = false;
                }
            }
            if(bool){
                newArr[newArr.length] = array[i];
            }
        }
        return newArr;
    }
uniq([1,2,'M','e','r', 'r', 'y']);

