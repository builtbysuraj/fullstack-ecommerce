import { memo } from 'react'

import Input from '@/components/ui/Input'
import { SORT_ITEMS } from '@/constants/filterConstants'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

function SortProductsFilter() {
  const { sort } = useGetParams()
  const { handleSort } = useHandleDispatch()
  return (
    <section>
      <h4>Sort</h4>
      <div>
        {SORT_ITEMS.map((item) => (
          <div key={item.value}>
            <Input
              type="radio"
              id={item.label}
              checked={sort === item.value}
              onChange={(event) => handleSort(event.target.value)}
              name="sort"
              label={item.label}
              value={item.value}
            />
            <br />
          </div>
        ))}
        <hr />
      </div>
    </section>
  )
}

const MemoizedSortProductsFilter = memo(SortProductsFilter)
export default MemoizedSortProductsFilter
