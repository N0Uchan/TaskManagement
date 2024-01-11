import './EntryPage.css';
export default function EntryPage() {
  return (
    <dialog id="entryPage" >
      <form id="entryForm" className="entryDisplay1" >
        <h2>Task Details</h2>
        <input type="text" placeholder="Add task" />
        <textarea id="entryDescr" type="text" placeholder="Add description" />
        <input type="date" placeholder="Due Date : dd.mm.yyyy" />
        <form id="entryButtons" method="dialog">
            <button type="submit">Save</button>
            <button type="button">Clear</button>
        </form>
      </form>
    </dialog>
  );
}