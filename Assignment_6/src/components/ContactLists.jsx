

const ContactLists = ({contacts}) => {
  return (
    <>
    <div className="container w-1/2 border-2 rounded-xl mt-5 mb-5 ml-[380px]">
    <h1 className="text-3xl text-center mt-8 mb-4">Contact Logs</h1>
        <div className="overflow-x-auto">
          
                <table className="table" >
                {/* head */}
                <thead>
                  <tr>
                    <th>Sr no.</th>
                    <th>Name</th>
                    <th>Phone no.</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {contacts.map((contact,index) => (
                  <tr key={index}>
                    <th>{contact.cID}</th>
                        <td>{contact.cName}</td>
                    <td>{contact.cPhone}</td>
                    <td>{contact.cEmail}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            
  
</div>
</div>
    </>
  )
}

export default ContactLists