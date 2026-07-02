document.addEventListener("DOMContentLoaded",()=>{

    //players
    let player1 = true;
    let player1Score = 0;
    let winArr1 = [];
    let player1box = document.getElementById("player1");
    let player2 = false;
    let player2Score = 0;
    let winArr2 = [];
    let player2box = document.getElementById("player2");

    let count = 0;

    //accessing class of the text
    let text = document.getElementsByClassName("text");
    //accessing cover of the button element
    let Tblocks = document.getElementsByClassName("Tblocks");
    //accessing button
    let blocks = document.getElementsByClassName("blocks");

    //applying mouse over animation while on every button
    for(let i=0;blocks.length>i;i++){
        Tblocks[i].addEventListener("mouseover",()=>{
            blocks[i].style.transform = "scale(1.05)";
            blocks[i].style.transition = "0.6s ease";



            //making a special case when clicking on the over button
            Tblocks[i].addEventListener("click",()=>{


                //changing the content according to the player 1
                if(player1){

                    //function to remove decoration from player 1 name box
                    player1box.style.border = "";
                    player1box.style.transform = "";
                    player1box.style.transition = "0.3s ease";

                    //function to decorate the player2 name box
                    player2box.style.border = "2px solid #E8EDF2";
                    player2box.style.transform = "scaleX(1.01)";
                    player2box.style.transition = "0.2s ease";
        
                    //change the content of the div element
                    if(text[i].innerHTML != "X" && text[i].innerHTML != "O")
                    {
                        //increase count
                        count +=1;
                        console.log(count);
                        
                        //putting the X into content
                        text[i].innerHTML = "X";
                        

                        //accessing the value and pushing into array which will calculate the values( winning criteria)
                        winArr1.push(Number(blocks[i].getAttribute("value")));
                        
                        //toggle the turns of the players, so that next player can move
                        player2 = true;
                        player1 = false;

                        //winning code block
                        if(randAdd(winArr1) === 1){
                            console.log("player 1  win!");
                            setTimeout(()=>{winCardFun("player1")},1000);
                        }
                    }
                }
                else{
                    if(text[i].innerHTML != "X" && text[i].innerHTML != "O")
                    {

                        //increase count
                        count +=1;
                        console.log(count);

                        //function to decorate the player1 name box
                        player1box.style.border = "2px solid #E8EDF2";
                        player1box.style.transform = "scaleX(1.01)";
                        player1box.style.transition = "0.2s ease";

                        //function to remove decoration from player2 name box
                        player2box.style.border = "";
                        player2box.style.transform = "";
                        player2box.style.transition = "0.2s ease";
                        

                        //putting the content O into div
                        text[i].innerHTML = "O";

                        //accessing the value and pushing into array which will calculate the values( winning criteria)
                        winArr2.push(Number(blocks[i].getAttribute("value")));
                        

                        //toggle the turn of the players
                        player1 = true;
                        player2 = false;

                        //winning code block
                        if(randAdd(winArr2) === 1){
                            console.log("player 2  win!");
                            setTimeout(()=>{winCardFun("player2")},1000);
                        }

                        
                    }
                }
                
            })

            //draw function invoke
            if(count === 9)
            {
                Draw();
            }

        });
    }
    for(let i=0;blocks.length>i;i++){
        Tblocks[i].addEventListener("mouseout",()=>{
            blocks[i].style.transform = "";
            blocks[i].style.transition = "0.2s ease";
        });
    }

    //Lo shu magic square
    // 4,9,2
    // 3,5,7
    // 8,1,6     

//function to calculating winning number
function randAdd(arr){

    //for iteration of 1 number
    for(let i=0 ;i<arr.length;i++)
    {
        //for iterating 2 numbers
        for(let j=i+1;j<arr.length;j++)
        {
            //for iterating 3 numbers
            for(let k=j+1;k<arr.length;k++)
            {
                if(arr[i]+arr[j]+arr[k] === 15)
                {

                    let elem1 = document.querySelector(`[value="${arr[i]}"]`);
                    let elem2 = document.querySelector(`[value="${arr[j]}"]`);
                    let elem3 = document.querySelector(`[value="${arr[k]}"]`);

                    elem1.style.backgroundColor = "#2C3947";
                    elem2.style.backgroundColor = "#2C3947";
                    elem3.style.backgroundColor = "#2C3947";
                    
                    return 1;
                }
            }
        }
    }
    return 0;
} 

//winning card visibility function
function winCardFun(playerName)
{
    let winCardContainer = document.getElementById("winCardContainer");
    winCardContainer.style.display = "flex";

    let winText = document.getElementById("winText");

    winText.innerHTML = "🥳Congragulations🥳<br>🎉"+playerName+" win🎊";

    let rfBtn = document.getElementById("Restart");
    rfBtn.addEventListener("click",()=>{
        location.reload();
    })
}

//draw function
function Draw(){
    let winCardContainer = document.getElementById("winCardContainer");
    winCardContainer.style.display = "flex";

    let winText = document.getElementById("winText");

    winText.innerHTML = "Match Draw!";

    let rfBtn = document.getElementById("Restart");
    rfBtn.addEventListener("click",()=>{
        location.reload();
    })
}
    });//end of JS