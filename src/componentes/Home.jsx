import { useRef } from "react"
export default function Home() {
    const CotzRef = useRef();

    function Cotizar() {
        const Cotizacion = CotzRef.current.value;

        fetch("http://localhost:8000", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ Cotizacion })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    window.location.href = res.url;
                }
            })
    }

    return (
        <form action="">
            <img src="src\assets\truck.PNG"></img>
            <p>
                <label className="form-label" htmlFor="">Envíos a todo destino</label>
            </p>
            <button onClick={Cotizar} type="button" className="btn btn-primary">Cotiza tu envío</button>
        </form>
    )
}