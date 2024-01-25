import Slider from '@mui/material/Slider'
import { memo } from 'react'

import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

function PriceSliderFilter() {
  const { handlePriceRange } = useHandleDispatch()
  const { price } = useGetParams()
  return (
    <section>
      <h4>Price</h4>
      <h4>{`$${price[0]} -  $${price[1]}`}</h4>
      <div>
        <Slider
          value={price}
          onChange={handlePriceRange}
          valueLabelDisplay="auto"
          max={2000}
          min={10}
          step={100}
          size="small"
        />
      </div>
    </section>
  )
}

const MemoizedPriceSliderFilter = memo(PriceSliderFilter)
export default MemoizedPriceSliderFilter
