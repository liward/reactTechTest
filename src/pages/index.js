import React from "react";
import {
  Link
} from "react-router-dom";

export default function Index() {
  return (
        <nav>
          <ul>
            <li>
              <Link to="/one">Question One</Link>
            </li>
            <li>
              <Link to="/two">Question Two</Link>
            </li>
            <li>
              <Link to="/three">Question Three</Link>
            </li>
          </ul>
        </nav>
  );
}
