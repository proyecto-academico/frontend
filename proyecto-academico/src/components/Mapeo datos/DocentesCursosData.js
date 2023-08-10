const DocentesCursosData = ({courses}) =>{

    return(
        <>
            {
                courses.map((curCourses) => {
                    
                    const Nombre = curCourses.Materia.Nombre;
                    const Ano_Escolar = curCourses.Division.Ano_Escolar;
                    const Division_Escolar = curCourses.Division.Division_Escolar;
                    console.log(curCourses);

                    return(
                        <tr key="Nombre">
                            <td>{Nombre}</td>
                            <td>{Ano_Escolar}</td>
                            <td>{Division_Escolar}</td>
                        </tr>
                    )
                })
            }
        </>
    )

}
export default DocentesCursosData