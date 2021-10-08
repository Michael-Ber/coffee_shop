import {Switch, Route} from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageCoffee from '../pages/page-coffee/page-coffee';
import PageGoods from '../pages/page-goods/page-goods';
import Header from '../header/header';

import './app.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path = '/' exact component={PageMain}/>
				<Route path = '/OurCoffee' exact component={PageCoffee}/>
				<Route path = '/ForYourPleasure' exact component={PageGoods}/>
			</Switch>
		</div>
	);
}

export default App;
