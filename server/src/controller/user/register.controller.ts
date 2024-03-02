import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { ENV } from '../../conf/conf'
import connectDB from '../../db/db'
import { User } from '../../model/user.model'

export const registerUser = async (req, res) => {
  try {
    await connectDB()
    const { username, password } = req.body
    // console.log(name, pass)

    const user = await User.findOne({ username })
    if (user) {
      return res.status(400).json({ data: 'User already exists' })
    }
    // Hash the password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
      username,
      password: hashedPassword,
    })
    const savedUser = await newUser.save()

    const tokenData = {
      id: savedUser._id,
      username: savedUser.username,
    }

    // Create token with JWT
    const token = await jwt.sign(tokenData, ENV.JWT_SECRET, {
      expiresIn: '1d',
    })

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    })

    return res.json({ message: 'User registered successfully', token })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: 'An error occurred while registering the user' })
  }
}
