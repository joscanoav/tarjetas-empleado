import './App.css' // Usaremos esto para hace el Grid
import UserCard from './components/UserCard'; // Importamos la tarjeta desde la nueva carpeta

function App() {

  return (
    <main className='contenedor-principal'>
      <header className='cabecera-app'>
        <h1>Directorio de empleados</h1>
        <p>Aprende React usando arquitectura correcta.</p>
      </header>
      {/* Aquí usuamos Grid o Flexbox en App.css para linear las tarjetas */}
      <section className='galeria-empleados'>
        {/*Reutilización Máxima: Pasamos Props */}
        <UserCard
         nombre='Ana García'
         profesion='Frontend Developer'
         imagen='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
        />

        <UserCard
         nombre='Carlos Ruiz'
         profesion='UX/UI Designer'
         imagen='https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80'
        />

        <UserCard
         nombre='Laura Gómez'
         profesion='DevOps Enginner'
         imagen='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
        />


      </section>
    </main>
  )
}

export default App;
