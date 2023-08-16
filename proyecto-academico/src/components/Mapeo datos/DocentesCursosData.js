const DocentesCursosData = ({courses}) =>{

    return(
        <>
            {
                courses.map((curCourses) => {
                    
                    const Nombre = curCourses.Materia;
                    const Ano_Escolar = curCourses.Ano_Escolar;
                    const Division_Escolar = curCourses.Division_Escolar;
                    const ano_actual = curCourses.ano_actual;
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