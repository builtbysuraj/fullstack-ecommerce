import { memo } from 'react'

import CategoryFilter from './components/CategoryFilter'
import ClearFilter from './components/ClearFilter'
import PriceSliderFilter from './components/PriceSliderFilter'
import RatingFilter from './components/RatingFilter'
import SortProductsFilter from './components/SortProductsFilter'

function SidebarFilters() {
  console.log('SidebarFilters')
  return (
    <>
      <h2>Filters</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Clear Filters */}
        <ClearFilter />

        {/* Price Filter */}
        <PriceSliderFilter />
        {/* Sort products */}
        <SortProductsFilter />

        {/* Ratings filter */}
        <RatingFilter />

        {/* Category Filters */}
        <CategoryFilter />
      </div>
    </>
  )
}

const MemoizedSidebarFilters = memo(SidebarFilters)
export default MemoizedSidebarFilters
