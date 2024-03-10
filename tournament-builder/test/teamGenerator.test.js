import TeamGenerator from "../src/teamGenerator.js";
import TournamentGenerator from "../src/tournamentGenerator.js";

const chai = import('chai');

describe('TeamGenerator', () => {
    it('nbGenerationTeamTypeBDD', async () => {
        let player = ["hey1","hey2", "hey3"];
        let nbPerTeams = 1;
        let team = new TeamGenerator(player,nbPerTeams);
        team.generateTeams();
        (await chai).expect(team.teams.length).equal(player.length/nbPerTeams)
    });

    it('Equity/TeamsTDD', async () => {
        let player = ["hey1","hey2", "hey3","hey4"];
        let nbPerTeams = 3;
        let team = new TeamGenerator(player, nbPerTeams);

        for (let i = player.length + 1; i < player.length + 4; i++) {
            player.push('hey' + i.toString());
            (await chai).expect(() => team.nbTeamsExeption()).to.throw(Error);
        }
    });
});

describe('TournamentGenerator', () => {
    it('pouleNotEmptyBDD', async () => {
        let player = ["hey1","hey2", "hey3","hey4"];
        let nbPerTeams = 1;
        let team = new TeamGenerator(player,nbPerTeams);
        team.generateTeams();
        let getTeam = team.getTeams();
        let tournament = new TournamentGenerator(getTeam);
        tournament.generateTournament();
        (await chai).expect(tournament.poules).length(!0)
    });

    it('poules>4TDD', async () => {
        let player = [];
        let nbPerTeams = 1;
        for (let i = 1;i<4;i++){
            player.push('hey'+i.toString());
            let team = new TeamGenerator(player, nbPerTeams);
            team.generateTeams();
            let getTeam = team.getTeams();
            let tournament = new TournamentGenerator(getTeam);
            tournament.generateTournament();
            (await chai).expect(() => tournament.nbPoulesExeption()).to.throw(Error);        }
    });
});