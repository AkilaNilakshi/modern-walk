import React from "react";

const ClarityTestPage = () => {
    return (
        <div>
            <div class="header">
                <h2>Sample Site</h2>
            </div>

            <div class="nav">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Account</a>
            </div>

            <div class="hero">
                <h1>Welcome</h1>
                <button class="btn">Click Here</button>
                <button class="btn">Know More</button>
            </div>

            <div class="content">
                <p>
                    This is a random paragraph with lots of content to test if the user scrolls or gets distracted.
                    This paragraph repeats. This is a random paragraph with lots of content to test if the user scrolls or gets distracted.
                    This paragraph repeats.
                </p>
            </div>

            <div class="form-section">
                <h3>Sign Up</h3>
                <input type="text" placeholder="username" required />
                <input type="password" placeholder="password" required />
                <button class="btn" type="button">Submit</button>
            </div>
            <footer>
                © 2025 All rights reserved | Contact | Terms
            </footer>
        </div>
    )
}

export default ClarityTestPage;