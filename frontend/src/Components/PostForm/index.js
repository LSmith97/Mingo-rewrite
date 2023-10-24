function PostForm({ submit, formData, setFormData }) {

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={submit} className="post-form">
      <input
        id="title-input"
        type="text"
        name="title"
        placeholder="Enter a title"
        onChange={handleChange}
        required
      />

      <textarea
        id="body-input"
        rows="4"
        cols="25"
        maxlength="500"
        name="body"
        placeholder=" Enter your post here"
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;