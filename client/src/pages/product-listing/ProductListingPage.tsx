import { memo } from 'react'

import Loader from '@/components/loader/Loader'
import useFilter from '@/hooks/useFilters'
import { SidebarFilters } from '@/layouts'
import Products from './components/products/Products'

function ProductListingPage() {
  const { filteredData, isLoading } = useFilter()

  if (isLoading) return <Loader />
  return (
    <div style={{ display: 'flex', margin: '0.5rem', gap: '10px' }}>
      <aside style={{ flex: 1 }}>
        <SidebarFilters />
      </aside>
      <div style={{ flex: 4.6 }}>
        <Products filteredData={filteredData} />
      </div>
    </div>
  )
}

const MemoizedProductListingPage = memo(ProductListingPage)
export default MemoizedProductListingPage
