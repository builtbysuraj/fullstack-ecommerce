import useHandleDispatch from '@/hooks/useHandleDispatch'
import styles from './ClearFilter.module.css'

export default function ClearFilter() {
  const { handleClearFilter } = useHandleDispatch()
  return (
    <section>
      <button className={styles.clearBtn} onClick={handleClearFilter}>
        CLEAR ALL
      </button>
    </section>
  )
}
