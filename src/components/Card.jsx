import { user } from "./data";
import Link from "./Link";


const Card = () => {
    const { img, name, job, wisdom, links } = user;
    return (
        <div className="card">
            <div className="card-content">
                <img src={img} alt={name} />
                <h1>{name}</h1>
                <h2>{wisdom}</h2>
                <p>{job}</p>
                <ul className="list-items">
                    {
                        links.map((link) => {
                            const { id, name, url } = link;
                            return <Link key={id} name={name} url={url} />
                        })}


                </ul>
            </div>
        </div>
    );
}

export default Card;
