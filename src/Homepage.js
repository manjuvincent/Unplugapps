import './Homepage.css';
import NavBar from './components/NavBar';
import InnovationShort from './components/InnovationShort';
export default function Homepage(){
    return(
        <div className="homepage">
            <div className="homepage_header">
                <NavBar></NavBar>
            </div>
            <div className="homepage_background">
                <InnovationShort></InnovationShort>
            </div>

        </div>
    )
}