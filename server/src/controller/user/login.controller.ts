import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { ENV } from '../../conf/conf'
import connectDB from '../../db/db'
import { User } from '../../model/user.model'

export const loginUser = async (req, res) => {
  try {
    await connectDB()

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
    const token = await jwt.sign(tokenData, ENV.JWT_SECRET, {
      expiresIn: '1d',
    })

    res.cookie('token', token, {
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    })

    return res.json({
      message: 'Login successful',
      success: true,
      token,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
