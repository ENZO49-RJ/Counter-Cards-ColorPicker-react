const Card = ({img , name , position}) => {
    
    
  return (
    <div className="card">
      <img
        className="img-card"
        src={img}
        alt="profile"
      />
      <h2 className="title-card">{name}</h2>
      <p className="text-card">{position}</p>
      
    </div>
  );
};

export default Card;
