/****第一部分****/
var navBar=document.getElementById("linkList");
var navList=navBar.getElementsByTagName("li");
var navList_a;
for(var i=0;i<navList.length;i++){
	navList[i].index=i;		//为li添加索引值
	navList_a=navList[i].getElementsByTagName("a");
	navList_a[0].index=i;	//为a添加索引值
	navList[i].addEventListener("mouseover",changeBgColor1);
	navList[i].addEventListener("mouseleave",changeBgColor2);
}

function changeBgColor1(event){
	navList[event.target.index].className="linkActive";
}

function changeBgColor2(event){
	navList[event.target.index].className=" ";
}

/****第二部分****/
var navListActive=document.getElementsByName("li-active");
var navListHidden=document.getElementsByName("li-hidden");
var arrowList=document.getElementsByName("arrow");
for(var i=0;i<navListActive.length;i++){
	navListActive[i].index=i;
	arrowList[i].index=i;
	navListActive[i].addEventListener("click",dropDown);
	navListActive[i].addEventListener("mouseover",changeBgColor3);
	navListActive[i].addEventListener("mouseleave",changeBgColor4);
}

function dropDown(event){
	var index=event.target.index;
	if(navListHidden[index].style.display=="block"){
		navListHidden[index].style.display="none";
		navListActive[index].className="list-group-item li-active";
	}
	else{
		navListHidden[index].style.display="block";
		navListActive[index].className="list-group-item li-active dropup";
	}
}	

function changeBgColor3(event){
	navListActive[event.target.index].style.background="#A2DBFC";
}

function changeBgColor4(event){
	navListActive[event.target.index].style.background="#8BCEF7";
}


/****第三部分****/	
var showT=document.getElementsByName("showText");
var deleteT=document.getElementsByName("deleteText");
var divShow=document.getElementById("show");
var textList=document.getElementsByName("text");
for(var i=0;i<showT.length;i++){
	showT[i].index=i;
	deleteT[i].index=i;
	showT[i].addEventListener("click",showThis);
	deleteT[i].addEventListener("click",deleteThis);
}

function showThis(event){
	var index=event.target.index;
	switch(index){
		case 0:divShow.innerHTML="超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。在本教程中，您将学习如何使用 HTML 来创建站点。HTML 很容易学习！相信您能很快学会它！";break;
		case 1:divShow.innerHTML="通过使用 CSS 我们可以大大提升网页开发的工作效率！在我们的 CSS 教程中，您会学到如何使用 CSS 同时控制多重网页的样式和布局。";break;
		case 2:divShow.innerHTML="JavaScript 是 Web 的编程语言。所有现代的 HTML 页面都使用 JavaScript。JavaScript 非常容易学。本教程将教你学习从初级到高级JavaScript知识。";break;
	}
}

function deleteThis(event){
	textList[event.target.index].style.display="none";
}

/****第五部分****/
var register=document.getElementById("registerForm");
var inputList=register.getElementsByTagName("input");
var resultMsg=document.getElementsByName("message");
for(var i=0;i<inputList.length;i++){
	inputList[i].index=i;
	inputList[i].addEventListener("blur",check);
}

function check(event){
	var index=event.target.index;
	var msg=resultMsg[index];
	var str=inputList[index].value;
	var patt;
	switch(index){
		case 0:{
			patt=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
			//开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”和单词字符和-的组合，可以有一个或者多个组合。
			if(patt.test(str)){
				msg.innerHTML="输入正确";
				msg.className="right";
			}
			else{
				msg.innerHTML="邮箱格式错误";
				msg.className="wrong";
			}
			break;
		}
		case 1:{
			patt=/^1[0-9]{10}$/;
			//必须以1开头的11位数字
			if(patt.test(str)){
				msg.innerHTML="输入正确";
				msg.className="right";
			}
			else{
				msg.innerHTML="请输入正确的11位手机号码";
				msg.className="wrong";
			}
			break;
		}
		case 2:{
			patt=/^(\w){6,12}$/;
			//只能输入6-12个字母、数字、下划线
			if(patt.test(str)){
				msg.innerHTML="输入正确";
				msg.className="right";
			}
			else{
				msg.innerHTML="6-12位字母、数字或下划线";
				msg.className="wrong";
			}
			break;
		}
		case 3:{
			if(str==inputList[2].value&&str!=""){
				msg.innerHTML="输入正确";
				msg.className="right";
			}
			else{
				msg.innerHTML="输入错误";
				msg.className="wrong";
			}
			break;
		}
		default:
			alert("Wrong!");
	}
}

/****第六部分****/
var jsonStr=
[
	{
		"province":"陕西省",
		"city":
		[
			{
				"name":"西安市",
				"area":["未央区","雁塔区"]
			},
			{
				"name":"榆林市",
				"area":["榆阳区","横山区"]
			}
		]
	},
	{
		"province":"山东省",
		"city":
		[
			{
				"name":"济南市",
				"area":["市中区","历下区"]
			},
			{
				"name":"济宁市",
				"area":["兖州区","任城区"]
			}
		]
	}
];
var pro=document.getElementById("proSelect");
var city=document.getElementById("citySelect");
var area=document.getElementById("areaSelect");
pro.addEventListener("change",addCity);
city.addEventListener("change",addArea);
for(i in jsonStr){
	pro.add(new Option(jsonStr[i].province,jsonStr[i].province));
}
function addCity(){
	for(i in jsonStr){
		if(pro.value==jsonStr[i].province){
			city.options.length=1;
			area.options.length=1;
			for(j in jsonStr[i].city)
				city.add(new Option(jsonStr[i].city[j].name,jsonStr[i].city[j].name));
			break;
		}

	}
}
function addArea(){
	for(i in jsonStr){
		if(pro.value==jsonStr[i].province){
			for(j in jsonStr[i].city)
				if(city.value==jsonStr[i].city[j].name){
					area.options.length=1;
					for(k in jsonStr[i].city[j].area)
						area.add(new Option(jsonStr[i].city[j].area[k],jsonStr[i].city[j].area[k]));
					break;
				}
			break;
		}	
	}
}