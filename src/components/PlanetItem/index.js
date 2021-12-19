// Write your code here

import {
  PlanetItemCon,
  PlanetHead,
  PlanetImage,
  PlanetsNames,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {eachPlanet} = props

  const {imageUrl, description, name} = eachPlanet

  return (
    <PlanetItemCon>
      <PlanetHead>PLANETS</PlanetHead>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetsNames>{name}</PlanetsNames>
      <PlanetDescription as="p">{description}</PlanetDescription>
    </PlanetItemCon>
  )
}

export default PlanetItem
