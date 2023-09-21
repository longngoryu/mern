import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

function PlaceList({items}) {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button>Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          address={place.address}
          description={place.description}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
