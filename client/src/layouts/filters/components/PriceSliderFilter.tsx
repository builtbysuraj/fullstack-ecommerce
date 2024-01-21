import { Box, Slider, Typography } from '@mui/material'

type Props = {
  searchParams: URLSearchParams
  handlePriceRange: (arg0: Event, arg1: number | number[]) => void
}

export default function PriceSliderFilter({
  searchParams,
  handlePriceRange,
}: Props) {
  const price = searchParams.get('price')?.split('-').map(Number) || [10, 2000]

  return (
    <>
      <Typography fontWeight="bold">Price</Typography>
      <Typography fontWeight="bold">
        <br />
        {`$${price[0]} -  $${price[1]}`}
      </Typography>
      <Box sx={{ m: 2 }}>
        <Slider
          value={price}
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
