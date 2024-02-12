import { memo } from 'react'

import Input from '@/components/ui/Input'
import { CATEGORIES } from '@/constants/filterConstants'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

function CategoryFilter() {
  const { handleCategoryFilter } = useHandleDispatch()
  const { category: categoryParam } = useGetParams()
  return (
    <section>
      <h4>Categories</h4>
      {Object.keys(CATEGORIES).map((category) => (
        <div key={category}>
          <Input
            type="radio"
            value={CATEGORIES[category]}
            label={category}
            id={category}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            checked={categoryParam === CATEGORIES[category]}
          />
        </div>
      ))}
    </section>
  )
}

const MemoizedCategoryFilter = memo(CategoryFilter)
export default MemoizedCategoryFilter
