import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const EducationItem = (props) => {
	const education = props.education;
	return (
		<div className='row' style={{ padding: '0px', margin: '0px' }}>
			<div className='col-lg-12 d-none d-lg-block'>
				<img
					src={`${process.env.PUBLIC_URL}/${education.logo}`}
					className='img-fluid company-logo'
					alt='University'
				></img>
			</div>
			<br></br><br></br>
			<div className='col-lg-12 pt-5'>
				<div>
					<h5 style={{ fontFamily: 'farid' }}>{education.title}</h5>
				</div>
				<div>
					<h6 style={{ fontFamily: 'farid' }} className='showTime'>
						{education.time}
					</h6>
				</div>
				<div
					style={{ textAlign: 'justify', fontSize: '0.8rem' }}
				>
					<h6>{education.description}</h6>
				</div>
			</div>
		</div>
	);
};

export default EducationItem;
