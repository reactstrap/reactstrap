import React from "react";

export default function Banner() {
  return (
    <div className="bg-dark fixed-top" style={{ width: "100%", minHeight: "4em" }}>
      <div className="mx-auto d-flex flex-column flex-md-row justify-content-center" style={{ width: "65vw" }}>
        <span className="text-light mr-3 h4">Black Lives Matter.</span>
        <a
          className="h4 banner-link"
          target="_blank"
          rel="noreferrer"
          href="https://support.eji.org/give/153413/#!/donation/checkout"
        >
          Support the Equal Justice Initiative.
      </a>
      </div>
    </div>
  )
}