import React from 'react'

export default (props) => {
    return (
        <div className="myteam">
            {props.teamList.map( el => (
                <myTeam 
                    key={el.id}
                    name={el.first_name}
                    />
            ))}
        </div>
    )
}
    

