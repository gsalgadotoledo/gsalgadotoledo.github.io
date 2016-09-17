import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SectionHeader from './Sections/SectionHeader/SectionHeader'
import SectionHello from './Sections/SectionHello/SectionHello'
import SectionAddItems from './Sections/SectionAddItems/SectionAddItems'
import SectionBinding from './Sections/SectionBinding/SectionBinding'
import SectionAjax from './Sections/SectionAjax/SectionAjax'

class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<SectionHeader title="Welcome!!" description="This is my ReactJS Playground" />
					<SectionHello name="Gustavo Salgado" expertIn="JS & NodeJS Developer" />
					
					<SectionHeader title="Binding variables" description="Data Binding" />
					<SectionBinding />

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