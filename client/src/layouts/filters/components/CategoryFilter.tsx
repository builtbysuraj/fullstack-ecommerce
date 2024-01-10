import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { categories } from '../../../db/productData'

export default function CategoryFilter() {
  return (
    <>
      {/* @ts-expect-error  -  mui component issue */}
      <FormGroup onChange={(e) => console.log(e.target.value)}>
        {categories.map((category, index) => (
          <FormControlLabel
            value={category}
            key={index}
            control={<Checkbox />}
            label={category}
          />
        ))}
      </FormGroup>
    </>
  )
}
