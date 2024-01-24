import { memo } from 'react'

import Input from '@/components/ui/Input'
import { SORT_TYPE } from '@/constants/filterConstants'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

const sortItems = [
  { value: SORT_TYPE.PRICE_HIGH_TO_LOW, label: 'Price high to low' },
  { value: SORT_TYPE.PRICE_LOW_TO_HIGH, label: 'Price low to high' },
  { value: SORT_TYPE.RATING_HIGH_TO_LOW, label: 'Rating High To Low' },
]

function SortProductsFilter() {
  const { sort } = useGetParams()
  const { handleSort } = useHandleDispatch()
  console.log('SortProductsFilter')
  return (
    <section>
      <h4>Sort</h4>
      <div>
        {sortItems.map((item) => (
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
