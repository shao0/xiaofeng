var log = console.log.bind(console)
var c = document.createElement.bind(document)
var e = document.querySelector.bind(document)
var eAll = document.querySelectorAll.bind(document)

var main = e(".main")
var td = e(".IsTD")
var d3ds = main.children
var d1 = eAll(".d1")
var d2 = eAll(".d2")
var d3 = eAll(".d3")
var d4 = eAll(".d4")
var d5 = eAll(".d5")
var h1 = eAll(".h1")
var h2 = eAll(".h2")
var m1 = eAll(".m1")
var m2 = eAll(".m2")
var s1 = eAll(".s1")
var s2 = eAll(".s2")

var days,hours,minutes,seconds
var _deg = 360 / d3ds.length
var oldX,oldY,_X = 0,_Y = -20



function dateTime(birthday, date)
{
	var date3 = date.getTime() - birthday.getTime()
	// document.write(date3)	
	//计算出相差天数
	days=Math.floor(date3/(24*3600*1000))
	//计算出小时数
	var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
	hours=Math.floor(leave1/(3600*1000))
	//计算相差分钟数
	var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	minutes=Math.floor(leave2/(60*1000))
	//计算相差秒数
	var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	seconds=Math.floor(leave3/1000)

	zzz('.s2',-Math.floor(seconds%10))
	zzz(".s1",-Math.floor(seconds/10))
	zzz(".m2",-Math.floor(minutes%10))
	zzz(".m1",-Math.floor(minutes/10))
	zzz(".h2",-Math.floor(hours%10))
	zzz(".h1",-Math.floor(hours/10))
	zzz(".d5",-Math.floor(days%10))
	zzz(".d4",-Math.floor(days%100/10))
	zzz('.d3',-Math.floor(days%1000/100))
	zzz(".d2",-Math.floor(days%10000/1000))
	zzz(".d1",-Math.floor(days/10000))
	return days + "天"+hours + "时"+minutes + "分"+seconds + "秒"
}

for (var j = 0; j < h1.length; j++) {
	for (var i = 0; i < 10; i++)
	{
		if (i < 6)
		{
			h1[j].appendChild(createDiv(i))
			m1[j].appendChild(createDiv(i))
			s1[j].appendChild(createDiv(i))
		}
		d1[j].appendChild(createDiv(i))	

		d2[j].appendChild(createDiv(i))
		d3[j].appendChild(createDiv(i))
		d4[j].appendChild(createDiv(i))
		d5[j].appendChild(createDiv(i))
		h2[j].appendChild(createDiv(i))
		m2[j].appendChild(createDiv(i))
		s2[j].appendChild(createDiv(i))
	}
}

function createDiv(i)
{
	var div = c("div")
		div.className = "num"
		div.textContent = i
		div.style.backgfloorColor="white"
	return div
}

/****************************
 *	初始化活着的时间	    *
 *	div所初始化的div     	*
 *	top所初始化的marginTop值*
 ****************************/
function zzz(div,top)
{
	for (var i = eAll(div).length - 1; i >= 0; i--) {
		eAll(div)[i].style.marginTop = top * 40 + "px"
	}
}






function GetMorseObj()
{
	/****************************
	 *	    摩斯密码对象	    *
	 ****************************/
	o = {
		morse: [
		["a",".-"],
		["b","-..."],
		["c","-.-."],
		["d","-.."],
		["e","."],
		["f","..-."],
		["g","--."],
		["h","...."],
		["i",".."],
		["j",".---"],
		["k","-.-"],
		["l",".-.."],
		["m","--"],
		["n","-."],
		["o","---"],
		["p",".--."],
		["q","--.-"],
		["r",".-."],
		["s","..."],
		["t","-"],
		["u","..-"],
		["v","...-"],
		["w",".--"],
		["x","-..-"],
		["y","-.--"],
		["z","--.."],
		["1",".----"],
		["2","..---"],
		["3","...--"],
		["4","....-"],
		["5","....."],
		["6","-...."],
		["7","--..."],
		["8","---.."],
		["9","----."],
		["0","-----"],
		],
		isShow: true,
		Parmenters:[
			{
				EName:"input",
				ClassName:"radio0",
				Type:"radio",
			},
			{
				EName:"input",
				ClassName:"radio1",
				Type:"radio",
			},
			{
				EName:"p",
				ClassName:"短信号:",
			},
			{
				EName:"p",
				ClassName:"\".\"",
			},
			{
				EName:"p",
				ClassName:"长信号:",
			},
			{
				EName:"p",
				ClassName:"\"-\"",
			},
			{
				EName:"p",
				ClassName:"输入摩斯密码\'\/\'分割单词:",
			},
			{
				EName:"textarea",
				ClassName:"content",
			},
			{
				EName:"p",
				ClassName:"转换结果:",
			},
			{
				EName:"textarea",
				ClassName:"result",
			},
			{
				EName:"input",
				ClassName:"changer",
				Type:"button",
			},
		],
		Elements:{
			morseShow: e(".morseShow"),
			morse: e(".morse"),
		},
		ElementCreate:function(parmenters)
		{
			if (parmenters.EName == "input")
			{				
				var input = c("input")
				input.className = parmenters.ClassName
				input.type = parmenters.Type
				if(parmenters.Type == "button")
				{
					input.value = "转换"
				}
				else if(parmenters.Type == "disabled")
				{
					input.disabled = "disabled"
				}
				else if (parmenters.Type == "radio") 
				{
					var p = c("p")
					if (parmenters.ClassName == "radio0") 
					{
						p.textContent = "密码转字母:"
						input.checked = true
					}
					else
					{
						p.textContent = "字母转密码:"
					}
					p.style.display = "inline"				
					o.Elements.morse.appendChild(p)
					
					input.name = "radio"
				}
				o.Elements.morse.appendChild(input)
				if (parmenters.ClassName == "radio1" ) 
					{
						o.Elements.morse.appendChild(c("br"))
					}
				return input
			}
			if (parmenters.EName == "p") 
			{
				var p = c("p")
				p.textContent = parmenters.ClassName
				if (parmenters.ClassName.indexOf("信号") != -1 || parmenters.ClassName.indexOf("\"") != -1) 
				{
					p.style.display = "inline"

				}
				o.Elements.morse.appendChild(p)
			}
			if (parmenters.EName == "textarea") 
			{
				var t = c("textarea")
				t.className = parmenters.ClassName
				t.cols = "22"
				t.rows = "6"
				if(parmenters.ClassName == "result")
				t.setAttribute("readonly", "readonly")
				t.style.resize = "none"
				o.Elements.morse.appendChild(t)

			}
		},
		MToE: function(val)
		{
			o.morse.forEach(function(values)
			{
				if (values[1] == val) val = values[0]
			})
			return val
		},
		EToM: function(val)
		{
			val = val.toLowerCase()
			o.morse.forEach(function(values)
			{
				if (values[0] == val) val = values[1]
			})
			return val
		},
		change: function()
		{
			if (!o.Elements.content.value)
			{
				alert("你爸爸东西都没有!\n转个毛!!!")
				return	
			}
			if (o.Elements.radio1.checked) var arr = o.Elements.content.value.split(" ")
			else var arr = o.Elements.content.value.split("/")
			arr.forEach
				(
					function(value,index)
					{
						if (o.Elements.radio1.checked) var array = value.split("")
						else var array = value.split(" ")
						array.forEach
						(
							function(val,ind)
							{
								if (o.Elements.radio1.checked) array[ind] = o.EToM(val)
								else array[ind] = o.MToE(val)
							}	
						)
						if (o.Elements.radio1.checked) arr[index] = array.join(" ")
						else arr[index] = array.join("")
					}
				)
			if (o.Elements.radio1.checked) o.Elements.result.value = arr.join("/")
			else o.Elements.result.value = arr.join(" ")

		},
		morseShow: function()
		{
			if(o.isShow)
			{
				o.Elements.morse.style.display = "inline"
				o.isShow = false
			}
			else
			{
				o.Elements.morse.style.display = "none"
				o.isShow = true
			}
		},
	}
	return o
}



var IsTD = function()
		{
			if (td.value == "启动拖动") {
				document.onmousedown = function(e)
				{
					_X = 0
					oldX = e.clientX
					oldY = e.clientY
					this.onmousemove = function(ee)
					{
						_X += ee.clientX - oldX
						_Y -= ee.clientY - oldY
						oldX = ee.clientX
						oldY = ee.clientY
						main.style.transform = "rotateY(" + _X + "deg) rotateX(" + _Y +"deg)"
					}
					this.onmouseup = function(){
						this.onmousemove = null
					}
				}
				td.value = "自动旋转"
				clearInterval(loop)
			}
			else if (td.value == "自动旋转" ) 
			{
				document.onmousedown = null
				td.value = "启动拖动"
				loop = setInterval(function(){
					_X -= 0.1
					_Y = 0
					main.style.transform = "rotateY(" + _X  + "deg) rotateX(" + _Y +"deg)"
					if (_X <= -360) {
						_X = 0
					}
				},1000/120)
			}
		}
window.addEventListener(
	"load", 
	function ()
	{
		var morseObject = GetMorseObj()
		morseObject.Elements.morse.style.display = "none"
		morseObject.Parmenters.forEach(
			function(v)
			{
				morseObject.ElementCreate(v)
			}
		)
		Object.assign(
			morseObject.Elements,
			{
				content: e(".content"),
				result: e(".result"),
				changer: e(".changer"),
				radio1: e(".radio1"),
			}
		)
		morseObject.Elements.morseShow.addEventListener("click", morseObject.morseShow)
		morseObject.Elements.changer.addEventListener("click", morseObject.change)
		var ival = setInterval(function(){
			dateTime(new Date("1995/10/22 19:59:59"), new Date())
		},1000)


		Array.prototype.forEach.call ( d3ds, function(d, index)
		{
			d.style.transform = "rotateY(" + index * _deg + "deg) translateZ(350px)"
		})
		IsTD()
		td.onclick = IsTD




		

	} 
)
log(`
                    _ooOoo_
                   o8888888o
                   88\" . \"88
                   (| -_- |)
                   O\\  =  /O
                ____/\`---'\\____
              .'  \\\\|     |//  \`.
             /  \\\\|||  :  |||//  \\
            /  _||||| -:- |||||-  \\
            |   | \\\\\\  -  /// |   |
            | \\_|  ''\\---/''  |_/ |
            \\  .-\\__  \`-\`  ___/-. /
          ___\`. .'  /--.--\\  \`. . __
       .\"\" '<  \`.___\\_<|>_/___.'  >'\"\".
      | | :  \`- \\\`.\`\\ _ /\`.\`/ - \` : | |
      \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /
 ======\`-.____\`-.___\\_____/___.-\`____.-'======
                    \`=---='
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
             佛祖保佑       永无BUG
    佛曰:  
          写字楼里写字间，写字间里程序员；  
          程序人员写程序，又拿程序换酒钱。  
          酒醒只在网上坐，酒醉还来网下眠；  
          酒醉酒醒日复日，网上网下年复年。  
          但愿老死电脑间，不愿鞠躬老板前；  
          奔驰宝马贵者趣，公交自行程序员。  
          别人笑我忒疯癫，我笑自己命太贱；  
          不见满街漂亮妹，哪个归得程序员？
 =============================================\n`,(!(~+[])+{})[--[~+""][+[]]*[~+[]] + ~~!+[]]+({}+[])[[~!+[]]*~+[]])
sb = "上班:" + dateTime(new Date("2017/04/10 08:59:59"), new Date())
sy = "失业:" + dateTime(new Date("2019/04/08 08:59:59"), new Date())
