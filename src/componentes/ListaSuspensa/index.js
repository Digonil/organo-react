import '/home/digonil/Documents/cursos_frontend/organo/src/componentes/ListaSuspensa/ListaSupensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;