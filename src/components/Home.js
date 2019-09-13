import React from "react";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  ArcSeries,
  XAxis,
  YAxis,
  LineSeries,
  MarkSeries
} from "react-vis";
import Piechart from "./componentChart";

const styles = {
  titleText: {
    fontSize: 40,
    fontFamily: "Verdana,sans-serif"
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datapoints: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderDatapoints() {
    const { datapoints } = this.state;
    var Piecharts = new Piechart();

    const myData = [
      {
        angle0: 0,
        angle: 3.1415926 / 4,
        opacity: 0.2,
        radius: 10,
        radius0: 60
      },
      {
        angle0: 3.1415926 / 4,
        angle: (2 * 3.1415926) / 4,
        opacity: 0.4,
        radius: 30,
        radius0: 50
      },
      {
        angle0: (2 * 3.1415926) / 4,
        angle: (3 * 3.1415926) / 4,
        opacity: 0.6,
        radius: 20,
        radius0: 75
      },
      {
        angle0: (3 * 3.1415926) / 4,
        angle: (4 * 3.1415926) / 4,
        opacity: 0.8,
        radius: 10,
        radius0: 30
      },
      {
        angle0: (4 * 3.1415926) / 4,
        angle: (5 * 3.1415926) / 4,
        opacity: 1,
        radius: 10,
        radius0: 20
      },
      { angle0: 0, angle: (5 * 3.1415926) / 4, radius: 0, radius0: 5 }
    ];

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <XYPlot height={225} width={225}>
          <LineSeries data={datapoints} />
        </XYPlot>
        <XYPlot height={225} width={225}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <MarkSeries data={datapoints} />
        </XYPlot>
        {/* {Piecharts.renderPiecharts()} */}
        <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={225} height={225}>
          <ArcSeries
            animation
            radiusType={"literal"}
            center={{ x: 0, y: 0 }}
            data={myData}
            colorType={"literal"}
          />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        <div>          
          <center>
            <main role="main" class="flex-shrink-0">
              <h1 class="mt-5">React with React-Vis</h1>
              {this.renderDatapoints()}
              <p className="lead">
                Test of React-JS with React-vis Data to boot.
              </p>
            </main>
          </center>
        </div>
      </div>
    );
  }
}

export default Home;

// import React, { Math, Component } from "react";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap/Navbar";
// import "./App.css";
// import "../node_modules/react-vis/dist/style.css";
// import {
//   XYPlot,
//   VerticalGridLines,
//   HorizontalGridLines,
//   ArcSeries,
//   XAxis,
//   YAxis,
//   LineSeries,
//   MarkSeries
// } from "react-vis";
// import Piechart from "./componentPiechart";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       datapoints: []
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://ec2-18-225-7-171.us-east-2.compute.amazonaws.com/api/datapoints/"
//     )
//       .then(response => response.json())
//       .then(json => this.setState({ datapoints: json }))
//       .catch(error => console.log(error));
//   }

  // renderDatapoints() {
  //   const { datapoints } = this.state;
  //   var Piecharts = new Piechart();

  //   const myData = [
  //     {
  //       angle0: 0,
  //       angle: 3.1415926 / 4,
  //       opacity: 0.2,
  //       radius: 10,
  //       radius0: 60
  //     },
  //     {
  //       angle0: 3.1415926 / 4,
  //       angle: (2 * 3.1415926) / 4,
  //       opacity: 0.4,
  //       radius: 30,
  //       radius0: 50
  //     },
  //     {
  //       angle0: (2 * 3.1415926) / 4,
  //       angle: (3 * 3.1415926) / 4,
  //       opacity: 0.6,
  //       radius: 20,
  //       radius0: 75
  //     },
  //     {
  //       angle0: (3 * 3.1415926) / 4,
  //       angle: (4 * 3.1415926) / 4,
  //       opacity: 0.8,
  //       radius: 10,
  //       radius0: 30
  //     },
  //     {
  //       angle0: (4 * 3.1415926) / 4,
  //       angle: (5 * 3.1415926) / 4,
  //       opacity: 1,
  //       radius: 10,
  //       radius0: 20
  //     },
  //     { angle0: 0, angle: (5 * 3.1415926) / 4, radius: 0, radius0: 5 }
  //   ];

  //   return (
  //     <div style={{ display: "flex", justifyContent: "center" }}>
  //       <XYPlot height={225} width={225}>
  //         <LineSeries data={datapoints} />
  //       </XYPlot>
  //       <XYPlot height={225} width={225}>
  //         <VerticalGridLines />
  //         <HorizontalGridLines />
  //         <MarkSeries data={datapoints} />
  //       </XYPlot>
  //       {/* {Piecharts.renderPiecharts()} */}
  //       <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={225} height={225}>
  //         <ArcSeries
  //           animation
  //           radiusType={"literal"}
  //           center={{ x: 0, y: 0 }}
  //           data={myData}
  //           colorType={"literal"}
  //         />
  //         <XAxis />
  //         <YAxis />
  //       </XYPlot>
  //     </div>
  //   );
  // }

//   render() {
//     return (
//       <div className="App">
//         <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
//           {this.renderHeader()}
//           <center>
//             <main role="main" class="flex-shrink-0">
//               <h1 class="mt-5">React with React-Vis</h1>
//               {this.renderDatapoints()}
//               <p className="lead">
//                 Test of React-JS with React-vis Data to boot.
//               </p>
//             </main>
//           </center>
//           {this.renderFooter()}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
