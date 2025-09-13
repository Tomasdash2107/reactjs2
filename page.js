import "@/styles/home.css"

export default function home() {
    return (
        <main className='holder'>
            <div className='homeimg'>
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos a empresas empresas</h2>
                    <p>Somos una empresa dedicada a brindar soluciones integrales para el crecimiento y desarrollo de otras empresas. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus metas comerciales a través de estrategias innovadoras y personalizadas.</p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className='cita'>Excelente servicio y atención personalizada.</span>
                        <span className='autor'>- Juan Pérez, CEO de Empresa XYZ</span>
                    </div>
                    <div className='testimonio'>
                        <span className='cita'>Gracias a su ayuda, hemos logrado aumentar nuestras ventas significativamente.</span>
                        <span className='autor'>- María Gómez, Directora de Marketing en Empresa ABC</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
