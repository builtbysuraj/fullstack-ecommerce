import { SORT_TYPE } from '@/constants/filterConstants'
import { Typography } from '@mui/material'

type Props = {
  searchParams: URLSearchParams
  handleSort: (arg0: string) => void
}

export default function SortProductsFilter({
  searchParams,
  handleSort,
}: Props) {
  const sort = searchParams.get('sort') || ''
  return (
    <>
      <Typography component="label" fontWeight="bold" id="sort">
        Sort
      </Typography>
      <form>
        <input
          type="radio"
          name="sort"
          id="Sort by high to low price"
          value={SORT_TYPE.PRICE_HIGH_TO_LOW}
          onChange={(e) => handleSort(e.target.value)}
          checked={sort === SORT_TYPE.PRICE_HIGH_TO_LOW}
        />
        <label htmlFor="Sort by high to low price">Price high to low</label>
        <br />
        <input
          type="radio"
          name="sort"
          id="Sort by low to high price"
          value={SORT_TYPE.PRICE_LOW_TO_HIGH}
          onChange={(e) => handleSort(e.target.value)}
          checked={sort === SORT_TYPE.PRICE_LOW_TO_HIGH}
        />
        <label htmlFor="Sort by low to high price">Price low to high</label>
        <br />
        <input
          type="radio"
          name="sort"
          id="Rating High To Low"
          value={SORT_TYPE.RATING_HIGH_TO_LOW}
          onChange={(e) => handleSort(e.target.value)}
          checked={sort === SORT_TYPE.RATING_HIGH_TO_LOW}
        />
        <label htmlFor="Rating High To Low">Rating High To Low</label> <br />
      </form>
    </>
  )
}
