import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@mui/material'
import { RATING_TYPE, SORT_TYPE } from '../constants/filterConstants'
import useHandleDispatch from '../hooks/useHandleDispatch'
import { useAppSelector } from '../state/store'

export default function Filters() {
  const stateData = useAppSelector((state) => state.filtersReducer)
  const {
    handleFilterRating,
    handleSort,
    handlePriceRange,
    handleClearFilter,
  } = useHandleDispatch()
  console.log(stateData)
  return (
    <>
      <h2>Filters</h2>
      <Box
        display="flex"
        // alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <FormControl>
          {/* Sort products */}
          <Typography component="label" id="sort">
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

          {/* Ratings filter */}
          <Typography component="label" id="rating">
            Customer Review
          </Typography>
          <RadioGroup
            aria-labelledby="rating"
            name="rating filters"
            value={stateData.stateRating}
            onChange={(e) => handleFilterRating(e.target.value)}
          >
            <FormControlLabel
              value={RATING_TYPE.FOUR_AND_UP}
              control={<Radio />}
              label="4 and Up"
            />
            <FormControlLabel
              value={RATING_TYPE.THREE_AND_UP}
              control={<Radio />}
              label="3 and Up"
            />
            <FormControlLabel
              value={RATING_TYPE.TWO_AND_UP}
              control={<Radio />}
              label="2 and Up"
            />
            <FormControlLabel
              value={RATING_TYPE.ONE_AND_UP}
              control={<Radio />}
              label="1 and Up"
            />
          </RadioGroup>
        </FormControl>

        <Box sx={{ width: 200, m: 2 }}>
          <Slider
            value={stateData.priceRange}
            onChange={handlePriceRange}
            valueLabelDisplay="auto"
            max={2000}
            min={10}
          />
        </Box>
        <Button onClick={handleClearFilter}>Clear Filters</Button>
      </Box>
    </>
  )
}
