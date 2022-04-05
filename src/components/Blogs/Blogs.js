import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
             <h2 className='blogs-questions'>Questions</h2>
           <div className='blogs'>
           <div className='context'>
                <h3>What is Context Api ?</h3>
                    <p>
                    In React we usually send data from one component to another. In that case the data of one component has to be sent to another child component as props. Often the situation is that the child component is much lower than our main component where your data is. That means that data component has another child component, again that child component has another child component. There may be many children doing this. Now if we want to take data from the main component . To pass data. It's like taking data while digging. We usually use Redux in such situations.  In that case we have a global status that any child can access later if they want, without having to pass all the components as props and take data.
                    </p>
            </div>
            <div className='semantic'>
                <h3>What is Semantic Tag ?</h3>
                    <p>
                    Semantic Tag এর main কাজ হচ্ছে developer যে কোড করছে সেটা ডিটেইলে বোঝা যায় এবং Browser এর প্রত্যাকটা পার্ট অনুযায়ী করা যায়। যেমনঃ aside, from, table, section, header, footer, main, nav etc. এই রকম আরো অনেক রকমের semantic tag আছে যা developer দের কাজ করতে অনেক সুবিধা করে দিয়েছে।

                    </p>
            </div>
           </div>
        </div>
    );
};

export default Blogs;