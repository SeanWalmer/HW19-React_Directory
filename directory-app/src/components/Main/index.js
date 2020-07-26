import React from 'react';
import crew from '../me.json'
import "./style.css";
import Table from '../DataTable';

class Main extends React.Component {

    state = {
        crew
    };

    sortName = () => {
        const crew = this.state.crew.sort(function(first, second) {
            var nameA = first.name.toUpperCase(); // ignore upper and lowercase
            var nameB = second.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
        //   console.log(crew);
          this.setState({ crew });
    };
    sortRole = () => {
        const crew = this.state.crew.sort(function(first, second) {
            var roleA = first.role.toUpperCase(); // ignore upper and lowercase
            var roleB = second.role.toUpperCase(); // ignore upper and lowercase
            if (roleA < roleB) {
              return -1;
            }
            if (roleA > roleB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
        //   console.log(crew);
          this.setState({ crew });
    };
    sortRace = () => {
        const crew = this.state.crew.sort(function(first, second) {
            var raceA = first.race.toUpperCase(); // ignore upper and lowercase
            var raceB = second.race.toUpperCase(); // ignore upper and lowercase
            if (raceA < raceB) {
              return -1;
            }
            if (raceA > raceB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        //   console.log(crew);
          this.setState({ crew });
    };
    // sortID() {
    //     const crew = this.state.crew.sort(function(first, second) {
    //         var idA = first.id
    //         var idB = second.id
    //         if (idA < idB) {
    //           return -1;
    //         }
    //         if (idA > idB) {
    //           return 1;
    //         }
          
    //         // names must be equal
    //         return 0;
    //       });
    //       console.log(crew);
    //     //   this.setState({ crew });
    // };

    render() {
        console.log(this.state.crew);
    
        return (
            <div>
                <h3 className="center-align">Normandy SR2 Crew Directory</h3>
                <br></br>
                <Table 
                crew={crew} 
                sortName={this.sortName}
                sortRole={this.sortRole}
                sortRace={this.sortRace}
                />
            </div>
        );
    }
}

export default Main;