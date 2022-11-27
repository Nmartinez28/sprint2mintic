import { useRef } from "react"

export default function Entrar() {

    //Crea los hooks de referencia para manipular los usuarios y password. 
    const UsernameRef = useRef()
    const PasswordRef = useRef()

    //Función para enviar datos al servidor. 
    function Entrar() {
        //Captura el usename y password. 
        const usuario = UsernameRef.current.value;
        const password = PasswordRef.current.value;

        //Función que consume la API
        fetch("http://localhost:8000/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ usuario, password })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    window.location.href = res.url;
                } else {
                    alert("Error: Por favor verificar usuario o contraseña")
                }
            })
    }

    return (
        <form action="">
            <p>
                <label className="form-label" htmlFor="">Username</label>
                <input ref={UsernameRef} className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Password</label>
                <input ref={PasswordRef} className="form-control" type="password" />
            </p>
            <button onClick={Entrar}>Entrar</button>
        </form>
    )
}