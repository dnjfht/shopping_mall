import React from "react";

export default function User({ user }) {
  return (
    <div>
      <h4>{user.email}</h4>
    </div>
  );
}
