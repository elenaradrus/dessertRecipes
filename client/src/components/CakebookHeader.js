import { useNavigate } from "react-router-dom";

const CakebookHeader = () => {

    const navigate = useNavigate();
    
    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div>
            <div className='header'>
                <h2 className='cakebook' onClick={() => goToHomePage()}>Cakebook</h2>
            </div>
        </div>
    );
}

export default CakebookHeader;