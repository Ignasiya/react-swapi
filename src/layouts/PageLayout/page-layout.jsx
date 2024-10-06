import './page-layout.css'
import Header from '@/components/Header'
import RandomPlanet from '@/components/RandomPlanet'
import ItemList from '@/components/ItemList'
import PersonDetails from '@/components/PersonDetails'

export default function PageLayout() {
  return (
    <main className='container'>
      <Header />
      <RandomPlanet />

      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList />
        </div>
        <div className='col-md-6'>
          <PersonDetails />
        </div>
      </div>
    </main>
  )
}
