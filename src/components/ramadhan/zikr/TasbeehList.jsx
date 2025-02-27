import TasbeehItem from "./TasbeehItem";

const TasbeehList = ({
  tasbeehs,
  increment,
  resetCount,
  deleteTasbeeh,
  defaultTasbeehs,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
      {Object.entries(tasbeehs).map(([tasbeeh, count]) => (
        <TasbeehItem
          key={tasbeeh}
          tasbeeh={tasbeeh}
          count={count}
          increment={() => increment(tasbeeh)}
          resetCount={() => resetCount(tasbeeh)}
          deleteTasbeeh={() => deleteTasbeeh(tasbeeh)}
          isDefault={defaultTasbeehs.includes(tasbeeh)}
        />
      ))}
    </div>
  );
};

export default TasbeehList;
