import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div>
      <h4>{user.email}</h4>
    </div>
  );
}
