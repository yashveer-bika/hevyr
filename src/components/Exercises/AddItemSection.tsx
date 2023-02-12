import React from "react";
import Table from "./Table";

export default function AddItemSection({props} : any) {
  return (
    // <section className="section">
    //     <form className="form" id="addItemForm">
    //     <input type="text" className="input" id="addInput" placeholder="Something that needs to be done..." />
    //     <button className="button is-info" onClick={(e) => props.addItem(e)}>
    //         Add Item
    //     </button>
    //     </form>
    // </section>

    <section className="section">
        <form className="form" id="addItemForm">
        <input type="text" className="input" id="addInput" placeholder="Something that needs to be done..." />
        <button className="button is-info" onClick={(e) => props.addItem(e)}>
            Add Item
        </button>
        </form>
    </section>
  );
}