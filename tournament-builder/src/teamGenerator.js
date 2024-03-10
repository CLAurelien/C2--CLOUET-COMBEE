import TournamentGenerator from "./tournamentGenerator.js";

class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  generateTeams() {
    this.nbTeamsExeption();
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
    let error = Error("The number of players does not allow for fair teams");
    if (this.players.length%this.playersPerTeam !== 0){
      throw error;
    }
  }
}

export default  TeamGenerator
// Exemple d'utilisation
