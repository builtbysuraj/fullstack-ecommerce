import { memo } from 'react'

import Loader from '@/components/loader/Loader'
import useFilter from '@/hooks/useFilters'
import { SidebarFilters } from '@/layouts'
import Products from './components/products/Products'

function ProductListingPage() {
  console.log('ProductListingPage')
  const { filteredData, isLoading } = useFilter()

  if (isLoading) return <Loader />
  return (
    <div style={{ display: 'flex', margin: '1rem', gap: 2 }}>
      <div style={{ flex: 1 }}>
        <SidebarFilters />
      </div>
      <div style={{ flex: 4 }}>
        <Products filteredData={filteredData} />
      </div>
    </div>
  )
}

const MemoizedProductListingPage = memo(ProductListingPage)
export default MemoizedProductListingPage
