
import { useState } from "react";

export default function ClarityTestPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("✅ Login successful!");
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 container">
        <div class="form-section">
            <div class="form-container">
          <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-md w-80"
          >
                      <h2 className="text-xl font-semibold mb-6 text-center">Sign Up</h2>
                      <div class="form-group">
                          <label for="name">Full Name</label>
                          <input type="text" id="name" placeholder="Enter your name" />
                      </div>                  

              <label className="block mb-3">
                  <span className="text-sm text-gray-700">Email</span>
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="Enter your email"
                      required
                  />
              </label>

              <label className="block mb-3">
                  <span className="text-sm text-gray-700">Password</span>
                  <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="Enter your password"
                      required
                  />
              </label>

              <label className="block mb-4">
                  <span className="text-sm text-gray-700">Confirm Password</span>
                  <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="Re-enter your password"
                      required
                  />
              </label>

              {error && (
                  <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
              )}
              {success && (
                  <p className="text-green-600 text-sm mb-3 text-center">{success}</p>
              )}


              <div>
                  <button class="submit-btn" type="submit">Submit</button>
                  <button class="verify-btn">Verify Email</button>
              </div>
          </form>
          <footer>
              © 2025 All rights reserved | Contact | Terms
          </footer>
          </div>
          </div>
      </div>
  );
}


// const ClarityTestPage = () => {
//     return (
//         <div className="container">

//             <div class="form-section">
//                 <div class="form-container">
//                     <h2>Sign Up</h2>
//                     <div class="form-group">
//                         <label for="name">Full Name</label>
//                         <input type="text" id="name" placeholder="Enter your name" />
//                     </div>
//                     <div class="form-group">
//                         <label for="email">Email Address</label>
//                         <input type="email" id="email" placeholder="Enter your email" />
//                     </div>
//                     <div class="form-group">
//                         <label for="password">Password</label>
//                         <input type="password" id="password" placeholder="Enter password" />
//                     </div>
//                     <div class="form-group">
//                         <label for="confirm">Confirm Password</label>
//                         <input type="password" id="confirm" placeholder="Confirm password" />
//                     </div>
//                     <div>
//                         <button class="submit-btn">Submit</button>
//                         <button class="verify-btn">Verify Email</button>
//                     </div>
//                 </div>
//             </div>
           
//         </div>
//     )
// }

// export default ClarityTestPage;



