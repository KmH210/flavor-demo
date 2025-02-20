import Flavor from "../model/Flavor";

/* Task:
- Display the name of the flavor
- Display the number of votes
- Display a circle that is filled in with the color
- Add a "Vote" button. When it is clicked, call the onVote callback and pass
  it the id.
*/

interface Props {
  flavor: Flavor;
  onVote: (flavorId: number) => void;
}

function FlavorDetails({flavor, onVote}: Props) {

  return (
    <div className="FlavorDetails">
      <h3>Name: {flavor.name}</h3>
      <p> Votes: {flavor.votes}</p>
      <button type="submit" onClick={() => onVote(flavor.id || 0)}>Vote</button>
    </div>
  );
}

export default FlavorDetails;