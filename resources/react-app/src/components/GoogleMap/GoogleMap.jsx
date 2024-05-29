import React from "react";

const GoogleMap = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247.132444906379!2d29.143350986594108!3d40.20808758858748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3fc57125d4ad%3A0xddcefe05a0129df1!2zTsSwS1NB!5e0!3m2!1str!2str!4v1712311561221!5m2!1str!2str"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
