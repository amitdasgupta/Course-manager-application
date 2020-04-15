/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
class CoursesPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     courses: {
  //       title: "",
  //     },
  //   };
  // }
  // handleChange = (event) => {
  //   const courses = { ...this.state.courses, title: event.target.value };
  //   this.setState({ courses });
  // };
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // eslint-disable-next-line react/prop-types
  //   this.props.actions.createCourse(this.state.courses);
  //   this.setState({
  //     courses: {
  //       title: "",
  //     },
  //   });
  // };
  componentDidMount() {
    const { courses, actions, authors } = this.props;
    if (courses.length == 0)
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    if (authors.length == 0)
      actions.loadAuthors().catch((error) => {
        console.log(error);
        alert("Loading authors failed" + error);
      });
  }
  render() {
    return (
      <>
        {/* // <form onSubmit={handleSubmit}> */}
        <h2>Courses</h2>
        {/* <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={title} />
        <input type="submit" value="Submit" /> */}
        <CourseList courses={this.props.courses} />
        {/* </form> */}
      </>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
