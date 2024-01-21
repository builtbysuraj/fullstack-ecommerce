import Input from '@/components/ui/Input'
import { SORT_TYPE } from '@/constants/filterConstants'

type Props = {
  searchParams: URLSearchParams
  handleSort: (arg0: string) => void
}

export default function SortProductsFilter({
  searchParams,
  handleSort,
}: Props) {
  const sort = searchParams.get('sort') || ''

  const sortItems = [
    { value: SORT_TYPE.PRICE_HIGH_TO_LOW, label: 'Price high to low' },
    { value: SORT_TYPE.PRICE_LOW_TO_HIGH, label: 'Price low to high' },
    { value: SORT_TYPE.RATING_HIGH_TO_LOW, label: 'Rating High To Low' },
  ]

  return (
    <section>
      <h4>Sort</h4>
      <form>
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
      </form>
    </section>
  )
}
