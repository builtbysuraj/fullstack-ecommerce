import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@mui/material'
import { RATING_TYPE, SORT_TYPE } from '../constants/filterConstants'
import { categories } from '../db/productData'
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

  return (
    <>
      <h2>Filters</h2>
      <Typography fontWeight="bold">Price</Typography>
      <Typography fontWeight="bold">
        ${stateData.priceRange[0]} - ${stateData.priceRange[1]}
      </Typography>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box sx={{ m: 2 }}>
          <Slider
            value={stateData.priceRange}
            onChange={handlePriceRange}
            valueLabelDisplay="auto"
            max={2000}
            min={10}
            step={100}
          />
        </Box>
        <FormControl>
          {/* Sort products */}
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

          {/* Ratings filter */}
          <Typography component="label" fontWeight="bold" id="rating">
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
              label="4 & Up"
            />
            <FormControlLabel
              value={RATING_TYPE.THREE_AND_UP}
              control={<Radio />}
              label="3 & Up"
            />
            <FormControlLabel
              value={RATING_TYPE.TWO_AND_UP}
              control={<Radio />}
              label="2 & Up"
            />
            <FormControlLabel
              value={RATING_TYPE.ONE_AND_UP}
              control={<Radio />}
              label="1 & Up"
            />
          </RadioGroup>

          {/* @ts-expect-error  -  mui component issue */}
          <FormGroup onChange={(e) => console.log(e.target.value)}>
            {categories.map((category, index) => (
              <FormControlLabel
                value={category}
                key={index}
                control={<Checkbox />}
                label={category}
              />
            ))}
          </FormGroup>
        </FormControl>

        <br />
        <Button onClick={handleClearFilter} variant="outlined">
          Clear Filters
        </Button>
      </Box>
    </>
  )
}
