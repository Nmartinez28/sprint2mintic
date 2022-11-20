
export default function Entrar(){
    return (
        <form action="">
            <p>
                <label className="form-label" htmlFor="">Username</label>
                <input className="form-control" type="text" />
            </p>
            <p>
                <label className="form-label" htmlFor="">Password</label>
                <input className="form-control" type="password" />
            </p>
            <button>Entrar</button>
        </form>
    )
}