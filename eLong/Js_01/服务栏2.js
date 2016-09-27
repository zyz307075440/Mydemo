/**
 * Created by Thinkpad on 2016/5/15.
 */
window.onload=function(){
    var btn=document.getElementById("service-input");
    var btn1=document.getElementById("btn1")
    btn1.onfocus=function(){
        if(this.value==="请输入您的E-mail"){
            this.value="";
        }
    }
    btn1.onblur=function(){
        if(this.value===""){
            this.value="请输入您的E-mail";
    }}
    btn.onclick=function(){
        if(btn1.value==="请输入您的E-mail" || btn1.value===""){
            alert("请输入邮箱或者邮箱不正确");
        }
    }
    btn1.onkeyup=function(){

        if(/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.value)){
             btn.onclick=function(){
                 alert("注册成功")}
             }else{
                btn.onclick=function(){
                    alert("请输入正确邮箱")
            }
        }
    }



}