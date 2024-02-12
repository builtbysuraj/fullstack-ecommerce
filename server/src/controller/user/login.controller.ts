import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../../model/user.model'

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' })
    }
    // Check password
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    // Create token data for JWT
    const tokenData = {
      id: user._id,
      username: user.username,
    }

    // Create token with JWT
    const token = await jwt.sign(tokenData, 'secret', {
      expiresIn: '1d',
    })

    res.cookie('token', token)
    return res.json({
      message: 'Login successful',
      success: true,
      token,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
