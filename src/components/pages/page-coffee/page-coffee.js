import './page-coffee.scss';
import Search from '../../search/search';
import Filter from '../../filter/filter';
import CoffeeList from '../../coffee-list/coffee-list';
// import Sticker from '../../sticker/sticker';
import Content from '../../content/content';
import Footer from '../../footer/footer';
import girl from './img/drinking_girl.jpg';

const pageProps = {
    contTitle: 'About Us',
    contText: <><p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>

    <p>Afraid at highly months do things on at. Situation recommend objection do intention
    so questions.</p> 
    <p>As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.</p></>,
    textWidth: '350px'
}

const PageCoffee = (props) => {
    const {title, data} = props;
    const {contTitle, contText, textWidth} = pageProps;
    return (
        <>
            <div className="coffee">
                <div className="coffee__content">
                    <h1 className="coffee__content-title">{title}</h1>
                </div>
            </div>
            <div className="coffee__about">
                <div className="coffee__about-wrapper">
                    <div className="coffee__about-img">
                        <img src={girl} alt="girl drinking coffee"/>
                    </div>
                    <Content title = {contTitle} text = {contText} width = {textWidth}/>
                </div>
            </div>
            <div className="coffee__searchPanel">
                <Search />
                <Filter />
            </div>
            <div className="coffee__wrapper">
                <CoffeeList data={data}/>
            </div>
            <Footer />
        </>
    )
}

export default PageCoffee;