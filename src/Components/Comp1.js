function Com(props){
    return(        
      <>
<div style={{width:'450px'}}className="ui centered card">
  <div className="image">
    <img src={props.img} alt='' />
  </div>
  <div className="content">
    <h3 className="header">{props.name}</h3>
    <p></p>
    <p style={{color:'grey'}}>Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica.</p>
    <p></p>
    <a>SHARE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a>LEARN MORE</a>
  </div>
</div>

    </>
    )
}
export default Com;