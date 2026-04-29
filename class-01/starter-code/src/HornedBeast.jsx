/* eslint-disable react/prop-types */
// LAB 01 - FEATURE TASKS
// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

function HornedBeast(props) {

  return (
    <>
      <h2>{props.title}</h2>
      <img
        src={props.imageUrl}
        alt={props.description}
        title={props.title}
        style={{ width: '20%' }}
      />
      <p>{props.description}</p>
    </>
  );
}


export default HornedBeast;
