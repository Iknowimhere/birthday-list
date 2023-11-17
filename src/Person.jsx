const Person = ({ person }) => {
  return (
    <>
      {person.map((per) => {
        return (
          <div className='person' key={per.id}>
            <img src={per.image} alt={per.name} />
            <h4>{per.name}</h4>
            <p>{per.age} years</p>
          </div>
        );
      })}
    </>
  );
};

export default Person;
