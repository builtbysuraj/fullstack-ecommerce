export const logout = async (req, res) => {
  try {
    res.cookie('token', '', { secure: true, maxAge: 0, sameSite: 'none' })

    return res.json({
      message: 'Logout successfully',
      success: true,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
