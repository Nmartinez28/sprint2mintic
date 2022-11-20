
export default function Producto() {
    const guardar = () => {
        alert("Guardado :)")
    }
    return (
        <form>
            <p>
                <label className="form-label" htmlFor="">Nombre</label>
                <input className="form-control" type="text" />
            </p>
            <p>
                <label htmlFor="">Precio</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Stock</label>
                <input type="text" />
            </p>
            <button onClick={guardar}>Guardar</button>
        </form>
    )
}