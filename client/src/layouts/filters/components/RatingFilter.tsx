import { memo } from 'react'

import Input from '@/components/ui/Input'
import { RATING_TYPE } from '@/constants/filterConstants'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

const ratingItems = [
  { value: RATING_TYPE.FOUR_AND_UP, label: '4★ & above' },
  { value: RATING_TYPE.THREE_AND_UP, label: '3★ & above' },
  { value: RATING_TYPE.TWO_AND_UP, label: '2★ & above' },
  { value: RATING_TYPE.ONE_AND_UP, label: '1★ & above' },
]

function RatingFilter() {
  const { rating } = useGetParams()
  const { handleFilterRating } = useHandleDispatch()
  return (
    <section>
      <h4>Customer Review</h4>
      {ratingItems.map((item) => (
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
