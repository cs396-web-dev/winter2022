-- 1. Write a query that joins the posts and users table. The results
-- should display the id and pub_date from the posts table, and 
-- the author's username, first_name, and last_name from the users table

SELECT posts.id, posts.pub_date, 
    users.username, users.first_name, users.last_name
FROM posts
INNER JOIN users ON
    posts.user_id = users.id;


-- 2. Same as above, but also include the number of comments each post has
SELECT posts.id, posts.pub_date, 
    users.username, users.first_name, users.last_name,
    count(comments.id)
FROM posts
INNER JOIN users ON
    posts.user_id = users.id
INNER JOIN comments ON
    comments.post_id = posts.id
GROUP BY posts.id, posts.pub_date, 
    users.username, users.first_name, users.last_name;

-- 3. Same as above, but just posts by a single user (you pick), 
-- order by comment count descending:
SELECT posts.id, posts.pub_date, 
    users.username, users.first_name, users.last_name,
    count(comments.id)
FROM posts
INNER JOIN users ON
    posts.user_id = users.id
INNER JOIN comments ON
    comments.post_id = posts.id
WHERE users.username = 'carlos_johnson'
GROUP BY posts.id, posts.pub_date, 
    users.username, users.first_name, users.last_name
ORDER BY count(comments.id) desc;


-- 4. Write a query that shows all of the posts of users
--    you are following (like a news feed)

-- suggested logic:
-- 1. Query the "following" table, which will help you 
--    figure out the list of users whose posts you want to see
--    (user_id follows following_id)
-- 2. Then join to the "users" table. Specifically, join 
--    the following.following_id column with the users.id column
--    so you can display the ppl you're following's username
-- 3. Finally, join to the "posts" table. Specifically joing the 
--    following.following_id column to the posts.user_id column
--    so that you can view the posts of the ppl you're following:
SELECT following.user_id as current_user_id, posts.id as post_id, 
    posts.pub_date as post_date, posts.user_id as post_author_id, 
    users.username as post_author_username
FROM following
INNER JOIN users ON
    users.id = following.following_id
INNER JOIN posts ON
    posts.user_id = following.following_id
ORDER BY following.user_id;