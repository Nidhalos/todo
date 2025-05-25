const pool = require('../config/db');

class TodoExtreme {
  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
    return rows;
  }

  static async create(title) {
    const [result] = await pool.query(
      'INSERT INTO todos (title) VALUES (?)',
      [title]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, title, completed) {
    await pool.query(
      'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
      [title, completed, id]
    );
  }

  static async delete(id) {
    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
  }
}

module.exports = TodoExtreme;