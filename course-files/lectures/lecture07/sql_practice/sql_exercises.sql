-- 1. Write a query that joins the posts and users table. The results
-- should display the id and pub_date from the posts table, and 
-- the author's username, first_name, and last_name from the users table


-- 2. Same as above, but also include the number of comments each post has


-- 3. Same as above, but just posts by a single user (you pick), 
-- order by comment count descending:


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