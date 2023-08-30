import { format } from "date-fns";

const CarPostLabel = ({ image }) => {
  return (
    <div>
      <label className="timestamp">
        {format(new Date(image.created_at), "d MMM yyyy")}
      </label>
    </div>
  );
};

export default CarPostLabel;
