import React, {useState, useEffect} from 'react';
import "../styles/App.css";

const App = () =>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
            .then((json) =>{
                setData(json);
            })
    }, []);

    return (
        <div className="container">
            <div className="post_grid">
                {data.map((post) =>(
                    <div className="post">
                        <div className="post_title">{post.title}</div>
                        <div className="post_body">{post.body}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default App;