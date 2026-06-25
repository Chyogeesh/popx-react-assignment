function Account() {
  return (
    <div className="screen">
      <h2>Account Settings</h2>

      <div className="profile">
        <img
          src="/profile.png"
          alt="profile"
          width="70"
        />

        <div>
          <h3>Marry Doe</h3>
          <p>marry@gmail.com</p>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed diam nonumy.
      </p>
    </div>
  );
}

export default Account;
