import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div>
      <h4>{photoURL}</h4>
    </div>
  );
}
