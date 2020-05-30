import crypto from "crypto";
import User from "../model";

const create = async (req, res, next) => {
  try {
    console.log(req.query);
    req.query.password = crypto
      .createHash("md5")
      .update(req.query.password)
      .digest("hex");
    const user = await User.create(req.query);

    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export default create;
