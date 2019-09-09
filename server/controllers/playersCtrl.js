const data = require('../data')
const team = []
let id = 0

module.exports = {
    getPlayerOption: (req, res) => {
        const playerArr = []
        const player1 = data[Math.ceil(Math.random() * 20) - 1]
        playerArr.push(player1)
        const player2 = data[Math.ceil(Math.random() * 20) - 1]
       playerArr.push(player2)
        const player3 = data[Math.ceil(Math.random() * 20) - 1]
        playerArr.push(player3)
        const player4 = data[Math.ceil(Math.random() * 20) - 1]
        playerArr.push(player4)
        res.status(200).send(playerArr)
    },

    add: (req,res) => {
        const playerObj = 
        {...req.body, id:id++}
        team.push(playerObj)
        res.status(200).send(team)
    },

    letGo: (req, res) => {
        const {id} = req.params
        const index = team.findIndex(el => el.id === +id)
        team.splice(index, 1)
        res.status(200).send(team)
    },

    statChange: (req, res) => {
        const {id} = req.params
        const {newHrs} = req.body
        const {newBa} = req.body
        const {newWar} = req.body
        const index = team.findIndex(el => el.id === +id)
        const updatedPlayer = {
            ...team[index],
            "hrs": newHrs,
            "batting_average": newBa,
            "war": newWar
        }
        team.splice(index,1,{
            ...team[index],
            "hrs": newHrs,
            "batting_average": newBa,
            "war": newWar
        })
        res.status(200).send(team)

    }
}