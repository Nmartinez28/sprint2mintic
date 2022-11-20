
export default function Ventas() {
    return (
        <form action="">
            <p>
                <label htmlFor="">Fecha</label>
                <input type="date" />
            </p>
            <p>
                <label htmlFor="">Documento Cliente</label>
                <input type="number" />
            </p>
            <p>
                <label htmlFor="">Nombre Cliente</label>
                <input type="text" readOnly />
            </p>
            <p>
                <label htmlFor="">Nombre producto</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Valor unitario</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Cantidad</label>
                <input type="number" />
            </p>
            <p>
                <label htmlFor="">Total</label>
                <input type="text" readOnly />
            </p>
            <button>Guardar</button>
        </form>
    )
}