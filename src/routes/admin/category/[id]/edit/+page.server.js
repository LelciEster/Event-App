import pool from '$lib/server/database.js';
import { redirect  } from '@sveltejs/kit';
 
export async function load({ params }) {
    const categoryId = params.id;
    const [rows] = await pool.execute('SELECT * FROM categories WHERE id = ?', [categoryId]);
 
    if (rows.length === 0) {
        throw redirect(303, '/admin/categories');
    }
 
    return {
        category: rows[0]
    };
}
    
export const actions = {
    edit: async ({ request, params }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const id = params.id;
 
        await pool.execute(
            'UPDATE categories SET name = ? WHERE id = ?',
            [name, id]
        );
 
         redirect(303, '/admin/categories');
        
    }
 
};