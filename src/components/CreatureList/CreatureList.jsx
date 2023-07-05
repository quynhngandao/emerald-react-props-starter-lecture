import CreatureItem from "../CreatureItem/CreatureItem";

function CreatureList({CreatureList}) {
  return (
    <ul>
      {CreatureList.map(creature => (
        <CreatureItem key={creature.id} creature={creature}/>
      ))}
    </ul>
  );
}

export default CreatureList;
