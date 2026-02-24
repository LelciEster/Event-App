import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';
import { load } from '../../events/+page.server.js';



export async function load(){
	const [rows] = await pool.execute('SELECT * FROM categories');

    return {
    
      categories: rows
}
}

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name');
		const description = formData.get('description');
		const startdate = formData.get('startdate');
		const starttime = formData.get('starttime');
		const categoryID = formData.get('category')

		await pool.execute(
			'INSERT INTO events (name, description, startdate, starttime, category_id) VALUES (?, ?, ?, ?, ?)',
			[name, description, startdate, starttime, categoryID]
		);

		// must be thrown or returned
		throw redirect(303, '/admin/events');
	}
};
