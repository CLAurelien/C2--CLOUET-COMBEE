import TeamGenerator from "../src/teamGenerator.js";
import TournamentGenerator from "../src/tournamentGenerator.js";

const chai = import('chai');

describe('TeamGenerator', () => {
    it('nbGenerationTeamTypeBDD', async () => {
        let player = ["hey1","hey2", "hey3"];
        let nbPerTeams = 3;
        let result = 0;
        let team = new TeamGenerator(player,nbPerTeams);
        team.generateTeams();
        for(let i = 0; i<nbPerTeams;i++){
            result++;
        }
        (await chai).expect(result).equal(3)
    });

    it('NbPlayers%Nb/TeamsTDD', async () => {
        let player = ["hey1","hey2", "hey3","hey4"];
        let nbPerTeams = 3;
        for (let i = player.length+1;i<(i+3);i++){
            player.push('hey'+i.toString());
            let team = new TeamGenerator(player, nbPerTeams);
            team.generateTeams();
            if(player.length%nbPerTeams !== 0){
                (await chai).expect(team.nbTeamsExeption())
            }
        }
    });
});

describe('TournamentGenerator', () => {
    it('pouleNotNullBDD', async () => {
        let player = ["hey1","hey2", "hey3","hey4"];
        let nbPerTeams = 1;
        let team = new TeamGenerator(player,nbPerTeams);
        team.generateTeams();
        let getTeam = team.getTeams();
        let tournament = new TournamentGenerator(getTeam);
        tournament.generateTournament();
        (await chai).expect(tournament.poules).length(!0)
    });

    it('nbTeams>4TDD', async () => {
        let player = [];
        let nbPerTeams = 1;
        for (let i = 1;i<4;i++){
            player.push('hey'+i.toString());
            let team = new TeamGenerator(player, nbPerTeams);
            team.generateTeams();
            let getTeam = team.getTeams();
            let tournament = new TournamentGenerator(getTeam);
            tournament.generateTournament();
            (await chai).expect(tournament.nbPoulesExeption())
        }
    });
});