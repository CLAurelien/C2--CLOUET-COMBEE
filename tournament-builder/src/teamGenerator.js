import TournamentGenerator from "./tournamentGenerator.js";

class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  generateTeams() {
    if (this.players.length%this.playersPerTeam !== 0){
      this.nbTeamsExeption();
    }
    let shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random()); // Mélange aléatoire des joueurs
    let teamIndex = 0;

    while (shuffledPlayers.length > 0) {
      let teamPlayers = shuffledPlayers.splice(0, this.playersPerTeam);
      let teamName = `Équipe ${teamIndex + 1}`;
      let team = {
        name: teamName,
        players: teamPlayers,
      };
      this.teams.push(team);
      teamIndex++;
    }
  }

  getTeams() {
    return this.teams;
  }

  nbTeamsExeption() {
    let left = this.players%this.playersPerTeam;
    throw new Error("The number of players does not allow for fair teams, left " + left + " for a team of " + this.playersPerTeam);
  }
}

export default  TeamGenerator
// Exemple d'utilisation

let team = new TeamGenerator(["hey", "hey2", "hey3","hey4"],1);

team.generateTeams();
console.log(team.getTeams())

let getTeam = team.getTeams();

let tournament = new TournamentGenerator(getTeam);
tournament.generateTournament();