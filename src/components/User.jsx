const User = ({name, location, email}) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <h3 className="user-location">{location}</h3>
      <h4 className="user-contact">{email}</h4>
    </div>
  );
};

export default User;
