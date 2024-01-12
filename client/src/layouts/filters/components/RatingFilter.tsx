import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { RATING_TYPE } from '@/constants/filterConstants'

export default function RatingFilter({ stateData, handleFilterRating }) {
  return (
    <>
      <Typography component="label" fontWeight="bold" id="rating">
        Customer Review
      </Typography>
      <RadioGroup
        aria-labelledby="rating"
        name="rating filters"
        value={stateData.stateRating}
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
