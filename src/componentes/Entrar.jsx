import { useRef } from "react"

export default function Entrar() { 
    const UsernameRef = useRef()
    const PasswordRef = useRef()

    function Entrar() {
        const usuario = UsernameRef.current.value;
        const contraseña = PasswordRef.current.value;
        
        fetch("http://localhost:8000/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ usuario, contraseña })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    window.location.href = res.url;
                } else {
                    alert("¡Error! Por favor, verifica tu usuario o contraseña.")
                }
            })
    }

    return (
        <form action="">
            <h2 className="p-5 text-muted">Inicio de sesion</h2>
            <p>
                <label className="form-label" htmlFor="">Username</label>
                <input ref={UsernameRef} className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Password</label>
                <input ref={PasswordRef} className="form-control" type="password" />
            </p>
            <button onClick={Entrar} type="button" className="btn btn-primary">Entrar</button>
        </form>
    )
}