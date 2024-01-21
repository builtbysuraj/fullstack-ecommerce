import Input from '@/components/ui/Input'
import { RATING_TYPE } from '@/constants/filterConstants'

type Props = {
  searchParams: URLSearchParams
  handleFilterRating: (arg0: string) => void
}

export default function RatingFilter({
  searchParams,
  handleFilterRating,
}: Props) {
  const rating = searchParams.get('rating') || ''

  const ratingItems = [
    { value: RATING_TYPE.FOUR_AND_UP, label: '4 & Up' },
    { value: RATING_TYPE.THREE_AND_UP, label: '3 & Up' },
    { value: RATING_TYPE.TWO_AND_UP, label: '2 & Up' },
    { value: RATING_TYPE.ONE_AND_UP, label: '1 & Up' },
  ]

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
            name="sort"
            label={item.label}
            value={item.value}
          />
        </div>
      ))}
      <hr />
    </section>
  )
}
