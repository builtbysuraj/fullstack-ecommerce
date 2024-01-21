import Form from '@/components/Form'

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
