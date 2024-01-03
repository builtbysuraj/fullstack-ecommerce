import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useSelector } from 'react-redux'
import SORT_TYPE from '../constants/filterConstants'
import useHandleDispatch from '../hooks/useHandleDispatch'
import { RootState } from '../state/store'

export default function Filters() {
  const stateData = useSelector((state: RootState) => state.filtersReducer)
  const {
    handleFilterRating,
    handleSort,
    handlePriceRange,
    handleClearFilter,
  } = useHandleDispatch()
  console.log(stateData)

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
      <br />
      <Box sx={{ width: 200, m: 2 }}>
        <Slider
          value={stateData.priceRange}
          onChange={handlePriceRange}
          valueLabelDisplay="auto"
          max={2000}
          min={10}
          // step={}
        />
      </Box>
    </>
  )
}
