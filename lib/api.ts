export async function loginUser(email: string, password: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.detail || "Login failed");
    }
  
    return res.json(); // contains access_token, refresh_token, token_type
  }
  
  export async function registerUser(email: string, password: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.detail || "Registration failed");
    }
  
    return data;
  }

  export async function verifyEmailToken(token: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify-email?token=${token}`);
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.detail || "Email verification failed");
    }
  
    return data;
  }
  
  export async function requestPasswordReset(email: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request-password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.detail || "Password reset request failed");
    }
  
    return data;
  }

  export async function resetPassword(token: string, newPassword: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        new_password: newPassword,
      }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.detail || "Password reset failed");
    }
  
    return data;
  }