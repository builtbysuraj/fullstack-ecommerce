import { Box, FormControl, Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import useHandleDispatch from '@/hooks/useHandleDispatch'
import CategoryFilter from './components/CategoryFilter'
import PriceSliderFilter from './components/PriceSliderFilter'
import RatingFilter from './components/RatingFilter'
import SortProductsFilter from './components/SortProductsFilter'

export default function SidebarFilters() {
  const searchParams = useSearchParams()[0]
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
        <button onClick={handleClearFilter}>Clear Filters</button>
        <br />

        {/* Price Filter */}
        <PriceSliderFilter
          searchParams={searchParams}
          handlePriceRange={handlePriceRange}
        />
        <FormControl>
          {/* Sort products */}
          <SortProductsFilter
            searchParams={searchParams}
            handleSort={handleSort}
          />

          {/* Ratings filter */}
          <RatingFilter
            searchParams={searchParams}
            handleFilterRating={handleFilterRating}
          />
        </FormControl>

        {/* Category Filters */}
        <CategoryFilter searchParams={searchParams} />
      </Box>
    </>
  )
}
