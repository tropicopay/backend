
class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.only([
      email,
      password,
    ]);

    // Here: develop user/place authentication rules
  }
}
