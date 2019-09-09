import React from 'react'
import Players from './players'
import '../components/myteam.css'

export default (props) => {
    return (
        <div className="teamheader">
            <h3>My Team</h3>
            <div className="myteam">
                {props.teamList.map(el => {
                    return (
                        <Players 
                        id={el.id}
                        img={el.img}
                        name={el.first_name + ' ' + el.last_name}
                        team={el.team}
                        batting_average={el.batting_average}
                        hrs={el.hrs}
                        war={el.war}
                        newStat={props.statChangerFn}
                        releasePlayer={props.releasePlayer}
                        />
                        )
                    })}
            </div>
        </div>
    )
}
