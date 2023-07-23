
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './home.css';



const Home = () => {

    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout =() => {
      localStorage.removeItem("Loggedin"); 
      navigate("/Login");
    }
  
  return (
    <div className='bg-home-image  '>

    <div className="home ">
      <motion.div
        className="name"
        initial={{
          x: -400,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        Hello <font color="#f59a11">{userName.name}</font>
      </motion.div>


      <motion.div
        class="desc"
        initial={{
          x: 400,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 3 }}
      >
        <font color="#c711f5">Secure. Convenient. Personalized.</font> 
        <p>
        Welcome to our Login Website! Experience hassle-free access with utmost security. Login anytime, anywhere, and enjoy personalized features. Your journey starts here.
        </p>
        </motion.div>


      <div>
      <motion.div
        class="btn"
        initial={{
          y: 200,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 3 }}
      >
      <button 
        onClick={handleLogout}
        type="button" 
        className="btn btn-outline-light text-uppercase btn-lg  shadow-sm">
        Logout
      </button>
    </motion.div>
      </div>   
      </div> 
    </div>
  )

  }
export default Home
