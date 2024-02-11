import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(403).json({ error: 'Access Denied' })
  }

  try {
    const verified = jwt.verify(token, 'secret')
    req.user = verified
    next()
  } catch (err) {
    res.status(400).json({ error: 'Token is not valid' })
  }
}
