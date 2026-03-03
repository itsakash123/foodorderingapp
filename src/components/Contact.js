const Contact=()=>{
     return (
       <div>
         <h1 className="font-bold text-3xl p-4 m-4">Contact us Page</h1>
         <form>
           <input
             type="text"
             className="border border-black p-2 m-2"
             placeholder="name"
           />
           <input
             type="text"
             className="border border-black p-2 m-2"
             placeholder="message"
           />
         </form>
         <button className="border border-black p-2 m-2 bg-gray-50 rounded-lg">submit</button>
       </div>
     );
}
export default Contact;