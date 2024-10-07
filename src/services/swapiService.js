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
  return res.results.map(transformPerson)
}

export const getPerson = async id => {
  const person = await getResource(`people/${id}/`)
  return transformPerson(person)
}

export const getAllStarships = async () => {
  const res = await getResource(`starships`)
  return res.results.map(transformStarship)
}

export const getStarship = async id => {
  const starship = await getResource(`starships/${id}`)
  return transformStarship(starship)
}

export const getAllPlanets = async () => {
  const res = await getResource('planets')
  return res.results.map(transformPlanet)
}

export const getPlanet = async id => {
  const planet = await getResource(`planets/${id}`)
  return transformPlanet(planet)
}

const extractId = item => {
  const idRexExp = /\/([0-9]*)\/$/
  return item.url.match(idRexExp)[1]
}

const transformPlanet = planet => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter
  }
}

const transformPerson = person => {
  return {
    id: extractId(person),
    name: person.name,
    birthYear: person.birth_year,
    gender: person.gender,
    eyeColor: person.eye_color
  }
}

const transformStarship = starship => {
  return {
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity
  }
}
