// javascript
let num1=0,num2=0
document.getElementById("home-score").textContent=num1
document.getElementById("guest-score").textContent=num2
let element1=document.getElementById("home-score")
let element2=document.getElementById("guest-score")
function Add1(resId,numVariable)
{
  let res=0
  let element=document.getElementById(resId)
  if(numVariable=='num1'){
      num1=num1+1
      res=num1
  }
  if(numVariable=='num2')
  {
      num2=num2+1
      res=num2
  }
  element.textContent=res

}
function Add2(resId,numVariable)
{
  let res=0
  let element=document.getElementById(resId)
  if(numVariable=='num1'){
      num1=num1+2
      res=num1
  }
  if(numVariable=='num2')
  {
      num2=num2+2
      res=num2
  }
  element.textContent=res
  
}
function Add3(resId,numVariable)
{
  let res=0
  let element=document.getElementById(resId)
  if(numVariable=='num1'){
      num1=num1+3
      res=num1
  }
  if(numVariable=='num2')
  {
      num2=num2+3
      res=num2
  }
  element.textContent=res
}
function colorChange()
{
    if(num1>num2)
    {
        document.getElementById("home-score").style.color="green"
        document.getElementById("guest-score").style.color="#F94F6D"   
    }
    if(num1 < num2)
    {
        document.getElementById("home-score").style.color="#F94F6D"
        document.getElementById("guest-score").style.color="green"   
    }
    if(num1 == num2)
    {
        document.getElementById("home-score").style.color="green"
        document.getElementById("guest-score").style.color="green"   
    }
}
function newGame(){
    num1=0
    num2=0
    document.getElementById("home-score").textContent=num1
    document.getElementById("guest-score").textContent=num2
    document.getElementById("home-score").style.color="#F94F6D"
    document.getElementById("guest-score").style.color="#F94F6D"
}