import colorChanger from '../higherordercomponents/colorchanger';

const Contact = () => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Suvam Mondal, email: suvammondal1999@gmail.com</p>
            
        </div>
    );
}
 
export default colorChanger(Contact);