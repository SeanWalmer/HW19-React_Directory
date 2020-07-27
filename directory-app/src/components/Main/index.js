import React from 'react';
import crew from '../me.json'
import "./style.css";
import Table from '../DataTable';

class Main extends React.Component {

    state = {
        crew,
        currentCrew: crew
    };

    sortName = () => {
        const currentCrew = this.state.currentCrew.sort(function (first, second) {
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
        this.setState({ currentCrew });
    };
    sortRole = () => {
        const currentCrew = this.state.currentCrew.sort(function (first, second) {
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
        this.setState({ currentCrew });
    };
    sortRace = () => {
        const currentCrew = this.state.currentCrew.sort(function (first, second) {
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
        this.setState({ currentCrew });
    };

    /* The function below is meant to compbine all three function above into a 
    function that is reuable and I can just pass in what I want to search by
    but I am having trouble figuring out how to select a property based on an
    argument passed in. This is something to revisit when I have time to 
    improve the application */

    // sort = (type) => {
    //     let property = type
    //     const crew = this.state.crew.sort(function(first, second) {
    //         var SelectionA = first.type; // ignore upper and lowercase
    //         var SelectionB = second.type; // ignore upper and lowercase
    //         if (SelectionA < SelectionB) {
    //           return -1;
    //         }
    //         if (SelectionA > SelectionB) {
    //           return 1;
    //         }

    //         // names must be equal
    //         return 0;
    //       });
    //     //   console.log(crew);
    //       this.setState({ crew });
    // };

    filterCrew = event => {
        const filterBy = event.target.value
        const newCrew = this.state.crew.filter( member => member.name.toLowerCase().includes(filterBy))
        this.setState({ 
            currentCrew: newCrew
        })
        console.log(newCrew)
    };

    render() {
        // console.log(this.state.crew);

        return (
            <div className="container">
                <h3 className="center-align">Normandy SR2 Crew Directory</h3>
                <br></br>
                <div className="row">
                    <p className="col s12 m1 btn-small disabled up">Filter</p>
                    <input 
                    name="filterBy"
                    className="col s12 m3" 
                    onChange={this.filterCrew}
                    type="text"
                    />
                </div>
                <Table
                    currentCrew={this.state.currentCrew}
                    sortName={this.sortName}
                    sortRole={this.sortRole}
                    sortRace={this.sortRace}
                // sort={this.sort}
                />
            </div>
        );
    }
}

export default Main;