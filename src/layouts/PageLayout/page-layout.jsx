import Header from '@/components/Header'
import RandomPlanet from '@/components/RandomPlanet'
import ItemList from '@/components/ItemList'
import PersonDetails from '@/components/PersonDetails'
import { useState } from 'react'
import './page-layout.css'

export default function PageLayout() {
  const [selectedPerson, setSelectedPerson] = useState(null)

  const onPersonSelected = id => {
    setSelectedPerson(id)
  }

  return (
    <main className='container'>
      <Header />
      <RandomPlanet />

      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList onItemsSelected={onPersonSelected} />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    </main>
  )
}
