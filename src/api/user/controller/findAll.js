import User from "../model";

/**
 * @typedef Payload
 * @property {integer} limit.required - 分页数 - eg: 30
 * @property {integer} offset.required - 偏移量 - eg: 0
 */

/**
 * 查询用户列表
 * @route POST /user/findAll
 * @group user - 用户相关接口
 * @param {Payload.model} payload.body.required - 请求参数
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
const findAll = async (req, res, next) => {
  try {
    const {
      limit = 30,
      offset = 0
    } = req.body;

    const users = await User.findAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    return res.json(users);
  } catch (error) {
    return next(error);
  }
};

export default findAll;
