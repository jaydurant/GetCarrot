import React from 'react';

function DoctorContent(props) {
	return (
		<section className="doctor-section">
			<div>
				<img className="doctor-image" src={props.doctor.image} alt={`${props.doctor.name} image`} width="370" height= "240" />
			</div>
			<div className="doctor-caption">
				<p className="full-width-s">
					{`Hi! I'm ${props.doctor.name}, your Fertility Coach.  I am a specialist in fertility. I'm here to answer your questions about egg freezing or general fertility health.  If you message me, I'll respond within a day, if not sooner. `}
				</p>
				<div>
					<button className="doctor-button" type="button">Enter Private Chat</button>
				</div>
			</div>
		</section>
		);
}

export default DoctorContent;
