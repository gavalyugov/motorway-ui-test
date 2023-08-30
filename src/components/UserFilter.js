import ImageWithFallback from "./ImageWithFallback";

const UserFilter = ({ users, onFilterByUser }) => {
  return (
    <div>
      <h2>Users</h2>
      <div className="user-filters">
        {users.filter(filterUnique).map((user) => {
          return (
            <div
              key={user.id}
              className="filter"
              onClick={() => onFilterByUser(user.id)}
            >
              <ImageWithFallback
                imageURL={user.profile_image}
                alt={user.alt}
                className="user"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserFilter;

// Helpers

function filterUnique(value, index, array) {
  return array.findIndex((element) => element.id === value.id) === index;
}
