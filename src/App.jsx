import { useEffect } from 'react';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";
//import dummyNotes from "./dummy_notes";

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes') || []));
  //console.log(notes);
  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
