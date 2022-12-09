// Wrapper component will be the frame, holding all child components in place. 
// It will also allow us to center the whole app afterward.


import './wrapper.css';

const Wrapper = ({children}) =>{
    
    return (
    <div className="wrapper">
        {children}
    </div>
    )
};

export default Wrapper;