const Contact = () => {
  return (
    <div>
      <h1 className="font-bold m-4 p-4 text-3xl">Contact Us</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
        <input type="text" className="border border-black p-2 m-2"  placeholder="Message" />
        <button className="border border-black p-2 m-2 bg-gray rounded-md" >Submit</button>
      </form>
    </div>
  );
};
export default Contact;
