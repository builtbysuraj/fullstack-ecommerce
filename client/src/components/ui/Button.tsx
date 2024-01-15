type ButtonType = React.ComponentPropsWithoutRef<'button'>

export default function Button({ children, ...props }: ButtonType) {
  return <button {...props}>{children}</button>
}
