import React, { useState } from "react";
import CreateNoteForm from "./components/CreateNoteForm";
import NotesCard from "./components/NotesCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedData, setSelectedData] = useState(second)
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  return (
    <div className="h-screen w-full flex">
      <div className="w-[20%] flex flex-col justify-between border-r p-4 border-gray-500">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-15">
              <img
                className="h-full"
                src="https://static.vecteezy.com/system/resources/previews/025/006/367/non_2x/3d-illustration-icon-of-purple-notes-and-pencil-for-ui-ux-web-mobile-apps-social-media-ads-design-png.png"
                alt=""
              />
            </div>
            <h1 className="text-xl">
              Sheryians <br /> Notes
            </h1>
          </div>

          <nav className="flex flex-col gap-4">
            {notes.map((elem) => {
              return (
                <button
                onClick={()=>selectedData(data)}
                  key={elem.id}
                  className="w-full py-3 cursor-pointer text-xl bg-black text-white rounded"
                >
                  {elem.title.length > 17
                    ? `${elem.title.slice(0, 15)}...`
                    : elem.title}
                </button>
              );
            })}
          </nav>
        </div>

        <button
          onClick={() => setToggle(true)}
          className="w-full py-4 cursor-pointer text-xl bg-green-600 text-white rounded"
        >
          Create Note
        </button>
      </div>
      <div className="w-[80%]">
        {toggle && (
          <div className="h-full w-full flex justify-center items-center">
            <CreateNoteForm
              setToggle={setToggle}
              setNotes={setNotes}
              notes={notes}
            />
          </div>
        )}
        {selectedNote?(<div>
          <NotesCard selectedData={selectedData}/>
        </div>):"this is nothing"}

        {}
      </div>
    </div>
  );
};

export default App;