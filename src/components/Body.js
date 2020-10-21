import React, {useState} from 'react';
import InfoBox from './InfoBox';

export default function Body() {
	const data = {
		manager: {
			view: 1,
			title: `Engineering Manager`,
			text: `Code doesn't just write itself. Developers need an advocate, product needs estimates, marketing 
				needs stats. As a manager, I've spent years getting people what they need, and getting roadblocks
				out of their way. `,
			textExtended: `Management isn't an exact science, but I've picked up a few things along the way:`,
			list: [
				`Agile development is the gold standard—but different methodologies are appropriate for different teams.
					Scrum is great for planning ahead, but can be time-consuming and inflexible. Kanban streamlines
					the workflow, but can be vulnerable to feature creep. As in development, it's important to pick the
					right tool for the job.`,
				`Nobody likes surprises. If someone on my team isn't meeting expectations it's my responsibility to work
				 	to get them up to speed. If a deadline is going to slip it's best to bring it up sooner rather than 
				 	later.`,
				`Praise publicly and criticize privately. A rising tide lifts all boats, and a petty manager bums out
					the whole team.`,
				`People first! In my experience if people are happy and motivated everything else follows naturally. Are
					people happy at your company? If so, I'd like to join you. Let's set up an interview and find out
					if we'd work well together.`
			],
		},
		developer: {
			view: 2,
			title: `Senior Web Developer`,
			text: `I turn product dreams into a reality. Whether it's a one-off static landing page
				or a complex web app, I've got you covered. `,
			textExtended: `I've been in the business for over a decade, and while a few things have changed, 
				some core principles have withstood the test of time:`,
			list: [
				`Strive to write reusable, self-documenting code. If a junior dev can't read and use my code five years
					from now I've got some cleanup to do.`,
				`Responsive design is a must. The future of the web is on devices, and a company ignores that
					at their own peril.`,
				`Don't be afraid to embrace new technologies, but also don't spend too much time chasing after the
				 	flavor of the month. We probably don't need to spend our next three sprints converting everything to
				 	NoSQL because it's hip this month.`,
				`Surround yourself with smart, passionate people. That's where you come in! Give me a call, shoot me an
					email; let's find out if we'd be a good fit.`
			]
		}
	};

	const [view, setView] = useState(0);
	const handleChangeView = (viewVal) => {
		console.log(viewVal);
		setView(parseInt(viewVal, 10));
	};

	return (
		<div className={`body-container${view !== 0 ? ' body-container_extended' : ''}`}>
			{view !== 2 && <InfoBox data={data.manager} currentView={view} changeView={handleChangeView} />}
			{/*<img src={logo} className="App-logo" alt="logo" />*/}
			<div className="img-container">
				<img className="img-container__img" src="me1.png" alt="Jason Dove" />
			</div>
			{view !== 1 && <InfoBox data={data.developer} currentView={view} changeView={handleChangeView} />}
		</div>
	);
}
