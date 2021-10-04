
const colorChanger = (WrappedComponent) => {
    
    const colors = ['red', 'blue','green', 'orange', 'yellow'];

    const randomColor = colors[Math.floor( Math.random()*4 )];

    const className = randomColor + '-text'  ;

    return (props) => {
        return(
            <div className={className}>
              <WrappedComponent {...props} />
            </div>
        )
    }
}
 
export default colorChanger;