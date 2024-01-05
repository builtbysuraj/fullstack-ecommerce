import { Box, Slider, Typography } from '@mui/material'

export default function PriceSliderFilter({ stateData, handlePriceRange }) {
  return (
    <>
      <Typography fontWeight="bold">Price</Typography>
      <Typography fontWeight="bold">
        ${stateData.priceRange[0]} - ${stateData.priceRange[1]}
      </Typography>
      <Box sx={{ m: 2 }}>
        <Slider
          value={stateData.priceRange}
          onChange={handlePriceRange}
          valueLabelDisplay="auto"
          max={2000}
          min={10}
          step={100}
        />
      </Box>
    </>
  )
}
