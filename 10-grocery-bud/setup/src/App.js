import React, { useState, useEffect, useCallback } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alerts, setAlerts] = useState({ show: false, type: "", message: "" });

  const [showAlert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");

  const [grocery, setGrocery] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const removeAlert = useCallback(() => {
    setAlerts({ show: false, type: "", message: "" });
  }, []);

  // useEffect(() => {
  //   const alertTimeout = setTimeout(() => {
  //     if (showAlert) setAlert(false);

  //     return () => {
  //       clearTimeout(alertTimeout);
  //     };
  //   }, 2000);
  // }, [showAlert]);

  const handleSubmit = function (event) {
    console.log(`Form Triggers`);
    event.preventDefault();

    try {
      setList((prevList) => {
        let newList;

        if (isEdit) {
          // setAlertType("success");
          // setMessage("Item Edited Successfully !");

          newList = prevList.map((item, index) => {
            const newItem = grocery;
            return index === selectedIndex ? newItem : item;
          });

          setIsEdit(false);
          // setAlert(true);
          setAlerts({
            show: true,
            type: "success",
            message: "Item Edited Successfully !",
          });
          setGrocery("");

          return newList;
        }
        newList = prevList.map((item) => {
          return item.toLowerCase();
        });

        const isExists = newList.includes(grocery.toLowerCase());

        if (grocery !== "") {
          if (isExists) {
            // setAlertType("danger");
            // setMessage("Item Already Exists !");

            setAlerts({
              show: true,
              type: "danger",
              message: "Item Already Exists !",
            });
            newList = [...prevList];
          } else {
            // setAlertType("success");
            // setMessage("Item has been successfully added !");
            setAlerts({
              show: true,
              type: "success",
              message: "Item has been successfully added !",
            });
            newList = [...prevList, grocery];
          }

          // setAlert(true);
          setGrocery("");

          return newList;
        } else {
          return prevList;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = function (index) {
    setIsEdit(true);
    setSelectedIndex(index);
    const currentItem = list[index];
    setGrocery(currentItem);
  };

  const handleRemove = function (index) {
    // setAlertType("danger");
    // setAlert(true);
    // setMessage("Item has been removed !");

    setAlerts({
      show: true,
      type: "danger",
      message: "Item has been removed !",
    });

    setList((prevList) => {
      return prevList.filter((item, itemIndex) => {
        return itemIndex !== index;
      });
    });
  };

  const handleClearAll = function () {
    // setAlertType("danger");
    // setAlert(true);
    // setMessage("All Items have been removed");

    setAlerts({
      show: true,
      type: "danger",
      message: "All Items have been removed",
    });

    setList(() => {
      return [];
    });
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <Alert {...alerts} removeAlert={removeAlert} />

        {/* {showAlert && (
          <Alert type={alertType.toLowerCase()} message={message} />
        )} */}

        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            value={grocery}
            onChange={(e) => {
              console.log(`Event triggered ${e.target.value}`);
              setGrocery(e.target.value);
            }}
          ></input>
          <button type="submit" className="submit-btn">
            {isEdit == true ? `Edit` : `Submit`}
          </button>
        </div>

        <List
          grocery={list}
          onItemEdited={handleEdit}
          onItemRemoved={handleRemove}
          onClearAll={handleClearAll}
        />
      </form>
    </section>
  );
}

export default App;
