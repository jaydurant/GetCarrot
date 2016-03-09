import React from 'react';

function DoctorContent(props) {
	return (
		<section className="doctor-section">
			<div>
				<p>{`Hi! I'm ${props.doctor.name}, your Fertility Coach.`}</p>
				<img className="doctor-image" src={props.doctor.image} alt={`${props.doctor.name} image`} width="150" height= "150" />
			</div>
			<div className="doctor-caption">
				<p className="one-half-s">
					 I am a gynecologist with a specialization in
					reproductive endocrinology. You can message me with questions
					and I'll respond to you by text within the day.
				</p>
			</div>
		</section>
		);
}

export default DoctorContent;
