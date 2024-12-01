let btn = document.getElementById("button");
let guesses = document.getElementById("guesses");
var inp = document.getElementById("inp");
let num = document.getElementById("num");
let msg = document.getElementById("msg");
let rnum = Math.floor(Math.random() * 100 + 1);
let guess = 0,str1, str2;
let min = Math.min(rnum - 5, rnum + 5);
let max = Math.max(rnum - 5, rnum + 5);
let icon = document.getElementById("icon");
function case1(){
    msg.style.background = "rgba(255,168,0,0.5)";
    msg.style.color = "#ff8c00";
    msg.style.fontWeight = "700";
    msg.innerHTML ='<i class="fa-solid fa-triangle-exclamation" style="color: #ff8c00;"></i> Enter a smaller value. You are close. Keep Going !!!';
    let temp1 = +inp.value + " , ";
    let temp2 = num.textContent += temp1;
    num.innerText = temp2;
    setTimeout(() => {
        msg.innerHTML = "";
    }, 1900);
    inp.value = "";
    guess++;
    guesses.innerText = guess;
}
function case2(){
    msg.style.background = "rgba(255,168,0,0.5)";
    msg.style.color = "#ff8c00";
    msg.style.fontWeight = "700";
    msg.innerHTML ='<i class="fa-solid fa-triangle-exclamation" style="color: #ff8c00;"></i> Enter a larger value. You are close. Keep Going !!!';
    let temp1 = +inp.value + " , ";
    let temp2 = num.textContent += temp1;
    num.innerText = temp2;
    setTimeout(() => {
        msg.innerHTML = "";
    }, 1900);
    inp.value = "";
    guess++;
    guesses.innerText = guess;
}
btn.addEventListener("click", () => {
while (true) {
    if (+inp.value < 1 || +inp.value > 100) {
        msg.style.background = "rgba(255,168,0,0.5)";
        msg.style.color = "#ff8c00";
        msg.style.fontWeight = "700";
        msg.innerHTML ='<i class="fa-solid fa-triangle-exclamation" style="color: #ff8c00;"></i> Please enter valid input.';
        setTimeout(() => {
            msg.innerHTML = "";
        }, 1900);
        inp.value = "";
        guesses.innerText = guess;
        break;
    } else {
        if(+inp.value > rnum) {
            if(+inp.value >= min && +inp.value <= max) {
                if(+inp.value <=max){
                    case1();
                    break;
                }else{
                    case2();
                    break;
                }
            }else{
                msg.style.background = "rgba(255,0,0,0.4)";
                msg.style.color = "#ff0000";
                msg.style.fontWeight = "700";
                msg.innerHTML ='<i class="fa-solid fa-xmark" style="color: #ff0000;"></i> Value is high. Please try again!!!';
                let temp1 = +inp.value + " , ";
                let temp2 = num.textContent += temp1;
                num.innerText = temp2;
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 1900);
                inp.value = "";
                guess++;
                guesses.innerText = guess;
                break;
            }
        }else if(+inp.value < rnum){
            if (+inp.value >= min && +inp.value <= max) {
                if(+inp.value <=min){
                    case1();
                    break;
                }else{
                    case2();
                    break;
                }
            } else {
                msg.style.background = "rgba(255,0,0,0.4)";
                msg.style.color = "#ff0000";
                msg.style.fontWeight = "700";
                msg.innerHTML ='<i class="fa-solid fa-xmark" style="color: #ff0000;"></i> Value is low. Please try again!!!';
                let temp1 = +inp.value + " , ";
                let temp2 = num.textContent += temp1;
                num.innerText = temp2;
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 1900);
                inp.value = "";
                guess++;
                guesses.innerText = guess;
                break;
            }
        }else{
            guesses.innerText = guess+1;
            msg.style.background = "rgba(0,255,0,0.4)";
            msg.style.color = "#00ff00";
            msg.style.fontWeight = "700";
            msg.innerHTML ='<i class="fa-solid fa-check" style="color: #00ff00;"></i> Correct!!!';
            let temp1 = +inp.value;
            let temp2 = num.textContent += temp1;
            num.innerText = temp2;
            inp.value = "";
            setTimeout(() => {
                location.reload(true);
            }, 3000);
            break;
        }
    }
  }
});
