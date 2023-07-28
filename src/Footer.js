import React from "react";

const Footer=()=>{
  const year=new Date().getFullYear();

    return(<>
      <footer>
        <p>
            Copyright<span role="img" aria-label="symbol"> ©️ </span>{year} CKM
        </p>
      </footer>

    </>)
}
export default Footer;