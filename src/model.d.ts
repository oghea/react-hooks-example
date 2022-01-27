export interface IPopulation {
  "ID State": string,
  "State": string,
  "ID Year": number,
  "Year": string,
  "Population": number,
  "Slug State": string
}

export interface iResponse<T, Y> {
  data: T,
  source: Y
}