const connection = require("./../database");

class UserController {
  async create(request, response) {
    const { name, email, password, birth_date } = request.body;

    const checkEmail = await connection("users")
      .where({ email })
      .select("*")
      .first();

    if (checkEmail) {
      return response.status(401).json({ error: "Email already exists." });
    }

    const user = await connection("users").insert({
      name,
      email,
      password,
      birth_date,
    });

    return response.status(200).send();
  }

  async read(request, response) {
    const users = await connection("users").select([
      "id",
      "name",
      "email",
      "birth_date",
      "created_at",
    ]);

    return response.status(200).json(users);
  }

  async update(request, response, next) {
    const { id } = request.params;
    const { name, email, password, birth_date } = request.body;

    const checkEmail = await connection("users")
      .where({ email })
      .select("*")
      .first();

    if (checkEmail && checkEmail.id != id) {
      return response.status(401).json({ error: "Email already exists." });
    }

    try {
      await connection("users")
        .update({ name, email, password, birth_date }, [
          "name",
          "email",
          "password",
          "birth_date",
        ])
        .where({ id });

      const user = await connection("users").where({ id }).select("*").first();

      return response.json(user);
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    await connection("users").where({ id }).del();

    return response.status(204).send();
  }
}

module.exports = new UserController();
