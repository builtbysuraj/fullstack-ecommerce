import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
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
              ✕ {value}
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
