const API_URL = 'https://swapi.dev/api/'

const getResource = async url => {
  const response = await fetch(`${API_URL}${url}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}

export const getAllPeople = async () => {
  const res = await getResource('people')
  return res.results
}

export const getPerson = async id => {
  return await getResource(`people/${id}/`)
}

export const getAllStarships = async () => {
  const res = await getResource(`starships`)
  return res.results
}

export const getStarship = async id => {
  return await getResource(`starships/${id}`)
}

export const getAllPlanets = async () => {
  const res = await getResource('planets')
  return res.results
}

export const getPlanet = async id => {
  return await getResource(`planets/${id}`)
}
