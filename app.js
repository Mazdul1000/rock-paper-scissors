
const myArray = ['rock','paper','scissors'];

function comSelect(){
    const select = Math.floor(Math.random()*3);
    
    if( select == 0){
        return myArray[0];
    }else if(select == 1){
        return myArray[1];
    }else{
        return myArray[2];
    }
   
}

function userInput(user){
    let userScore = 0;
    let comScore = 0;

    const enemySelection = comSelect();
    
        if( user == 'scissors' && enemySelection== 'paper'){
            console.log('Enemy :', enemySelection)
            console.log("You won. scissors cut paper")
         
        }else if( user == 'paper' && enemySelection == 'scissors'){
            console.log('Enemy :', enemySelection)
            console.log("You lost. scissors cut paper");
            
        }else if( user == 'scissors' && enemySelection == 'rock'){
            console.log('Enemy :', enemySelection)
            console.log("you lost. enemy has rock. rock destroy scissors. ")
        }else if( user == 'rock' && enemySelection == 'scissors'){
            console.log('Enemy :', enemySelection)
            console.log("You won. enemy selected scissors. Rock destroy scissors")
        }else if( user == 'paper' && enemySelection == 'rock'){
            console.log('Enemy :', enemySelection)
            console.log("You won.Enemy selected rock. Paper binds rock")
        }else if( user == 'rock' && enemySelection== 'paper'){
            console.log('Enemy :', enemySelection)
            console.log("You lost. Enemy selected paper. Paper binds rock")
        }


}

console.log(userInput('rock'));
