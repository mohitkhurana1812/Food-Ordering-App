import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
// // const AccordianHeader = ({ heading }) => {
// //   return (
// //     <div className="flex size-full justify-between">
// //       <h2>{heading}</h2>
// //       <span>🔽</span>
// //     </div>
// //   );
// };
// const AccordianBody = ({ body }) => {
//   return <div>{body}</div>;
// };
// const Accordion = (props) => {
//   function abc(e) {
//     debugger;
//     console.log("Child");
//     e.stopPropagation();
//     checkAccordion();
//   }
//   const { headText, bodyText, open, toggle, check, checkAccordion } = props;
//   return (<div>

//     <div className=" flex cursor-pointer border-b-2" onClick={toggle}>
//       <input type="checkbox" className="mr-4" checked={check} onClick={abc }
//        ></input>
//         <AccordianHeader heading={headText} />
//       {open && <AccordianBody body={bodyText} />}
//     </div>
//     </div>
//   );
// };
const Header = () => {
  // const [accObj, setaccObj] = useState([
  //   { header: "abc", body: "def", open: false, key: 1, checked:false },
  //   { header: "Hi", body: "there", open: false, key: 2 , checked: false},
  //   { header: "Hello", body: "here & there", open: false, key: 3, checked:false },
  // ]);
  // const collapseAccordion = (key) => {
  //   debugger;
  //   console.log("Parent");
  //   const newObj = [...accObj];
  //   newObj.map((o) => {
  //     if (o.key === key) {
  //       o.open = !o.open;
  //     } else {
  //       o.open = false;
  //     }
  //   });
  //   setaccObj(newObj);
  // };
  // const checkAccordion = (key) => {
  //   console.log("children")
  //   const newObj = [...accObj];
  //   newObj.map((o) => {
  //     if (o.key === key) {
  //       o.checked = !o.checked;
  //     }
  //   });
  //   setaccObj(newObj);
  // };
  // const checkButton = () => {
  //   const newObj = accObj.filter((obj) => !obj.checked);
  //   if (Object.keys(newObj).length)
  //   {
  //     return true;
  //   }
  //   else
  //     return false;
  // }
  // return (
  //   <div className=" px-4 pt-2 m-4 w-6/12 border border-gray-300">
  //     {accObj.map((ob) => (
  //       <Accordion
  //         key={ob.key}
  //         headText={ob.header}
  //         bodyText={ob.body}
  //         open={ob.open}
  //         check = {ob.checked}
  //         toggle={() => {
  //            collapseAccordion( ob.key);
  //         }}
  //         checkAccordion= {()=>{checkAccordion(ob.key)}}
  //       />
  //     ))}
  //     <button className = "border-b-gray-500 border rounded-md p-2 m-2 bg-slate-200" disabled={checkButton()}>Submit</button>
  //   </div>
  // );
  const [btnName, setBtnName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
      return (
        <div className="flex justify-between al bg-orange-100 shadow-lg">
          <div className="logo-container">
            <img
              className="w-56"
              src={LOGO_URL}
            ></img>
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4"><Link to = "/">Home</Link></li>
              <li className="px-4"><Link to = "/about">About Us</Link></li>
              <li className="px-4"><Link to = "/contact">Contact</Link></li>
              <li className="px-4 font-bold text-xl"><Link to = "/cart">Cart ({cartItems.length} Items)</Link></li>
              <button className="login-btn" onClick={()=> btnName==="Login" ? setBtnName("Logout"): setBtnName("Login")}>{btnName}</button>
            </ul>
          </div>
        </div>
      );
};

export default Header;
