/* let demo = document.querySelector("#demo"); //通过CSS元素找到这个选择器demo
demo.innerHTML = 1; //设置demo里面的内容
setTimeout(() => {
  demo.innerHTML = 2;
}, 3000); //一段时间之后执行另一个函数，3s之后等于2
 */

/*  setTimeout(() => {
  n = n + 1;
  demo.innerHTML = n;
}, 3000); 

setInterval(() => {
  n = n + 1;
  demo.innerHTML = n;
}, 1000); //可以一直变 老手不用这个 */
let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*你好，我是justcho
接下来玩点好玩的
首先我要准备一个div
*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来我要把div变成一个八卦图
/*注意看好了
*首先把div变成一个圆
**/
#div1{
   border-radius: 50%;
   box-shadow:0 0 3px rgba(0,0,0,0.5);
   border:none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
  rgba(255,255,255,1) 50%,
  rgba(0,0,0,1) 50%, 
  rgba(0,0,0,1) 100%);

}
/*加两个神秘的小球*/
#div1::before{
  width:100px;
  height:100px;
  left:0;
  top:0;
  left:50%; 
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: rgb(255,255,255);
background: radial-gradient(circle,
   rgba(255,255,255,1) 0%, 
   rgba(255,255,255,1) 25%, 
   rgba(0,0,0,1) 25%,
   rgba(0,0,0,1)100%);
}
#div1::after{
  width:100px;
  height:100px;
  left:0;
  bottom:0;
  left:50%; 
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle,
    rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, 
    rgba(255,255,255,1) 25%,
    rgba(255,255,255,1)100%,
    rgba(0,0,0,1)100%);
  }
`;

let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    //如果是回车就不照搬
    //如果不是回车就照搬

    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      //如果n不是最后一个，就继续
      n += 1;
      step();
    } else {
      // n是最后一个
    }
  }, 50);
}; //模拟了setInterval 好处是可以随时停止

step();
