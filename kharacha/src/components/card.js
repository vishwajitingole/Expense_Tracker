import './card.css';

// Card Component:
// This component represents a card-like container that can hold any content
// passed as children. It encapsulates and styles the content within a card layout.

function Card(props) {
    const classes = 'card ' + props.className; // Add a space between 'card' and props.className 
    //it creates two different name of classes since it's a not a div but a user defined component the Css won't work unless we add it
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;
