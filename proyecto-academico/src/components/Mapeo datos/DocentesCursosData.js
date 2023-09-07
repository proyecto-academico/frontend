const DocentesCursosData = ({courses}) =>{

    return(
        <>
            {
                courses.map((curCourses) => {
                    
                    const Nombre = curCourses.Materia.Nombre;
                    const Ano_Escolar = curCourses.Division.Ano_Escolar;
                    const Division_Escolar = curCourses.Division.Division_Escolar;
                    const ano_actual = curCourses.Fecha_Comienzo;
                    console.log(curCourses);

                    return(
                        <tr key="Nombre">
                            <td>{Nombre}</td>
                            <td>{Ano_Escolar}</td>
                            <td>{Division_Escolar}</td>
                            <td></td>
                        </tr>
                    )
                })
            }
        </>
    )

}
export default DocentesCursosData