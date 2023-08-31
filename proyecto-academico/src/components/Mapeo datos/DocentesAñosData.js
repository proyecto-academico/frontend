const DocentesAñosData = ({years}) =>{
    return(
        <>
            {
                
                years.map((year) =>{
                    const Year = year 
                    console.log(Year)
                    
                    return(
                        <option key="year">{Year}</option>
                    )
                })

            }
        </>
    )
}

export default DocentesAñosData