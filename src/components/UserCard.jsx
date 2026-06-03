import './UserCard.css'

function UserCard(props) {
  return (
    <div className='tarjeta'>
        <img src={props.imagen} alt="Foto de perfil" className='tarjeta-img' />
        <div className='tarjeta-info'>
            <h3>{props.nombre}</h3>
            <p className='profesion'>
                {props.profesion}
            </p>
            <button className='btn-conectar'>Conectar</button>
        </div>
    </div>
  )
}

export default UserCard