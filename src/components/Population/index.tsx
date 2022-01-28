import { useQuery } from 'react-query';

import PopulationCard from './PopulationCard';

import { IPopulation, iResponse } from '@/model';

import { fetchPopulations } from '@/api/population'


const PopulationCardWrapper: React.FC = () => {
  const { data, isLoading, isSuccess } = useQuery<iResponse<Array<IPopulation>, any>, Error>(
    'populations',
    fetchPopulations,
  );

  if (isLoading) return <div>...Loading</div>;

  if (data && isSuccess)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {data.data.map((population) => (
          <PopulationCard
            state={population['State']}
            population={population['Population']}
            year={population['Year']}
          />
        ))}
      </div>
    );

  return <div>Something Went Wrong</div>;
};

export default PopulationCardWrapper;
