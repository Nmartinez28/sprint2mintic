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
        const ciudad1 = City1Ref.current.value;
        const direccion1 = Address1Ref.current.value;
        const ciudad2 = City2Ref.current.value;
        const direccion2 = Address2Ref.current.value;

        fetch("http://localhost:8000/registro-ordenes", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ name, id, tlf, fecha, hora, estado, largo, ancho, altura, peso, ciudad1, direccion1, ciudad2, direccion2 }),
        }).then(data => data.json())
            .then(res => {
                if (res.estado === "ok") {
                    window.location.href = res.url;
                } else {
                    alert("¡Error!: La orden no se pudo registrar")
                }
            })
        .catch(err => alert(err))
        .finally() 
    }

    return(
        <form action="">
            <div class="row mt-3"></div>
            <h2 className="p-4 text-secondary">Registro de Orden</h2>
            <div class="row mt-2"></div>
            <p>
                <label className="form-label" htmlFor="">Nombre del destinatario</label>
                <input className="form-control" type="Text"/>
            </p>
            <div className="row justify-content-center">
                    <div className="col p3">
                        <label className="form-label" htmlFor="">Cédula/NIT del destinatario</label>
                        <input className="form-control" type="number"/>
                    </div>
                    <div className="col p3">
                        <label className="form-label" htmlFor="">Teléfono de contacto</label>
                        <input className="form-control" type="Tel"/>
                    </div>
            </div>
            <div class="row mt-3"></div>
            <div className="row justify-content-center">
                    <div className="col p3">
                        <label htmlFor="" className="form-label">Fecha:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col p3">
                        <label htmlFor="" className="form-label">Hora:</label>
                        <input type="time" className="form-control"/>
                    </div>
                    <div className="col p3">
                        <label className="form-label" htmlFor="">Estado</label>
                        <select className="form-control" name="Estado" id="Estado">
                            <option value=""></option>
                            <option value="Guardado">Guardado</option>
                            <option value="Sin guardar">Sin Guardar</option>
                        </select>
                    </div>
            </div>
            <div class="row mt-4"></div>
            <div className="row justify-content-center">
                        <div className="col-2 p3">
                            <label htmlFor="" className="form-label">Largo:</label>
                            <input type="number" className="form-control" placeholder="cm" required />
                        </div>
                        <div className="col-2 p3">
                            <label htmlFor="" className="form-label">Ancho:</label>
                            <input type="number" className="form-control" placeholder="cm" required />
                        </div>
                        <div className="col-2 p3">
                            <label htmlFor="" className="form-label">Altura:</label>
                            <input type="number" className="form-control" placeholder="cm" required />
                        </div>
                        <div className="col-2 p3">
                            <label htmlFor="" className="form-label">Peso:</label>
                            <input type="number" className="form-control" placeholder="Kg" required />
                        </div>
                    </div>
                    <div class="row mt-4"></div>
            <div class="row mt-3"></div>
            <div className="row justify-content-center">
                <div className="col p3">
                    <label className="form-label" htmlFor="">Dirección de recogida</label>
                    <input className="form-control" type="Text"/>
                </div>
                <div className="col p3">
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
                </div>
            </div>     
            <div class="row mt-4"></div>
            <div className="row justify-content-center">
                <div className="col p3">
                    <label className="form-label" htmlFor="">Dirección de entrega</label>
                    <input className="form-control" type="Text"/>
                </div>
                <div className="col p3">
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
                    </div> 
            </div> 
            <div class="row mt-4"></div>
            <button type="button" onClick={Registrar_orden} className="btn btn-primary">Crear orden</button>
        </form>    
    )
}