import React from "react";
import "./../../scss/Subraces.scss";
import { SubraceType } from "../../lib/types";
interface Props {
  subraces: SubraceType[]
}

const Subraces: React.FC<Props> = ({ subraces = [] }) => (
  <>
    {subraces.length ? (
      <div>
        <label>Choose a Subrace</label>
        <select className="form-control">
          <option value="" key="100000000" selected disabled>
            Make a selection
          </option>
          {subraces.map((x) => (
            <option value={x.id} key={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </div>
    ) : null}
  </>
);

export default Subraces;
