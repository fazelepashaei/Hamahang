// import React from "react";

// const LocalStorage = () => {
//   const [user, setUser] = React.useState("");
//   const [rememberMe, setRememberMe] = React.useState(true);

//   React.useEffect(() => {
//     const rememberMe = localStorage.getItem("rememberMe") === "true";
//     const user = rememberMe ? localStorage.getItem("user") : "";
//   });

//   const onclick = () => {
//     localStorage.setItem("rememberMe", rememberMe);
//     localStorage.setItem("user", rememberMe ? user : "");
//   };

//   const handleChange1 = (event) => {
//     const input = event.target;
//     setUser(input.value);
//   };
//   const handleChange2 = (event) => {
//     const input = event.target;
//     setRememberMe(input.checked);
//   };
//   return (
//     <div className="local-strorage-test">
//       <h1>Using Local Storage in React</h1>00...................
//       <label>
//         User: <input name="user" value={user} onChange={handleChange1} />
//       </label>
//       <label>
//         <input
//           name="rememberMe"
//           checked={rememberMe}
//           onChange={handleChange2}
//           type="checkbox"
//         />{" "}
//         Remember me
//       </label>
//       <button type="submit" onClick={onclick}>
//         Sign In
//       </button>
//     </div>
//   );
// };

// export default LocalStorage;
