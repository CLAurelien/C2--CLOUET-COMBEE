import TeamGenerator from "../src/teamGenerator.js";

const chai = import('chai');

describe('TeamGenerator', () => {
    it('nbGenerationTeam', async () => {
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
});