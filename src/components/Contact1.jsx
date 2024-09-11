import React from "react";

const Contact1 = () => {
  return (
    <section>
      <div class="form-container">
        <div class="input-wrapper">
          <input type="text" id="name" required />
          <label for="name">First Name</label>
          <span class="underline"></span>
        </div>

        <div class="input-wrapper">
          <input type="email" id="email" required />
          <label for="email">Email</label>
          <span class="underline"></span>
        </div>

        <div class="input-wrapper">
          <input type="password" id="password" required />
          <label for="password">Password</label>
          <span class="underline"></span>
        </div>

        <button type="submit" class="btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Contact1;
