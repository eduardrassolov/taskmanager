// eslint-disable-next-line no-unused-vars
import { Button } from "@material-tailwind/react";
import { useTaskDetail } from "../../../contexts/TaskDetailContext";

function AsideTask() {
  const { optionList, handleClickOption } = useTaskDetail();
  const quantityActiveOptions = optionList.reduce(
    (acc, option) => (option.isActive ? acc + 1 : acc),
    0
  );
  //Array of options that are not active
  const noActiveOptions = optionList.filter((option) => !option.isActive);

  return (
    <>
      {quantityActiveOptions !== optionList.length ? (
        <>
          <div className=" flex w-auto flex-col">
            <h2 className="mx-auto mb-5">Add to task</h2>
            {noActiveOptions.map((option) => (
              <div className="w-full" key={crypto.randomUUID()}>
                <Button
                  variant="text"
                  color="gray"
                  className="mb-2 w-full bg-gray-200 hover:bg-gray-300"
                  name={`${option?.name}`}
                  onClick={handleClickOption}
                >
                  {option.name}
                </Button>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export default AsideTask;
