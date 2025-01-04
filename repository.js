import pool from "./dbConfig.js";

class UserRepository {
  async createUser({ username, password, email, telephone_number }) {
    const query = `
      INSERT INTO public.accounts (username, password, email, telephone_number, is_active, default_location, profile_data, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      RETURNING id, username, email, telephone_number, is_active;
    `;
    const values = [
      username,
      password,
      email,
      telephone_number,
      false,
      null,
      null,
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async getUserByEmailOrPhone(email, telephone_number) {
    const query = `
      SELECT id, username, password, role, email, telephone_number, default_location, is_active, created_at, profile_data
      FROM public.accounts
      WHERE email = $1 OR telephone_number = $2
    `;
    const values = [email, telephone_number];
    const result = await pool.query(query, values);
    return result.rows;
  }
}

export default new UserRepository();
