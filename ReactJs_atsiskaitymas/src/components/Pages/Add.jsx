import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as generateId } from 'uuid';
import UsersContext from "../../context/UsersContext";
import PostsContext from "../../context/PostsContext"

const Add = () => {

  const navigate = useNavigate();
  const { currentUser } = useContext(UsersContext);
  const { setPosts, PostsActionTypes } = useContext(PostsContext);
  const [formInputs, setFormInputs] = useState({
    title: '',
    description: ''
  });

  const inputHandler = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]:e.target.value
    });
  }

  const formHandler = e => {
    e.preventDefault();
    const newPost = {
      id: generateId(),
      userId: currentUser.id,
      title: formInputs.title,
      description: formInputs.description
    }
    setPosts({
      type: PostsActionTypes.add,
      data: newPost
    });
    navigate(-1);
  }

  return (
    <main>
      <h1>Add New Post</h1>
      <form onSubmit={(e) => {formHandler(e)}}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text"
            name="title" id="title"
            value={formInputs.title}
            onChange={(e) => {inputHandler(e)}}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text"
            name="description" id="description"
            value={formInputs.description}
            onChange={(e) => {inputHandler(e)}}
          />
        </div>
        <input type="submit" value="Create Post" />
      </form>
    </main>
  );
}
 
export default Add;