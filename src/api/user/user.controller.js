import crypto from "crypto";
import User from "./user.model";

/**
 * @typedef User
 * @property {string} username.required - 用户名 - eg: zhangsan
 * @property {string} password.required - 密码 - eg: 123456
 */

/**
 * 创建用户
 * @route POST /user/create
 * @group UserController - 用户相关接口
 * @param {User.model} User.body.required - 用户
 * @returns {object} 200 - 新创建用户
 */
export const create = async (req, res) => {
  req.body.password = crypto
    .createHash("md5")
    .update(req.body.password)
    .digest("hex");
  const user = await User.create(req.body);

  return res.json(user);
};

/**
 * @typedef Filter
 * @property {integer} limit - 分页数量 - eg: 30
 * @property {integer} offset - 偏移量 - eg: 0
 */

/**
 * 查询用户列表
 * @route POST /user/findAll
 * @group UserController - 用户相关接口
 * @param {Filter.model} Filter.body - 过滤器
 * @returns {object} 200 - 用户列表
 */
export const findAll = async (req, res) => {
  const { limit = 30, offset = 0 } = req.body;

  const users = await User.findAll({
    limit,
    offset,
    order: [["createdAt", "DESC"]],
  });

  return res.json(users);
};
