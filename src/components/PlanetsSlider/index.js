// Write your code here

import Slider from 'react-slick'

import {PlanetsSliderPage} from './styledComponents'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
  }

  return (
    <PlanetsSliderPage data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </PlanetsSliderPage>
  )
}

export default PlanetsSlider
