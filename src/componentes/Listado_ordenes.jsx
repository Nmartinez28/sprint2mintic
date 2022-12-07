import {useEffect, useState} from "react"
import { Link } from "react-router-dom"

export default function Listado_ordenes(){
    const [listado, setListado] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/listado-ordenes", {
            headers: { "content-type":"application/json" },
            method: "POST",
        }).then (res => res.json())
            .then(res => {
                if (res.estado === "ok"){
                    setListado(res.data)
                } else {
                    alert("¡Error!: No fue posible realizar la consulta")
                }
            })
    },[]) 

    return (
        <form action="">
            <div className="container-fluid p-5">
                <h2 className="p-4 text-secondary">Lista de ordenes</h2>
                <table className="table table-striped table-expand-lg table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#Servicio</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listado.map(p => <tr key={p.id}>
                                <td>{p._id}</td>
                                <td>{p.fecha}</td>
                                <td>{p.ciudad}</td>
                                <td>{p.dirección}</td>
                                <td>{p.estado}</td>
                                <Link to= {'/actualizar-ordenes/#'+p._id}>Actualizar</Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="row "> {}
                    <p> <Link to= {"/Registro_ordenes"}>Registrar orden</Link></p>
            </div>
        </form>
    )
}