import React from "react";

const styles = {
  titleText: {
    fontSize: 40,
    fontFamily: "Verdana,sans-serif"
  }
};

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="parent">
        <div id="div1">
        </div>
        <div style={{ padding: "10px" }}>
        </div>

        <hr style={{ width: "75%" }} />
        <div style={{ padding: "10px" }}>
        </div>
        <div>
          <center>
            <table>
              <tr>
                <th>
                </th>
                <th style={{ width: "50%" }}>
                </th>
              </tr>
            </table>
          </center>
        </div>
      </div>
    );
  }
}

export default Home;
