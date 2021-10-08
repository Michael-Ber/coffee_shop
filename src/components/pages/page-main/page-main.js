import './page-main.scss';

import Sticker from '../../sticker/sticker';
import Content from '../../content/content';
import Ourbest from '../../ourbest/ourbest';
import Footer from '../../footer/footer';

import {solimo, presto, aromistico} from '../../../pic';

const pageProps = {
    contTitle: 'About Us',
    contText: <><p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p> 
    <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p></>,
    textWidth: '620px'
}

const cardProps = [
    {img: solimo, alt: 'solimo coffee', name: 'Solimo Coffee Beans 2 kg', cost: 10.73, id: 1},
    {img: presto, alt: 'presto coffee', name: 'Presto Coffee Beans 1 kg', cost: 15.99, id: 2},
    {img: aromistico, alt: 'aromistico coffee', name: 'AROMISTICO Coffee 1 kg', cost: 6.99, id: 3}
];

const PageMain = (props) => {
    const {title} = props;
    const {contTitle, contText, textWidth} = pageProps;
    return (
        <>
            <div className="main">
                <div className="main__content">
                    <h1 className="main__content-title">{title}</h1>
                    <Sticker color="white"/>
                    <h2 className="main__content-subtitle">We makes every day full of energy and taste <br/> Want to try our beans?</h2>
                    <button className="main__content-btn">More</button>
                </div>
            </div>
            <Content title = {contTitle} text = {contText} width = {textWidth}/>
            <Ourbest data = {cardProps}/>
            <Footer />
        </>
    )
}

export default PageMain;