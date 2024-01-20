import { RATING_TYPE } from '@/constants/filterConstants'
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

type Props = {
  searchParams: URLSearchParams
  handleFilterRating: (arg0: string) => void
}

export default function RatingFilter({
  searchParams,
  handleFilterRating,
}: Props) {
  const rating = searchParams.get('rating') || ''

  return (
    <>
      <Typography component="label" fontWeight="bold" id="rating">
        Customer Review
      </Typography>
      <RadioGroup
        aria-labelledby="rating"
        name="rating filters"
        value={rating}
        onChange={(e) => handleFilterRating(e.target.value)}
      >
        <FormControlLabel
          value={RATING_TYPE.FOUR_AND_UP}
          control={<Radio />}
          label="4 & Up"
        />
        <FormControlLabel
          value={RATING_TYPE.THREE_AND_UP}
          control={<Radio />}
          label="3 & Up"
        />
        <FormControlLabel
          value={RATING_TYPE.TWO_AND_UP}
          control={<Radio />}
          label="2 & Up"
        />
        <FormControlLabel
          value={RATING_TYPE.ONE_AND_UP}
          control={<Radio />}
          label="1 & Up"
        />
      </RadioGroup>
    </>
  )
}
