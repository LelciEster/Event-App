import pool from '$lib/server/database.js';
import { styleText } from 'util';
 
export async function load() {
    const [rows] = await pool.execute('SELECT * FROM categories');
 
    return {
        pageTitle: "List of categories",
        categories: rows
    };
}
 
 
export const actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        await pool.execute('DELETE FROM categories WHERE id = ?', [id]);
        return{
            success: true
        }
    }
};
 
 
 
 