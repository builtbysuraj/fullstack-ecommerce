import useHandleDispatch from '@/hooks/useHandleDispatch'

export default function ClearFilter() {
  const { handleClearFilter } = useHandleDispatch()
  console.log('ClearFilter')
  return (
    <section>
      <button onClick={handleClearFilter}>Clear Filters</button>
    </section>
  )
}
