import { memo } from 'react'

import Input from '@/components/ui/Input'
import { RATING_ITEMS } from '@/constants/filterConstants'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

function RatingFilter() {
  const { rating } = useGetParams()
  const { handleFilterRating } = useHandleDispatch()
  return (
    <section>
      <h4>Customer Review</h4>
      {RATING_ITEMS.map((item) => (
        <div key={item.value}>
          <Input
            type="radio"
            id={item.label}
            checked={rating === item.value}
            onChange={(event) => handleFilterRating(event.target.value)}
            name="rating"
            label={item.label}
            value={item.value}
          />
        </div>
      ))}
      <hr />
    </section>
  )
}

const MemoizedRatingFilter = memo(RatingFilter)
export default MemoizedRatingFilter
