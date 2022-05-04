import React, { useRef } from "react";

import Charts from "./Charts";
import ReactToPrint from "react-to-print";

function App() {
  const pdf_ref = useRef(null);

  return (
    <main className="grid h-screen w-screen place-content-center place-items-center bg-gray-800">
      <ReactToPrint
        trigger={() => (
          <button className="bg-blue-700 p-4 text-white">Export to PDF</button>
        )}
        content={() => pdf_ref.current}
      />
      <div
        className="h-full w-full bg-white p-4 shadow-2xl backdrop-blur-3xl md:w-[50%]"
        ref={pdf_ref}
      >
        <h2 className="text-2xl font-bold">Stock Sales Analysis</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          doloremque voluptatum eveniet ut, tempora natus doloribus voluptatibus
          quis sit, sequi amet voluptas vitae, quaerat explicabo alias quo
          exercitationem. Modi, iusto.
        </p>

        <div className="h-[50vh] w-full">
          <Charts />
        </div>
      </div>
    </main>
  );
}

export default App;
