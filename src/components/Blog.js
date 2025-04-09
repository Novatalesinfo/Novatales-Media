import React,{useEffect,useState} from 'react'
import '../css/Blog.css'
export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch the posts from the WordPress REST API
        fetch("http://novatales.com/blog/wp-json/wp/v2/posts/")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);
    return (
        <div className='blogs-Banner'>
            <div className='Blog-page'>
                <div>
                    {posts.length > 0 ? (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    <h2>{post.title.rendered}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
