const loveButton = () =>{

  let maleInput = document.getElementById("maleInput").value
  let femaleInput = document.getElementById("femaleInput").value

  if (maleInput === "" || femaleInput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Uh-oh! It Takes Two to Tangle. Please Enter Both Names."
    document.getElementById("show").style.display = "none"
  } else {
    document.getElementById("errorDiv").style.display = "none"
    document.getElementById("show").style.display = "block"

    document.getElementById("loverNames").innerHTML = `${maleInput} & ${femaleInput}`

    let loveLevel = Math.round(Math.random()*100)

    if (loveLevel <=20){
      document.getElementById("lovePercent").innerHTML = `${loveLevel}%: 🙈 Oops! Looks like you're in the friend zone!`
    } else if (loveLevel <= 40){
      document.getElementById("lovePercent").innerHTML = `${loveLevel}%: 💔 Ummm! Looks like your love needs a jump start!`
    }else if (loveLevel <= 60){
      document.getElementById("lovePercent").innerHTML = `${loveLevel}%: 💑Your love's got potential, but it needs a serious upgrade! `
    }else if (loveLevel <= 80){
      document.getElementById("lovePercent").innerHTML = `${loveLevel}%: 💖 Love's in the air! `
    }else if (loveLevel <= 100){
      document.getElementById("lovePercent").innerHTML = `${loveLevel}%: 💖 True love alert, It's happily ever after time💍🎉`
    } 
  }

  document.getElementById("maleInput").value = ""
  document.getElementById("femaleInput").value = ""
}