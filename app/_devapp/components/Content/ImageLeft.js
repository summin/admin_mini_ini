import React from 'react';
import Image from 'react-bootstrap/Image'
import cuid from 'cuid'

export default (...props) => {
    let srcPath, array = [];
    if (props[0].focus > 0 && props[0].focus < 25)
        srcPath = API_URL_PRIZE_IMAGES + props[0].focus + '.jpg';
    else
        srcPath = API_URL_DEFAULT_IMAGE;
    if (props[0].contentLoadedinParent === 'days')
        array.push(
            <div key={cuid()}>
                <Image key={cuid()} className="img mt-lg-4" fluid src={srcPath} />
            </div>);
    else array.push("")
    return array;
}
