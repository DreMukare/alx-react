import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id='CourseList' className={css(styles.table)}>
      <thead className={styles.cell}>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
          styles={styles.cell}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
          styles={styles.cell}
        />
      </thead>
      <tbody>
        {
          listCourses.length > 0
            ? listCourses.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
                styles={styles.cell}
              />
            ))
            : <CourseListRow textFirstCell='No course available yet' styles={styles.cell} />
        }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

const styles = StyleSheet.create({
  table: {
    border: '1px solid #ddd',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cell: {
    border: '1px solid #ddd',
    width: '80%'
  }
})

export default CourseList;
