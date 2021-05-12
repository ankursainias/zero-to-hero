import { NotificationManager } from "react-notifications";

const Newsletter = () => {
  const SubmitHandler = (event) => {
    event.preventDefault();
    NotificationManager.success("Newsletter Subscribed Successfully");
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div className="container">
          <h3>Subscribe to our Newsletter</h3>
        </div>

        <div className="container" style={{ backgroundColor: "white" }}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email address" name="mail" required />
        </div>

        <div className="container">
          <input type="submit" value="Subscribe" />
        </div>
      </form>
    </>
  );
};

export default Newsletter;
