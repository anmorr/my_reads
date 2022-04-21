import { Link } from 'react-router-dom'
const Footer = () => {


    return (
        <div className="open-search">
            <Link to="/search-page" className="open-search">Add a book</Link>
        </div>
    )
}

export default Footer;