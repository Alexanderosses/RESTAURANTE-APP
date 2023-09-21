import './HeaderComp.css'
import {titleBanner,subTitle} from '../../utils/constvar.js'; 

export const HeaderComp = () => {
    return (
        <div>
            <h1 className='h1'>{titleBanner}</h1>
            <h2 className='h1'>{subTitle}</h2>
        </div>
    );
};

