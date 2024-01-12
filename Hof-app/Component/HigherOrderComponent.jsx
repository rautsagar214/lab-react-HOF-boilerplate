import React, { Component } from 'react'
import  './Hof.css'
export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name : 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2',  name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3',  name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4',   name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5',  name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    displayalldata (){
        const mapRows = this.state.userData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    
                    <span>Id : {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type : {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    displayDesigner(){
        const mapRows = this.state.userData.filter((item)=>{
            if (item.user_type == "Designer"){
                return item
            }
        })
        console.log(mapRows)
        return (mapRows.map((ele)=>(
            <React.Fragment key={ele.id}>
                <li className="list-elements">
                    <span>Id : {ele.id}</span>
                    <span>Name : {ele.name}</span>
                    <span>User Type : {ele.user_type}</span>
               </li>
            </React.Fragment>
        )))
        
    }

    displayDataJ(){
        const mapRows = this.state.userData.filter((item)=>{
            if (item.name[0] == "J"){
                return item
            }
        })
        console.log(mapRows)
        return (mapRows.map((ele)=>(
            <React.Fragment key={ele.id}>
                <li className="list-elements">
                    <span>Id :  {ele.id}</span>
                    <span>Name : {ele.name}</span>
                    <span>User Type : {ele.user_type}</span>
               </li>
            </React.Fragment>
        )))

    }

    displayAge(){
        const mapRows = this.state.userData.filter((item)=>{
            if (item.age >28 || item.age<50){
                return item
            }
        })
        console.log(mapRows)
        return (mapRows.map((ele)=>(
            <React.Fragment key={ele.id}>
                <li className="list-elements">
                    <span>Id :  {ele.id}</span>
                    <span>Name :  {ele.name}</span>
                    <span>User Type :  {ele.user_type}</span>
               </li>
            </React.Fragment>
        )))
    }

    yearsDesigners(){
        const mapRows = this.state.userData.filter((item)=>{
            if (item.user_type == "Designer"){
                return item
            }
        })
        const mapDesigner = mapRows.reduce((start,add)=>{
             return start + add.years
        },0)
        // console.log(mapRows)
        return mapDesigner
    }
    
    render() {
      
    return (
        <>
        
      <div  className='div' >
        <h1> Display all items</h1>
        <ul className='sagar'  >
        {this.displayalldata()}
        </ul>
      </div>
      <div className='div'>
        <h1>Display based on usertype</h1>
        <ul className='sagar'>
            {this.displayDesigner()}
        </ul>
      </div>
      <div className='div'>
        <h1>Filter all data starting with J</h1>
        <ul className='sagar'>
            {this.displayDataJ()}
        </ul>
      </div>
      <div className='div'>
        <h1> Filter all data based on age greater than 28 and age less than or equal to 50</h1>
        <ul className='sagar'>
            {this.displayAge()}
        </ul>
      </div>
      <div className='div'>
        <h1>Find the total years of the designers</h1>
        <ul className='sagar'>
            {this.yearsDesigners()}
        </ul>
      </div>
      </>
    )
  }
}
