function Features() {
  return (
    <div className="home_container">
      <div className="home_content">
        <h2>Website Features</h2>
        <ul className="features_list">
          <li>
            <strong>Live contact data:</strong> we fetch demo users from an
            online API and display them as clean cards.
          </li>
          <li>
            <strong>Interactive calling:</strong> simulate calling a user with a
            loading animation and an option to end the call.
          </li>
          <li>
            <strong>Last called memory:</strong> the home page reminds you who
            you called last using global React Context.
          </li>
          <li>
            <strong>Responsive layout:</strong> cards and pages adapt for both
            desktop and mobile screens.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
