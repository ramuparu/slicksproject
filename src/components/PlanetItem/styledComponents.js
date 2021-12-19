// Style your elements here

import styled from 'styled-components'

export const PlanetItemCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const PlanetHead = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #05acff;
`

export const PlanetImage = styled.img`
  height: 400px;
  width: 400px;
`
export const PlanetsNames = styled(PlanetHead)`
  color: white;
`

export const PlanetDescription = styled(PlanetHead)`
  color: #f1f5f9;
  font-size: 20px;
  font-weight: 500;
`
