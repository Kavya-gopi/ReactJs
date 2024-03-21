import PropTpes from 'prop-types';
const UserDatas = [
  {
    name: "Keerthika P",
    city: "Kilpauk",
    description: "Web Developer",
    skills: ["Python", "DSA", "Java", "HTML And CSS"],
    image: "images/1.jpg",
    isOnline: true,
  },

  {
    name:"kavya G",
    city:"Pattabiram",
    description:"React Developer",
    skills:["Python","Java","HTML and CSS","JavaScript","ReactJs"],
    image:"images/1.jpg",
    isOnline:false
  },

  {
    name:"Sadhana S",
    city:"Pattabiram",
    description:"Play School",
    image:"images/1.jpg",
    skills:["Roaming"],
    isOnline:true
  }
];

function User(props) {
  return (
    <>
      <div className="card-div">
        {/* <span className="pro">ONLINE</span> */}
        {props.isOnline ? (
          <span className="pro online">ONLINE</span>
        ) : (
          <span className="pro offline">OFFLINE</span>
        )}
        <img src={props.image} alt="img-k"></img>
        <h2>{props.name}</h2>
        <h2>{props.city}</h2>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary outline">Following</button>
        </div>
        <h6 className="skills">Skills</h6>
        <ul>
          {/* <li>Python</li>
          <li>DSA</li>
          <li>HTML and CSS</li>
          <li>JavaScript</li> */}
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const UserData = () => {
  return <>
    {UserDatas.map((user,index)=>(
        <User key={index} name={user.name} 
         city={user.city}
         description={user.description}
         isOnline={user.isOnline}
         image={user.image}
         skills={user.skills}/>
    ))}
  </>;
};

User.propTypes = {
  name:PropTpes.string.isRequired,
  city:PropTpes.string.isRequired,
  description:PropTpes.string.isRequired,
  isOnline:PropTpes.bool.isRequired,
  skills:PropTpes.arrayOf(PropTpes.string).isRequired,
}