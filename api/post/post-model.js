const db = require('../../data/dbConfig');

module.exports = {
	insert,
	remove
}

async function insert(data) {
	const postData = await db.insert(data).into('posts');
	return postData;
};

async function remove(id) {
	const deletePost = await db.del().from('posts').where({ id });
	return deletePost;
};