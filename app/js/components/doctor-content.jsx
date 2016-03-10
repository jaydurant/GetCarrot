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
					 I am a specialist in fertility. I'm here to answer your questions about egg freezing or general fertility health.  If you message me, I'll respond within a day, if not sooner. 
				</p>
				<div>
					<button className="doctor-button" type="button">Enter Private Chat</button>
				</div>
			</div>
		</section>
		);
}

export default DoctorContent;
