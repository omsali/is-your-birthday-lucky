const birthDate = document.querySelector("#birth-date")
const luckyNum = document.querySelector("#lucky-num")
const checkBtn = document.querySelector("#check")
const output = document.querySelector(".output")

function isBirthDayLucky(){
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
        if(sum%luckyNum.value==0){
            output.innerText="Your Birthday is Lucky!!🤩🤩";
        }else{
            output.innerText="Sorry! Your Birthday is not Lucky 🤐";
        }
    }else{
        output.innerText="Enter both the numbers corerctly"
    }
}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}

checkBtn.addEventListener("click",isBirthDayLucky)