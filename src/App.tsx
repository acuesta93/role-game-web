import { useState } from 'react'
import Card from './components/Card'
import Footer from './pages/root/Footer'
import Header from './pages/root/Header'
import { Carrousel, CarrouseChild } from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-800 relative max-h-full'>
      <Header />
      <div className='p-10'>
        <Carrousel>
          <CarrouseChild>
            <Card
              title='Prueba'
              imageUrl='https://www.nationalgeographic.com.es/medio/2014/01/08/mm8131_120329_1655_1800x1198.jpg'
              content='Es un contenido'
            />
          </CarrouseChild>
          <CarrouseChild>
            <Card
              title='Prueba'
              imageUrl='https://www.nationalgeographic.com.es/medio/2014/01/08/mm8131_120329_1655_1800x1198.jpg'
              content='Es un contenido'
            />
          </CarrouseChild>
          <CarrouseChild>
            <Card
              title='Prueba'
              imageUrl='https://www.nationalgeographic.com.es/medio/2014/01/08/mm8131_120329_1655_1800x1198.jpg'
              content='Es un contenido'
            />
          </CarrouseChild>
          <CarrouseChild>
            <Card
              title='Prueba'
              imageUrl='https://www.nationalgeographic.com.es/medio/2014/01/08/mm8131_120329_1655_1800x1198.jpg'
              content='Es un contenido'
            />
          </CarrouseChild>
          <CarrouseChild>
            <Card
              title='Prueba'
              imageUrl='https://www.nationalgeographic.com.es/medio/2014/01/08/mm8131_120329_1655_1800x1198.jpg'
              content='Es un contenido'
            />
          </CarrouseChild>
        </Carrousel>
      </div>
      <Footer />
    </div>
  )
}

export default App
