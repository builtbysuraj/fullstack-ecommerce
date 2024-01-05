import { Box, Button, FormControl, Typography } from '@mui/material'

import useHandleDispatch from '../../hooks/useHandleDispatch'
import { useAppSelector } from '../../state/store'
import PriceSliderFilter from './components/PriceSliderFilter'
import SortProductsFilter from './components/SortProductsFilter'
import RatingFilter from './components/RatingFilter'
import CategoryFilter from './components/CategoryFilter'

export default function SidebarFilters() {
  const stateData = useAppSelector((state) => state.filtersReducer)
  const {
    handleFilterRating,
    handleSort,
    handlePriceRange,
    handleClearFilter,
  } = useHandleDispatch()

  return (
    <>
      <Typography component="h1" variant="h5" fontWeight="bold">
        Filters
      </Typography>
      <Box display="flex" justifyContent="center" flexDirection="column">
        {/* Clear Filters */}
        <Button onClick={handleClearFilter} variant="outlined">
          Clear Filters
        </Button>
        <br />

        <PriceSliderFilter
          stateData={stateData}
          handlePriceRange={handlePriceRange}
        />
        <FormControl>
          {/* Sort products */}
          <SortProductsFilter stateData={stateData} handleSort={handleSort} />

          {/* Ratings filter */}
          <RatingFilter
            stateData={stateData}
            handleFilterRating={handleFilterRating}
          />
        </FormControl>

        {/* Category Filters */}
        <CategoryFilter />
      </Box>
    </>
  )
}
