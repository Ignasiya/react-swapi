import { useState, useEffect } from 'react'
import { getPlanet } from '@/services/swapiService'
import Spinner from '@/components/Spinner'
import ErrorIndicator from '@/components/ErrorIndicator'
import PropTypes from 'prop-types'
import './random-planet.css'

export default function RandomPlanet() {
  const [planet, setPlanet] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 10) + 1
    return getPlanet(id)
      .then(planet => setPlanet(planet))
      .catch(() => {
        setError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    updatePlanet().then(() => setIsLoading(false))
  }, [])

  return (
    <div className='random-planet jumbotron rounded'>
      {isLoading ? <Spinner /> : error ? <ErrorIndicator /> : <PlanetView planet={planet} />}
    </div>
  )
}

function PlanetView({ planet = {} }) {
  return (
    <>
      <img
        className='planet-image'
        alt={planet.name}
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
    </>
  )
}

PlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    population: PropTypes.string,
    rotationPeriod: PropTypes.string,
    diameter: PropTypes.string
  })
}
