import { useSearchParams } from 'react-router-dom'

export default function useGetParams() {
  const searchParams = useSearchParams()[0]
  
  const q = searchParams.get('q') || ''
  const category = searchParams.get('category') || ''
  const rating = searchParams.get('rating') || ''
  const price = searchParams.get('price')?.split('-').map(Number) || [10, 2000]

  return { category, price, q, rating }
}
