import React from 'react'
import Cards from './Cards'
import '../style/explore.css'

const Explore = ({data,title}) => {
    return (
        <>
            <div className="explore common__width">
            <h1>{title}</h1>
            <div className="explore__grid">
                {
                    data.map(apidata=>{
                        return(
                        <Cards apidata={apidata}/>
                        )})
                }
            </div>
            </div>

        </>
    )
}

export default Explore
