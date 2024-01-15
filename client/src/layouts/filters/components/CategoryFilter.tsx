import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const categories = [
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting',
]

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
