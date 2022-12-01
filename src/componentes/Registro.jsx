import { useRef } from "react"

export default function Registro(){
    const NameRef = useRef()
    const UsernameRef = useRef()
    const PasswordRef = useRef()
    const EmailRef = useRef()

    function Crear() {
        const nombre = NameRef.current.value;
        const usuario = UsernameRef.current.value;
        const contraseña = PasswordRef.current.value;
        const correo = EmailRef.current.value;
        fetch("http://localhost:8000/signup", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ nombre, usuario, contraseña, correo })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    window.location.href = res.url;
                    alert("Registro finalizado satisfactoriamente.")
                }
            })
    }

    return (
        <form>
            <p>
                <label className="form-label" htmlFor="">Name</label>
                <input ref={NameRef} className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Username</label>
                <input ref={UsernameRef} className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Password</label>
                <input ref={PasswordRef} className="form-control" type="password" />
            </p>
            <p>
                <label className="form-label" htmlFor="">E-mail</label>
                <input ref={EmailRef} className="form-control" type="email" />
            </p>
            <button onClick={Crear} type="button" className="btn btn-primary">Crear</button>
        </form>
    )
}