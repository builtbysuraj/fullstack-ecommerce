import SORT_TYPE from '../constants/filterConstants'
import useHandleDispatch from '../hooks/useHandleDispatch'

export default function Filters() {
  const { handleFilterRating, handleSort, handleClearFilter } =
    useHandleDispatch()

  return (
    <>
      <h2>Filters</h2>
      <button onClick={() => handleSort(SORT_TYPE.PRICE_HIGH_TO_LOW)}>
        Sort by high to low price
      </button>
      <button onClick={() => handleSort(SORT_TYPE.PRICE_LOW_TO_HIGH)}>
        Sort by low to high price
      </button>
      <button onClick={() => handleFilterRating(4.6)}>
        filter rating more then 3
      </button>
      <button onClick={() => handleSort(SORT_TYPE.RATING_HIGH_TO_LOW)}>
        Rating High To Low
      </button>
      <button onClick={handleClearFilter}>Clear Filters</button>
    </>
  )
}
