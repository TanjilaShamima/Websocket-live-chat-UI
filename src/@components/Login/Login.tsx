"use client";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      {isClient && <p>This is log in page..........</p>}
    </div>
  );
};

export default Login;
