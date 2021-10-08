import Sticker from '../sticker/sticker';
import './content.scss';

const Content = (props) => {
    const {title, text, width} = props;
    return (
        <div className = "content">
            <h2 className="content__title">{title}</h2>
            <Sticker color="black" />
            <article className="content__text" style={{width: `${width}`}}>{text}</article>
        </div>
    )
}

export default Content;