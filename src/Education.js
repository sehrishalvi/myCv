import React from "react";
import MainComponents from "./MainComponents";

export default function Education() {
  return (
    <MainComponents title="Experience">
      <div className="main-items__title:before">
        <table>
          <tr valign="top" align="left">
            <td>2010-2012</td>
            <td>
              <b>MS Menagement Sciences</b> <p />
            </td>
          </tr>
          <tr>
            <td valign="top" align="left">
              2005-2009
            </td>
            <td>
              <b>BBA(Hons)</b> <p />
            </td>
          </tr>
          <tr>
            <td width="150" valign="top" align="left" />
          </tr>
        </table>
      </div>
    </MainComponents>
  );
}
