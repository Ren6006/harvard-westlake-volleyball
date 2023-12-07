class VolleyballPlayer {
  constructor(name, isVarsity, height, grade, stats = [0, 0, 0, 0]) {
    this.name = name;
    this.isVarsity = isVarsity;
    this.height = height;
    this.grade = grade;
    this.stats = stats;
  }

  // Increment methods to increase the player's stats by a specified integer value
  incrementKills(value) {
    this.stats[0] += value;
  }

  incrementBlocks(value) {
    this.stats[1] += value;
  }

  incrementDigs(value) {
    this.stats[2] += value;
  }

  incrementSetsPlayed(value) {
    this.stats[3] += value;
  }
}

function loadPlayerProfile(){
  document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the selected player from localStorage
    const selectedPlayer = JSON.parse(localStorage.getItem("selectedPlayer"));

  // Check if a player is selected
  if (selectedPlayer) {
    // Call loadPlayerProfile with the selected player
    player = selectedPlayer;

    updatePlayerProfile(player);

    // Clear the selected player from localStorage
    localStorage.removeItem("selectedPlayer");
  }
  });
}

function updatePlayerProfile(player){
  // Update the player name in the HTML
  document.getElementById("player-name").textContent = player.name;

  // Update the player stats in the HTML
  document.getElementById("kills").textContent = "Kills: " + player.stats[0];
  document.getElementById("blocks").textContent = "Blocks: " + player.stats[1];
  document.getElementById("digs").textContent = "Digs: " + player.stats[2];
  document.getElementById("sets-played").textContent = "Sets Played: " + player.stats[3];
}

// Sample list of VolleyballPlayer objects
const players = [
  new VolleyballPlayer("Alice", true, "5'10\"", 11, [30, 5, 15, 20]),
  new VolleyballPlayer("Bob", false, "6'2\"", 12, [25, 8, 10, 18]),
  new VolleyballPlayer("Charlie", true, "5'8\"", 10, [20, 3, 12, 15]),
  new VolleyballPlayer("Hilal", false, "5'3\"", 12, [0, 0, 0, 1]),
  // Add more players as needed
];

function loadTeamView(){
// Code to display the list of players in a table
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("player-table-body");

  players.forEach((player) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    
    // Create a link to player.html with an onclick event to load player profile
    const playerLink = document.createElement("a");
    playerLink.href = "player.html";
    playerLink.onclick = function (event) {
      event.preventDefault(); // Prevent the default link behavior
      
      // Store the selected player in localStorage
      localStorage.setItem("selectedPlayer", JSON.stringify(player));

      // Redirect to player.html
      window.location.href = "player.html";
    };
    playerLink.textContent = player.name;

    nameCell.appendChild(playerLink);
    row.appendChild(nameCell);

    // Add more cells for other player attributes if needed

    tableBody.appendChild(row);
  });
});
}

if (window.location.pathname.includes("teamview.html")) {
  loadTeamView();
}

if (window.location.pathname.includes("player.html")){
  loadPlayerProfile();
}