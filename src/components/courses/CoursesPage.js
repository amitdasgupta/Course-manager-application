import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {
        title: "",
      },
    };
  }
  handleChange = (event) => {
    const courses = { ...this.state.courses, title: event.target.value };
    this.setState({ courses });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.courses.title);
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const {
      courses: { title },
    } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={title} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CoursesPage;
