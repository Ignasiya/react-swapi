import { useState, useEffect } from 'react'
import { getPlanet } from '@/services/swapiService'
import './random-planet.css'

export default function RandomPlanet() {
  const [planet, setPlanet] = useState({
    id: '',
    name: '',
    population: '',
    rotationPeriod: '',
    diameter: ''
  })

  useEffect(() => {
    updatePlanet()
  }, [])

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 10) + 1
    getPlanet(id).then(planet => {
      setPlanet({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })
  }

  return (
    <div className='random-planet jumbotron rounded'>
      <img
        className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
      />
      <div>
        <h4>{planet.name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{planet.population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{planet.rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{planet.diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
