import { useRef } from "react"

export default function Registro_ordenes(){
    const NameRef = useRef();
    const IDRef = useRef();
    const TlfRef = useRef();
    const DateRef = useRef();
    const TimeRef = useRef();
    const StateRef = useRef();
    const LongRef = useRef();
    const WidthRef = useRef();
    const HeightRef = useRef();
    const WeightRef = useRef();
    const Address1Ref = useRef();
    const City1Ref = useRef();
    const Address2Ref = useRef();
    const City2Ref = useRef();

    function Registrar_orden() {
        const name = NameRef.current.value;
        const id = IDRef.current.value;
        const tlf = TlfRef.current.value;
        const fecha = DateRef.current.value;
        const hora = TimeRef.current.value;
        const estado = StateRef.current.value;
        const largo = LongRef.current.value;
        const ancho = WidthRef.current.value;
        const altura = HeightRef.current.value;
        const peso = WeightRef.current.value;
        const ciudad = City1Ref.current.value;
        const direccion = Address1Ref.current.value;
        const ciudad2 = City2Ref.current.value;
        const direccion2 = Address2Ref.current.value;

        fetch("http://localhost:8000/registro-ordenes", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ name, id, tlf, fecha, hora, estado, largo, ancho, altura, peso, ciudad, direccion, ciudad2, direccion2 })
        })
            .then(data => data.json())
            .then(res => {
                if (res.estado === "ok") {
                    window.location.href = res.url;
                }
            })
    }

    return(
        <form action="">
            <p>
                <label className="form-label" htmlFor="">Nombre del destinatario</label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Cédula/nit del destinatario</label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Teléfono de contacto</label>
                <input className="form-control" type="Tel"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Fecha</label>
                <input className="form-control" type="date"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Hora</label>
                <input className="form-control" type="time"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Estado</label>
                <select className="form-control" name="Estado" id="Estado">
                    <option value="Guardado">Guardado</option>
                    <option value="Sin guardar">Sin Guardar</option>
                </select>
            </p>
            <p>
                <label className="form-label" htmlFor="">Largo</label>
                <input className="form-control" type="number"/>
            </p>  
            <p>
                <label className="form-label" htmlFor="">Ancho</label>
                <input className="form-control" type="number"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Alto</label>
                <input className="form-control" type="number"/>
            </p>     
            <p>
                <label className="form-label" htmlFor="">Peso</label>
                <input className="form-control" type="number"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Dirección de recogida</label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
            <label className="form-label" htmlFor="">Ciudad de recogida</label>
                <select className="form-control" name="C_recogida" id="C_recogida">
                    <option value=""></option>
                    <option value="Arauca">Arauca</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Bogotá">Bogotá D.C.</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Cali">Cali</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Cúcuta">Cúcuta</option>
                    <option value="Florencia">Florencia</option>
                    <option value="Ibagué">Ibagué</option>
                    <option value="Inírida">Inírida</option>
                    <option value="Leticia">Leticia</option>
                    <option value="Manizales">Manizales</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Mitú">Mitú</option>
                    <option value="Mocoa">Mocoa</option>
                    <option value="Montería">Montería</option>
                    <option value="Neiva">Neiva</option>
                    <option value="Quibdó">Quibdó</option>
                    <option value="Pasto">Pasto</option>
                    <option value="Pereira">Pereira</option>
                    <option value="Popayán">Popayán</option>
                    <option value="Bucaramanga">Puerto Carreño</option>
                    <option value="Riohacha">Riohacha</option>
                    <option value="San Andrés Isla">San Andrés Isla</option>
                    <option value="Santa Marta">Santa Marta</option>
                    <option value="San José del Guaviare">San José del Guaviare</option>
                    <option value="Sincelejo">Sincelejo</option>
                    <option value="Tunja">Tunja</option>
                    <option value="Valledupar">Valledupar</option>
                    <option value="Villavicencio">Villavicencio</option>
                    <option value="Yopal">Yopal</option>
                </select>
            </p>
            <p>
                <label className="form-label" htmlFor="">Dirección de entrega</label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Ciudad de entrega</label>
                <select className="form-control" name="C_entrega" id="C_entrega">
                    <option value=""></option>
                    <option value="Arauca">Arauca</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Bogotá">Bogotá D.C.</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Cali">Cali</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Cúcuta">Cúcuta</option>
                    <option value="Florencia">Florencia</option>
                    <option value="Ibagué">Ibagué</option>
                    <option value="Inírida">Inírida</option>
                    <option value="Leticia">Leticia</option>
                    <option value="Manizales">Manizales</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Mitú">Mitú</option>
                    <option value="Mocoa">Mocoa</option>
                    <option value="Montería">Montería</option>
                    <option value="Neiva">Neiva</option>
                    <option value="Quibdó">Quibdó</option>
                    <option value="Pasto">Pasto</option>
                    <option value="Pereira">Pereira</option>
                    <option value="Popayán">Popayán</option>
                    <option value="Bucaramanga">Puerto Carreño</option>
                    <option value="Riohacha">Riohacha</option>
                    <option value="San Andrés Isla">San Andrés Isla</option>
                    <option value="Santa Marta">Santa Marta</option>
                    <option value="San José del Guaviare">San José del Guaviare</option>
                    <option value="Sincelejo">Sincelejo</option>
                    <option value="Tunja">Tunja</option>
                    <option value="Valledupar">Valledupar</option>
                    <option value="Villavicencio">Villavicencio</option>
                    <option value="Yopal">Yopal</option>
                </select>
            </p>
            <button type="button" onClick={Registrar_orden} className="btn btn-primary">Crear orden</button>
        </form>    
    )
}