import React from 'react';
import Images from './Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Intro = props => {
	const info = props.info;
	const contact = props.contact;

	return (
		<div>
			<Images images={info.images}></Images>

			<div className='intro'>
				<h1>
					I'm{' '}
					<span style={{ color: '#FD1056' }}>
						{info.name}
					</span>
					,
				</h1>
				<h1>{info.jobTitle}</h1>
			</div>
			<div>
				<div className='description' style={{ fontFamily: 'Arial' , marginTop : '20px' }}>
					{contact.email}
					<br></br>
					{contact.address}
					<br></br>
					{contact.mobile}
					<br></br><br></br>

					<a
						className='link'
						target='_blank'
						rel='noopener noreferrer'
						href={'http://github.com/' + contact.github}
						style={{ marginRight: '15px' }}
					>
						<FontAwesomeIcon icon={faGithub} style={{ width: '35px', height: '35px' }} />
					</a>

					<a className='link' target='_blank' rel='noopener noreferrer' href={'http://twitter.com/' + contact.twitter} style={{ marginRight: '15px' }}>
						<FontAwesomeIcon icon={faTwitter} style={{ width: '35px', height: '35px' }} />
					</a>
					<a className='link' target='_blank' rel='noopener noreferrer' href={'http://linkedin.com/' + contact.linkedin} style={{ marginRight: '15px' }}>
						<FontAwesomeIcon icon={faLinkedin} style={{ width: '35px', height: '35px' }} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
