import { memo } from 'react'

import Input from '@/components/ui/Input'
import { BRAND } from '@/constants/filterConstants'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

function BrandFilter() {
  const { handleBrandFilter } = useHandleDispatch()
  const { brand: brandParam } = useGetParams()
  return (
    <section>
      <h4>Brands</h4>
      {BRAND.map((brand) => (
        <div key={brand}>
          <Input
            type="radio"
            value={brand}
            label={brand}
            id={brand}
            onChange={(e) => handleBrandFilter(e.target.value)}
            checked={brandParam === brand}
          />
        </div>
      ))}
    </section>
  )
}

const MemoizedBrandFilter = memo(BrandFilter)
export default MemoizedBrandFilter
