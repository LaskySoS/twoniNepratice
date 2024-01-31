let pos = 0;
let timer;
let num;
// 对应小红点亮函数
function toRed()
{
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++)
    {
        dots[i].id = "";
    }
    num = -pos / 500;
    dots[num].id = "active";
}
 
function setTimer()
{
    /*而 setInterval() 則是固定延遲了某段時間之後，才去執行對應的程式碼，
    然後「不斷循環」。 當然也會回傳一個獨立的 timer ID： 
    後面2000表示2000ms
    另外還有setTimeout()一樣是延遲後，但只執行「一次」指定的程式碼*/
    timer = setInterval(() =>
    {
        document.querySelector(".slide-pic-ul").style.left = pos/5 + "vw";
        //"ul"物件向左移"pos"個px;
 
        toRed();  // 对应点亮起来
    
  
        pos -= 500;// 递减
        if (pos == -2500)
        {
            pos = 0;
        }
    }, 5000)
}
setTimer();

// 移入停下，移开运行
document.querySelector(".slide-show-area,.dots").addEventListener("mouseover", () =>
{
    clearInterval(timer);
})
document.querySelector(".slide-show-area,.dots").addEventListener("mouseout", () =>
    {
        setTimer();
    })
    
    // 左右两边
document.querySelector("#left").addEventListener("click", () =>
{
    pos += 500;
    if (pos == 500)
    {
        pos = -2000;
    }
    document.querySelector(".slide-pic-ul").style.left = pos/5 + "vw";
    toRed();
})
document.querySelector("#right").addEventListener("click", () =>
    {
        pos -= 500;
        if (pos == -2500)
        {
            pos = 0;
        }
        document.querySelector(".slide-pic-ul").style.left = pos/5 + "vw";
        toRed();
    })
    // 点击小圆点对应亮色
let dots = document.querySelectorAll(".dot");
for (let i = 0; i < dots.length; i++)
{
    (function(i)
    {
        dots[i].addEventListener("click", () =>
        {
            num = i;
            pos = -num * 500;
            document.querySelector(".slide-pic-ul").style.left = pos/5 + "vw";
            toRed();
        })
    })(i)
}