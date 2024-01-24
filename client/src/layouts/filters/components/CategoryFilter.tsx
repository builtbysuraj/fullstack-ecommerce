import { memo } from 'react'

import Input from '@/components/ui/Input'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'

type CategoryType = Record<string, string>

const data: CategoryType = {
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

function CategoryFilter() {
  const { handleCategoryFilter } = useHandleDispatch()
  const { category: categoryParam } = useGetParams()
  console.log('CategoryFilter')
  return (
    <section>
      <h4>Categories</h4>
      {Object.keys(data).map((category) => (
        <div key={category}>
          <Input
            type="radio"
            value={data[category]}
            label={category}
            id={category}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            checked={categoryParam === data[category]}
          />
        </div>
      ))}
    </section>
  )
}

const MemoizedCategoryFilter = memo(CategoryFilter)
export default MemoizedCategoryFilter
