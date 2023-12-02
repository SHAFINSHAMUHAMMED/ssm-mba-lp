import React,{useState} from "react";
import { usePopup } from "../Hoocks/PopupContext";
function popup({closePopup}) {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});
    const { togglePopup } = usePopup();
    const validate = () => {
        let tempErrors = {};
        let formIsValid = true;
    
        // Name validation
        if (!formData.name) {
          formIsValid = false;
          tempErrors["name"] = "Cannot be empty";
        } else if (formData.name.length < 3 || formData.name.length > 25) {
          formIsValid = false;
          tempErrors["name"] = "Name must be between 3 and 25 characters";
        }
    
        // Email validation
        if (!formData.email) {
          formIsValid = false;
          tempErrors["email"] = "Cannot be empty";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formIsValid = false;
          tempErrors["email"] = "Email is not valid";
        }
    
        setErrors(tempErrors);
        return formIsValid;
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
          try {
            const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzZjA0MzM1MjZhNTUzZDUxMzEi_pc", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                console.log(response);
              // Handle success - close the popup or show a success message
              downloadPdf("images/SSM MBA.pdf");
              togglePopup();
            } else {
              // Handle server errors
              console.error("Server error");
            }
          } catch (error) {
            // Handle network errors
            console.error("Network error:", error);
          }
        }
      };

      const downloadPdf = (pdfUrl) => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "SSM_MBA_Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (

    <div className={`popup-main `}>
      <svg
        className="popup-close-button"
        onClick={closePopup}
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
      >
        <path
          d="M13.5 15.6493L2.56271 26.5866C2.42454 26.728 2.25848 26.839 2.07508 26.9127C1.89168 26.9864 1.69495 27.0212 1.49741 27.0147C1.20184 27.012 0.913575 26.9225 0.668369 26.7575C0.423163 26.5924 0.231802 26.359 0.118018 26.0862C0.00423443 25.8134 -0.0269657 25.5132 0.0282868 25.2228C0.0835393 24.9325 0.222814 24.6647 0.428838 24.4528L11.3661 13.5155L0.428838 2.57817C0.287493 2.44 0.176442 2.27394 0.102744 2.09054C0.0290463 1.90714 -0.00568534 1.71041 0.000757085 1.51287C-0.00370885 1.3151 0.031951 1.11848 0.105584 0.934881C0.179216 0.751281 0.289294 0.584507 0.429171 0.444631C0.569047 0.304754 0.735821 0.194676 0.919421 0.121044C1.10302 0.0474109 1.29964 0.011751 1.49741 0.016217C1.69495 0.00977454 1.89168 0.0445062 2.07508 0.118204C2.25848 0.191902 2.42454 0.302953 2.56271 0.444297L13.5 11.3816L24.4373 0.444297C24.6468 0.231912 24.9151 0.0870004 25.2076 0.0281671C25.5001 -0.0306661 25.8035 -0.000736082 26.0788 0.114115C26.3542 0.228966 26.5889 0.423497 26.7529 0.672732C26.917 0.921967 27.0027 1.21453 26.9992 1.51287C27.0057 1.71041 26.971 1.90714 26.8973 2.09054C26.8236 2.27394 26.7125 2.44 26.5712 2.57817L15.6339 13.5155L26.5712 24.4528C26.8387 24.7388 26.9845 25.1176 26.978 25.5092C26.9714 25.9008 26.8129 26.2745 26.536 26.5515C26.2591 26.8284 25.8853 26.9869 25.4938 26.9934C25.1022 27 24.7234 26.8541 24.4373 26.5866L13.5 15.6493Z"
          fill="#84BC95"
          fill-opacity="0.86"
        />
      </svg>

      <h1>Get Instant Access To The SSM MBA Brochure</h1>
      <p className="popup-main-description">
        Get an inside look at our prestigious programs, faculty, and the unique
        benefits that set us a
      </p>
      <div className="popup-sub">
        <form className="popup-form" onSubmit={handleSubmit} >
          <h5>Name</h5>
          <input type="text"
           name="name"
            placeholder="Enter your name here"
            value={formData.name}
            onChange={handleChange}
            />
            {errors.name && <p className="error" style={{ color: 'red', fontSize: '15px',marginTop:'5px' }}>{errors.name}</p>}
          <h5>Email</h5>
          <input 
          type="text"
          name="email"
            placeholder="Enter your Email here"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error" style={{ color: 'red', fontSize: '15px',marginTop:'5px' }} >{errors.email}</p>}
          <button type="submit">Download My Free Brochure</button>
          <p>
            🔒 We respect your privacy & promise never to rent or share your
            details with anybody without your consent
          </p>
        </form>
        <div className="popup-img">
          <img className="popup-img-desktop" src="images/popup-img.webp" alt="" />
          <img className="popup-img-mob" src="images/popup-img-mob.webp" alt="" />

        </div>
      </div>
    </div>
  );
}

export default popup;
