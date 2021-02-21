const Post = require('./post-model');
const db = require('../../data/dbConfig');

beforeEach(async () => {
	await db('posts').truncate();
});

describe('posts model', () => {

	describe('insert()', () => {

		test('inserts the provided posts', async () => {
			await Post.insert({ post_title: 'test', post_body: 'Test data'})
			await Post.insert({ post_title: 'test', post_body: 'Test data'})

			const posts = await db('posts');
			expect(posts).toHaveLength(2);
		});

		test('returns the posts', async () => {
			const post1 = await Post.insert({ post_title: 'test', post_body: 'Test data'});
			const posts = await db('posts');
			console.log(posts);
			expect(post1.post_title).toBe('test');
		});		
	});

	describe('delete()', () => {

		test('should return 200 on post delete', async () => {
			let newPost = await Post.insert({ post_title: 'test', post_body: 'Test data'})
			let deletePost = await Post.remove(1);
			expect(deletePost).toBe(1);
		});

		test('should return a 404 if there is no post', async () => {
			const deletePost = await Post.remove(1);
			const posts = await db('posts');
			expect(posts).toHaveLength(0);
		});
	});
});