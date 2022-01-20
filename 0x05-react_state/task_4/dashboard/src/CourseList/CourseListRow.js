import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = { color: '#f5f5f5ab' };
const headerStyle = { color: '#deb5b545' };

const CourseListRow = ({
	isHeader = false,
	textFirstCell,
	textSecondCell = null,
}) => {
	const [checked, setChecked] = useState(false);
	const handleChecked = () => setChecked(!checked);
	return (
		<tr style={isHeader ? headerStyle : rowStyle}>
			{isHeader ? (
				textSecondCell ? (
					<>
						<th className={css(styles.cell)}>{textFirstCell}</th>
						<th className={css(styles.cell)}>{textSecondCell}</th>
					</>
				) : (
					<th colSpan={2}>{textFirstCell}</th>
				)
			) : (
				<>
					<td
						className={
							checked ? css(styles.cell, styles.rowChecked) : css(styles.cell)
						}
					>
						<input
							type='checkbox'
							onChange={handleChecked}
							defaultChecked={checked}
						/>
						{textFirstCell}
					</td>
					<td className={css(styles.cell)}>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
	cell: {
		border: '1px solid #ddd',
		width: '80%',
	},
	rowChecked: { backgroundColor: '#e6e4e4' },
});

export default CourseListRow;
