import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useEffect, useState} from 'react';
import Table from "react-table";
import DataTable from "react-data-table-component";
import '../../index.css'
import {isImmutable, toJS} from 'immutable';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/*Vista de los alumnos de sus cursos (Los profesores también pueden*/ 


const TableDN = () => {
  const initialData = [
    {
      id: 1,
      first_bimestre: 6,
      second_bimestre: 1,
      third_bimestre: 9,
      fourth_bimestre: 7,
      grade_definitive: 8,
    },
  ];

  const [course, setCourse] = useState(initialData); // Declaramos el estado course que almacena los datos iniciales de la tabla
  const [editingRowId, setEditingRowId] = useState(null);

  const handleEdit = (row) => { //A esta funcion la llamamos cuando le hacemos click en el boton la primera vez, el "null" significa que no se está editando ninguna fila
    setEditingRowId(row.id);
  };

  const handleSave = (row) => { // Esta funcion la llamamos la segunda vez que le hacemos click al boton en donde luego establece editingRowId en null para indicar que ninguna fila esta siendo editada
    // Guardar los cambios en el estado o enviarlos al servidor aquí
    setEditingRowId(null);
  };

  const columns = [
    {
      name: 'Id',
      selector: 'id',
    },
    {
      name: 'Primer bimestre',
      cell: (row) => // Define como se renderizara el contenido de las celdas en la columna, el argumento row que recibe representa a la fila en la tabla
        editingRowId === row.id ? ( // Se usa para verificar si la fila row esta siendo editada, comparando el editingRowId con el id de la fila actual, si coinciden la fila esta siendo editada
          <input
            type="number"
            value={row.first_bimestre}
            onChange={(e) => 
              setCourse((prevCourse) => // Se utiliza setCourse para actualizar el estado de course
                prevCourse.map((item) => // Utiliza el metodo map en el prevCourse para crear un nuevo array con las modificaciones necesarias, map itera sobre  cada elemento "item" del array
                  item.id === row.id
                    ? { ...item, first_bimestre: parseInt(e.target.value) }
                    : item // Aca se comprueba si id del elemento coincide con el id de la fila actual. Si coincide se esta editando el valor de la fila correcta, en ese caso se crea un nuevo objeto utilizando el operador de propagación ...item para copiar todas las propiedades de lelemento actual item
                )
              )
            }
          />
        ) : (
          row.first_bimestre
        ),
    },
    {
      name: 'Segundo bimestre',
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="number"
            value={row.second_bimestre}
            onChange={(e) =>
              setCourse((prevCourse) =>
                prevCourse.map((item) =>
                  item.id === row.id
                    ? { ...item, second_bimestre: parseInt(e.target.value) }
                    : item
                )
              )
            }
          />
        ) : (
          row.second_bimestre
        ),
    },
    {
      name: 'Tercer bimestre',
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="number"
            value={row.third_bimestre}
            onChange={(e) =>
              setCourse((prevCourse) =>
                prevCourse.map((item) =>
                  item.id === row.id
                    ? { ...item, third_bimestre: parseInt(e.target.value) }
                    : item
                )
              )
            }
          />
        ) : (
          row.third_bimestre
        ),
    },
    {
      name: 'Cuarto bimestre',
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="number"
            value={row.fourth_bimestre}
            onChange={(e) =>
              setCourse((prevCourse) =>
                prevCourse.map((item) =>
                  item.id === row.id
                    ? { ...item, fourth_bimestre: parseInt(e.target.value) }
                    : item
                )
              )
            }
          />
        ) : (
          row.fourth_bimestre
        ),
    },
    {
      name: 'Nota Final',
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="number"
            value={row.grade_definitive}
            onChange={(e) =>
              setCourse((prevCourse) =>
                prevCourse.map((item) =>
                  item.id === row.id
                    ? { ...item, grade_definitive: parseInt(e.target.value) }
                    : item
                )
              )
            }
          />
        ) : (
          row.grade_definitive
        ),
    },
    {
      name: 'Acción',
      cell: (row) =>
        editingRowId === row.id ? (
          <button onClick={() => handleSave(row)}>Guardar</button>
        ) : (
          <button onClick={() => handleEdit(row)}>Editar</button>
        ),
    },
  ];

  return (
    <div>
      <h1>Notas</h1>
      <DataTable columns={columns} data={course} />
    </div>
  );
};

export default TableDN;