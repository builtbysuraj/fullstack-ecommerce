import Form from '@/components/form/Form'

export default function LoginPage() {
  return (
    <>
      <Form
        mode="Login"
        promptLinkText="Signup"
        promptLink="/signup"
        promptText="Dont have an account?"
      />
    </>
  )
}
