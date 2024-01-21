import Form from '@/components/Form'

export default function SignUpPage() {
  return (
    <>
      <Form
        mode="Signup"
        promptText="Already have an account?"
        promptLink="/login"
        promptLinkText="Login"
      />
    </>
  )
}
