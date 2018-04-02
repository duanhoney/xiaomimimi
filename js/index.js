// alert(1);




// 明星单品部分箭头的效果
{
    const btn1=document.querySelector(".star_btn1");
    const btn2=document.querySelector(".star_btn2");
    const inner=document.querySelector(".buy_inner");
    let n=0;
    btn2.onclick=function(){
        n++;
        btn1.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }
    btn1.onclick=function(){
        n--;
        btn2.classList.remove("disable");
        if(n===0){
            this.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }

}




//轮播图效果
{
    var imgs = document.querySelectorAll(".banner_img li");   //获取img
    var pagers = document.querySelectorAll(".btn_box li");
    var banner = document.querySelector("#banner");
    var prev = document.querySelector(".banner_btn1");
    var next = document.querySelector(".banner_btn2");

    pagers.forEach(function(ele,index){
        ele.onclick=function(){

            for(let i=0;i<imgs.length;i++){
                    pagers[i].classList.remove("active");
                    imgs[i].classList.remove("active");
                }
                this.classList.add("active");
                imgs[index].classList.add("active");
            n=index;  
            //当鼠标点击轮播点时
        }
    })
    let n=0;
    // setInterval自动播放
    let t=setInterval(move,3000);

    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            imgs[n].classList.add("active");
            pagers[n].classList.add("active");

    }
    // 鼠标进入画面禁止
    banner.onmouseenter=function(){
        clearInterval(t);  //清除样式鼠标离开不会重新开始
    }
    banner.onmouseleave=function(){
        t=setInterval(move,3000);  //清除样式鼠标离开重新开始
    }
   
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }

    prev.onclick=function(){
        if(flag){
            flag=false;
            n-=2;
            move();
        }
    }
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend", function(){
            flag=true;  
        })
    })


 }






//搭配部分下划线
{
    function content(parent){
        const types = parent.querySelectorAll(".dapei_wenzi");
        const goods = parent.querySelectorAll(".dapei_bottom");
        types.forEach(function(ele,index){
            ele.onmouseenter=function(){
                for(let i=0;i<types.length;i++){
                    types[i].classList.remove("active");
                    goods[i].classList.remove("active");
                }
                types[index].classList.add("active");
                goods[index].classList.add("active");
            }
        })
    }
    const contentlist=document.querySelectorAll(".dapei");
    contentlist.forEach(function(ele){
    content(ele);
    })

}   


//内容分装包装
{

    function a(parent){
        let prev=parent.querySelector(".neirong_btn_left");
        let next=parent.querySelector(".neirong_btn_right");
        let inner=parent.querySelector(".neirong_inner");
        let contents=parent.querySelectorAll(".neirong_content");
        let dians=parent.querySelectorAll(".neirong_btn_bottom_dian");
        let n=0;
        next.onclick=function(){
            n++;
            if(n===contents.length){
                n=contents.length-1;
                return;
            }
            inner.style.marginLeft=n*-296 + "px";
            dians[n].classList.add("active");
            dians[n-1].classList.remove("active");
            obj=dians[n];
        };
        console.log(contents);
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=n*-296 + "px";
            dians[n].classList.add("active");
            dians[n+1].classList.remove("active");
            obj=dians[n];
        };
        let obj =dians[0];
        dians.forEach(function(ele,index){
            ele.onclick=function(){
                obj.classList.remove("active");
                this.classList.add("active");
                obj=this;
                inner.style.marginLeft=index*-296+"px";
                n=index;   
            }

        })

    }
    let items=document.querySelectorAll(".neirong_btn");
    items.forEach(function(ele){
        a(ele);
    })
    
}



//导航栏弹出盒子
{
    let titles=document.querySelectorAll(".nav_title");
    let tanchuss=document.querySelectorAll(".nav_tanchu");
    let obj=tanchuss[0];
    titles.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            tanchuss[index].style.display="block";
            obj=tanchuss[index];
        }
        ele.onmouseleave=function(){
            tanchuss[index].style.display="none";
        }
    })
}


//banner弹出
{
    let xiaohes=document.querySelectorAll(".banner_xiaohe");
    let tanchus=document.querySelectorAll(".banner_nav_tanchu");
    let obj=tanchus[0];
    xiaohes.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            tanchus[index].style.display="block";
            obj=tanchus[index];
        }
        ele.onmouseleave=function(){
            tanchus[index].style.display="none";
        }
    })
}

    