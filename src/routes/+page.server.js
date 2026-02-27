import db from '$lib/db.js';

export function load() {
  const items = db.prepare('SELECT * FROM items ORDER BY created_at DESC').all();
  return { items };
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');

    if (!name || !name.trim()) {
      return { error: 'Name is required' };
    }

    db.prepare('INSERT INTO items (name) VALUES (?)').run(name.trim());
    return { success: true };
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    db.prepare('DELETE FROM items WHERE id = ?').run(id);
    return { success: true };
  }
};
