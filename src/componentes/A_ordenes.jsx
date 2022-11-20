export default function Registro_ordenes(){
    return(
        <form action="">
            <p>
                <label htmlFor="">Fecha</label>
                <input type="date"/>
            </p>
            <p>
                <label htmlFor="">Hora</label>
                <input type="time"/>
            </p>
            <p>
                <label htmlFor="">Estado</label>
                <select name="Estado" id="Estado">
                    <option value="Guardado">Guardado</option>
                    <option value="Sin guardar">Sin Guardar</option>
                </select>
            </p>
            <p>
                <label htmlFor="">Largo </label>
                <input type="number"/>
            </p>  
            <p>
                <label htmlFor="">Ancho </label>
                <input type="number"/>
            </p>
            <p>
                <label htmlFor="">Alto </label>
                <input type="number"/>
            </p>     
            <p>
                <label htmlFor="">Peso </label>
                <input type="number"/>
            </p>
            <p>
                <label htmlFor="">Dirección de recogida </label>
                <input type="Text"/>
            </p>
            <p>
            <label htmlFor="">Ciudad de Recogida </label>
                <select name="C_recogida" id="C_recogida">
                    <option value="Bogota">Bogotá</option>
                    <option value="Medellin">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                </select>
            </p>
            <p>
                <label htmlFor="">Nombre destinatario </label>
                <input type="Text"/>
            </p>
            <p>
                <label htmlFor="">Cédula/nit destinatario </label>
                <input type="Text"/>
            </p>
            <p>
                <label htmlFor="">Dirección de entrega </label>
                <input type="Text"/>
            </p>
            <p>
                <label htmlFor="">Ciudad de Entrega </label>
                <select name="C_entrega" id="C_entrega">
                    <option value="Bogota">Bogotá</option>
                    <option value="Medellin">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                </select>
            </p>
            <button>Acutalizar orden</button>
        </form>    
    )
}