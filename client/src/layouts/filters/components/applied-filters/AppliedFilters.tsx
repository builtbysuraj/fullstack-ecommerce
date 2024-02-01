import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RATING_ITEMS, SORT_ITEMS } from '@/constants/filterConstants'
import styles from './AppliedFilters.module.css'

function AppliedFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = []

  for (const entry of searchParams.entries()) {
    params.push(entry)
  }

  const handleRemoveFilter = (key: string) => {
    searchParams.delete(key)
    setSearchParams(searchParams)
  }

  const getLabel = (key: string, value: string) => {
    let items: { value: string; label: string }[] = []

    if (key === 'sort') {
      items = SORT_ITEMS
    } else if (key === 'rating') {
      items = RATING_ITEMS
    }
    const item = items.find((item) => item.value === value)
    return item ? item.label : value
  }

  return (
    <section>
      <ul className={styles.filterList}>
        {params.length > 0 ? (
          params.map(([key, value]) => (
            <li
              className={styles.filterItem}
              key={key}
              onClick={() => handleRemoveFilter(key)}
            >
              ✕ {getLabel(key, value)}
            </li>
          ))
        ) : (
          <li className={styles.noFilter}>No filters applied</li>
        )}
      </ul>
    </section>
  )
}

const MemoizedAppliedFilters = memo(AppliedFilters)
export default MemoizedAppliedFilters
