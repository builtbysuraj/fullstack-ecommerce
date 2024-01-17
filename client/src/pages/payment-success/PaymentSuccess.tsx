import { clear } from '@/state/slices/cartSlice'
import { useAppDispatch } from '@/state/store'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function PaymentSuccess() {
  const seachQuery = useSearchParams()[0]
  const referenceNum = seachQuery.get('reference')

  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      if (referenceNum) {
        console.log(referenceNum)
        const response = await fetch(
          `http://localhost:5000/verify-payment?paymentId=${referenceNum}`
        )
        const data = await response.json()
        if (data.success) {
          localStorage.removeItem('cart')
          dispatch(clear())
        }
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{
        margin: '3rem',
        textAlign: 'center',
      }}
    >
      <h1> Order Successfull</h1>
      <p>Reference No.{referenceNum}</p>
    </div>
  )
}
