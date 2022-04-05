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
            In a typical React application, data is passed top-down  via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

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