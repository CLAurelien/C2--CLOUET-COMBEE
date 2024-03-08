import TeamGenerator from "../src/teamGenerator.js";
import TournamentGenerator from "../src/tournamentGenerator.js";

const chai = import('chai');

describe('TeamGenerator', () => {
    it('nbGenerationTeamTypeBDD', async () => {
        let player = ["hey1","hey2", "hey3"];
        let teams = 3;
        let result = 0;
        let team = new TeamGenerator(player,teams);
        team.generateTeams();
        for(let i = 0; i<teams;i++){
            result++;
        }
        (await chai).expect(result).equal(3)
    });

    it('AVoirMaisEnTDD', () => {
        
    });
});

describe('TournamentGenerator', () => {
    it('pouleNotNullBDD', async () => {
        let player = ["hey1","hey2", "hey3","hey4"];
        let teams = 1;
        let team = new TeamGenerator(player,teams);
        team.generateTeams();
        let getTeam = team.getTeams();
        let tournament = new TournamentGenerator(getTeam);
        tournament.generateTournament();
        (await chai).expect(tournament.poules).length(!0)
    });

    it('TDD', () => {
        
    });
});