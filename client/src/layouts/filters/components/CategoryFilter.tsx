import useHandleDispatch from '@/hooks/useHandleDispatch'
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

const data = {
  Smartphones: 'smartphones',
  Laptops: 'laptops',
  Fragrances: 'fragrances',
  Skincare: 'skincare',
  Groceries: 'groceries',
  'Home Decoration': 'home-decoration',
  Furniture: 'furniture',
  Tops: 'tops',
  'Womens Dresses': 'womens-dresses',
  'Womens Shoes': 'womens-shoes',
  'Mens Shirts': 'mens-shirts',
  'Mens Shoes': 'mens-shoes',
  'Mens Watches': 'mens-watches',
  'Womens Watches': 'womens-watches',
  'Womens Bags': 'womens-bags',
  'Womens Jewellery': 'womens-jewellery',
  Sunglasses: 'sunglasses',
  Automotive: 'automotive',
  Motorcycle: 'motorcycle',
  Lighting: 'lighting',
}

type Props = {
  searchParams: URLSearchParams
}

export default function CategoryFilter({ searchParams }: Props) {
  // const formattedCategories = categories.map((category) =>
  //   category.includes('-')
  //     ? category
  //         .split('-')
  //         .map(
  //           (splitedWord) =>
  //             splitedWord.charAt(0).toUpperCase() + splitedWord.slice(1)
  //         )
  //         .join(' ')
  //     : category.charAt(0).toUpperCase() + category.slice(1)
  // )
  // console.log(formattedCategories)
  const { handleCategoryFilter } = useHandleDispatch()
  const category = searchParams.get('category') || ''

  return (
    <>
      <Typography component="label" fontWeight="bold" id="category">
        Categories
      </Typography>
      <RadioGroup
        aria-labelledby="category"
        name="categories"
        value={category}
        onChange={(e) => handleCategoryFilter(e.target.value)}
      >
        {Object.keys(data).map((category, index) => (
          <FormControlLabel
            // @ts-expect-error - type 'string' can't be used to index type
            value={data[category]}
            key={index}
            control={<Radio />}
            label={category}
          />
        ))}
      </RadioGroup>
    </>
  )
}
