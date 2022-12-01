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
            <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img src="src\assets\icono-envio.PNG"/>
                            </div>
                        </div>
                        <div className="col text-center">
                            <h2 className="p-4 text-muted">Canales de Atencion</h2>
                            <div>
                                <h5>Telefono</h5>
                                <p>(xxx)-xx xx</p>
                                <h5>Email</h5>
                                <p>atencionalcliente@enviaya.com</p> 
                                <img src="src\assets\social-media.PNG" height="40"/>
                            </div>
                            <h2 className="p-4 text-muted">Horarios de Atencion</h2>
                            <div>
                                <p>Lunes a viernes: 8am a 5pm</p>
                                <p>Sabados: 8am a 11am</p>
                            </div>
                        </div>
                    </div>
                </div> 
        </form>
    )
}