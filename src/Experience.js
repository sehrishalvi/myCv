import React from "react";
import MainComponents from "./MainComponents";

export default function Experience() {
  return (
    <MainComponents title="Experience">
      <div className="main-items__title:before">
        <table>
          <tr valign="top" align="left">
            <td>Jan-2019</td>
            <td>
              <b>PWC Lund</b> <p>Assistant Administrator</p>
            </td>
          </tr>
          <tr>
            <td valign="top" align="left">
              2012-2013
            </td>
            <td>
              <b>Career Pakistan</b> <p>Recruitment Consultant</p>
            </td>
          </tr>
          <tr>
            <td valign="top" align="left">
              2009-2011
            </td>
            <td>
              <b>PES Pakistan</b> <p>Assistant Manager HR</p>
            </td>
          </tr>
          <tr>
            <td valign="top" align="left">
              2008
            </td>
            <td>
              <b>Telenor Pakistan</b> <p>Payroll Intern</p>
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
