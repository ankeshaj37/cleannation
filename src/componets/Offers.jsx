import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";

const Offers = () => {
  const [data, setData] = useState([]);

  db.collection("offer").onSnapshot((snapshot) =>
    setData(
      snapshot.docs.map((doc) => ({
        data: doc.data(),
      }))
    )
  );

  return (
    <>
      <Section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {data.map((doc) => (
              <>
                <h1 className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">
                  {doc.data.title}
                </h1>

                <h6 className="text-1xl font-medium title-font mb-4 text-gray-800">
                  {doc.data.header}
                </h6>
                <h6 className="">{doc.data.info}</h6>
                <h3 className="mx-5 leading-relaxed text-bold">
                  {doc.data.desc}
                </h3>
                <h3 className="mx-5 leading-relaxed text-bold">
                  {doc.data.desc1}
                </h3>
                <h3 className="mx-5 leading-relaxed text-bold">
                  {doc.data.desc2}
                </h3>
                <h3 className="mx-5 leading-relaxed text-bold">
                  {doc.data.desc3}
                </h3>
                <h3 className="mx-5 leading-relaxed text-bold">
                  {doc.data.desc4}
                </h3>
              </>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Offers;
const Section = styled.div`
  height:auto;
`;
