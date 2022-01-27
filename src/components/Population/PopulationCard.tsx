import { convertToInternationalCurrencySystem } from '../../lib'

interface PopulationCardProps {
  state: string,
  population: number,
  year: string
}

const PopulationCard: React.FC<PopulationCardProps> = ({state, population, year}) => {
  return (
    <div className="bg-white rounded py-6 px-5">
      <div className="text-base font-bold mb-2">{state}</div>
      <hr className="mb-2"></hr>
      <div className="text-base mb-2 text-grey-1">Population: {convertToInternationalCurrencySystem(population)}</div>
      <hr className="mb-2"></hr>
      <div className="text-base text-grey-1">Jahr: {year}</div>
    </div>
  )
}

export default PopulationCard