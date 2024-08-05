import { Link } from "react-router-dom"

const Blogs = () => {
  return (
    <>
    <h1 className="text-center text-white m-10">BLOGS</h1>
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box ml-[650px] m-5 ">
  <li><Link to='/post1'>blog 1</Link></li>
  <li><Link to='/post2'>blog 2</Link></li>
  <li><Link to='/post3'>blog 3</Link></li>
</ul>
    </>
  )
}

export default Blogs