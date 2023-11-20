import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here (e.g., clear tokens, user data, etc.)
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");

    navigate("/admin/login");
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default LogoutPage;
