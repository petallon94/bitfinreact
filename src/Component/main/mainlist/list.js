import React,{Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import "./mainlist.css";

      const tileData = [
    {
      img: "https://t1.daumcdn.net/liveboard/dailylife/cc9a6c65c72443d6ac70b9634102c3ef.JPG",
      title: 'Image',
      author: 'author',
    }
    ];
    
class list extends Component{
    
   render(){     

 
 return (
    <div className="main__list">
      <GridList cellHeight="auto" className="main__container" cols={3}>
        {tileData.map((tile) => (
          <GridListTile className="main_postcard" key={tile.img} cols={tile.cols || 1}>
            <img className ="main_icon" src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

export default list;


