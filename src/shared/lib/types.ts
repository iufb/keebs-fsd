export interface IFilter {
  filterName: string;
  slug: string;
  values: {
    slug: string;
    name: string;
  }[];
}
export type filterType = {
  filterSlug: string;
  value: string;
};
