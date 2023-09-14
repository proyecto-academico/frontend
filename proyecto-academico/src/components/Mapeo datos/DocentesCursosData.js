import { forEach } from "lodash"

const DocentesCursosData = ({courses}) =>{

    return(
        <>
            {
                courses.map((curCourses) => {

                    var a;
                    curCourses.forEach((info) => a = info);
                    for(var i=0;i<curCourses.length;i++){
                        const Ciclo_Lectivo = courses[i];
                        const Nombre = curCourses.Materia[i];
                    }

                    /*const Nombre = curCourses.Materia.Nombre;
                    const Ano_Escolar = curCourses.Division.Ano_Escolar;
                    const Division_Escolar = curCourses.Division.Division_Escolar;
                    const ano_actual = curCourses.Fecha_Comienzo;
                    console.log(curCourses);*/

                    return(
                        <>
                        <summary>{a}</summary>
                        </>
                    )
                })
            }
        </>
    )

}
export default DocentesCursosData