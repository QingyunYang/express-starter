import User from "./model";

export const findAll = async (req, res, next) => {
  try {
    const limit = 30
    const offset = 0

    const users = await User.findAll({
      limit,
      offset
    })

    return res.json(users)
  } catch (error) {
    return next(error)
  }
}

export const create = async (req, res, next) => {
  try {
    console.log(req.query)
    const user = await User.create(req.query)

    return res.json(user)
  } catch (error) {
    return next(error)
  }
}
