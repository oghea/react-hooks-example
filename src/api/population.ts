import { iResponse, IPopulation } from '../model';

export const fetchPopulations = async (): Promise<iResponse<Array<IPopulation>, any>> => {
  const res = await fetch(
    'https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019',
  );
  return res.json();
}