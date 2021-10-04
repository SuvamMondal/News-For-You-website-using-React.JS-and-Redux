import React from 'react'
import colorChanger from '../higherordercomponents/colorchanger';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem minus doloremque, ratione corrupti asperiores alias rem veritatis blanditiis delectus culpa amet cupiditate. Alias illum dolor minus iure hic reiciendis!</p>
            
        </div>
    );
}
 
export default colorChanger(About);