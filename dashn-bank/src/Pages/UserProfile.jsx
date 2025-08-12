import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return (
    <>
      <div>
        <h1>User Details</h1>
        <p>User ID or Name: {id}</p>
      </div>
    </>
  );
}

export default UserProfile;
