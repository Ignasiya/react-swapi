import { useState, useEffect } from 'react'
import { getAllPeople } from '@/services/swapiService'
import PropTypes from 'prop-types'
import './item-list.css'

export default function ItemList({ onItemsSelected }) {
  const [peoples, setPeoples] = useState(null)

  useEffect(() => {
    getAllPeople().then(peoples => {
      setPeoples(peoples)
    })
  }, [])

  return (
    <ul className='item-list list-group'>
      {peoples &&
        peoples.map(person => {
          return (
            <li key={person.id} className='list-group-item'>
              <button onClick={() => onItemsSelected(person.id)} className='btn'>
                {person.name}
              </button>
            </li>
          )
        })}
    </ul>
  )
}

ItemList.propTypes = {
  onItemsSelected: PropTypes.func
}
