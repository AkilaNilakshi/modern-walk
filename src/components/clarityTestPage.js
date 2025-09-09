import React from "react";

const ClarityTestPage = () => {
    return (
        <div className="container">

            <div class="form-section">
                <div class="form-container">
                    <h2>Sign Up</h2>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" />
                    </div>
                    <div class="form-group">
                        <label for="confirm">Confirm Password</label>
                        <input type="password" id="confirm" placeholder="Confirm password" />
                    </div>
                    <div>
                        <button class="submit-btn">Submit</button>
                        <button class="verify-btn">Verify Email</button>
                    </div>
                </div>
            </div>
            <footer>
                © 2025 All rights reserved | Contact | Terms
            </footer>
        </div>
    )
}

export default ClarityTestPage;



