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
        (await chai).expect(() => team.generateTeams()).to.throw(Error);
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

    it('teams>4TDD', async () => {
        let player = ["hey1","hey2","hey3"];
        let nbPerTeams = 1;
        let team = new TeamGenerator(player, nbPerTeams);
        team.generateTeams();
        let getTeam = team.getTeams();
        let tournament = new TournamentGenerator(getTeam);
        (await chai).expect(() => tournament.generateTournament()).to.throw(Error);
    });
});