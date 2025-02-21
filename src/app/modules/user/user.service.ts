import config from '../../config';
import CustomError from '../../utils/CustomError';
import { generateToken } from '../../utils/generateToken';
import verifyToken from '../../utils/verifyToken';
import { IUser } from './user.interface';
import checkPassword from '../../utils/checkPassword';
import bcrypt from 'bcryptjs';
import { User } from './user.model';

// create customer
const registerUserIntoDB = async (payload: IUser) => {
  const { email, password: userPassword } = payload;

  const user = await User.findOne({ email });
  if (user) throw new CustomError(409, 'User already exist!');

  const hashedPassword = await bcrypt.hash(
    userPassword,
    Number(config.bcrypt_salt_round)
  );

  return await User.create({ ...payload, password: hashedPassword });
};

// login customer
const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;

  let user = await User.findOne({ email });
  if (!user) throw new CustomError(404, 'User doesn"t exists!');

  if (!checkPassword(password, user?.password))
    throw new CustomError(400, 'Incorrect email or password.');

  const jwtPayload = {
    userId: user?._id,
    email: user.email,
    role: user.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    config.jwt_secret_key as string,
    config.jwt_token_expires as string
  );

  const refreshToken = generateToken(
    jwtPayload,
    config.jwt_refresh_secret_key as string,
    config.jwt_refresh_token_expires as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

// refresh token generate
const refreshToken = async (token: string) => {
  const { userId } = verifyToken(token, config.jwt_refresh_secret_key);

  const user = await User.findOne({ userId });
  if (!user) throw new CustomError(404, 'User doesn"t exists!');

  const jwtPayload = {
    userId: user?._id,
    email: user.email,
    role: user.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    config.jwt_secret_key as string,
    config.jwt_token_expires as string
  );

  return {
    accessToken,
  };
};

// change user status
const changeUserStatus = async (id: string, payload: { status: string }) => {
  const result =  await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const userServices = {
  registerUserIntoDB,
  loginUserIntoDB,
  refreshToken,
  changeUserStatus,
};
