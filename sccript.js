let choices = document.querySelectorAll('.choice');
let user=document.querySelector(".user-hand")
let system=document.querySelector(".system-hand")
let result=document.querySelector(".result")
const emojiMap = {
    rock: '👊',
    paper: '🤚',
    scissor: '✌️'
};
choices.forEach(function (choice) {
    choice.addEventListener('click', () => {
        let userchoice = choice.getAttribute("id");
        // console.log(userchoice)
        let options = ['rock', 'paper', 'scissor'];
        let systemindex = Math.floor(Math.random() * 3)
        let systemchoice = options[systemindex]
        // console.log(systemchoice)
        user.innerText = emojiMap[userchoice];
        system.innerText = emojiMap[systemchoice];
        Game(userchoice, systemchoice)
    })
    function Game(userchoice, systemchoice) {
        console.log(userchoice, systemchoice);
        if (userchoice === systemchoice) {
            // console.log('Draw')
        //     result.innerText="Match draw"
        //     result.style="box-shadow: inset 3px 4px 10px rgba(16,222,19,0.8),inset -3px -4px 10px rgba(222,50,16,0.8);";
        //     result.style.color="rgba(16,222,19,0.8);"
        //
    result.classList.add('draw');
 }
        else if(userchoice==="stone" && systemchoice==="scissor" || userchoice==="paper" &&systemchoice==="stone" || userchoice==="scissor"&& systemchoice==="paper"){
            // console.log ('user wins')
            result.innerText="user wins"
           result.classList.add('win');
        }
        else{
            result.innerText="you lose" 
            result.classList.add('lose');
        }

    }

})
