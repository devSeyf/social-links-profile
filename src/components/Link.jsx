/* eslint-disable react/prop-types */

function Link ({name,url}){
    return (<li className="list-item"> 
    <a href={url}>{name}</a>
    </li>
    );
};

export default Link;