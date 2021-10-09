import {Switch, Route} from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageCoffee from '../pages/page-coffee/page-coffee';
import PageGoods from '../pages/page-goods/page-goods';
import Header from '../header/header';

import './app.scss';
import {aromistico} from '../../pic';

const coffeeData = [
	{img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg',country: 'Brazil', cost: 6.99, id: 1},
	{img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg',country: 'Kenya', cost: 6.99, id: 2},
	{img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg',country: 'Columbia', cost: 6.99, id: 3},
	{img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg',country: 'Brazil', cost: 6.99, id: 4},
	{img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg',country: 'Brazil', cost: 6.99, id: 5},
	{img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg',country: 'Brazil', cost: 6.99, id: 6},
];

function App() {
	return (
		<div className="app">
			<div className="app__container">
				<Header />
				<Switch>
					<Route path = '/' exact><PageMain title='Everything You Love About Coffee' /></Route>
					<Route path = '/OurCoffee' exact><PageCoffee title="Our coffee" data={coffeeData}/></Route>
					<Route path = '/ForYourPleasure' exact component={PageGoods}/>
				</Switch>
			</div>
		</div>
	);
}

export default App;
