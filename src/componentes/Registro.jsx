export default function Registro(){
    const Crear = () => {
        alert("Registro finalizado satisfactoriamente")
    }

    return (
        <form>
            <p>
                <label className="form-label" htmlFor="">Nombres</label>
                <input className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Username</label>
                <input className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Password</label>
                <input className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Correo</label>
                <input className="form-control" type="email" />
            </p>
            <button onClick={Crear}>Crear</button>
        </form>
    )
}