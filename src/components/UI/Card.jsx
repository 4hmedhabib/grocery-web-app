const Card = (props) => {
  return (
    <div className="bg-white shadow-md rounded-md p-3 border-2 border-gray-50 w-full h-full">
      {props.children}
    </div>
  );
};

export default Card;
