import { useState, useEffect } from 'react'
import { getPerson } from '@/services/swapiService'
import PropTypes from 'prop-types'
import './person-details.css'

export default function PersonDetails({ personId }) {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (!personId) {
      return
    }
    getPerson(personId).then(person => setPerson(person))
  }, [personId])

  return person === null ? (
    <div>Select a person from a list</div>
  ) : (
    <div className='person-details card'>
      <img
        className='person-image'
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
        alt={person.name}
      />

      <div className='card-body'>
        <h4>{person.name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>{person.gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>{person.birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color</span>
            <span>{person.eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

PersonDetails.propTypes = {
  personId: PropTypes.string
}
