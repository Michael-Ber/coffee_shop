import {Switch, Route} from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageCoffee from '../pages/page-coffee/page-coffee';
import PageGoods from '../pages/page-goods/page-goods';
import Header from '../header/header';

import './app.scss';


function App() {
	return (
		<div className="app">
			<div className="app__container">
				<Header />
				<Switch>
					<Route path = '/' exact><PageMain title='Everything You Love About Coffee' /></Route>
					<Route path = '/OurCoffee' exact component={PageCoffee}/>
					<Route path = '/ForYourPleasure' exact component={PageGoods}/>
				</Switch>
			</div>
		</div>
	);
}

export default App;
