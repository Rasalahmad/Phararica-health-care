import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className = 'text-warning bg-primary py-2'>Blog</h1>
            <h2 className = 'mt-5 text-primary'>Researches</h2>
            <div className='blog-description'>
                <div>
                    <img src="https://www.bmj.com/sites/default/files/attachments/resources/2018/02/medical_research_china.jpg" alt="" />
                </div>
                <div>

                    <p>Medical research involves research in a wide range of fields, such as biology, chemistry, pharmacology and toxicology with the goal of developing new medicines or medical procedures or improving the application of those already available. It can be viewed as encompassing preclinical research </p>
                    <button className='btn btn-outline-primary'>Read More</button>
                </div>
            </div>
            <h2 className = 'mt-5 text-primary'>New Investigations</h2>
            <div className='blog-description'>
                <div>
                    <p>Albany Medical College offers a selection of degrees in Clinical Investigation (CI). These degrees include the Master of Science in Clinical Investigation and the Graduate Certificate in Clinical Investigation. Our required curriculum is designed to familiarize.</p>
                    <button className='btn btn-outline-primary'>Read More</button>
                </div>
                <div>
                    <img src="https://www.amc.edu/academic/clinical_investigation/images/researcher.jpg" alt="" />
                </div>

            </div>
            <h2 className = 'mt-5 text-primary'>Your Health</h2>
            <div className='blog-description'>
                <div>
                    <img src="https://i0.wp.com/localkhabar.com/wp-content/uploads/2019/02/Health-Insurance-in-Florida-1.jpg?resize=1024%2C560&ssl=1" alt="" />
                </div>
                <div>
                    <p>The Delta variant causes more infections and spreads faster than earlier forms of the virus that causes COVID-19. It might cause more severe illness than previous strains in unvaccinated people.Vaccines continue to reduce a person’s risk of contracting the virus that cause COVID-19, including this variant.</p>
                    <button className='btn btn-outline-primary'>Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Blogs;
