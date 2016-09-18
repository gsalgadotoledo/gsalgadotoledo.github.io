import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SectionHeader from './Sections/SectionHeader/SectionHeader'
import SectionHello from './Sections/SectionHello/SectionHello'
import SectionAddItems from './Sections/SectionAddItems/SectionAddItems'
import SectionBinding from './Sections/SectionBinding/SectionBinding'
import SectionAjax from './Sections/SectionAjax/SectionAjax'
import SectionProps from './Sections/SectionProps/SectionProps'
import SectionAnimate from './Sections/SectionAnimate/SectionAnimate'

class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<SectionHeader title="Welcome!!" description="This is my ReactJS Playground" />
					<SectionHello name="Gustavo Salgado" expertIn="JS & NodeJS Developer" />
					
					<SectionHeader title="Properties" description="Setting and creating elements setting properties" />
					<SectionProps />
					
					<SectionHeader title="Binding variables" description="Data Binding" />
					<SectionBinding />
					
					<SectionHeader title="Animations" description="Animating using React.addons.CSSTransitionGroup" />
					<SectionAnimate />

					<SectionHeader title="Working with DOM" description="We're creating elements with different properties" />
					<SectionAddItems />

					<SectionHeader title="Showing ajax data" description="We're retriving and showing mock-users.json data" />
					<SectionAjax usersUrl="data/mock-users.json"/>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App