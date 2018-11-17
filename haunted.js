const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** Welcome to the house. This house used to belong to Alice and her friends. They haven't left this house ever since... ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log(`${player.name} have been greeted by a white rabbit in a suit. He greeted you very passionatley to the point that it sounds forced. The rabbit ran up the stairs, in need to show you something.`);
  let followRabbit = READLINE.question("Will you follow the rabbit upstairs? (yes or no) ");
  if(followRabbit == "y" || followRabbit == "yes") {
    player.courage++
    console.log(`${player.name} followed the rabbit upstairs. Oh no! Theres a huge ball rolling your way!`);
    let rollingBall = READLINE.question("Will you dodge or tell the ball a story? (dodge or tell story) ");
    if(rollingBall == "dodge" || rollingBall == "Dodge") {
      player.strength++
      console.log(`${player.name} instantly ran into a room, dodging the sudden impact from the ball. The room they entered had no windows. Just two doors. A red door and a purple door.`)
      console.log(`${player.name} cant choose a door. There is a message on the wall between tho doors. "CHOOSE CORRECTLY FOR FREEDOM"`);
      let doors = READLINE.question("Which door will you choose? (red or purple) ");
      if(doors == "red" || doors == "Red") {
        console.log(`${player.name} opened the door... You fall through a huge hole before you land on the ground. You soon realize that you are at the gates of the house. Not wanting to be traumitized any further, you run away so you can go back home to your bed.` );
     } else if(doors == "purple" || doors == "Purple") {
          console.log(`${player.name} opened the door. They fell into an endless abyss. None of their screams can be heard at all.. but then they fall hard on the ground. They saw another purple door...`);
        } 
    }
  }
    else {
      if(rollingBall == "tell story" || "Tell story") {
        console.log(`${player.name} decided to quickly tell the ball the story of how your fish died when you were young. The ball stops and listens, then telling a story of their own. Now you two are friends... good job...`);
      }
    }
  }
  else { 
     if(followRabbit == "n" || followRabbit == "no") {
      console.log(`${player.name} was too creeped out to follow the rabbit. You didnt realize that the floor was slowly turning into a mouth. Before you could react, the floor ate you in one piece. RIP`);

     }
  }
  if(false) {} // COACH CARYN HACK 
    // every else MUST have an if before it. each if can only have ONE else. Check your if/else if/else matching 
 else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story
  console.log(`${player.name} got surprised by a purple cat who came out of nowhere. Literally. The cat wants you to follow them into the deep forests. They vanish before you could give them an answer.`);
  let followCat = READLINE.question("Will you follow the cat? (yes or no) ");
  if(followCat == "y" || followCat == "yes") {
    player.courage++;
    console.log(`${player.name} was hesitant but followed. The cat suddenly appeared with a potion in his hands. He wants ${player.name} to drink it.`);
    let drinkPotion = READLINE.question("Will you drink the potion? (yes or no) ");
    if(drinkPotion == "y" || drinkPotion == "yes") {
       player.strength--;
        console.log(`${player.name} got sick from drinking the potion. That made the cat really happy... In an evil way... oh wait! The cat isnt evil. Dont worry about it. I didnt say anything just now.`);
        console.log(`${player.name} couldnt move. You could feel your hands and body turn into something else. "Now you are my clone!" the cat bellowed before you got unconcious. Say goodbye to your video games now.`);
    }
    else {
      if(drinkPotion == "n" || drinkPotion == "no") {
        console.log(`${player.name} kindly declined but the cat wasn't having it. "DRINK IT!!!" the cat yelled. Suddenly a girl with blonde hair appeared behind the cat. "Cheshire Cat! I must stop you from hurting anyone who comes in this forest!" she screamed`);
        console.log(`${player.name} watched as the girl lunged at the cat with a knife. A sudden feeling of determination fills you.`)
        let alice = READLINE.question("Will you join or run?")
        if(alice == "join" || alice == "Join") {
          console.log(`${player.name} prepared their ${player.weapon} and joined the girl. The cat vanished in fear. The girl stopped in her tracks. "Please leave. You are not safe here. Please remember the name, Alice.."`);
          console.log(`${player.name} clearly wasnt about this life so they ran as fast as they could. They made it to the gates and left in one piece.`);
        }
        else {
          if(alice == "run" || alice == "Run")
            console.log(`${player.name} didnt want to be a part of this drama whatsoever. Running away was the only option so you did that. Youve escaped and now you can play your games at home.`);
        }
      }
    }
  }   
  else {
    if(followCat == "n" || followCat == "no")  {
      console.log(`${player.name} decided not to follow at all. They walked away from the house knowing that they have to rethink their life choices and possibly regret them.`)
    }
  }
}
console.log("Thanks for playing!");
