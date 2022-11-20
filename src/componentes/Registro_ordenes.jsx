export default function Registro_ordenes(){
    return(
        <form action="">
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
                <label className="form-label" htmlFor="">Largo </label>
                <input className="form-control" type="number"/>
            </p>  
            <p>
                <label className="form-label" htmlFor="">Ancho </label>
                <input className="form-control" type="number"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Alto </label>
                <input className="form-control" type="number"/>
            </p>     
            <p>
                <label className="form-label" htmlFor="">Peso </label>
                <input className="form-control" type="number"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Dirección de recogida </label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
            <label className="form-label" htmlFor="">Ciudad de Recogida </label>
                <select className="form-control" name="C_recogida" id="C_recogida">
                    <option value="Bogota">Bogotá</option>
                    <option value="Medellin">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                </select>
            </p>
            <p>
                <label className="form-label" htmlFor="">Nombre destinatario </label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Cédula/nit destinatario </label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Dirección de entrega </label>
                <input className="form-control" type="Text"/>
            </p>
            <p>
                <label className="form-label" htmlFor="">Ciudad de Entrega </label>
                <select className="form-control" name="C_entrega" id="C_entrega">
                    <option value="Bogota">Bogotá</option>
                    <option value="Medellin">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                </select>
            </p>
            <button>Crear orden</button>
        </form>    
    )
}