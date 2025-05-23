function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {

   
    if(gameObject().home.players[playerName]) {
        return gameObject().home.players[playerName].points;
    }
    else if (gameObject().away.players[playerName]) {
        return gameObject().away.players[playerName].points; 
    }
    else {
        return "Player not found!"
    }
}

console.log(numPointsScored("Brook Lopez")); 



function shoeSize(playerName) {
    if(gameObject().home.players[playerName]) {
        return gameObject().home.players[playerName].shoe; 

    }

    else if (gameObject().away.players[playerName]) {
        return (gameObject().away.players[playerName].shoe)
    }
    
    else {
        return "Player not Found!" 
    }
}


function teamColors(teamName) { 
    
   if (teamName === gameObject().home.teamName) {
    return gameObject().home.colors; 

   }
    else if (teamName === gameObject().away.teamName) {
        return gameObject().away.colors; 
    }
    
    else {
        return "Team not Found!" ;
    }
    
}

function teamNames() {
    const a =  gameObject().home.teamName;   
    const b = gameObject().away.teamName; 

    return[a, b]; 
    

}


function playerNumbers(teamName) {
  
     
  const game = gameObject(); // Call the function to get the data
  const numbers = [];

  for (let side in game) {
    const team = game[side];
    if (team.teamName === teamName) {
      for (let player in team.players) {
        numbers.push(team.players[player].number);
      }
    }
  }

  return numbers;

}

function playerStats(playerName) {
    let game = gameObject(); 
  for (let side in game) {
    const players = game[side].players;

    if (players[playerName]) {
      return players[playerName]; // Return the stats object
    }
  }

  return "Player not found";

}


// **`bigShoeRebounds()`**  
   //Finds the player with the largest shoe size and returns their number of rebounds.

function bigShoeRebounds() {
    const allPlayers = {
        ...gameObject().home.players,
        ...gameObject().away.players 
    };

    let largestShoe =0; 
    let rebounds =0;

    for (let player in allPlayers) {
        const stats = allPlayers[player]; 
        if(stats.shoe > largestShoe) {
            largestShoe = stats.shoe;
            rebounds = stats.rebounds;
        }
    }
    return rebounds; 
        }
        
console.log(bigShoeRebounds()); 