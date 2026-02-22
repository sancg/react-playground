export default function CarForm() {
  return (
    <form
      action="./"
      method="post"
      className="grid grid-flow-col-dense grid-cols-4 gap-4 "
    >
      <div className="flex flex-col">
        <label htmlFor="car-name">Car Name</label>
        <input
          id="car-name"
          type="text"
          name="car-name"
          className="p-1 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="car-value">Car value</label>
        <input
          id="car-value"
          type="text"
          name="car-value"
          className="p-1 rounded-lg"
        />
      </div>
      <div className="col-span-1 w-full mt-auto">
        <button type="submit" className="w-28 p-1">
          Submit
        </button>
      </div>
    </form>
  );
}
