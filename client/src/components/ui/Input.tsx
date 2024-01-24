type InputProps = {
  type: string
  name?: string
  placeholder?: string
  id?: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  checked?: boolean
  label?: string
  className?: string
}

function Input({
  type,
  name,
  placeholder,
  id,
  value,
  onChange,
  checked,
  label,
  className = '',
}: InputProps) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        className={className}
      />
      <label className={className} htmlFor={id}>
        {label}
      </label>
    </>
  )
}

export default Input
