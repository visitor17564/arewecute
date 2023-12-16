import { AuthService } from "../services/auth.service.js";

export class AuthController {
  authService = new AuthService(); // yw 4번
  //확인 -> 이메일 틀리면 왜 http 500 으로 나올까여ㅠ
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const users = await this.authService.login(email, password);
      res.cookie("accessToken", `Bearer ${users.accessToken}`);
      return res.status(200).json( users );
    } catch (err) {
      next(err);
    }
  };
  //확인
  logout = async (req, res, next) => {
    try {
      res.clearCookie("accessToken");
      return res.status(200).json({ message: "로그아웃성공" });
    } catch (err) {
      next(err);
    }
  };
}
