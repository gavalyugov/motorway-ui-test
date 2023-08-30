import { ReactComponent as Like } from "../icons/like.svg";

const CarPostDetails = ({ image }) => {
  return (
    <div className="icon-container">
      <div className="like">
        <Like />
      </div>{" "}
      {image.likes}
    </div>
  );
};

export default CarPostDetails;
