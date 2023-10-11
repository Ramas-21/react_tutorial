import { useState } from "react";
export default function ConditionalRendering() {
  const [display, setDisplay] = useState(true);

  if (display) {
    return (
      <div>
        <h3>This is a ConditionalRendering</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>This is not ConditionalRendering</h3>
      </div>
    );
  }
}
