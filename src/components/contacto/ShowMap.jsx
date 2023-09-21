import './restaurantinfo.css'


export default function ShowMap() {

    return(
        <>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8710672579205!2d-70.59875199999999!3d-33.4005278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf49efb518c3%3A0x7fc46267b5c0ea60!2sAlonso%20de%20C%C3%B3rdova%203053%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1693434996763!5m2!1ses!2scl"
            style={{ border:0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </>
    )
}