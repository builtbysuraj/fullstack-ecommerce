import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { SORT_TYPE } from '@/constants/filterConstants'

export default function SortProductsFilter({ stateData, handleSort }) {
  return (
    <>
      <Typography component="label" fontWeight="bold" id="sort">
        Sort
      </Typography>
      <RadioGroup
        aria-labelledby="sort"
        name="sort product"
        value={stateData.sort}
        onChange={(e) => handleSort(e.target.value)}
      >
        <FormControlLabel
          value={SORT_TYPE.PRICE_HIGH_TO_LOW}
          control={<Radio />}
          label="Sort by high to low price"
        />
        <FormControlLabel
          value={SORT_TYPE.PRICE_LOW_TO_HIGH}
          control={<Radio />}
          label="Sort by low to high price"
        />
        <FormControlLabel
          value={SORT_TYPE.RATING_HIGH_TO_LOW}
          control={<Radio />}
          label="Rating High To Low"
        />
      </RadioGroup>
    </>
  )
}
