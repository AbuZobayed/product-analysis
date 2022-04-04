import React from 'react';
import { Link } from 'react-router-dom';
import ReviewDatails from '../ReviewDatails/ReviewDatails';
import UseData from '../UseData/UseData';
import './Home.css'


const Home = () => {
    const [data ,setData] = UseData()
    return (
        <div >
           <div className='header'>
           <div>
            <h1 className='header-text'>Tech Gedgets</h1>
            <h2>Welcome to Tech Gedgets </h2>
            <p>Tech Gedgets was started way back in 2003 by two freelance technology journalists, Chris Price and Ashley Norris. Experienced writers for the UK’s Daily Mirror and The Guardian respectively – as well as a whole host of monthly magazines from Future and Dennis Publishing – it was their first foray into blogging.</p>

            <button>Live demo</button>
            </div>

            <div>
               <img src="https://img.freepik.com/free-photo/man-with-vr-glasses-technology_23-2148864943.jpg?size=626&ext=jpg&ga=GA1.2.705067902.1649065035" alt="" />
            </div>
           </div>

           <div className='customer-reviews'>
               <h1>Customer Reviews</h1>
           </div>
           <div>
               
           {
                   data.slice(0,3).map(info => <ReviewDatails key={info.id} info={info}></ReviewDatails>)
               }
           </div>
           <Link to="/reviews">Show more</Link>
        </div>

        
    );
};

export default Home;