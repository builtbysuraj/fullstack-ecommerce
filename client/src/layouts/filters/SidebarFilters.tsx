import { memo } from 'react'

import CategoryFilter from './components/CategoryFilter'
import PriceSliderFilter from './components/PriceSliderFilter'
import RatingFilter from './components/RatingFilter'
import SortProductsFilter from './components/SortProductsFilter'
import AppliedFilters from './components/applied-filters/AppliedFilters'
import BrandFilter from './components/brand-filter/BrandFilter'
import ClearFilter from './components/clear-filter/ClearFilter'

function SidebarFilters() {
  return (
    <div
      style={{
        background: 'white',
        padding: '0.8rem',
      }}
      className="sidebar"
    >
      <h3>Filters</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <ClearFilter />

        <AppliedFilters />

        <PriceSliderFilter />

        <SortProductsFilter />

        <RatingFilter />

        <CategoryFilter />

        <BrandFilter />
      </div>
    </div>
  )
}

const MemoizedSidebarFilters = memo(SidebarFilters)
export default MemoizedSidebarFilters
