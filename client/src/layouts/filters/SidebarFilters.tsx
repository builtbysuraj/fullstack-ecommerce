import { memo } from 'react'
import {
  AppliedFilters,
  BrandFilter,
  CategoryFilter,
  ClearFilter,
  PriceSliderFilter,
  RatingFilter,
  SortProductsFilter,
} from './components'

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
