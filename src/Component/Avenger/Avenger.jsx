import React, { useState } from "react";
import { avengerCode } from "../../Config/mobile";
import { APIUrlAvengers } from "../../Config/mapAPI";
export default function Avenger() {
  const [message, setMessage] = useState("");
  const [dataFetch, setResp] = useState(false);

  const getHelp = (code) => {
    const { id, click, value } = code;

    switch (value) {
      case "send":
        setMessage("calling...");
        fetch(`${APIUrlAvengers}${message}`)
          .then((res) => res.json())
          .then((res) => {
            setMessage(res.response.avenger);
            setResp(true);
          })
          .catch((error) => {
            setMessage("something went wrong!!");
            setResp(true);
          });
        break;
      default:
        if (dataFetch) {
          let msg = id;
          setMessage(msg);
          setResp(false);
        } else {
          let msg = message + id;
          setMessage(msg);
        }
        break;
    }
  };
  return (
    <main>
      <div className="screen">
        <input value={message} placeholder="call for avenger..." />
      </div>
      <div className="codeWrapper">
        {avengerCode.map((code) => {
          return (
            <button onClick={() => getHelp(code)} key={code.value}>
              <h1>{code.id}</h1>
              <h3>{code.value}</h3>
            </button>
          );
        })}
      </div>
    </main>
  );
}
